import { Router, Request, Response } from "express";

const router = Router();

// ตัวอย่างข้อมูลผู้ใช้จำลอง
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

// GET /api/user — ดึงรายชื่อผู้ใช้ทั้งหมด
router.get("/", (_, res: Response) => {
  res.json({ success: true, users });
});

// GET /api/user/:id — ดึงข้อมูลผู้ใช้ตาม id
router.get("/:id", (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  res.json({ success: true, user });
});

export default router;
