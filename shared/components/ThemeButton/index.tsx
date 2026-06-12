"use client";
import Image from "next/image";
import { Button } from "../ui/Button";
import { useThemeStore } from "@/shared/store/useThemeStore";
import MoonDark from "@/public/icons/moon-dark.svg";
import MoonLight from "@/public/icons/moon-light.svg";
import SunLight from "@/public/icons/sun-light.svg";

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
        className="px-3 py-1.5 rounded-full dark:bg-brand dark:text-white dark:hover:bg-brand/90"
      >
        <Image src={MoonLight} alt="" className="w-5 h-5 block dark:hidden" />
        <Image src={MoonDark} alt="" className="w-5 h-5 hidden dark:block" />
        Escuro
      </Button>

      <Button
        variant="ghost"
        onClick={() => setTheme("light")}
        className="px-3 py-1.5 rounded-full bg-brand text-white hover:bg-brand/90 dark:bg-foreground/10 dark:text-foreground dark:hover:bg-foreground/5"
      >
        <Image src={SunLight} alt="" className="w-5 h-5" />
        Claro
      </Button>
    </div>
  );
}
