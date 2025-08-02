// ✅ src/Router/GuardRoutes.tsx — Route Guard สำหรับตรวจสอบการ login (Authentication)

import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";

// 📌 สมมุติว่า auth จะถูกดึงจาก context หรือ state จริง ๆ ในระบบของคุณ
const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token"); // หรือเช็คจาก context/store
  return !!token;
};

interface GuardRoutesProps {
  children: ReactNode;
}

/**
 * ✅ GuardRoutes
 * - ใช้ครอบ `<Route>` เพื่อป้องกันการเข้าถึง route ที่ต้อง login ก่อน
 * - ถ้ายังไม่ login จะ redirect ไปหน้า login
 */
const GuardRoutes = ({ children }: GuardRoutesProps) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default GuardRoutes;