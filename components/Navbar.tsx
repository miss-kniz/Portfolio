"use client";

import Button from "./ui/Button";
import { useState, useEffect, RefObject } from "react";

export type NavbarProps = {
  sectionRefs: Record<string, RefObject<HTMLElement | null>>;
  portfolioForJob?: boolean;
};

export default function Navbar({ sectionRefs, portfolioForJob = true }: NavbarProps) {
  const navItems = [
    "Home",
    "About",
    "Projects",
    portfolioForJob ? "Skills" : "Services",
  ];
  const [activeNav, setActiveNav] = useState("Home"); // Track active link

  // Scroll to section smoothly
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // adjust for navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Update active nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "Home";

      for (const [name, ref] of Object.entries(sectionRefs)) {
        const el = ref.current;
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        const offset = 100; // tweak for navbar height
        if (top - offset <= 0) {
          current = name;
        }
      }

      setActiveNav(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return (
    <header className="fixed top-0 z-50 bg-background/30 backdrop-blur-sm w-full border-b border-gray-100 shadow-sm">
      <div className="container mx-auto  px-4 py-3 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <button
          onClick={() => {
            scrollTo("home");
            setActiveNav("Home");
          }}
          className="text-xl font-bold tracking-tight"
        >
          Mehak
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-colors ${
                activeNav === item
                  ? "glass-btn text-foreground border border-gray-200"
                  : "text-foreground  font-medium hover:bg-primary-light hover:text-primary"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <Button onClick={() => scrollTo("contact")} variant="primary">
          Contact
        </Button>
      </div>
    </header>
  );
}
