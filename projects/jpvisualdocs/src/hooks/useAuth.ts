// src/hooks/useAuth.ts
// ✅ Production-Ready Auth Hook with Role Awareness (Admin/User)

import { useEffect, useState, useCallback } from 'react'
import { jwtDecode } from 'jwt-decode'

type Role = 'user' | 'admin'

interface DecodedToken {
  exp: number
  role?: Role
  email?: string
}

interface AuthState {
  user: DecodedToken | null
  isAuthenticated: boolean
  isAdmin: boolean
  loading: boolean
}

export const useAuth = (): AuthState & { logout: () => void } => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isAdmin: false,
    loading: true
  })

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    setAuthState({
      user: null,
      isAuthenticated: false,
      isAdmin: false,
      loading: false
    })
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      setAuthState((prev) => ({ ...prev, loading: false }))
      return
    }

    try {
      const decoded: DecodedToken = jwtDecode(token)
      const isExpired = decoded.exp * 1000 < Date.now()

      if (isExpired) {
        logout()
      } else {
        setAuthState({
          user: decoded,
          isAuthenticated: true,
          isAdmin: decoded.role === 'admin',
          loading: false
        })
      }
    } catch (err) {
      console.error('[useAuth] Token decode failed:', err)
      logout()
    }
  }, [logout])

  return { ...authState, logout }
}