// ✅ src/Home/common/ScrollProgress.tsx — JP Visual & Docs Scroll Indicator

import { useEffect, useState } from "react";

/**
 * ✅ ScrollProgress Component
 * - ติดไว้ด้านบนเพื่อแสดงความคืบหน้าการเลื่อนหน้าเว็บ
 * - รองรับ animation ลื่น, dark mode background
 * - ใช้งานร่วมกับ Tailwind และ ARIA accessibility ครบถ้วน
 */
const ScrollProgress: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const totalScrollable = scrollHeight - clientHeight;
      const progress = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
      setScroll(progress);
    };

    updateScrollProgress(); // เช็กทันทีตอน mount
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent pointer-events-none">
      <div
        className="h-full bg-primary transition-[width] duration-300 ease-out rounded-r-full"
        style={{ width: `${scroll}%` }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.floor(scroll)}
        aria-label="แถบความคืบหน้าการเลื่อนหน้า"
      />
    </div>
  );
};

export default ScrollProgress;