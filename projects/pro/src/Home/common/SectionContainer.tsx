// ✅ src/Home/common/SectionContainer.tsx — Consistent Section Wrapper (JP Visual & Docs)

import { ReactNode } from "react";

/**
 * ✅ SectionContainer
 * - Container กลางสำหรับทุก section ของหน้าเว็บ
 * - จัด layout ให้เนื้อหาอยู่กึ่งกลาง กำหนด max-width ชัดเจน
 * - ใช้งานร่วมกับ padding (py) ใน section ภายนอกได้อย่างยืดหยุ่น
 */
type SectionContainerProps = {
  children: ReactNode;
};

const SectionContainer = ({ children }: SectionContainerProps) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default SectionContainer;