// app/components/HeroSection.tsx
"use client";

import Image from "next/image";
import { Star } from "phosphor-react";

export default function HeroSection() {
  return (
    <section className="relative pt-10 pb-20 md:pt-24 md:pb-28">
      {/* Left Curtain */}
      <div className="absolute left-0 md:-top-50 -top-80 w-1/3 h-dvh opacity-30 md:opacity-50">
        <Image
          src="/left-curtain.svg"
          alt="Left decorative curtain"
          fill
          className="object-fill"
        />
      </div>

      {/* Right Curtain */}
      <div className="absolute right-0 md:-top-50 -top-80 w-1/3 h-dvh opacity-30 md:opacity-50">
        <Image
          src="/right-curtain.svg"
          alt="Right decorative curtain"
          fill
          className="object-fill"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 font-medium text-gray-700 shadow-sm">
            <Star weight="fill" className="w-4 h-4 text-yellow-500" />
            <span className="text-[10.5px] md:text-sm">
              Trusted by founders, startups, and growing teams worldwide.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl md:text-7xl font-bold leading-tight">
            Turning <span className="text-primary">Ideas Into</span> High-
            <br />
            Performing <span className="text-primary">Digital Products</span>
          </h1>

          {/* Subheading */}
          <p className="md:text-xl text-gray-600 max-w-3xl">
            I design and build fast, responsive websites and small web apps that
            help startups and businesses convert visitors into customers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-md">
              Book Clarity
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-colors">
              Connect on LinkedIn
            </button>
          </div>

          {/* Section Divider */}
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <div className="w-6 h-px bg-gray-300"></div>
            <span>Some Project Highlights Are Below</span>
            <div className="w-6 h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
