"use client";
import { Button } from "../ui/Button";
import { useThemeStore } from "@/shared/store/useThemeStore";
import { PiMoonLight } from "react-icons/pi";
import { PiSun } from "react-icons/pi";

export function ThemeButton() {
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <div
      role="group"
      aria-label="Tema"
      className="inline-flex items-center gap-4"
    >
      <Button
        variant="ghost"
        onClick={() => setTheme("dark")}
        className="rounded-full dark:bg-brand dark:text-white dark:hover:bg-brand/90"
      >
        <PiMoonLight className="size-5" aria-hidden />
        Escuro
      </Button>

      <Button
        variant="ghost"
        onClick={() => setTheme("light")}
        className="rounded-full bg-brand text-white hover:bg-brand/90 dark:bg-foreground/10 dark:text-foreground dark:hover:bg-foreground/5"
      >
        <PiSun className="size-5" aria-hidden />
        Claro
      </Button>
    </div>
  );
}
