import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClassName?: string;
}

export function Input({
  className,
  containerClassName,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 h-12 px-4 rounded-4xl",
        "border border-border",
        "focus-within:ring-2 focus-within:ring-brand",
        containerClassName
      )}
    >
      {leftIcon}

      <input
        className={cn(
          "flex-1 bg-transparent outline-none text-foreground placeholder:text-foreground",
          className
        )}
        {...props}
      />

      {rightIcon}
    </div>
  );
}
