"use client";

import { CharactersCard } from "@/features/characters/components/CharactersCard";
import { buttonStyles } from "@/shared/components/ui/Button";
import Link from "next/link";
import { PiSquaresFour } from "react-icons/pi";
import { useCharacters } from "@/features/characters/hooks/useCharacters";
import { LoadingState } from "@/shared/components/LoadingState";
import { ErrorState } from "@/shared/components/ErrorState";
import { EmptyState } from "@/shared/components/EmptyState";

export function Characters() {
  const { data, isLoading, isError } = useCharacters();
  const characters = data?.results ?? [];
  const hasCharacters = characters.length > 0;

  return (
    <section className="my-16 container-app">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold">Personagens</h2>

        <Link href="/favorites" className={buttonStyles("primary")}>
          <PiSquaresFour className="size-5.5" aria-hidden />
          Ver todos
        </Link>
      </div>

      {isLoading && <LoadingState text="personagens" />}

      {isError && <ErrorState text="personagens" />}

      {!isLoading && !isError && !hasCharacters && (
        <EmptyState text="personagem" />
      )}

      {hasCharacters && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {characters?.slice(0, 8).map((character) => (
            <CharactersCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </section>
  );
}
