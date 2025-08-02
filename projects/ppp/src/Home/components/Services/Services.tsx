// ✅ src/Home/components/Services/Services.tsx — Wrapper สำหรับ Section บริการ JP Visual & Docs

"use client";

import { FC } from "react";
import ServicesSection from "./ServicesSection";

/**
 * ✅ Services:
 * - ใช้ในหน้า Home เพื่อแสดงข้อมูลบริการทั้งหมด
 * - ภายในรวม FeatureList, FeatureAwards และการ์ดบริการ (พร้อมใช้งาน + Coming Soon)
 */
const Services: FC = () => {
  return (
    <section aria-labelledby="services-title" className="space-y-8">
      <h2 id="services-title" className="sr-only">
        บริการของเรา
      </h2>
      <ServicesSection />
    </section>
  );
};

export default Services;
