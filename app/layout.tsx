import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin-ext"], weight: "200" });

export const metadata: Metadata = {
  title: "Chatwithdoc: An ultimate Chat App",
  description:
    "Chatwithdoc is a realtime question answering app, where you can upload a file and ask questions related to the uploaded document.",
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
