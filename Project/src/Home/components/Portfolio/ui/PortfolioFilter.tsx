// ✅ src/Home/components/Portfolio/ui/PortfolioFilter.tsx

"use client";

import { FC } from "react";
import clsx from "clsx";

interface PortfolioFilterProps {
  categories: readonly string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

/**
 * 🎛️ PortfolioFilter — ปุ่มกรองหมวด Portfolio
 *
 * - แสดงปุ่มกรองตามหมวดหมู่ที่เป็นไปได้
 * - ใช้สำหรับ filter portfolioItems by category
 * - รองรับ active state และ accessibility (aria-pressed)
 */
const PortfolioFilter: FC<PortfolioFilterProps> = ({ categories, activeCategory, onChange }) => {
  return (
    <div role="group" aria-label="ตัวกรองหมวด Portfolio" className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={clsx(
            "px-4 py-2 text-sm font-medium rounded-full border transition",
            activeCategory === cat
              ? "bg-primary text-white border-primary shadow"
              : "bg-base-100 text-base-content border-neutral-300 hover:bg-base-200"
          )}
          aria-pressed={activeCategory === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilter;
