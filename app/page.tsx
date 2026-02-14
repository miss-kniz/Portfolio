import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#0D0D0D]">
      <Navbar />

      <HeroSection />

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4].map((id) => (
              <div
                key={id}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video w-full bg-gray-100">
                  <Image
                    src={`/projects/${id}.webp`}
                    alt={`Project ${id} preview`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (minimal) */}
      <footer className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Mehak. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
