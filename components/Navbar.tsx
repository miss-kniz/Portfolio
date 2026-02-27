"use client";

import Button from "./ui/Button";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (!el) return;

    const yOffset = -80; // adjust for navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const navItems = ["Home", "Services", "Projects", "About"];

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff00] backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="text-xl font-bold tracking-tight"
        >
          Mehak
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="font-medium hover:text-primary transition-colors"
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
