// ✅ src/Home/components/Portfolio/ui/PortfolioCTA.tsx — Dark Minimalist CTA for Sensitive Industries

import { FC } from "react";
import { cn } from "@/lib/utils";

interface PortfolioCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

/**
 * ✅ PortfolioCTA
 * - เรียบ ขรึม เป็นมืออาชีพ เหมาะกับสายเทา
 * - ใช้ธีมมืด ไม่ดูการตลาดจ๋า
 * - พร้อมใช้งานในหน้าผลงานหรือ Showcase
 */
const PortfolioCTA: FC<PortfolioCTAProps> = ({
  title = "พร้อมเริ่มต้นงานใหม่?",
  subtitle = "เรารับทำเอกสาร ภาพลักษณ์ ระบบ ภายใต้บริบทที่คุณต้องการ",
  buttonText = "ติดต่อทีมงานผ่าน LINE",
  buttonHref = "https://lin.ee/gVptUhR",
  className,
}) => {
  return (
    <section
      role="region"
      aria-labelledby="cta-title"
      className={cn(
        "relative w-full rounded-2xl border border-neutral-800 bg-neutral-900 px-6 py-12 text-white shadow-md",
        "flex flex-col items-center justify-center gap-4 text-center",
        "overflow-hidden isolate",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-10 bg-grid-white/[0.04] pointer-events-none" />
      <div className="z-10 max-w-2xl">
        <h2
          id="cta-title"
          className="text-2xl md:text-3xl font-semibold text-white tracking-tight"
        >
          {title}
        </h2>

        <p className="mt-2 text-sm md:text-base text-white/80">{subtitle}</p>

        <a
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-jp-primary mt-6 inline-block"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default PortfolioCTA;
