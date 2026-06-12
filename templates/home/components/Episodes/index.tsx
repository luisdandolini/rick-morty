"use client";

import { buttonStyles } from "@/shared/components/ui/Button";
import Link from "next/link";
import { PiSquaresFour } from "react-icons/pi";
import { LoadingState } from "@/shared/components/LoadingState";
import { ErrorState } from "@/shared/components/ErrorState";
import { EmptyState } from "@/shared/components/EmptyState";
import { EpisodesCard } from "@/features/episodes/components/EpisodesCard";
import { useEpisodes } from "@/features/episodes/hooks/useEpisodes";

export function Episodes() {
  const { data, isLoading, isError } = useEpisodes();
  const episodes = data?.results ?? [];
  const hasEpisodes = episodes.length > 0;

  return (
    <section className="my-16 container-app">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold">Episódios</h2>

        <Link href="/favorites" className={buttonStyles("primary")}>
          <PiSquaresFour className="size-5.5" aria-hidden />
          Ver todos
        </Link>
      </div>

      {isLoading && <LoadingState text="episódios" />}

      {isError && <ErrorState text="episódios" />}

      {!isLoading && !isError && !hasEpisodes && <EmptyState text="episódio" />}

      {hasEpisodes && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {episodes?.slice(0, 5).map((episode) => (
            <EpisodesCard key={episode.id} episode={episode} />
          ))}
        </div>
      )}
    </section>
  );
}
