import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When GITHUB_PAGES=true the build targets mrinalA2009.github.io/AISafety.
// All asset paths are prefixed with /AISafety/ and the router basepath is
// set accordingly via import.meta.env.BASE_URL.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  vite: {
    base: isGitHubPages ? "/AISafety/" : "/",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
