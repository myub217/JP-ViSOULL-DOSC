// ✅ src/Home/components/Services/ui/ComingSoonServiceCard.tsx — การ์ดบริการที่ยังไม่เปิดให้ใช้งาน

"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ServiceType } from "@/data/services";

interface ComingSoonServiceCardProps {
  service: ServiceType;
}

const ComingSoonServiceCard: FC<ComingSoonServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 shadow-md"
      aria-label={`บริการ ${service.title} กำลังเปิดให้ใช้งานเร็ว ๆ นี้`}
    >
      <img
        src={service.image}
        alt={service.altText}
        className="h-40 w-full rounded-xl object-cover brightness-75"
      />

      <div className="mt-4 space-y-1">
        <h3 className="text-base font-semibold text-white">{service.title}</h3>
        <p className="text-sm text-base-content/70 leading-relaxed">
          {service.description}
        </p>
      </div>

      {service.comingSoonNote && (
        <div className="absolute top-2 right-2 rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium text-black shadow">
          {service.comingSoonNote}
        </div>
      )}
    </motion.div>
  );
};

export default ComingSoonServiceCard;
