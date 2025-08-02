// src/utils/hashPassword.ts

import bcrypt from "bcryptjs";

/**
 * ✅ comparePassword
 * เปรียบเทียบรหัสผ่าน plain text กับ bcrypt hash
 *
 * @param plainPassword - รหัสผ่านจากผู้ใช้
 * @param hashedPassword - รหัสผ่านที่ถูกเข้ารหัส
 * @returns boolean
 */
export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    console.error("[comparePassword Error]", error);
    return false;
  }
};

/**
 * ✅ hashPassword
 * ใช้สำหรับกรณีสร้าง hash สำหรับ admin เท่านั้น ไม่ควรใช้ฝั่ง client
 */
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};
