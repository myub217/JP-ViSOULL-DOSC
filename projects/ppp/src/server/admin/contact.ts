// src/server/admin/contact.ts
// ✅ JPVisualDocs — Admin Contact API (Production Ready)

import { Router, Request, Response } from 'express'
import { verifyAdminToken } from '@/lib/auth'
import { prisma } from '@/lib/prismaClient'

const router = Router()

// 🛡️ Middleware: Admin Authorization
router.use((req: Request, res: Response, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token || !verifyAdminToken(token)) {
    return res.status(403).json({ error: 'Forbidden: Invalid or missing token' })
  }

  next()
})

// 📥 GET /admin/contacts — Fetch all contact submissions
router.get('/contacts', async (_req: Request, res: Response) => {
  try {
    const contacts = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return res.status(200).json({ status: 'ok', data: contacts })
  } catch (error) {
    console.error('[Admin][GET /contacts]', error)
    return res.status(500).json({
      status: 'error',
      error: 'Failed to fetch contact submissions'
    })
  }
})

// 🧪 GET /admin/contacts/health — Health check
router.get('/contacts/health', (_req: Request, res: Response) => {
  return res.status(200).json({ status: 'ok', message: 'Contact admin route is healthy' })
})

export default router