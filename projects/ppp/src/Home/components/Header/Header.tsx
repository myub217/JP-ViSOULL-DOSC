// ✅ src/Home/components/Header/Header.tsx — Production-Ready Header (JP Visual & Docs)

import { FC } from "react";
import Logo from "./ui/Logo";

const Header: FC = () => {
  return (
    <header
      role="banner"
      className="sticky top-0 z-50 w-full border-b border-base-200 bg-base-100/80 backdrop-blur shadow-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* 🔰 JP Visual & Docs Logo */}
        <Logo />

        {/* 🔧 Dev Credit / Future Utility (Responsive-safe) */}
        <div className="flex items-center gap-4">
          <span className="hidden text-xs text-muted-foreground sm:inline-block">
            Dev by เจ้าป่า
          </span>

          {/* 🚧 Reserved space for future buttons */}
          {/* <ThemeToggle /> */}
          {/* <MobileMenuToggle /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;