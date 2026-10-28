import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

/**
 * A minimal wouter location hook for server-side rendering.
 * Returns the given static path; navigation is a no-op on the server.
 */
function makeStaticHook(path: string) {
  return (): [string, (to: string) => void] => [path, () => {}];
}

/**
 * Render the app to an HTML string for a given URL path.
 * Called by server/static.ts for each incoming request in production.
 *
 * Notes:
 * - useEffect hooks do NOT run during renderToString, so all DOM/browser code is safe.
 * - useQuery hooks return { isPending: true, data: undefined } synchronously;
 *   components render their loading/skeleton state.
 * - Static content (hardcoded JSX, i18n defaults, page headings) renders fully.
 */
export function render(url: string): string {
  try {
    return renderToString(
      <Router hook={makeStaticHook(url)}>
        <App />
      </Router>
    );
  } catch (e) {
    // If any component fails in SSR, fall back to empty string.
    // The client will mount and render normally.
    console.error("[ssr] render error for", url, e);
    return "";
  }
}
