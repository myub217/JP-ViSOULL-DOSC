// ✅ src/Home/components/Services/FeatureList.tsx — แสดงจุดเด่นระบบ JP-System (Production Ready)

"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Eye, Workflow } from "lucide-react";

/**
 * ✅ FeatureList
 * - แสดงจุดเด่นที่ลูกค้าจะได้รับจากระบบของ JP Visual & Docs
 * - ใช้ใน ServicesSection เพื่อชูระบบหลังบ้านที่ทีมพัฒนาขึ้นเอง
 */
const features = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "ปลอดภัยทุกขั้นตอน",
    description: "เราให้ความสำคัญกับความลับและบริบทของงานแบบที่ไม่มีใครกล้าทำ",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "ส่งงานตรงเวลา",
    description:
      "วางระบบหลังบ้านให้เร็ว ใช้งานง่าย พร้อมส่งมอบงานใน 24 ชั่วโมง",
  },
  {
    icon: <Workflow className="h-6 w-6 text-primary" />,
    title: "ทำงานไว ไม่ถามซ้ำ",
    description:
      "ลดขั้นตอนที่ไม่จำเป็น พร้อมระบบ Dev-to-Dev ที่เข้าใจบริบทแบบสายลับ",
  },
  {
    icon: <Eye className="h-6 w-6 text-primary" />,
    title: "เนียนทุกการใช้งาน",
    description:
      "ทุกชิ้นงานเหมือนจริง ตรวจสอบผ่านได้ และใช้งานในโลกจริงได้แบบไม่ขัดตา",
  },
];

const FeatureList: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      {features.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-start gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-5 shadow-md"
        >
          {item.icon}
          <h3 className="text-base font-semibold text-white">{item.title}</h3>
          <p className="text-sm text-base-content/70 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default FeatureList;
