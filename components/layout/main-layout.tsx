import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PropsWithChildren } from "react";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
