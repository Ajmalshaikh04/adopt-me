import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  // Set the base path for your project (default is '/')
  base: "/adoptme-v8/",

  // Output directory for the production build
  build: {
    outDir: "dist",
  },
});
