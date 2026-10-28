import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { injectPageMeta } from "./seo";

type RenderFn = (url: string) => string;

export async function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Read the index.html template once at startup
  const indexHtmlPath = path.resolve(distPath, "index.html");
  const indexHtml = fs.readFileSync(indexHtmlPath, "utf-8");

  // Load SSR render function from the Vite SSR bundle (dist/server/entry-server.js).
  // If the bundle isn't present (first deploy before a build runs), we fall back
  // gracefully to serving the SPA shell with meta tags only.
  let render: RenderFn | null = null;
  try {
    const ssrModulePath = `${__dirname}/server/entry-server.js`;
    // Dynamic import with a runtime-computed path — esbuild leaves this as-is.
    const ssrModule = await import(ssrModulePath);
    render = ssrModule.render as RenderFn;
    console.log("[ssr] server render function loaded");
  } catch (e) {
    console.warn("[ssr] SSR bundle not found — serving SPA shell only:", (e as Error).message);
  }

  app.use(express.static(distPath));

  // Serve index.html for all SPA routes with:
  //   1. Server-rendered React content injected into <div id="root">
  //   2. Per-page meta tags (title, description, canonical, og:*) injected server-side
  app.use("/{*path}", (req, res) => {
    // req.path inside app.use("/{*path}") is always "/" because Express strips the
    // matched prefix. Use req.originalUrl and strip any query string to get the real path.
    const requestPath = req.originalUrl.split("?")[0].split("#")[0] || "/";

    let html = indexHtml;

    if (render) {
      try {
        const appHtml = render(requestPath);
        if (appHtml) {
          // Inject SSR HTML; the client will hydrate this without a repaint flash.
          html = html.replace(
            '<div id="root"></div>',
            `<div id="root">${appHtml}</div>`,
          );
        }
      } catch (e) {
        console.error("[ssr] render error for", requestPath, e);
        // Fall through — serve the SPA shell so the client can still mount.
      }
    }

    const finalHtml = injectPageMeta(html, requestPath);
    res.set("Content-Type", "text/html").send(finalHtml);
  });
}
