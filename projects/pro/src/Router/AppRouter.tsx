// src/Router/AppRouter.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '@/Layout/Layout';
import Home from '@/Home/Home';
import Login from '@/Home/Login';
import Secret from '@/Home/Secret';
import CustomerAssessmentForm from '@/Home/CustomerAssessmentForm';

import NotFound from '@/Home/common/404';
import GuardRoutes from '@/Router/GuardRoutes';
import RoleGuard from '@/Router/RoleGuard';

/**
 * ✅ AppRouter - กำหนดเส้นทาง (routes) ทั้งหมดของแอป
 * - Public Routes: Home, Login, Form (อยู่ภายใต้ Layout)
 * - Protected Routes: ต้องผ่านการตรวจสอบการล็อกอิน (GuardRoutes)
 * - Role-Based Routes: จำกัดสิทธิ์เฉพาะ Role (RoleGuard)
 * - NotFound: หน้า 404 สำหรับเส้นทางที่ไม่ตรงกัน
 */
const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="form" element={<CustomerAssessmentForm />} />
      </Route>

      {/* Protected Routes: ต้องล็อกอินก่อน */}
      <Route
        element={
          <GuardRoutes>
            <Layout />
          </GuardRoutes>
        }
      >
        <Route path="secret" element={<Secret />} />
      </Route>

      {/* Role-Based Protected Route: เฉพาะ admin */}
      <Route
        path="admin"
        element={
          <RoleGuard allowedRoles={['admin']}>
            <Layout />
          </RoleGuard>
        }
      >
        <Route index element={<div className="p-4 text-xl">Admin Dashboard</div>} />
      </Route>

      {/* Catch-All 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;