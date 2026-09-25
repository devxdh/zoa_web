"use client";

import React from "react";
import { SPACES_DATA } from "@/data/restaurantData";

export default function Ambiance() {
  return (
    <section id="space" className="py-24 sm:py-32 bg-[#FAF8F5] text-espresso-900 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Editorial Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-20 sm:mb-28">
          <span className="text-xs uppercase tracking-[0.28em] font-sans font-medium text-champagne-600 block mb-3">
            The Philosophy of Space
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-espresso-950 tracking-tight leading-[1.2] text-balance">
            An Unhurried Sanctuary Sculpted in Sandstone
          </h2>

          <p className="mt-6 text-espresso-700/85 text-sm sm:text-base leading-relaxed font-light">
            Conceived as an architectural retreat from urban rush, ZOA balances raw local stone,
            flowing organic lines, and natural desert light. Whether meeting over a morning
            pour-over or lingering under starry night skies, the space invites you to slow down.
          </p>
        </div>

        {/* 3 Spaces Showcase - Magazine Editorial Layout */}
        <div className="space-y-20 sm:space-y-28">
          {SPACES_DATA.map((space, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={space.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-center ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-7 overflow-hidden rounded-2xl bg-sand-200 aspect-[16/11] sm:aspect-[16/10] shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${
                    isReversed ? "lg:col-start-6" : ""
                  }`}
                >
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
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
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-espresso-950 mb-4 tracking-tight">
                    {space.title}
                  </h3>
                  <p className="text-espresso-700/90 text-sm leading-relaxed font-light mb-6">
                    {space.description}
                  </p>

                  <div className="pt-4 border-t border-sand-300/50 flex items-center justify-between text-xs text-sand-700 font-sans">
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
