import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#ffffff00] backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Mehak
        </Link>

        <nav className="hidden md:flex space-x-8">
          {["Home", "Services", "Projects", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="font-medium hover:text-[#7B2CBF] transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="px-5 py-2.5 bg-[#7B2CBF] text-white rounded-full font-medium hover:bg-[#4A148C] transition-colors shadow-sm"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
