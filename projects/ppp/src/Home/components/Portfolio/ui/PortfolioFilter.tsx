// ✅ src/Home/components/Portfolio/ui/PortfolioFilter.tsx — Production-Ready Filter Controls

import React from "react";
import FilterButton from "./button";

interface PortfolioFilterProps {
  categories?: string[];
  selected: string | null;
  onChange: (category: string | null) => void;
}

/**
 * ✅ PortfolioFilter
 * - แสดงตัวกรองประเภทงานในหน้า Portfolio
 * - ปุ่ม "ทั้งหมด" จะล้างตัวกรอง
 * - ปรับ styling ด้วย Tailwind และรองรับ responsive
 */

const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
  categories = [],
  selected,
  onChange,
}) => {
  return (
    <nav
      role="group"
      aria-label="ตัวกรองผลงาน"
      className="flex flex-wrap justify-center gap-3"
    >
      <FilterButton
        active={selected === null}
        onClick={() => onChange(null)}
        aria-pressed={selected === null}
      >
        ทั้งหมด
      </FilterButton>

      {categories.map((category) => (
        <FilterButton
          key={category}
          active={selected === category}
          onClick={() => onChange(category)}
          aria-pressed={selected === category}
        >
          {category}
        </FilterButton>
      ))}
    </nav>
  );
};

export default PortfolioFilter;
