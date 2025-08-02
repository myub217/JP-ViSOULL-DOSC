// ✅ src/Home/common/Navbar.tsx — JP Visual & Docs Responsive Navbar (Final Production Version)

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import MobileMenu from "./MobileMenu";
import Logo from "@/Home/components/Header/ui/Logo";

/**
 * ✅ Navbar Component
 * - Responsive, Dark Mode, Blur Effect, Smooth Transition
 * - ใช้ร่วมกับ React Router DOM, TailwindCSS, DaisyUI
 * - มี CTA และเข้าสู่ระบบ พร้อมรองรับ scroll section anchor
 */
const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname + location.hash;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "หน้าแรก", path: "/" },
    { label: "ผลงาน", path: "/#portfolio" },
    { label: "บริการ", path: "/#services" },
    { label: "เกี่ยวกับเรา", path: "/#about" },
  ];

  return (
    <>
      {/* ✅ Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-black/30 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
        <nav
          className="container navbar px-4 py-2"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* ✅ Logo */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex gap-3 items-center">
            {navItems.map(({ label, path }) => (
              <a
                key={path}
                href={path}
                className={cn(
                  "btn btn-sm btn-ghost px-4 rounded-md transition-colors",
                  currentPath === path
                    ? "text-primary font-semibold bg-base-200 dark:bg-base-300"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary"
                )}
              >
                {label}
              </a>
            ))}

            {/* CTA: ติดต่อเจ้าป่า */}
            <a
              href="https://line.me/ti/p/@462FQFC"
              className="btn btn-sm btn-primary px-5 font-semibold rounded-md transition hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              ติดต่อเจ้าป่า
            </a>

            {/* เข้าสู่ระบบ */}
            <Link
              to="/login"
              className="btn btn-sm btn-outline px-4 rounded-md font-medium transition hover:text-primary"
            >
              เข้าสู่ระบบ
            </Link>
          </div>

          {/* ✅ Mobile Menu Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="เปิดเมนูมือถือ"
              className="btn btn-ghost btn-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ✅ Fullscreen Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;