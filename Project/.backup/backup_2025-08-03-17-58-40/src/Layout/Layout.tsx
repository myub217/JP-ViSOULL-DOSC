// ✅ src/Layout/Layout.tsx — Layout Wrapper สำหรับทุกหน้าในระบบ

import { FC } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/components/Layout/Navbar";
import Footer from "@/Layout/partials/Footer/Footer";
import ChatWidget from "@/utils/common/ChatWidget";
import DisclaimerModal from "@/utils/common/DisclaimerModal";
import BackToTop from "@/utils/common/BackToTop"; // ✅ แนะนำเพิ่ม

/**
 * 🧱 Layout
 *
 * - ใช้ครอบหน้าหลักทุกหน้าในเว็บไซต์
 * - แสดง Navbar, Footer, ChatWidget, DisclaimerModal
 * - <Outlet /> ใช้สำหรับแสดงเนื้อหาของ Route ย่อย
 * - ใช้สีพื้นฐานจาก Tailwind + DaisyUI
 */
const Layout: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
      {/* 🔝 ส่วนหัว (Navigation) */}
      <Navbar />

      {/* 📄 เนื้อหาหลักจาก Router */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 👣 ส่วนท้าย */}
      <Footer />

      {/* 💬 ปุ่มแชทลอย */}
      <ChatWidget />

      {/* ⬆️ ปุ่มกลับด้านบน */}
      <BackToTop />

      {/* ⚠️ แจ้งเพื่อทราบ (แสดงครั้งแรกเท่านั้น) */}
      <DisclaimerModal />
    </div>
  );
};

export default Layout;
