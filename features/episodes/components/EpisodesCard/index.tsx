import { Card } from "@/shared/components/ui/Card";
import { PiMonitorPlay } from "react-icons/pi";
import Link from "next/link";
import { buttonStyles } from "@/shared/components/ui/Button";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { cn } from "@/shared/lib/cn";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Episode } from "../../types";

interface EpisodesCardProps {
  episode: Episode;
  isFavorite?: boolean;
}

export function EpisodesCard({
  episode,
  isFavorite = false,
}: EpisodesCardProps) {
  return (
    <Card
      variant="secondary"
      className={cn(
        "w-full min-h-24",
        "flex flex-col",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg",
        isFavorite && "bg-card-favorite"
      )}
    >
      <div className="flex items-center gap-3">
        <PiMonitorPlay className="size-6 shrink-0" aria-hidden />

        <div className="flex items-center gap-1 min-w-0 flex-1">
          <p className="truncate">{episode.name}</p>
          <span className="shrink-0">| {episode.episode}</span>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between pt-4">
        <Link
          href="/favorites"
          className={buttonStyles(isFavorite ? "primary" : "ghost")}
        >
          <HiOutlineInformationCircle className="size-5.5" aria-hidden />
          Saiba mais
        </Link>

        <button className="shrink-0" aria-label="Favoritar">
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
