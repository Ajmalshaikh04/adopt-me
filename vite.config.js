import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  // Output directory for the production build
  build: {
    outDir: "dist",
  },
});
