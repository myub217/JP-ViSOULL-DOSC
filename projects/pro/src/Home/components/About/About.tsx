// ✅ src/Home/components/About/About.tsx — Production-Ready About Section

"use client";

import { motion } from "framer-motion";
import AboutTitle from "./ui/AboutTitle";
import AboutDescription from "./ui/AboutDescription";
import AboutImage from "./ui/AboutImage";
import AboutQuote from "./ui/AboutQuote";

/**
 * ✅ About Section
 * - แสดงข้อมูลภาพรวมของ JP Visual & Docs
 * - รองรับ animation แบบ smooth
 * - ใช้โครงสร้าง semantic และ a11y พร้อม
 * - รองรับการโหลดเฉพาะ client-side (NextJS/React compatibility)
 */
const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative isolate overflow-hidden bg-base-100 text-base-content py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* 🔆 Optional Background Visual */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl opacity-20" /> */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto w-full max-w-3xl space-y-14 text-center"
      >
        <AboutTitle />
        <AboutDescription />
        <AboutImage />
        <AboutQuote />
      </motion.div>
    </section>
  );
};

export default About;
