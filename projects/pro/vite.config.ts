import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// ✅ Vite Config สำหรับ React + Tailwind + Alias + Termux dev environment
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // อ่าน alias จาก tsconfig.json
  ],
  resolve: {
    alias: {
      // ✅ กำหนด alias สำรอง ให้ @ ชี้ไปที่ src
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: './postcss.config.cjs', // ✅ ใช้ PostCSS config ของ TailwindCSS
  },
  server: {
    host: '0.0.0.0', // ✅ รองรับการเข้าจาก Android/Termux device
    port: 5173,
    strictPort: true, // ถ้า port 5173 ไม่ว่างจะไม่เปลี่ยน port อัตโนมัติ
  },
  build: {
    outDir: 'dev-dist', // ✅ ไฟล์ build จะถูกเก็บที่โฟลเดอร์นี้
    sourcemap: true,    // เปิด sourcemap เพื่อช่วย debug
  },
});