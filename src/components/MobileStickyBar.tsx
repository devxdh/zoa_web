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
      <div className="bg-[#FAF8F5]/92 backdrop-blur-xl border-t border-sand-300/80 px-5 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-3 max-w-sm mx-auto">
          <a
            href={RESTAURANT_INFO.reservationWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-full bg-espresso-950 text-sand-50 text-xs tracking-[0.16em] uppercase font-medium text-center shadow-sm"
          >
            Reserve Table
          </a>

          <a
            href={RESTAURANT_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-5 rounded-full border border-sand-400 text-espresso-950 text-xs tracking-[0.16em] uppercase font-medium inline-flex items-center space-x-1"
          >
            <span>Map</span>
            <ArrowUpRight className="w-3 h-3 text-sand-600" />
          </a>
        </div>
      </div>
    </aside>
  );
}
