import { HiOutlineExclamationCircle } from "react-icons/hi2";

interface ErrorStateProps {
  text: string;
}

export function ErrorState({ text }: ErrorStateProps) {
  return (
    <div className="h-60 rounded-2xl bg-card flex flex-col items-center justify-centergap-3">
      <HiOutlineExclamationCircle className="size-10 text-red-500" />

      <p className="font-semibold">Não foi possível carregar os {text}</p>

      <p className="text-sm text-foreground/60">Tente novamente mais tarde.</p>
    </div>
  );
}
