import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Coffee-Brand/", // ← ضع اسم الريبو هنا
  plugins: [react()],
});