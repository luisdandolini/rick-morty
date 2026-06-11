import { ButtonHTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({
  className,
  variant = "primary",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-4xl px-1.5 py-1 text-sm font-medium transition-colors",
        {
          "bg-brand text-white hover:opacity-90": variant === "primary",
          "bg-foreground/10 text-foreground hover:bg-foreground/20":
            variant === "secondary",
          "text-foreground hover:bg-foreground/10": variant === "ghost",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
