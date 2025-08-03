// ✅ src/Home/Home.tsx — หน้าแรก JP Visual & Docs พร้อมใช้งานจริงระดับ Production

"use client";

import { FC } from "react";

import Hero from "@home/components/Hero/Hero";
import About from "@home/components/About/About";
import ServicesSection from "@home/components/Services/ServicesSection";
import PortfolioGallery from "@home/components/Portfolio/PortfolioGallery";
import SectionContainer from "@common/SectionContainer";

/**
 * 🏠 Home — หน้าแรกของระบบ JP Visual & Docs
 *
 * - Hero / About / Services / Portfolio
 * - ทุก Section รองรับ anchor scroll และ mobile responsive
 */
const Home: FC = () => {
  return (
    <main className="flex flex-col scroll-smooth">
      {/* 🚀 Hero Section */}
      <section id="hero" aria-labelledby="hero-title" className="scroll-mt-20">
        <Hero />
      </section>

      {/* 👤 About Section */}
      <section id="about" aria-labelledby="about-title" className="scroll-mt-20 py-16 md:py-24">
        <SectionContainer>
          <About />
        </SectionContainer>
      </section>

      {/* 🛠️ Services Section */}
      <section
        id="services"
        aria-labelledby="services-title"
        className="scroll-mt-20 py-16 md:py-24 bg-base-100"
      >
        <SectionContainer>
          <ServicesSection />
        </SectionContainer>
      </section>

      {/* 🎨 Portfolio Section */}
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
