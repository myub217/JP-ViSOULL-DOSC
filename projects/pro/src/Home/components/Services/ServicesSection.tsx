// ✅ src/Home/components/Services/ServicesSection.tsx — แสดงรายการบริการทั้งหมดของ JP Visual & Docs

"use client";

import { FC } from "react";
import { jpServices } from "@/data/services";
import ServiceCard from "./ui/ServiceCard";
import ComingSoonServiceCard from "./ui/ComingSoonServiceCard";
import FeatureList from "./FeatureList";
import FeatureAwards from "./FeatureAwards";

/**
 * ✅ ServicesSection
 * - แสดงความสามารถเฉพาะทางของทีมงาน (FeatureList)
 * - แสดงสิ่งที่ลูกค้าไว้ใจและเลือกใช้เรา (FeatureAwards)
 * - แสดงบริการทั้งหมด (พร้อมใช้งาน / ยังไม่เปิดตัว)
 */
const ServicesSection: FC = () => {
  const availableServices = jpServices.filter((service) => service.available);
  const comingSoonServices = jpServices.filter((service) => !service.available);

  return (
    <div className="space-y-16">
      {/* ✅ ความสามารถเฉพาะของทีม */}
      <FeatureList />

      {/* ✅ จุดที่ลูกค้าไว้ใจเลือกใช้เรา */}
      <FeatureAwards />

      {/* ✅ บริการที่พร้อมใช้งาน */}
      {availableServices.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}

      {/* ✅ บริการที่กำลังจะมา */}
      {comingSoonServices.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comingSoonServices.map((service) => (
            <ComingSoonServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
