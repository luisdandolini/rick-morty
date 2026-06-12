"use client";

import { buttonStyles } from "@/shared/components/ui/Button";
import Link from "next/link";
import { PiSquaresFour } from "react-icons/pi";
import { LoadingState } from "@/shared/components/LoadingState";
import { ErrorState } from "@/shared/components/ErrorState";
import { EmptyState } from "@/shared/components/EmptyState";
import { useLocations } from "@/features/locations/hooks/useLocations";
import { LocationsCard } from "@/features/locations/components/LocationsCard";

export function Locations() {
  const { data, isLoading, isError } = useLocations();
  const locations = data?.results ?? [];
  const hasLocations = locations.length > 0;

  return (
    <section className="my-16 container-app">
      <div className="flex items-center gap-4 mb-14">
        <h2 className="text-2xl font-bold">Localizações</h2>

        <Link href="/favorites" className={buttonStyles("primary")}>
          <PiSquaresFour className="size-5.5" aria-hidden />
          Ver todos
        </Link>
      </div>

      {isLoading && <LoadingState text="localizações" />}

      {isError && <ErrorState text="localizações" />}

      {!isLoading && !isError && !hasLocations && (
        <EmptyState text="localização" />
      )}

      {hasLocations && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
          {locations?.slice(0, 7).map((location) => (
            <LocationsCard key={location.id} location={location} />
          ))}
        </div>
      )}
    </section>
  );
}
