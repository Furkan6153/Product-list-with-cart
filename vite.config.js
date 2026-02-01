import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/Product-list-with-cart/",
  build: {
    outDir: "docs",
  },
  plugins: [react(), svgr()],
});
