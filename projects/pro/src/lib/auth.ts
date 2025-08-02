// src/lib/auth.ts
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "insecure-dev-secret";

export function verifyAdminToken(token: string): boolean {
  try {
    const payload = jwt.verify(token, JWT_SECRET) as { role?: string };
    return payload?.role === "admin";
  } catch (err) {
    console.error("[verifyAdminToken]", err);
    return false;
  }
}
