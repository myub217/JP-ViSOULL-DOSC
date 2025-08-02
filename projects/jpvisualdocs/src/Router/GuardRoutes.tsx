// src/Router/GuardRoutes.tsx

import { Outlet, Navigate, useLocation } from 'react-router-dom'

/**
 * ✅ GuardRoutes.tsx — Authenticated Route Wrapper
 * - Checks localStorage for valid `user`
 * - Redirects to login if missing or malformed
 * - Preserves location for post-login redirect
 */

const GuardRoutes = () => {
  const location = useLocation()
  const userStr = localStorage.getItem('user')

  if (!userStr) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  try {
    const user = JSON.parse(userStr)
    if (!user || typeof user.username !== 'string') {
      return <Navigate to="/login" replace state={{ from: location }} />
    }

    return <Outlet />
  } catch (error) {
    console.error('[GuardRoutes Error]', error)
    return <Navigate to="/login" replace state={{ from: location }} />
  }
}

export default GuardRoutes