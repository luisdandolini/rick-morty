import { Card } from "@/shared/components/ui/Card";
import { PiPlanetLight } from "react-icons/pi";
import Link from "next/link";
import { buttonStyles } from "@/shared/components/ui/Button";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { cn } from "@/shared/lib/cn";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Location } from "../../types";

interface LocationsCardProps {
  location: Location;
  isFavorite?: boolean;
}

export function LocationsCard({
  location,
  isFavorite = false,
}: LocationsCardProps) {
  return (
    <Card
      variant="secondary"
      className={cn(
        "max-w-36.75 max-h-44 relative",
        "flex flex-col",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg",
        isFavorite && "bg-card-favorite"
      )}
    >
      <PiPlanetLight className="size-12 shrink-0 absolute -top-8 right-12.5" />
      <p className="text-center mt-2">{location.type}</p>
      <p className="text-center text-brand mb-4 truncate">{location.name}</p>

      <div className="flex flex-col items-center justify-between">
        <Link
          href="/favorites"
          className={buttonStyles(isFavorite ? "primary" : "ghost")}
        >
          <HiOutlineInformationCircle className="size-5.5" aria-hidden />
          Saiba mais
        </Link>

        <button className="shrink-0 mt-3.5" aria-label="Favoritar">
          {isFavorite ? (
            <IoMdHeart className="size-7 text-brand" aria-hidden />
          ) : (
            <IoMdHeartEmpty className="size-7 text-brand" aria-hidden />
          )}
        </button>
      </div>
    </Card>
  );
}
