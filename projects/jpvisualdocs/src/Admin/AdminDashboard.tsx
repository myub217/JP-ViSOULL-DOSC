// src/Admin/AdminDashboard.tsx
// ✅ Production-Ready Admin Dashboard Component

import { useEffect, useState } from 'react'
import axios from 'axios'
import { formatDate } from '@/lib/utils'

interface Stats {
  users: number
  submissions: number
  uptime: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      setError('Missing authentication token')
      setLoading(false)
      return
    }

    axios
      .get('/api/admin/stats', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setStats(res.data.data)
      })
      .catch((err) => {
        console.error('[AdminDashboard] Failed to fetch stats:', err)
        setError('Failed to load dashboard data')
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="p-4">⏳ Loading dashboard...</div>
  if (error) return <div className="p-4 text-red-600">❌ {error}</div>

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">📊 Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="👤 Users" value={stats?.users ?? 0} />
        <Card title="📄 Submissions" value={stats?.submissions ?? 0} />
        <Card title="⏱️ Uptime" value={`${stats?.uptime ?? 0} sec`} />
      </div>
      <footer className="text-sm text-gray-500 pt-4">
        Last updated: {formatDate(new Date().toISOString())}
      </footer>
    </div>
  )
}

function Card({ title, value }: { title: string; value: number | string }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-100">
      <div className="text-gray-500 text-sm">{title}</div>
      <div className="text-xl font-semibold text-gray-900">{value}</div>
    </div>
  )
}