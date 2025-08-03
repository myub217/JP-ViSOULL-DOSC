// ✅ src/api/auth.ts
type Role = "admin" | "user";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

const STORAGE_KEY = "user";

// 🧪 ผู้ใช้จำลอง (Mocked Users)
const mockUsers: AuthUser[] = [
  {
    id: "u001",
    name: "Jane Admin",
    email: "admin@example.com",
    role: "admin"
  },
  {
    id: "u002",
    name: "John User",
    email: "user@example.com",
    role: "user"
  }
];

/**
 * 🔐 login — จำลองการล็อกอิน
 */
export function login(email: string, password: string): Promise<AuthUser> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find((u) => u.email === email.trim());

      if (!user || password !== "password") {
        reject(new Error("อีเมลหรือรหัสผ่านไม่ถูกต้อง"));
        return;
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      resolve(user);
    }, 500); // Simulate delay
  });
}

/**
 * 🔓 logout — เคลียร์ข้อมูลผู้ใช้
 */
export function logout(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * 👤 getUser — ดึงข้อมูลผู้ใช้จาก localStorage
 */
export function getUser(): AuthUser | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const user = JSON.parse(raw) as AuthUser;
    return user;
  } catch (err) {
    console.error("❌ Failed to parse stored user:", err);
    logout();
    return null;
  }
}

/**
 * ✅ isAuthenticated — ตรวจสอบการล็อกอิน
 */
export function isAuthenticated(): boolean {
  return getUser() !== null;
}
