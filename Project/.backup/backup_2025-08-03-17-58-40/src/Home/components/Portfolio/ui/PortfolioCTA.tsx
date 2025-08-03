// ✅ src/Home/components/Portfolio/ui/PortfolioCTA.tsx

"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * 📣 PortfolioCTA
 * - CTA ท้าย Section Portfolio สำหรับเชิญชวนให้ลูกค้าติดต่อทีม
 */
const PortfolioCTA: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-16 text-center space-y-4"
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-base-content">
        สนใจให้เราสร้างผลงานแบบนี้ให้คุณไหม?
      </h3>

      <p className="text-base text-base-content/70">
        บอกความต้องการของคุณ แล้วเราจะเสนอแนวทางที่เหมาะสมที่สุด
      </p>

      <a
        href="#contact"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-primary/90 transition"
      >
        ติดต่อทีมงาน
        <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
};

export default PortfolioCTA;
