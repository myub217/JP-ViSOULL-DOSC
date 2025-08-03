// ✅ src/components/Layout/Navbar.tsx

import { FC } from "react";
import { Link } from "react-router-dom";

import ThemeToggle from "@/Layout/partials/Header/ui/ThemeToggle";
import Logo from "@/Layout/partials/Header/ui/Logo";

/**
 * 📌 Navbar — ส่วนหัวของแอป
 *
 * - แสดง Logo
 * - เมนูนำทางหลัก
 * - Theme toggle
 */
const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-base-100 text-base-content shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🌀 Logo */}
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold">
            <Logo />
          </Link>
        </div>

        {/* 🔘 Navigation + Theme */}
        <div className="flex-none space-x-2">
          <Link to="/" className="btn btn-ghost btn-sm font-medium hover:bg-base-200">
            หน้าแรก
          </Link>
          <Link to="/form" className="btn btn-ghost btn-sm font-medium hover:bg-base-200">
            ประเมินลูกค้า
          </Link>
          <Link to="/login" className="btn btn-ghost btn-sm font-medium hover:bg-base-200">
            เข้าสู่ระบบ
          </Link>

          {/* 🌗 Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
