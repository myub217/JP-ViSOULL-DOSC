// src/Home/Login.tsx

import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { users } from '@/data/users'
import { comparePassword } from '@/utils/hashPassword'
import { AlertCircle } from 'lucide-react'

/**
 * ✅ Login.tsx — Production Ready Login Page
 * - Static mock auth with role-based redirect
 * - Password hashing supported via bcrypt
 */

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const user = users.find(u => u.username === username.trim())
    if (!user) {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
      return
    }

    const match = await comparePassword(password.trim(), user.passwordHash)
    if (!match) {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
      return
    }

    localStorage.setItem('user', JSON.stringify(user))
    navigate(user.role === 'admin' ? '/admin' : '/secret')
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm space-y-5 p-6 bg-base-100 text-base-content rounded-2xl shadow-xl"
        aria-label="login-form"
      >
        <h2 className="text-2xl font-bold text-center text-primary">เข้าสู่ระบบ</h2>

        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="ชื่อผู้ใช้"
          autoComplete="username"
          required
          className="input input-bordered w-full"
        />

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="รหัสผ่าน"
          autoComplete="current-password"
          required
          className="input input-bordered w-full"
        />

        {error && (
          <div className="flex items-center text-sm text-error gap-2">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <button type="submit" className="btn btn-primary w-full">
          เข้าสู่ระบบ
        </button>
      </form>
    </main>
  )
}

export default Login