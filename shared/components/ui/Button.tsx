import { ButtonHTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

export function buttonStyles(
  variant: ButtonVariant = "primary",
  className?: string
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-4xl px-1.5 py-1 text-xs md:text-sm font-normal transition-colors h-3.5 md:h-8",
    "disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
    {
      "bg-brand text-white hover:opacity-90": variant === "primary",
      "bg-foreground/10 text-foreground hover:bg-foreground/20":
        variant === "secondary",
      "text-foreground hover:bg-foreground/10": variant === "ghost",
    },
    className
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  className,
  variant = "primary",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={buttonStyles(variant, className)} {...props}>
      {children}
    </button>
  );
}
