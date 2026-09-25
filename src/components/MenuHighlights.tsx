"use client";

import React, { useState } from "react";
import { MENU_ITEMS, MENU_CATEGORIES, RESTAURANT_INFO } from "@/data/restaurantData";
import { ArrowUpRight } from "lucide-react";

export default function MenuHighlights() {
  const [activeTab, setActiveTab] = useState<string>("coffee");

  return (
    <section id="menu" className="py-12 sm:py-20 bg-[#F6F2EA]/60 text-espresso-900 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.28em] font-sans font-medium text-champagne-600 block mb-2.5">
            Culinary Craft
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-espresso-950 tracking-tight leading-[1.2] text-balance">
            Curated Menu & Daily Brews
          </h2>

          <p className="mt-4 text-espresso-700/85 text-sm sm:text-base leading-relaxed font-light">
            Rooted in artisanal integrity. From slow-steeped single-origin Arabicas to 72-hour
            fermented Neapolitan doughs and delicate patisserie.
          </p>
        </div>

        {/* Intuitive Tactile Category Pill Switcher (Full 4-column dock on mobile, no scroll cut-off) */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="w-full max-w-xl mx-auto grid grid-cols-4 p-1 sm:p-1.5 rounded-full bg-sand-200/90 border border-sand-300/80 shadow-inner">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`py-2 sm:py-2.5 px-1 sm:px-4 rounded-full text-[11px] sm:text-xs tracking-wider uppercase font-medium transition-all duration-200 text-center flex items-center justify-center active:scale-95 ${
                    isActive
                      ? "bg-espresso-950 text-sand-50 shadow-md font-semibold"
                      : "text-espresso-800 hover:text-espresso-950 hover:bg-sand-300/60"
                  }`}
                >
                  <span className="sm:hidden">{cat.label}</span>
                  <span className="hidden sm:inline">{cat.fullLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stable Menu Container with Zero Lag / Zero Layout Shift */}
        <div className="min-h-[300px] sm:min-h-[360px]">
          {MENU_CATEGORIES.map((category) => {
            const isCategoryActive = activeTab === category.id;
            const items = MENU_ITEMS.filter((item) => item.category === category.id);

            return (
              <div
                key={category.id}
                className={
                  isCategoryActive
                    ? "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-10 animate-fade-in"
                    : "hidden"
                }
              >
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between pb-5 border-b border-sand-300/50 group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <div className="flex-1 min-w-0 pr-1">
                          <h3 className="font-serif text-base sm:text-lg md:text-xl font-normal text-espresso-950 group-hover:text-champagne-600 transition-colors leading-snug">
                            {item.name}
                            {item.isVeg && (
                              <span
                                className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 ml-2 align-middle -translate-y-[1px]"
                                title="100% Vegetarian"
                              />
                            )}
                          </h3>
                        </div>

                        {/* Provenance Tag */}
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-sand-600 font-sans font-medium shrink-0 whitespace-nowrap pt-1 text-right">
                          {item.provenance}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-espresso-700/85 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Inquiry Links */}
        <div className="mt-12 pt-6 border-t border-sand-300/60 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-700 gap-4">
          <p className="font-light">
            100% vegetarian preparations. Made fresh to order throughout the day.
          </p>

          <div className="flex items-center space-x-6">
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-espresso-900 hover:text-champagne-600 font-medium transition-colors"
            >
              <span>Daily specials on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <span className="text-sand-400">•</span>

            <a
              href={RESTAURANT_INFO.reservationWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-espresso-900 hover:text-champagne-600 font-medium transition-colors"
            >
              <span>Table inquiries via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
