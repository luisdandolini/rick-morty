import { Card } from "@/shared/components/ui/Card";
import Image from "next/image";
import HeroImageLight from "@/public/hero/hero-light.webp";
import { CiWavePulse1 } from "react-icons/ci";
import { PiAlienLight, PiPlanetLight } from "react-icons/pi";
import Link from "next/link";
import { buttonStyles } from "@/shared/components/ui/Button";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { cn } from "@/shared/lib/cn";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

export function CartoonCharactersCard({
  isFavorite = false,
}: {
  isFavorite?: boolean;
}) {
  return (
    <Card className={cn("w-full", isFavorite && "bg-card-favorite")}>
      <Image
        src={HeroImageLight}
        alt="Rick e Morty"
        className="w-65.5 h-50 rounded-2xl mb-4"
      />
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="font-bold mb-4">Rick Sanchez</p>
          <div className="flex items-center gap-1">
            <CiWavePulse1 className="size-4 text-brand-secondary" />
            <p>Vivo</p>
          </div>
          <div className="flex items-center gap-1">
            <PiAlienLight className="size-4" />
            <p>Humano</p>
          </div>
          <div className="flex items-center gap-1">
            <PiPlanetLight className="size-4" />
            <p>Earth (C-137)</p>
          </div>
        </div>
        {isFavorite ? (
          <IoMdHeart className="size-12 text-brand" aria-hidden />
        ) : (
          <IoMdHeartEmpty className="size-12 text-brand" aria-hidden />
        )}
      </div>

      <div className="flex justify-end">
        <Link
          href="/favorites"
          className={buttonStyles(isFavorite ? "primary" : "ghost")}
        >
          <HiOutlineInformationCircle className="size-5.5" aria-hidden />
          Saiba mais
        </Link>
      </div>
    </Card>
  );
}
