// src/Home/LogoutButton.tsx
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/Home/components/ui/button"; // ✅ Case-sensitive & correct path
import { LogOut } from "lucide-react";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    if (typeof logout !== "function") return;

    if (window.confirm("คุณต้องการออกจากระบบหรือไม่?")) {
      logout();
    }
  };

  return (
    <Button
      variant="destructive"
      onClick={handleLogout}
      aria-label="logout"
      title="ออกจากระบบ"
      className="flex items-center gap-2"
    >
      <LogOut size={16} className="opacity-70" />
      ออกจากระบบ
    </Button>
  );
};

export default LogoutButton;
