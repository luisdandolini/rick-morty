import { HiOutlineSearch } from "react-icons/hi";

export function CharactersEmpty() {
  return (
    <div className="h-60 flex flex-col items-center justify-center gap-3 rounded-2xl">
      <HiOutlineSearch className="size-10 text-brand" />

      <p className="font-semibold">Nenhum personagem encontrado</p>

      <p className="text-sm text-foreground/60">
        Tente realizar uma nova busca.
      </p>
    </div>
  );
}
