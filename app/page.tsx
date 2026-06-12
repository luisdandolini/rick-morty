import { Episodes } from "@/templates/home/components/Episodes";
import { Characters } from "@/templates/home/components/Characters";
import { Hero } from "@/templates/home/components/Hero";
import { Locations } from "@/templates/home/components/Locations";

export default function Home() {
  return (
    <main>
      <Hero />
      <Characters />
      <Episodes />
      <Locations />
    </main>
  );
}
