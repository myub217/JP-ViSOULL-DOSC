// ✅ src/Home/components/Portfolio/PortfolioGallery.tsx — Production-Ready Portfolio Section

import React, { useState } from "react";
import { portfolioItems, PortfolioItem } from "@/data/portfolioItems";
import PortfolioFilter from "./ui/PortfolioFilter";
import PortfolioCTA from "./ui/PortfolioCTA";
import { cn } from "@/lib/utils";

/**
 * ✅ PortfolioGallery
 * - แสดงผลงานทั้งหมด พร้อมตัวกรองหมวดหมู่
 * - มี CTA ด้านล่างสำหรับติดต่อทีม
 */

const PortfolioGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems: PortfolioItem[] = selectedCategory
    ? portfolioItems.filter((item) => item.category === selectedCategory)
    : portfolioItems;

  const handleFilterChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  const categories = Array.from(
    new Set(portfolioItems.map((item) => item.category)),
  );

  return (
    <section
      id="portfolio"
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20"
      role="region"
      aria-label="Portfolio Section"
    >
      {/* ✅ Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        ผลงานของเรา
      </h2>

      {/* ✅ Filter Controls */}
      <PortfolioFilter
        categories={categories}
        selected={selectedCategory}
        onChange={handleFilterChange}
      />

      {/* ✅ Grid of Portfolio Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={cn(
              "bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md",
              "transition hover:shadow-xl hover:-translate-y-1 duration-200 overflow-hidden",
            )}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-neutral-400 mt-2">
                {item.description}
              </p>
              <span className="inline-block mt-4 px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ CTA */}
      <div className="mt-16">
        <PortfolioCTA />
      </div>
    </section>
  );
};

export default PortfolioGallery;
