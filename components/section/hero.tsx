import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Subtle background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full hero-bg-blur blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full hero-bg-blur blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">
          <div className="space-y-6 sm:space-y-8">
            {/* Brand accent */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full hero-brand-bg backdrop-blur-sm border border-border/50">
              <div className="w-2 h-2 rounded-full hero-brand-dot animate-pulse"></div>
              <span className="text-sm font-mono hero-brand-text">
                Simplyanai
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight tracking-tight hero-text-primary">
              Experience the age of{" "}
              <span className="font-mono font-bold hero-text-accent">AI</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light hero-text-secondary">
              Discover the transformative power of artificial intelligence.
              Unlock possibilities that were once unimaginable.
            </p>
          </div>

          {/* CTA Section */}
          <div className="pt-4 sm:pt-6 space-y-6">
            {/* Primary CTA */}
            <div>
              <Link
                href="#services-section"
                className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-lg hover:shadow-xl border bg-primary text-primary-foreground hover:bg-transparent hover:text-foreground"
              >
                <span>Explore Services</span>
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
              </Link>
            </div>

            {/* Secondary info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm hero-text-muted">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full hero-brand-dot"></div>
                <span>Chat with Documents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full hero-brand-dot"></div>
                <span>Code Bug Fixer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
