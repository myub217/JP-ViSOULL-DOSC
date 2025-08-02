// ✅ src/Home/common/FallbackLoading.tsx — Minimal Production-Grade Suspense Fallback

import React from "react";

/**
 * 📦 FallbackLoading
 * - ใช้ใน Suspense fallback หรือระหว่าง lazy-loading component
 * - UI แบบ minimal, เห็นชัดเจน, ปลอดภัยสำหรับ dark/light mode
 * - พร้อม aria-accessibility สำหรับ screen reader
 */

const FallbackLoading: React.FC = () => (
  <div
    className="flex h-screen items-center justify-center bg-white dark:bg-black text-primary"
    role="status"
    aria-label="กำลังโหลดเนื้อหา..."
  >
    <span className="loading loading-spinner loading-lg" aria-hidden="true" />
  </div>
);

export default FallbackLoading;
