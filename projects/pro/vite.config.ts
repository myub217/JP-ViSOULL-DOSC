import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// ✅ Vite Config สำหรับ React + TailwindCSS + TypeScript + Termux + Vercel
export default defineConfig({
  plugins: [
    react(),             // รองรับ JSX/TSX + Fast Refresh
    tsconfigPaths(),     // ดึง alias จาก tsconfig.json
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ ใช้ @ แทน path ไปยัง src
    },
  },
  css: {
    postcss: path.resolve(__dirname, 'postcss.config.cjs'), // ✅ ใช้ config PostCSS/Tailwind แบบชัดเจน
  },
  server: {
    host: '0.0.0.0',     // ✅ รองรับการเข้าจากมือถือ/Termux ในวง LAN
    port: 5173,
    strictPort: true,    // ไม่เปลี่ยน port อัตโนมัติ หาก 5173 ถูกใช้งาน
  },
  build: {
    outDir: 'dev-dist',  // ✅ โฟลเดอร์ปลายทางของ production build
    sourcemap: true,     // ✅ เปิด sourcemap เพื่อ Debug production build
  },
});