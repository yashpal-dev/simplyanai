"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const headerSection = document.querySelector("header");
    const heroSection = document.querySelector("#hero-section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setIsScrolled(true);
          headerSection?.classList.replace(
            "bg-transparent",
            "bg-background/80"
          );
        } else {
          setIsScrolled(false);
          headerSection?.classList.replace(
            "bg-background/80",
            "bg-transparent"
          );
        }
      });
    });

    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`w-full h-20 transition-all duration-300 ease-out fixed z-50 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg shadow-lg border-b border-border/50"
            : "bg-transparent backdrop-blur-lg"
        }`}
      >
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary-foreground font-mono text-sm font-bold">
                      S
                    </span>
                  </div>
                  <h1 className="font-mono text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Simplyanai
                  </h1>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item._link}
                      className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="#services-section"
                className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-background/95 backdrop-blur-lg border-t border-border/50">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item._link}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/50">
                <Link
                  href="#services-section"
                  className="block w-full text-center px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

const navItems = [
  {
    id: 1,
    name: "Services",
    _link: "#services-section",
  },
  {
    id: 2,
    name: "About",
    _link: "#about-section",
  },
];
