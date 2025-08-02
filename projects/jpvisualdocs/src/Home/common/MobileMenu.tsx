// ✅ src/Home/common/MobileMenu.tsx — JP Visual & Docs Mobile Nav Drawer (Production Final)

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * ✅ MobileMenu
 * - เมนูมือถือแบบ Slide-down
 * - รองรับ dark mode, responsive, transition, scroll lock
 */
const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navItems = [
    { href: "/", label: "หน้าแรก", internal: true },
    { href: "/#portfolio", label: "ผลงาน", internal: false },
    { href: "/#services", label: "บริการ", internal: false },
    { href: "/#about", label: "เกี่ยวกับเรา", internal: false },
    { href: "/login", label: "เข้าสู่ระบบ", internal: true },
  ];

  // ✅ Scroll Lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[60] bg-base-100/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="เมนูมือถือ JP Visual & Docs"
    >
      {/* ✅ Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-base-300">
        <span className="text-lg font-bold text-primary">JP Visual & Docs</span>
        <button onClick={onClose} aria-label="ปิดเมนู" className="text-primary">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* ✅ Menu List */}
      <nav
        className="flex flex-col items-center justify-center gap-6 py-10 text-lg font-medium"
        aria-label="เมนูนำทางในมือถือ"
      >
        {navItems.map(({ href, label, internal }) =>
          internal ? (
            <Link
              key={href}
              to={href}
              onClick={onClose}
              className="hover:text-primary transition-colors duration-200"
            >
              {label}
            </Link>
          ) : (
            <a
              key={href}
              href={href}
              onClick={onClose}
              className="hover:text-primary transition-colors duration-200"
            >
              {label}
            </a>
          )
        )}

        {/* ✅ CTA */}
        <a
          href="https://line.me/ti/p/@462FQFC"
          onClick={onClose}
          className="btn btn-primary px-6 py-2 text-base font-semibold rounded-xl shadow-md transition hover:scale-105"
        >
          ติดต่อเจ้าป่า
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;