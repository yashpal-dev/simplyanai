"use client";
import Link from "next/link";
import { useEffect } from "react";

export function Navbar() {
  useEffect(() => {
    const headerSection = document.querySelector("header");
    const heroSection = document.querySelector("#hero-section");
    console.log(heroSection);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          headerSection?.classList.replace("bg-transparent", "bg-black");
        } else {
          headerSection?.classList.replace("bg-black", "bg-transparent");
        }
      });
    });
    if (heroSection) {
      observer.observe(heroSection);
    }
  });

  return (
    <>
      <header className="w-full h-24 transition-colors ease-linear delay-75 bg-transparent backdrop-blur-lg shadow-sm fixed z-50">
        <div className="h-full flex items-center justify-around">
          <div className="relative w-20 aspect-square flex items-center">
            <h1 className="font-mono text-2xl font-extrabold">Chatwithdoc</h1>
          </div>
          <nav>
            <ul className="flex items-center gap-5">
              {navItems.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item._link} className="text-xl font-bold">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
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
];
