// src/server/Router/admin.ts
// ✅ Admin Router — Protected Routes

import { Router, Request, Response, NextFunction } from 'express'
import { verifyAdminToken } from '@/lib/auth'

const router = Router()

// ─────────────────────────────────────────────
// 🛡️ Middleware: Admin Authentication Guard
// ─────────────────────────────────────────────
const adminAuthGuard = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  const token = authHeader?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token missing' })
  }

  const isValid = verifyAdminToken(token)
  if (!isValid) {
    return res.status(403).json({ error: 'Forbidden: Invalid token' })
  }

  next()
}

// ─────────────────────────────────────────────
// 🔐 Protect All Routes
// ─────────────────────────────────────────────
router.use(adminAuthGuard)

// 📊 GET /admin/stats — Dashboard metrics
router.get('/stats', async (_req, res) => {
  try {
    const stats = {
      users: 125,
      submissions: 80,
      uptime: Math.floor(process.uptime())
    }
    res.status(200).json({ status: 'ok', data: stats })
  } catch (err) {
    console.error('[AdminStats]', err)
    res.status(500).json({ status: 'error', error: 'Stats fetch failed' })
  }
})

// 🧪 GET /admin — Health check
router.get('/', (_req, res) => {
  res.status(200).json({ message: '✅ Admin route is active' })
})

export default router