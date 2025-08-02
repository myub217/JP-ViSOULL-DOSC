// ✅ src/Layout/partials/Header/Header.tsx — Header Component พร้อมเมนู Responsive และ Toggle

import { FC, useState, useEffect } from "react";
import Logo from "./ui/Logo";
import { Sun, Moon, Menu, X } from "lucide-react";

/**
 * Header Component พร้อมเมนู Responsive และ Toggle (Theme & Mobile)
 */
const Header: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // initial state from html class or prefers-color-scheme
    if (typeof window !== "undefined") {
      if (document.documentElement.classList.contains("dark")) return true;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync dark mode class on html element with state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 w-full border-b border-base-200 bg-base-100/80 backdrop-blur shadow-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* 🔰 โลโก้หลัก */}
        <Logo />

        {/* เมนูหลัก (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <a href="/" className="hover:text-primary transition">
            หน้าแรก
          </a>
          <a href="/#portfolio" className="hover:text-primary transition">
            ผลงาน
          </a>
          <a href="/#services" className="hover:text-primary transition">
            บริการ
          </a>
          <a href="/#about" className="hover:text-primary transition">
            เกี่ยวกับเรา
          </a>
        </nav>

        {/* เมนูและธีม Toggle */}
        <div className="flex items-center gap-4">
          {/* Toggle Theme */}
          <button
            aria-label="Toggle Theme"
            title="สลับโหมดธีม"
            onClick={toggleTheme}
            className="btn btn-ghost btn-sm p-1 rounded-md"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Toggle Mobile Menu */}
          <button
            aria-label={mobileMenuOpen ? "ปิดเมนูมือถือ" : "เปิดเมนูมือถือ"}
            title={mobileMenuOpen ? "ปิดเมนูมือถือ" : "เปิดเมนูมือถือ"}
            onClick={toggleMobileMenu}
            className="md:hidden btn btn-ghost btn-sm p-1 rounded-md"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* เครดิต Dev */}
          <span className="hidden text-xs text-muted-foreground sm:inline-block">
            Dev by เจ้าป่า
          </span>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-base-100 p-6 overflow-y-auto">
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <a
              href="/"
              onClick={toggleMobileMenu}
              className="hover:text-primary transition-colors duration-200"
            >
              หน้าแรก
            </a>
            <a
              href="/#portfolio"
              onClick={toggleMobileMenu}
              className="hover:text-primary transition-colors duration-200"
            >
              ผลงาน
            </a>
            <a
              href="/#services"
              onClick={toggleMobileMenu}
              className="hover:text-primary transition-colors duration-200"
            >
              บริการ
            </a>
            <a
              href="/#about"
              onClick={toggleMobileMenu}
              className="hover:text-primary transition-colors duration-200"
            >
              เกี่ยวกับเรา
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;