// ✅ src/Home/common/BackToTop.tsx — Production-ready JP Visual & Docs

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import clsx from "clsx";

/**
 * ✅ BackToTop Component
 * - แสดงปุ่ม "กลับขึ้นบน" เมื่อ scroll เกิน 300px
 * - รองรับ dark mode + accessibility
 * - ใช้งานได้จริงใน production
 */
const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll(); // ตรวจสอบสถานะเริ่มต้น
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="กลับขึ้นด้านบน"
      className={clsx(
        "fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-opacity duration-300",
        "bg-primary text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50",
        "dark:bg-primary dark:hover:bg-primary/80",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
