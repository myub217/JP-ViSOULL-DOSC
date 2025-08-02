// src/Router/AppRouter.tsx

import { Routes, Route } from 'react-router-dom'
import Layout from '@/Layout/Layout'
import Home from '@/Home/Home'
import Login from '@/Home/Login'
import Secret from '@/Home/Secret'
import CustomerAssessmentForm from '@/Home/CustomerAssessmentForm'
import AdminDashboard from '@/Admin/AdminDashboard'
import GuardRoutes from './GuardRoutes'
import RoleGuard from './RoleGuard'

/**
 * ✅ AppRouter.tsx — Production Ready Routing Configuration
 * - Public: Home, Login, Contact
 * - Protected: Secret, Admin
 * - Fallback: 404
 * - Uses GuardRoutes for auth and RoleGuard for role-based access
 */

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* ✅ Public Routes */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<CustomerAssessmentForm />} />

        {/* 🔒 Protected Routes */}
        <Route element={<GuardRoutes />}>
          <Route path="secret" element={<Secret />} />
          <Route
            path="admin"
            element={
              <RoleGuard allowedRoles={['admin']}>
                <AdminDashboard />
              </RoleGuard>
            }
          />
        </Route>

        {/* ❌ 404 Fallback */}
        <Route
          path="*"
          element={
            <h1 className="text-center text-2xl font-semibold py-10">
              404 | Page Not Found
            </h1>
          }
        />
      </Route>
    </Routes>
  )
}

export default AppRouter