// ✅ src/Layout/partials/Header/ui/Logo.tsx — Logo Component พร้อมใช้งานจริง

import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp"; // หากใช้โลโก้ภาพ

const Logo: FC = () => {
  return (
    <Link
      to="/"
      aria-label="JP Visual & Docs Home"
      className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition"
    >
      {/* ✅ โลโก้แบบรูปภาพ */}
      {/* 
      <img 
        src={logo} 
        alt="JP Visual & Docs" 
        className="h-6 sm:h-8 w-auto" 
        loading="lazy" 
      /> 
      */}

      {/* ✅ โลโก้แบบข้อความ */}
      <span className="text-xl sm:text-2xl font-extrabold tracking-tight leading-none">
        JP-Visual
        <span className="text-secondary align-super text-xs">'</span>
        Docs
      </span>
    </Link>
  );
};

export default Logo;