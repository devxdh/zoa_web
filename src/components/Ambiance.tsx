import React from "react";
import Image from "next/image";
import { SPACES_DATA } from "@/data/restaurantData";

export default function Ambiance() {
  return (
    <section id="space" className="pt-6 pb-12 sm:pt-10 sm:pb-20 bg-[#FAF8F5] text-espresso-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Editorial Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.28em] font-sans font-medium text-champagne-600 block mb-2.5">
            The Philosophy of Space
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso-950 tracking-tight leading-[1.2] text-balance">
            Scandinavian Calm Meets Desert Warmth
          </h2>

          <p className="mt-4 text-espresso-700/85 text-sm sm:text-base leading-relaxed font-light">
            Conceived as an architectural dining sanctuary, ZOA blends Scandinavian-inspired minimalism,
            warm native sandstone, and lush open-air landscapes. From quiet daytime coffee rituals to
            intimate evenings inside bespoke private dining suites, each setting invites you to linger.
          </p>
        </div>

        {/* 3 Spaces Showcase - Magazine Editorial Layout */}
        <div className="space-y-12 sm:space-y-16">
          {SPACES_DATA.map((space, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={space.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-7 relative overflow-hidden rounded-2xl bg-sand-200 aspect-[16/10] sm:aspect-[16/9.5] shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${
                    isReversed ? "lg:col-start-6" : ""
                  }`}
                >
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? "lg:col-start-1" : ""
                  }`}
                >
                  <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-champagne-600 mb-2 block">
                    {space.eyebrow}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-espresso-950 mb-3 tracking-tight">
                    {space.title}
                  </h3>
                  <p className="text-espresso-700/90 text-sm leading-relaxed font-light mb-5">
                    {space.description}
                  </p>

                  <div className="pt-3.5 border-t border-sand-300/50 flex items-center justify-between text-xs text-sand-700 font-sans">
                    <span className="uppercase tracking-widest text-[10px] text-sand-500 font-medium">
                      Atmosphere
                    </span>
                    <span className="italic font-serif text-espresso-900 text-sm">
                      {space.atmosphere}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
