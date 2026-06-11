import { cn } from "@/shared/lib/cn";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary";
}

export function Card({
  className,
  variant = "primary",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-card p-4 w-full",
        {
          "rounded-lg": variant === "primary",
          "rounded-2xl": variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
