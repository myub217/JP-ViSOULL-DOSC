// ✅ src/Home/components/Hero/ui/HeroBackground.tsx — Production-Ready Hero BG

"use client";

import { motion } from "framer-motion";

interface HeroBackgroundProps {
  className?: string;
}

/**
 * ✅ HeroBackground
 * - ฉากหลัง Hero section ที่มีองค์ประกอบ: แสงเรือง, ลายจุด grid และภาพพื้นหลัง
 * - ใช้ Framer Motion เพื่อค่อยๆ ปรากฏ
 * - โหลดภาพแบบ web-optimized (WebP + fallback)
 * - รองรับ responsive โดยใช้ Tailwind
 * - ไม่มีผลกับการโต้ตอบ (pointer-events-none)
 */

const HeroBackground = ({ className = "" }: HeroBackgroundProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    aria-hidden="true"
    className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
  >
    {/* 🔵 Glowing Blue Blob */}
    <div
      className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] 
                 sm:w-[50vw] sm:h-[50vw] rounded-full bg-blue-500/20 blur-3xl z-10"
    />

    {/* 🟣 Radial Dot Grid Pattern */}
    <div
      className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] 
                 [background-size:30px_30px] opacity-10 z-20"
    />

    {/* 🖼️ Hero Background Image (WebP + JPEG fallback) */}
    <div className="absolute inset-0 z-0 opacity-10">
      <picture>
        <source
          srcSet="/assets/images/hero/hero-bg.webp"
          type="image/webp"
        />
        <img
          src="/assets/images/hero/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          aria-hidden="true"
        />
      </picture>
    </div>
  </motion.div>
);

export default HeroBackground;