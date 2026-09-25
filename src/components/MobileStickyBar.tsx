"use client";

import React, { useState, useEffect } from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { ArrowUpRight } from "lucide-react";

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick Actions"
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Fully opaque solid background so nothing behind ever bleeds through */}
      <div className="bg-[#FAF8F5] border-t border-sand-300 px-4 pt-3 pb-4 shadow-[0_-6px_25px_rgba(0,0,0,0.12)]">
        <div className="flex items-center gap-2.5 max-w-sm mx-auto">
          <a
            href={RESTAURANT_INFO.reservationWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-full bg-espresso-950 text-sand-50 active:bg-espresso-900 active:scale-[0.98] text-xs tracking-[0.16em] uppercase font-medium text-center shadow-sm transition-all"
          >
            Reserve Table
          </a>

          <a
            href={RESTAURANT_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 sm:px-5 rounded-full bg-sand-200 hover:bg-sand-300 active:bg-sand-400 active:scale-[0.98] border border-sand-400 text-espresso-950 text-xs tracking-[0.16em] uppercase font-semibold inline-flex items-center space-x-1.5 shadow-sm transition-all shrink-0"
          >
            <span>Map</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-espresso-950 shrink-0" />
          </a>
        </div>
      </div>
    </aside>
  );
}
