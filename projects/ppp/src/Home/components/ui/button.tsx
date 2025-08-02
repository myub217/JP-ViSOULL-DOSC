// src/Home/components/ui/button.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  to?: string;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary",
  outline:
    "border border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary",
  ghost: "text-primary hover:bg-primary/5 focus-visible:ring-primary",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  asChild = false,
  to,
  loading = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  className,
  children,
  ...props
}) => {
  const composedClass = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        iconLeft && <span className="flex-shrink-0">{iconLeft}</span>
      )}
      <span className="truncate">{children}</span>
      {iconRight && !loading && (
        <span className="flex-shrink-0">{iconRight}</span>
      )}
    </>
  );

  if (asChild && to) {
    return (
      <Link to={to} className={composedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={composedClass}
      disabled={loading || props.disabled}
      {...props}
    >
      {content}
    </button>
  );
};
