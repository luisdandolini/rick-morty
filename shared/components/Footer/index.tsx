"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.webp";
import { Button } from "../ui/Button";
import { PiArrowCircleUpThin } from "react-icons/pi";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="container-app flex items-center justify-between mt-8 md:mt-16 pb-12 md:pb-48">
      <Link
        href={"/"}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <Image
          src={Logo}
          quality={100}
          alt="Logo Rick & Morty"
          className="w-25 md:w-40 h-auto"
        />
      </Link>

      <Button variant="ghost" onClick={scrollToTop} className="group gap-2">
        <span className="group-hover:text-brand transition-colors text-base">
          Voltar ao topo
        </span>
        <PiArrowCircleUpThin className="size-11" />
      </Button>
    </footer>
  );
}
