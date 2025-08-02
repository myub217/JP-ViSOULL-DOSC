// ✅ src/Home/common/404.tsx — หน้า NotFound สำหรับเส้นทางที่ไม่มีอยู่

import { Link } from "react-router-dom";
import { FC } from "react";

const NotFound: FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-100 text-base-content px-4 py-12">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-lg text-muted-foreground">
          ไม่พบหน้าที่คุณกำลังค้นหา
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition"
        >
          กลับหน้าหลัก
        </Link>
      </div>
    </main>
  );
};

export default NotFound;