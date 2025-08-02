// src/lib/utils.ts

// ─────────────────────────────────────────────
// 📦 Utility: CSS Class Combiner (tailwindcx)
// ─────────────────────────────────────────────
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// ─────────────────────────────────────────────
// ✂️ Utility: Truncate text
// ─────────────────────────────────────────────
export function truncate(text: string, maxLength = 120): string {
  return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text
}

// ─────────────────────────────────────────────
// 🔠 Utility: Capitalize first letter
// ─────────────────────────────────────────────
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

// ─────────────────────────────────────────────
// 🗓️ Utility: Format date to Thai locale
// ─────────────────────────────────────────────
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleString('th-TH', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })
}