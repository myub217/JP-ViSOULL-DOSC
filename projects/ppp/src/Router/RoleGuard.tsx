// src/Router/RoleGuard.tsx

import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type RoleGuardProps = {
  children: ReactNode
  allowedRoles: ('admin' | 'user' | 'staff' | 'guest')[]
}

/**
 * ✅ RoleGuard.tsx — Role-Based Access Wrapper
 * - Restricts access based on user role
 * - Uses localStorage to retrieve role
 * - Renders fallback 403 UI if unauthorized
 */

const RoleGuard = ({ children, allowedRoles }: RoleGuardProps) => {
  const userStr = localStorage.getItem('user')

  if (!userStr) {
    return <Navigate to="/login" replace />
  }

  try {
    const user: {
      username: string
      role: 'admin' | 'user' | 'staff' | 'guest'
    } = JSON.parse(userStr)

    const hasAccess = allowedRoles.includes(user.role)

    if (!hasAccess) {
      return (
        <div className="min-h-screen flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-2xl font-semibold text-red-600">
              403 | Access Denied
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              บัญชีของคุณไม่มีสิทธิ์เข้าถึงหน้านี้ กรุณาติดต่อผู้ดูแลระบบ
            </p>
          </div>
        </div>
      )
    }

    return <>{children}</>
  } catch (error) {
    console.error('[RoleGuard Error]', error)
    return <Navigate to="/login" replace />
  }
}

export default RoleGuard