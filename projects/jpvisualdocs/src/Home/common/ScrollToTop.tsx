// ✅ src/Home/common/ScrollToTop.tsx — JP Visual & Docs Route-Aware Scroll Behavior

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ✅ ScrollToTop
 * - ใช้สำหรับเลื่อนหน้าเว็บกลับไปบนสุดทุกครั้งที่เปลี่ยน route
 * - ช่วยปรับประสบการณ์ UX ให้ลื่นไหล เหมือน native app
 */
const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ✅ ตรวจสอบการรันบน client เท่านั้น
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
