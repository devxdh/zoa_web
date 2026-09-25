"use client";

import React, { useState } from "react";
import { MENU_ITEMS, MENU_CATEGORIES, RESTAURANT_INFO } from "@/data/restaurantData";
import { ArrowUpRight } from "lucide-react";

export default function MenuHighlights() {
  const [activeTab, setActiveTab] = useState<string>("coffee");

  const currentItems = MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#F6F2EA]/60 text-espresso-900 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.28em] font-sans font-medium text-champagne-600 block mb-3">
            Culinary Craft
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-espresso-950 tracking-tight leading-[1.2] text-balance">
            Curated Menu & Daily Brews
          </h2>

          <p className="mt-5 text-espresso-700/85 text-sm sm:text-base leading-relaxed font-light">
            Rooted in artisanal integrity. From slow-steeped single-origin Arabicas to 72-hour
            fermented Neapolitan pizzas and delicate patisserie.
          </p>
        </div>

        {/* Minimal Category Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex border-b border-sand-300/80 overflow-x-auto max-w-full pb-px space-x-6 sm:space-x-10 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`pb-3 text-xs sm:text-sm tracking-[0.16em] uppercase font-medium transition-all whitespace-nowrap relative ${
                    isActive
                      ? "text-espresso-950 font-semibold"
                      : "text-espresso-600 hover:text-espresso-900"
                  }`}
                >
                  <span>{cat.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-espresso-950 animate-fade-in" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 sm:gap-y-12">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between group pb-6 border-b border-sand-300/40"
            >
              <div className="pr-6 flex-1">
                <div className="flex items-center space-x-2.5 mb-1.5">
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
                <p className="text-xs sm:text-sm text-espresso-700/85 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Price */}
              <div className="font-serif text-sm sm:text-base font-medium text-espresso-950 shrink-0 pt-0.5">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Bottom Links */}
        <div className="mt-16 pt-8 border-t border-sand-300/60 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-700 gap-4">
          <p className="font-light">
            Average spend approximately ₹1,200 for two. Fresh batches prepared daily.
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
