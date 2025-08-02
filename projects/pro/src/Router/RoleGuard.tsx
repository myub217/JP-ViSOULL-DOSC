// ✅ src/Router/RoleGuard.tsx — Route Guard สำหรับตรวจสอบ Role

import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";

// 🧠 สมมุติว่า role ถูกดึงจาก localStorage หรือ context/store จริงใน production
const getUserRole = (): string | null => {
  return localStorage.getItem("role"); // เช่น 'admin' | 'user' | ...
};

interface RoleGuardProps {
  allowedRoles: string[]; // 👑 กำหนด role ที่อนุญาตให้เข้า
  children: ReactNode;
}

/**
 * ✅ RoleGuard
 * - ป้องกันผู้ใช้ที่ไม่มี role ตรงกับ allowedRoles จากการเข้าถึง route
 * - ถ้าไม่ตรง จะ redirect ไปหน้า 404 หรือ login
 */
const RoleGuard = ({ allowedRoles, children }: RoleGuardProps) => {
  const location = useLocation();
  const userRole = getUserRole();

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RoleGuard;
