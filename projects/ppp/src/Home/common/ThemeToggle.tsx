// ✅ src/Home/common/ThemeToggle.tsx — JP Visual & Docs Theme Switcher

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * ✅ ThemeToggle
 * - เปลี่ยนธีม Light / Dark โดยใช้ localStorage + media query fallback
 * - อัปเดต class บน <html> เพื่อให้ Tailwind dark mode ทำงานทันที
 * - มีปุ่มไอคอนพร้อมสลับธีม และปรับปรุงด้วย A11y
 */
const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";

    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    return storedTheme ?? (prefersDark ? "dark" : "light");
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="เปลี่ยนธีม"
      className="p-2 rounded-full hover:bg-base-300 dark:hover:bg-base-200 transition-colors duration-200"
    >
      <span className="sr-only">สลับธีม</span>
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
