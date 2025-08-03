// ✅ src/Router/AppRouter.tsx — Routing ครบ Public / Auth / Role-based (Lazy + Suspense + ErrorBoundary)

import { FC, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "@/Layout/Layout";
import NotFound from "@/utils/common/404";
import ScrollToTop from "@/utils/common/ScrollToTop";
import FallbackLoader from "@/utils/common/FallbackLoader";
import ErrorBoundary from "@/utils/common/ErrorBoundary";
import GuardRoutes from "@/Router/GuardRoutes";
import RoleGuard from "@/Router/RoleGuard";

// 📦 Lazy load page components
const Home = lazy(() => import("@/Home/Home"));
const Login = lazy(() => import("@/Home/Login"));
const Secret = lazy(() => import("@/Home/Secret"));
const CustomerAssessmentForm = lazy(() => import("@/Home/CustomerAssessmentForm"));

/**
 * 🧭 AppRouter
 *
 * - ครอบทุก routing ด้วย Layout
 * - แบ่ง Public, Protected, Role-based route อย่างเป็นระบบ
 * - ใช้ Suspense สำหรับ fallback ระหว่างโหลด
 * - ใช้ ErrorBoundary จัดการข้อผิดพลาดระหว่าง render
 */
const AppRouter: FC = () => {
  return (
    <>
      {/* 🌀 Scroll to top on route change */}
      <ScrollToTop />

      {/* 🛡️ Error Boundary ครอบระบบ route */}
      <ErrorBoundary>
        {/* ⏳ Suspense สำหรับ lazy component */}
        <Suspense fallback={<FallbackLoader />}>
          <Routes>
            {/* 🌐 Public Routes */}
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="form" element={<CustomerAssessmentForm />} />
            </Route>

            {/* 🔐 Auth Protected Routes */}
            <Route
              element={
                <GuardRoutes>
                  <Layout />
                </GuardRoutes>
              }
            >
              <Route path="secret" element={<Secret />} />
            </Route>

            {/* 🛡️ Admin Role-only Routes */}
            <Route
              path="admin"
              element={
                <RoleGuard allowedRoles={["admin"]}>
                  <Layout />
                </RoleGuard>
              }
            >
              <Route
                index
                element={
                  <div className="p-6 text-xl font-semibold text-white">🛠️ Admin Dashboard</div>
                }
              />
            </Route>

            {/* ❌ Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default AppRouter;
