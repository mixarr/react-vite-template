import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: resolve("src/app"),
      processes: resolve("src/processes"),
      pages: resolve("src/pages"),
      widgets: resolve("src/widgets"),
      features: resolve("src/features"),
      entities: resolve("src/entities"),
      shared: resolve("src/shared"),
    },
  },
});
