// vite.config.ts — ✅ Production-Ready + Android/Termux Compatible

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'JP Visual Docs',
        short_name: 'JPDocs',
        description: 'ระบบจัดการเอกสารแบบ Visual สำหรับองค์กร',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0f172a',
        lang: 'th',
        icons: [
          {
            src: '/pwa-icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa-icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      // 🚫 Workbox SW may fail on Termux/Android
      workbox: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js']
      },
      devOptions: {
        enabled: false, // ✅ PWA disabled during build on Android
        type: 'module'
      },
      // 🔧 Disable PWA generation completely if needed (safe fallback)
      disable: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@admin': path.resolve(__dirname, 'src/Admin'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@common': path.resolve(__dirname, 'src/Home/common'),
      '@components': path.resolve(__dirname, 'src/Home/components'),
      '@formui': path.resolve(__dirname, 'src/Home/components/Forms/ui'),
      '@forms': path.resolve(__dirname, 'src/Home/components/Forms'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@layout': path.resolve(__dirname, 'src/Layout'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@router': path.resolve(__dirname, 'src/Router'),
      '@server': path.resolve(__dirname, 'src/server'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@data': path.resolve(__dirname, 'src/data')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    open: false
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild', // ✅ Use esbuild instead of terser for Android compatibility
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})