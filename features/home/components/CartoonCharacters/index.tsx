import { CartoonCharactersCard } from "../CartoonCharactersCard";
import { buttonStyles } from "@/shared/components/ui/Button";
import Link from "next/link";
import { PiSquaresFour } from "react-icons/pi";

export function CartoonCharacters() {
  return (
    <section className="my-16 container-app">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold">Personagens</h2>
        <Link href="/favorites" className={buttonStyles("primary")}>
          <PiSquaresFour className="size-5.5" aria-hidden />
          Ver todos
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <CartoonCharactersCard isFavorite />
        <CartoonCharactersCard />
        <CartoonCharactersCard />
        <CartoonCharactersCard />
      </div>
    </section>
  );
}
