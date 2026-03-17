// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Coffee-Brand/", // مهم جدًا للنشر على GH Pages
  plugins: [react()],
});