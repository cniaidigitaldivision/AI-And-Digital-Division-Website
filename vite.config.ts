// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    optimizeDeps: {
      // src/start.ts must import @tanstack/start-client-core directly (see the note there
      // re: TanStack/router#7459). Pre-bundling it would skip Vite's transform pipeline, so
      // the Start compiler could not strip the .server() branch of getRouterInstance --
      // leaving `new AsyncLocalStorage()` from @tanstack/start-storage-context running in
      // the browser and crashing the client bundle.
      exclude: ["@tanstack/start-client-core"],
    },
  },
  // Hard-pin Vercel as the deploy target outside of Lovable's own build pipeline
  // (Lovable builds still pin Cloudflare via LOVABLE_NITRO_PRESET regardless of this).
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
      serverDir: ".vercel/output/functions/__server.func",
      publicDir: ".vercel/output/static",
    },
  },
});
