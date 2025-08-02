// ✅ src/Home/components/About/ui/AboutImage.tsx — Production-Ready About Image

"use client";

import { motion } from "framer-motion";

const AboutImage = () => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="pt-6 text-center"
    >
      <img
        src="/signature.webp" // ✅ ต้องวางไฟล์ไว้ที่ public/signature.webp
        alt="JP Visual & Docs Signature"
        className="mx-auto w-32 sm:w-40 md:w-48 opacity-80"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
    </motion.figure>
  );
};

export default AboutImage;
