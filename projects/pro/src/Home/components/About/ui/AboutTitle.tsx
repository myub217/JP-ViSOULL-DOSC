// ✅ src/Home/components/About/ui/AboutTitle.tsx — Production-Ready Title Component

"use client";

import { motion } from "framer-motion";

/**
 * ✅ AboutTitle
 * - แสดงหัวข้อหลักของเซกชัน "About"
 * - ใช้ motion animation ที่ลื่นไหล
 * - รองรับการปรับขนาดตัวอักษรตามหน้าจอ
 * - ใช้ gradient เพื่อเน้นแบรนด์ JP Visual & Docs
 */
const AboutTitle = () => {
  return (
    <motion.h2
      id="about-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center text-balance font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-base-content"
    >
      <span className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        JP Visual & Docs
      </span>
    </motion.h2>
  );
};

export default AboutTitle;
