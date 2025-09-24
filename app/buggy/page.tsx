import { BuggyContainer } from "@/components/section/";
import React from "react";
import { Monitor, Smartphone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buggy: Code fixer",
  description:
    "Buggy is an AI-powered code fixer that helps you debug and improve your code instantly. Paste your code, select a language, and let Buggy suggest fixes and improvements.",
};

export default function Page() {
  return (
    <>
      {/* Mobile/Tablet Message */}
      <div className="lg:hidden min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <Monitor className="w-8 h-8 text-primary" />
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-light text-foreground">
              Desktop{" "}
              <span className="font-mono font-bold text-primary">Required</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              For the best coding experience, please use a larger screen or
              desktop device.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              <span>Mobile</span>
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              <span>Desktop</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <BuggyContainer />
      </div>
    </>
  );
}
