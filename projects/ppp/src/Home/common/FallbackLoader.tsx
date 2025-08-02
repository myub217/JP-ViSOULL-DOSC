// ✅ src/Home/common/FallbackLoader.tsx — Production-Ready Fallback

import React from "react";

/**
 * 🔄 FallbackLoader Component
 * - ใช้แสดงระหว่างรอโหลดหน้า (เช่น Lazy/Suspense)
 * - รองรับ Dark Mode
 * - เหมาะกับทุกหน้าที่ต้องใช้ UX Loading state
 */
const FallbackLoader: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-950">
      <div className="flex flex-col items-center gap-4">
        <span
          className="loading loading-spinner loading-lg text-primary"
          aria-label="กำลังโหลด"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          กำลังโหลดข้อมูล...
        </p>
      </div>
    </div>
  );
};

export default FallbackLoader;
