import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;

if (root.hasChildNodes()) {
  // Server rendered HTML is present — hydrate it so React attaches to the
  // existing DOM without a repaint flash. Recoverable mismatches (e.g. API
  // data that wasn't available during SSR) are handled silently.
  hydrateRoot(root, <App />, {
    onRecoverableError: () => {
      // Suppress hydration mismatch noise in the console; React will
      // re-render to the correct state as data loads on the client.
    },
  });
} else {
  // No SSR content (dev mode or fallback) — mount fresh.
  createRoot(root).render(<App />);
}
