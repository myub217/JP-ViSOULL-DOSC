// ✅ src/Home/components/Portfolio/ui/Button.tsx — ปุ่มฟิลเตอร์ Portfolio Category

"use client";

import { FC } from "react";
import clsx from "clsx";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

/**
 * 🎯 FilterButton
 * - ใช้กรองประเภท Portfolio เช่น Website, App, ฯลฯ
 * - แสดงสถานะ Active ด้วยสีและสไตล์
 */
const FilterButton: FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-200",
        {
          "bg-primary text-white border-primary shadow": isActive,
          "bg-base-100 text-base-content border-base-300 hover:bg-base-200": !isActive
        }
      )}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
};

export default FilterButton;
