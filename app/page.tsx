import { Episodes } from "@/features/home/components/Episodes";
import { Characters } from "@/features/home/components/Characters";
import { Hero } from "@/features/home/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Characters />
      <Episodes />
    </main>
  );
}
