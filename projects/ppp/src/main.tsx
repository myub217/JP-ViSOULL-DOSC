// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@router/AppRouter';
import '@/index.css';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { registerSW } from 'virtual:pwa-register';

// 🔁 PWA auto update
registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <Toaster richColors position="top-center" />
    </HelmetProvider>
  </React.StrictMode>
);