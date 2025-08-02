// ✅ src/Home/components/Hero/ui/HeroBadge.tsx — Production-Ready Badge

import { BadgeCheck } from "lucide-react";
import { FC } from "react";

/**
 * ✅ HeroBadge
 * - Badge แสดงสถานะความพร้อมแบบมืออาชีพ
 * - ใช้งานใน Hero Section
 * - รองรับทั้ง Desktop / Mobile และ Screen Reader
 */
const HeroBadge: FC = () => {
  return (
    <div
      role="status"
      aria-label="พร้อมลุยแบบมืออาชีพ"
      className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1 text-sm text-white shadow backdrop-blur-sm"
    >
      <BadgeCheck
        className="h-4 w-4 text-green-500 shrink-0"
        strokeWidth={2.2}
        aria-hidden="true"
      />
      <span className="font-medium tracking-tight whitespace-nowrap">
        พร้อมลุยแบบมืออาชีพ
      </span>
    </div>
  );
};

export default HeroBadge;
