// ✅ src/Home/components/Services/ui/ServiceCard.tsx — การ์ดบริการที่เปิดใช้งานจริง

"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ServiceType } from "@/data/services";

interface ServiceCardProps {
  service: ServiceType;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 shadow-md"
      aria-label={`บริการ ${service.title}`}
    >
      <img
        src={service.image}
        alt={service.altText}
        className="h-40 w-full rounded-xl object-cover brightness-90"
      />

      <div className="mt-4 space-y-1">
        <h3 className="text-base font-semibold text-white">{service.title}</h3>
        <p className="text-sm text-base-content/70 leading-relaxed">
          {service.description}
        </p>
        <p className="text-sm text-primary font-medium mt-1">{service.price}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
