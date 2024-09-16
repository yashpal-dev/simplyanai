import { MainLayout } from "@/components/layout";
import { Hero } from "@/components/section/hero";
import { Services } from "@/components/section";

export default function Home() {
  return (
    <MainLayout>
      <main>
        <Hero />
        <Services />
      </main>
    </MainLayout>
  );
}
