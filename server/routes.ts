import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import bcrypt from "bcryptjs";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import multer from "multer";
import path from "path";
import fs from "fs";

const PgSession = connectPgSimple(session);

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => {
      const dir = path.join(process.cwd(), "uploads");
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      cb(null, dir);
    },
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, `${Date.now()}${ext}`);
    },
  }),
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = /\.(jpg|jpeg|png|gif|webp|mp4|mov|webm)$/i;
    cb(null, allowed.test(path.extname(file.originalname)));
  },
});

declare module "express-session" {
  interface SessionData {
    userId?: string;
  }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

function validBookingUrl(value: unknown): boolean {
  if (typeof value !== "string" || value.length > 2048) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !!url.hostname && !url.username && !url.password;
  } catch {
    return false;
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.set("trust proxy", 1);
  app.use(
    session({
      store: new PgSession({
        conString: process.env.DATABASE_URL,
        createTableIfMissing: true,
      }),
      secret: process.env.SESSION_SECRET || "mula-fysio-secret-key",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      },
    })
  );

  app.use("/uploads", (req, res, next) => {
    const filePath = path.join(process.cwd(), "uploads", req.path);
    if (fs.existsSync(filePath)) {
      return res.sendFile(filePath);
    }
    next();
  });

  app.post("/api/auth/login", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" });
    }

    const user = await storage.getUserByUsername(username);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    req.session.userId = user.id;
    res.json({ ok: true, username: user.username });
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy(() => {
      res.json({ ok: true });
    });
  });

  app.get("/api/auth/me", async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const user = await storage.getUser(req.session.userId);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    res.json({ username: user.username });
  });

  app.post("/api/auth/setup", async (req, res) => {
    const existing = await storage.getUserByUsername("admin");
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" });
    }
    const { password } = req.body;
    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }
    const hashed = await bcrypt.hash(password, 12);
    await storage.createUser({ username: "admin", password: hashed });
    res.json({ ok: true });
  });

  // TEMPORARY: one-time admin password reset page. Remove after use.
  const RESET_TOKEN = "mula-reset-8f3k";
  app.get(`/reset-${RESET_TOKEN}`, (_req, res) => {
    res.set("Content-Type", "text/html").send(`<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Reset Admin Password</title>
<style>body{font-family:sans-serif;max-width:400px;margin:80px auto;padding:20px}
input{width:100%;padding:10px;margin:8px 0;border:1px solid #ccc;border-radius:6px;font-size:16px;box-sizing:border-box}
button{width:100%;padding:12px;background:#000;color:#fff;border:none;border-radius:6px;font-size:16px;cursor:pointer}
button:hover{background:#333}.msg{margin-top:16px;padding:12px;border-radius:6px;display:none}
.ok{background:#d4edda;color:#155724}.err{background:#f8d7da;color:#721c24}</style></head>
<body><h2>Reset Admin Password</h2>
<input type="password" id="pw" placeholder="New password (min 6 characters)" />
<button onclick="reset()">Reset Password</button>
<div class="msg" id="msg"></div>
<script>
async function reset(){
  const pw=document.getElementById('pw').value;
  const msg=document.getElementById('msg');
  const res=await fetch('/reset-${RESET_TOKEN}',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({password:pw})});
  const data=await res.json();
  msg.style.display='block';
  msg.className='msg '+(res.ok?'ok':'err');
  msg.textContent=res.ok?'Password updated! You can now log in at /admin.':data.message;
}
</script></body></html>`);
  });
  app.post(`/reset-${RESET_TOKEN}`, async (req, res) => {
    const { password } = req.body;
    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters." });
    }
    const hashed = await bcrypt.hash(password, 12);
    const user = await storage.getUserByUsername("admin");
    if (!user) return res.status(404).json({ message: "No admin user found." });
    await storage.updateUserPassword(user.id, hashed);
    res.json({ ok: true });
  });

  app.get("/api/content", async (_req, res) => {
    const content = await storage.getAllContent();
    res.json(content);
  });

  app.put("/api/content", requireAuth, async (req, res) => {
    const { key, valueNl, valueEn } = req.body;
    if (!key) return res.status(400).json({ message: "Key required" });
    if (key === "booking.externalUrl" && !validBookingUrl(valueNl)) {
      return res.status(400).json({ message: "A valid HTTPS booking URL is required" });
    }
    const content = await storage.upsertContent(key, valueNl || "", valueEn || "");
    res.json(content);
  });

  app.put("/api/content/bulk", requireAuth, async (req, res) => {
    const { items } = req.body;
    if (!Array.isArray(items)) return res.status(400).json({ message: "Items array required" });
    if (items.some((item) => item.key === "booking.externalUrl" && !validBookingUrl(item.valueNl))) {
      return res.status(400).json({ message: "A valid HTTPS booking URL is required" });
    }
    const results = [];
    for (const item of items) {
      const content = await storage.upsertContent(item.key, item.valueNl || "", item.valueEn || "");
      results.push(content);
    }
    res.json(results);
  });

  app.get("/api/services", async (_req, res) => {
    const allServices = await storage.getAllServices();
    res.json(allServices);
  });

  app.post("/api/services", requireAuth, async (req, res) => {
    const service = await storage.createService(req.body);
    res.json(service);
  });

  app.put("/api/services/:id", requireAuth, async (req, res) => {
    const id = parseInt(req.params.id);
    const service = await storage.updateService(id, req.body);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.json(service);
  });

  app.delete("/api/services/:id", requireAuth, async (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = await storage.deleteService(id);
    if (!deleted) return res.status(404).json({ message: "Service not found" });
    res.json({ ok: true });
  });

  app.post("/api/upload", requireAuth, upload.single("image"), (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
    const url = `/uploads/${req.file.filename}`;
    res.json({ url });
  });

  app.post("/api/upload/video", requireAuth, upload.single("video"), (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
    const url = `/uploads/${req.file.filename}`;
    res.json({ url });
  });

  return httpServer;
}
