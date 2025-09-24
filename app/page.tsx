import { MainLayout } from "@/components/layout";
import { Hero } from "@/components/section";
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
