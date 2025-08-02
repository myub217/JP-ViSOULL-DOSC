// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from '@/Router/AppRouter';
import '@/styles/styles.css'; // ✅ ตรงกับ path ที่ตั้งไว้ใน tailwind.config.ts

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    '❌ Root element not found. Please ensure there is a div with id="root" in your index.html.'
  );
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);