import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import ChatWidget from "@/Home/common/ChatWidget";

/**
 * ✅ Layout หลักของแอป
 * - ครอบทุกหน้าด้วย Header และ Footer
 * - รองรับโครงสร้าง flex-column สูงเต็มหน้าจอ
 * - Theme: ใช้พื้นหลังและสีข้อความจาก Tailwind (bg-base-100, text-base-content)
 * - ส่วน main ใช้ container + section-spacing เพื่อควบคุมระยะห่าง
 */
const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
      {/* 🔰 ส่วนหัวเว็บไซต์ */}
      <Header />

      {/* 📄 พื้นที่แสดงเนื้อหา */}
      <main className="flex-grow container section-spacing">
        <Outlet />
      </main>

      {/* 🔻 ส่วนท้ายเว็บไซต์ */}
      <Footer />

      {/* 💬 ปุ่มแชทลอย */}
      <ChatWidget />
    </div>
  );
};

export default Layout;
