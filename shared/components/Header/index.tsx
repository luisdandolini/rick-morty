import Image from "next/image";
import { buttonStyles } from "../ui/Button";
import Logo from "@/public/logo.webp";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";

export function Header() {
  return (
    <header className="container-app flex items-end justify-between mt-8 mb-4 md:mt-16 md:mb-8">
      <Link
        href={"/"}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <Image
          src={Logo}
          quality={100}
          alt="Logo Rick & Morty"
          className="w-25 md:w-55 h-auto"
        />
      </Link>

      <Link href="/favorites" className={buttonStyles("primary")}>
        <CiHeart className="size-5.5" aria-hidden />
        Lista de favoritos
      </Link>
    </header>
  );
}
