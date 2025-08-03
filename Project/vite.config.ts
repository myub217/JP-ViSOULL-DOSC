// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@common": path.resolve(__dirname, "src/utils/common"),
      "@home/components": path.resolve(__dirname, "src/Home/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@data": path.resolve(__dirname, "src/data"),
      "@layout": path.resolve(__dirname, "src/Layout"),
      "@router": path.resolve(__dirname, "src/Router"),
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@types": path.resolve(__dirname, "src/types"),
      "@lib": path.resolve(__dirname, "src/lib")
    },
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true
  },
  build: {
    target: "esnext",
    sourcemap: true,
    outDir: "dist"
  },
  css: {
    postcss: "./postcss.config.js"
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "clsx",
      "lucide-react",
      "framer-motion",
      "react-hook-form",
      "react-icons",
      "@headlessui/react",
      "@radix-ui/react-slot",
      "tailwind-merge"
    ]
  }
});