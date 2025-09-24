import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./styles/globals.css";

const poppins = Poppins({ subsets: ["latin-ext"], weight: "200" });

export const metadata: Metadata = {
  title: "Simplyanai: A collection of AI services",
  description:
    "An AI powered web app consisting of a range of utilities to make your daily life easier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}

        <Toaster />

        {/* vercel speed analytics */}
        <SpeedInsights />
      </body>
    </html>
  );
}
