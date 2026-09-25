"use client";

import React, { useState } from "react";
import { MENU_ITEMS, MENU_CATEGORIES, RESTAURANT_INFO } from "@/data/restaurantData";
import { ArrowUpRight } from "lucide-react";

export default function MenuHighlights() {
  const [activeTab, setActiveTab] = useState<string>("coffee");

  return (
    <section id="menu" className="py-16 sm:py-20 bg-[#F6F2EA]/60 text-espresso-900 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
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

        {/* Instant Category Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-b border-sand-300/80 overflow-x-auto max-w-full pb-px space-x-6 sm:space-x-10 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`pb-3 text-xs sm:text-sm tracking-[0.16em] uppercase font-medium transition-colors whitespace-nowrap relative focus:outline-none ${
                    isActive
                      ? "text-espresso-950 font-semibold"
                      : "text-espresso-600 hover:text-espresso-900"
                  }`}
                >
                  <span>{cat.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-espresso-950" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stable Menu Container with Zero Lag / Zero Layout Shift */}
        <div className="min-h-[380px]">
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
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-serif text-lg sm:text-xl font-normal text-espresso-950 group-hover:text-champagne-600 transition-colors">
                            {item.name}
                          </h3>
                          {item.isVeg && (
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block shrink-0"
                              title="Vegetarian"
                            />
                          )}
                        </div>

                        {/* Provenance Tag instead of Price */}
                        <span className="text-[10px] uppercase tracking-widest text-sand-600 font-sans font-medium">
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
