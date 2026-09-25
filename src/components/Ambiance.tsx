"use client";

import React, { useState } from "react";
import { AMBIANCE_ZONES } from "@/data/restaurantData";
import { Clock, Sparkles, Check, ArrowRight } from "lucide-react";

export default function Ambiance() {
  const [activeZoneId, setActiveZoneId] = useState<string>("day-bar");
  const activeZone =
    AMBIANCE_ZONES.find((z) => z.id === activeZoneId) || AMBIANCE_ZONES[0];

  return (
    <section id="ambiance" className="py-20 sm:py-28 bg-[#FAF7F2] text-espresso-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Narrative */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.25em] uppercase text-champagne-600 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Space & Architecture</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-espresso-950 tracking-tight text-balance">
            An Unhurried Sanctuary Sculpted in Stone
          </h2>

          <p className="mt-4 sm:mt-5 text-espresso-700/85 text-sm sm:text-base leading-relaxed">
            Conceived as an antidote to urban rush, ZOA brings together raw Jodhpur sandstone,
            flowing organic lines, and natural sunlight. Whether you are savoring a morning
            pour-over or gathering under starry twilight, every corner is designed for calm,
            conversation, and mindful culinary indulgence.
          </p>
        </div>

        {/* Zone Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {AMBIANCE_ZONES.map((zone) => {
            const isSelected = zone.id === activeZoneId;
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => setActiveZoneId(zone.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isSelected
                    ? "bg-espresso-900 text-sand-50 shadow-md scale-100 ring-2 ring-espresso-900/20"
                    : "bg-sand-200/70 hover:bg-sand-300 text-espresso-800"
                }`}
              >
                {zone.name}
              </button>
            );
          })}
        </div>

        {/* Featured Zone Showcase Card */}
        <div className="glass-card rounded-3xl overflow-hidden border border-sand-300 shadow-xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Image Preview with overlay badge */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[300px] overflow-hidden group">
              <img
                src={activeZone.image}
                alt={activeZone.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent lg:hidden" />

              {/* Best Time Floating Pill */}
              <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-espresso-950/80 backdrop-blur-md text-sand-100 text-xs font-medium border border-sand-400/20">
                <Clock className="w-3.5 h-3.5 text-champagne-400" />
                <span>Prime Hours: {activeZone.bestTime}</span>
              </div>
            </div>

            {/* Zone Details */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-sand-50/90">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-champagne-600 block mb-1">
                  {activeZone.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-espresso-950 mb-3">
                  {activeZone.name}
                </h3>
                <p className="text-espresso-700 text-sm leading-relaxed mb-6 font-light">
                  {activeZone.description}
                </p>

                {/* Atmosphere Tag */}
                <div className="mb-6 p-3.5 rounded-xl bg-sand-200/50 border border-sand-300/60">
                  <span className="text-[11px] uppercase tracking-wider text-sand-700 font-semibold block mb-0.5">
                    Spatial Vibe
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-espresso-900">
                    {activeZone.atmosphere}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2.5">
                  <span className="text-xs uppercase tracking-wider text-espresso-500 font-semibold block mb-1">
                    Design Highlights
                  </span>
                  {activeZone.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-espresso-800">
                      <div className="w-4 h-4 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link to Reserve this zone */}
              <div className="mt-8 pt-6 border-t border-sand-200">
                <a
                  href={`#reserve`}
                  className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-espresso-950 hover:text-champagne-600 transition-colors group"
                >
                  <span>Request seating in {activeZone.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Card Atmospheric Mini Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {AMBIANCE_ZONES.map((zone) => (
            <div
              key={zone.id}
              onClick={() => setActiveZoneId(zone.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                zone.id === activeZoneId
                  ? "bg-sand-100 border-champagne-400 shadow-md ring-1 ring-champagne-400"
                  : "bg-white/80 border-sand-200 hover:border-sand-300 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-serif text-lg font-medium text-espresso-950">
                  {zone.name}
                </h4>
                <span className="text-[11px] text-sand-600 font-mono">
                  {zone.bestTime.split("–")[0].trim()}
                </span>
              </div>
              <p className="text-xs text-espresso-600 line-clamp-2 leading-relaxed">
                {zone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
