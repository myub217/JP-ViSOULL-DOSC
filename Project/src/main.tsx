// ✅ src/main.tsx — Entry Point สำหรับ React + Router + Global Styles

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "@/Router/AppRouter";

// 🌐 Global Styles (TailwindCSS, DaisyUI overrides, custom classes)
import "@/styles/global.css";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
