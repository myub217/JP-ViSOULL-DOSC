// ✅ src/utils/cn.ts — Classname Utility (Production Ready)

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * ฟังก์ชันรวมคลาสเนมอย่างปลอดภัย
 * - รองรับค่าจาก clsx (array, conditional, etc.)
 * - merge ซ้ำจาก tailwind อย่างถูกต้อง เช่น "px-2 px-4" => "px-4"
 *
 * @param inputs รายการ class ที่จะรวม
 * @returns string className ที่ merge แล้ว
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}
