// ✅ src/Home/Home.tsx — หน้าแรก JP Visual & Docs พร้อมใช้งานจริงระดับ Production

"use client";

import Hero from "@/Home/components/Hero";
import About from "@/Home/components/About";
import { Services } from "@/Home/components/Services";
import { PortfolioGallery } from "@/Home/components/Portfolio";
import SectionContainer from "@/Home/common/SectionContainer";

/**
 * ✅ หน้าแรกของ JP Visual & Docs
 * - แสดง Hero, About, Services (รวมความสามารถ จุดแข็ง และรายการบริการ), Portfolio
 * - ทุก Section แยกส่วนชัดเจน รองรับ scroll-smooth และ anchor
 */
const Home: React.FC = () => {
  return (
    <main className="flex flex-col scroll-smooth">
      {/* ✅ Hero Section */}
      <section id="hero" aria-labelledby="hero-title" className="scroll-mt-20">
        <Hero />
      </section>

      {/* ✅ About Section */}
      <section
        id="about"
        aria-labelledby="about-title"
        className="scroll-mt-20 py-16 md:py-24"
      >
        <SectionContainer>
          <About />
        </SectionContainer>
      </section>

      {/* ✅ Services Section */}
      <section
        id="services"
        aria-labelledby="services-title"
        className="scroll-mt-20 py-16 md:py-24 bg-base-100"
      >
        <SectionContainer>
          <Services />
        </SectionContainer>
      </section>

      {/* ✅ Portfolio Section */}
      <section
        id="portfolio"
        aria-labelledby="portfolio-title"
        className="scroll-mt-20 py-16 md:py-24 bg-base-100"
      >
        <SectionContainer>
          <PortfolioGallery />
        </SectionContainer>
      </section>
    </main>
  );
};

export default Home;
