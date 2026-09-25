"use client";

import React from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { MessageCircle, Phone } from "lucide-react";

export default function ReservationWidget() {
  return (
    <section id="reserve" className="py-16 sm:py-20 bg-espresso-950 text-sand-50 relative overflow-hidden scroll-mt-12">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-champagne-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <span className="text-xs uppercase tracking-[0.28em] font-sans font-medium text-champagne-400 block mb-3">
          Hospitality & Reservations
        </span>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-sand-50 tracking-tight leading-[1.15] text-balance">
          Reserve Your Table at ZOA
        </h2>

        {/* Narrative */}
        <p className="mt-4 text-sand-300/85 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
          We encourage reservations for afternoon coffee hours and evening dining. Connect directly with our
          host team on WhatsApp for prompt table arrangements. Walk-ins are always warmly welcomed.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={RESTAURANT_INFO.reservationWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-full bg-sand-100 hover:bg-white text-espresso-950 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>Reserve via WhatsApp</span>
          </a>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full border border-sand-400/30 hover:border-sand-200 text-sand-200 hover:text-white text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 backdrop-blur-sm"
          >
            <Phone className="w-3.5 h-3.5 text-sand-400" />
            <span>Call {RESTAURANT_INFO.formattedPhone}</span>
          </a>
        </div>

        {/* Practical Hospitality Details */}
        <div className="mt-12 pt-6 border-t border-sand-500/20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-sand-400 font-light">
          <div>
            <span className="block font-medium text-sand-200 mb-1">Service Hours</span>
            <span>12:00 PM – 12:00 AM Daily</span>
          </div>

          <div>
            <span className="block font-medium text-sand-200 mb-1">Seating Areas</span>
            <span>Courtyard Alfresco & Lounge</span>
          </div>

          <div>
            <span className="block font-medium text-sand-200 mb-1">Arrival</span>
            <span>Dedicated Parking Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
