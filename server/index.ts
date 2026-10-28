import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { seedServices } from "./seed";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    limit: "10mb",
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

// Canonical host redirect: force https://www.mulafysio.nl for all non-canonical hosts.
// Replit deployment domains (.replit.app, .repl.co) are always redirected regardless
// of NODE_ENV so the old Replit-hosted URL is never indexed by Google.
// The Replit dev-preview domain (*.replit.dev / *.spock.replit.dev) is only redirected
// in production so local development still works in the preview pane.
app.use((req, res, next) => {
  const host = (req.headers.host || "").toLowerCase();
  const canonicalHost = "www.mulafysio.nl";
  const isCanonical = host === canonicalHost;
  const isLocal =
    host.startsWith("localhost") ||
    host.startsWith("127.") ||
    host.startsWith("0.0.0.0");

  // Always redirect old Replit deployment domains (*.replit.app, *.repl.co)
  const isReplitDeployment =
    host.endsWith(".replit.app") || host.endsWith(".repl.co");

  if (isReplitDeployment) {
    return res
      .status(301)
      .set("X-Robots-Tag", "noindex")
      .redirect(`https://${canonicalHost}${req.originalUrl}`);
  }

  // In production, redirect any other non-canonical, non-local host
  // (covers the Replit dev-preview domain when deployed)
  if (process.env.NODE_ENV === "production" && !isCanonical && !isLocal) {
    return res
      .status(301)
      .set("X-Robots-Tag", "noindex")
      .redirect(`https://${canonicalHost}${req.originalUrl}`);
  }

  next();
});

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  try {
    await seedServices();
  } catch (e) {
    console.error("[seed] Failed to seed services:", e);
  }

  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error("Internal Server Error:", err);

    if (res.headersSent) {
      return next(err);
    }

    return res.status(status).json({ message });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    await serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
