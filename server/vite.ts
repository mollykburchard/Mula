import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";
import { injectPageMeta } from "./seo";

const viteLogger = createLogger();

export async function setupVite(server: Server, app: Express) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  // Vite plugin that injects per-page meta tags in the HTML transform pipeline.
  // Using the plugin API guarantees it runs after all other transformIndexHtml hooks
  // (including @replit/vite-plugin-dev-banner), regardless of which middleware serves the HTML.
  const seoPlugin = {
    name: "mula-seo-meta",
    transformIndexHtml: {
      order: "post" as const,
      handler(html: string, ctx: { originalUrl?: string }) {
        const rawPath = ctx.originalUrl || "/";
        const pathname = rawPath.split("?")[0].split("#")[0];
        return injectPageMeta(html, pathname);
      },
    },
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
    plugins: [...((viteConfig.plugins as unknown[]) || []), seoPlugin],
  });

  app.use(vite.middlewares);

  app.use("/{*path}", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );

      // Let Vite inject its HMR scripts, module preloads, etc.
      const transformed = await vite.transformIndexHtml(url, template);

      // Inject per-page meta tags AFTER Vite processes the template.
      // (Vite re-reads index.html from disk, so changes made before this call
      //  are lost; apply our overrides to the final Vite output instead.)
      const requestPath = req.originalUrl.split("?")[0].split("#")[0] || "/";
      const page = injectPageMeta(transformed, requestPath);

      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
