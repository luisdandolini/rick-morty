import { Card } from "@/shared/components/ui/Card";
import Image from "next/image";
import { CiWavePulse1 } from "react-icons/ci";
import { PiAlienLight, PiPlanetLight } from "react-icons/pi";
import Link from "next/link";
import { buttonStyles } from "@/shared/components/ui/Button";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { cn } from "@/shared/lib/cn";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Character } from "../../types";

interface CharactersCardProps {
  character: Character;
  isFavorite?: boolean;
}

export function CharactersCard({
  character,
  isFavorite = false,
}: CharactersCardProps) {
  return (
    <Card
      className={cn(
        "w-full flex flex-col transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg",
        isFavorite && "bg-card-favorite"
      )}
    >
      <Image
        src={character.image}
        alt={character.name}
        width={262}
        height={200}
        className="w-full h-50 rounded-2xl mb-4 object-cover"
      />

      <div className="flex justify-between items-start gap-3 mb-6">
        <div className="min-w-0">
          <p className="font-bold mb-4 truncate">{character.name}</p>

          <div className="flex items-center gap-1 mb-1">
            <CiWavePulse1
              className={cn("size-4 shrink-0", {
                "text-brand-secondary": character.status === "Alive",
                "text-red-500": character.status === "Dead",
                "text-gray-400": character.status === "unknown",
              })}
            />
            <p className="truncate">{character.status}</p>
          </div>

          <div className="flex items-center gap-1 mb-1">
            <PiAlienLight className="size-4 shrink-0" />
            <p className="truncate">{character.species}</p>
          </div>

          <div className="flex items-center gap-1">
            <PiPlanetLight className="size-4 shrink-0" />
            <p className="line-clamp-2">{character.location.name}</p>
          </div>
        </div>

        <button className="shrink-0" aria-label="Favoritar">
          {isFavorite ? (
            <IoMdHeart className="size-12 text-brand" aria-hidden />
          ) : (
            <IoMdHeartEmpty className="size-12 text-brand" aria-hidden />
          )}
        </button>
      </div>

      <div className="mt-auto flex justify-end">
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
