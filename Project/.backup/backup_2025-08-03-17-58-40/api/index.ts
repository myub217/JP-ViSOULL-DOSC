import { Router } from "express";

// ตัวอย่างนำเข้า route ย่อย (ถ้ามี)
import userRoutes from "./user";
import authRoutes from "./auth";

const router = Router();

// กำหนด prefix สำหรับแต่ละ route ย่อย
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

// ตัวอย่าง route เบื้องต้น
router.get("/status", (_, res) => {
  res.json({ status: "API is running", timestamp: new Date().toISOString() });
});

export default router;