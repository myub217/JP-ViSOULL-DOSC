// ✅ src/Home/common/404.tsx — Production-ready JP Visual & Docs

import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-base-100 text-base-content transition-colors duration-300">
      <div className="text-center space-y-6 max-w-md">
        <h1
          id="notfound-title"
          className="text-7xl font-extrabold text-primary tracking-tight"
        >
          404
        </h1>
        <p className="text-2xl font-semibold">ไม่พบหน้าที่คุณค้นหา</p>
        <p className="text-base text-gray-600 dark:text-gray-400">
          หน้าที่คุณพยายามเข้าถึงอาจถูกลบ เปลี่ยนชื่อ หรือไม่มีอยู่ในระบบ
        </p>
        <Link
          to="/"
          aria-label="กลับสู่หน้าแรก"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-medium shadow hover:bg-primary/90 transition"
        >
          <span className="text-xl">←</span> กลับสู่หน้าแรก
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
