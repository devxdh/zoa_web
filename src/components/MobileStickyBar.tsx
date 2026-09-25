"use client";

import React, { useState, useEffect } from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { MessageCircle, Navigation, Phone } from "lucide-react";

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bottom sticky bar after scrolling past the first 120px
      setIsVisible(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hi%20ZOA%20Jodhpur,%20I'd%20like%20to%20reserve%20a%20table%20today.`;

  return (
    <aside
      aria-label="Quick Actions"
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
    >
      <div className="bg-[#FAF7F2]/95 backdrop-blur-xl border-t border-sand-300/80 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.12)]">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {/* WhatsApp Direct Booking Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 py-3.5 px-4 rounded-2xl bg-emerald-600 active:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase shadow-md active:scale-95 transition-all text-center"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Book on WhatsApp</span>
          </a>

          {/* 1-Tap Directions */}
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl bg-sand-200/90 active:bg-sand-300 text-espresso-900 border border-sand-300 flex items-center justify-center shrink-0"
            aria-label="Google Maps Directions"
          >
            <Navigation className="w-4 h-4 text-champagne-600" />
          </a>

          {/* 1-Tap Call */}
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="p-3.5 rounded-2xl bg-sand-200/90 active:bg-sand-300 text-espresso-900 border border-sand-300 flex items-center justify-center shrink-0"
            aria-label="Call ZOA"
          >
            <Phone className="w-4 h-4 text-sand-800" />
          </a>
        </div>
      </div>
    </aside>
  );
}
