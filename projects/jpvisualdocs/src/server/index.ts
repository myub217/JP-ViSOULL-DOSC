// src/server/index.ts
// ✅ JPVisualDocs — Express Server (Production Ready)

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import adminRouter from './Router/admin'
import contactAdminRouter from './admin/contact'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// ─────────────────────────────────────────────
// 🔒 Security Middleware
// ─────────────────────────────────────────────
app.use(helmet())

// ─────────────────────────────────────────────
// 🌐 CORS + JSON Body Parser
// ─────────────────────────────────────────────
app.use(cors({ origin: '*' }))
app.use(express.json())

// ─────────────────────────────────────────────
// 📈 Logging
// ─────────────────────────────────────────────
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'))
}

// ─────────────────────────────────────────────
// 🛣️ Routes
// ─────────────────────────────────────────────
app.use('/admin', adminRouter)
app.use('/admin/contacts', contactAdminRouter)

// ─────────────────────────────────────────────
// 🩺 Health Check
// ─────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() })
})

// ─────────────────────────────────────────────
// 🚀 Start Server
// ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ JPVisualDocs API running on http://localhost:${PORT}`)
})