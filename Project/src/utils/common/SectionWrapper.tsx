// ✅ src/utils/common/SectionWrapper.tsx — Production-Ready Section Container

import { FC, ReactNode } from "react";
import cn from "@/utils/cn";

interface SectionWrapperProps {
  /** 🆔 ID สำหรับ anchor link (เช่น #about) */
  id?: string;

  /** 🎨 ClassName เพิ่มเติมสำหรับ styling */
  className?: string;

  /** 🧱 เนื้อหาภายใน Section */
  children: ReactNode;

  /** 📦 ใช้ container wrap พร้อม padding ซ้าย/ขวา */
  withContainer?: boolean;
}

/**
 * 🧱 SectionWrapper
 *
 * - ห่อ section ให้อัตโนมัติ พร้อม control layout
 * - รองรับ anchor navigation
 * - ทำงานร่วมกับ Tailwind ได้ดี (เช่น spacing, bg)
 */
const SectionWrapper: FC<SectionWrapperProps> = ({
  id,
  className,
  children,
  withContainer = true
}) => {
  const sectionClass = cn("py-16 sm:py-20", className);

  return (
    <section id={id} className={sectionClass} role="region">
      {withContainer ? <div className="container px-4 sm:px-6 lg:px-8">{children}</div> : children}
    </section>
  );
};

export default SectionWrapper;
