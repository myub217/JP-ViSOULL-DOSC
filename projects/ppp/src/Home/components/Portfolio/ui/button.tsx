// ✅ src/components/ui/FilterButton.tsx — Production-Ready Reusable Filter Button

import React from "react";
import { cn } from "@/lib/utils";

interface FilterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}

/**
 * ✅ FilterButton
 * - ปุ่มตัวกรองแบบ Reusable สำหรับกรองข้อมูลใน UI
 * - รองรับสถานะ `active` เพื่อเน้นปุ่มที่ถูกเลือก
 * - ใช้ Tailwind + DaisyUI class พร้อม a11y support
 */

const FilterButton: React.FC<FilterButtonProps> = ({
  active = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "px-4 py-1.5 text-sm rounded-full border transition-all duration-200 font-medium",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
        active
          ? "bg-primary text-white border-primary shadow-sm"
          : "border-neutral-700 text-neutral-300 hover:bg-neutral-800",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default FilterButton;
