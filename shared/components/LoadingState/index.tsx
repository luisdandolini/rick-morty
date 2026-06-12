import { RiLoader4Line } from "react-icons/ri";

interface LoadingStateProps {
  text: string;
}

export function LoadingState({ text }: LoadingStateProps) {
  return (
    <div className="h-60 flex flex-col items-center justify-center gap-4 rounded-2xl">
      <RiLoader4Line className="size-10 animate-spin text-brand" />

      <p className="text-foreground/60">Carregando {text}...</p>
    </div>
  );
}
