import Image from "next/image";
import HeroImageLight from "@/public/hero/hero-light.webp";
import HeroImageDark from "@/public/hero/hero-dark.webp";
import { ThemeButton } from "@/shared/components/ThemeButton";

export function Hero() {
  return (
    <section className="border-b-2 border-brand">
      <div className="container-app flex flex-col items-center gap-8 py-10 text-center lg:flex-row lg:justify-between lg:gap-0 lg:py-0 lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-99.25 mb-4 lg:mb-6">
            Saiba tudo em um só <span className="text-brand">lugar.</span>
          </h1>
          <p className="text-base mb-8 lg:mb-16">
            Personagens, localizações, episódios e muito mais.
          </p>
          <ThemeButton />
          <p className="text-base text-brand mt-6">
            <span className="block dark:hidden">
              Wubba Lubba Dub Dub! Cuidado com os olhos.
            </span>
            <span className="hidden dark:block">Ai sim, Porr#@%&*</span>
          </p>
        </div>

        <Image
          src={HeroImageLight}
          alt="Rick e Morty"
          className="block dark:hidden w-56 h-56 sm:w-72 sm:h-72 lg:w-108.75 lg:h-108.75"
        />
        <Image
          src={HeroImageDark}
          alt="Rick e Morty"
          className="hidden dark:block w-56 h-56 sm:w-72 sm:h-72 lg:w-auto lg:h-108.75"
        />
      </div>
    </section>
  );
}
