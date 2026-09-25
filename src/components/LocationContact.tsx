"use client";

import React from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { InstagramIcon } from "@/components/Icons";
import { ArrowUpRight, Phone } from "lucide-react";

export default function LocationContact() {
  return (
    <section id="location" className="py-12 sm:py-20 bg-[#FAF8F5] text-espresso-900 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.28em] font-sans font-medium text-champagne-600 block mb-2.5">
                Visit & Contact
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-espresso-950 tracking-tight leading-[1.2]">
                Location & Hours
              </h2>

              <p className="mt-3 text-espresso-700/85 text-sm sm:text-base leading-relaxed font-light">
                Positioned along Jodhpur&apos;s Pal Bypass, ZOA is an easy drive from all city
                quarters, offering dedicated on-premise parking.
              </p>
            </div>

            {/* Address */}
            <div className="space-y-1.5 border-t border-sand-300/60 pt-5">
              <span className="text-[11px] uppercase tracking-widest text-sand-500 font-medium block">
                Address
              </span>
              <p className="text-sm sm:text-base text-espresso-900 font-serif leading-snug">
                {RESTAURANT_INFO.address.line1}
              </p>
              <p className="text-xs sm:text-sm text-espresso-700 font-light">
                {RESTAURANT_INFO.address.landmark}, {RESTAURANT_INFO.address.city},{" "}
                {RESTAURANT_INFO.address.state} {RESTAURANT_INFO.address.pincode}
              </p>
            </div>

            {/* Hours */}
            <div className="space-y-1.5 border-t border-sand-300/60 pt-5">
              <span className="text-[11px] uppercase tracking-widest text-sand-500 font-medium block">
                Hours of Hospitality
              </span>
              <p className="text-base sm:text-lg text-espresso-950 font-serif">
                {RESTAURANT_INFO.hours.display}
              </p>
              <p className="text-xs text-espresso-700 font-light">
                {RESTAURANT_INFO.hours.days}
              </p>
            </div>

            {/* Links */}
            <div className="border-t border-sand-300/60 pt-5 flex flex-col space-y-3">
              <a
                href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.16em] font-medium text-espresso-950 hover:text-champagne-600 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] font-medium text-espresso-950 hover:text-champagne-600 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram ({RESTAURANT_INFO.instagramHandle})</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] font-medium text-espresso-950 hover:text-champagne-600 transition-colors"
              >
                <Phone className="w-3 h-3 text-sand-600" />
                <span>Call {RESTAURANT_INFO.formattedPhone}</span>
              </a>
            </div>
          </div>

          {/* Clean Map Column with Interactive Embed & Native Directions */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-sand-200/60 border border-sand-300/80 shadow-sm min-h-[340px] h-[360px] sm:h-[420px] lg:h-full lg:min-h-[460px] relative">
            {/* Elegant Map Underlay / Fallback (Visible while loading or if offline) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-sand-100 to-sand-200 z-0">
              <div className="w-10 h-10 rounded-full bg-sand-300/80 flex items-center justify-center mb-3">
                <ArrowUpRight className="w-5 h-5 text-espresso-900" />
              </div>
              <p className="font-serif text-lg font-medium text-espresso-950">ZOA Jodhpur</p>
              <p className="text-xs text-espresso-700 font-light mt-1 max-w-xs">
                Pal Bypass, Bhadu Market, near Veetrag City, Jodhpur
              </p>
              <a
                href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 rounded-full bg-espresso-950 text-sand-50 text-[11px] tracking-widest uppercase font-medium shadow-sm hover:bg-espresso-900 transition-colors"
              >
                Open in Maps App
              </a>
            </div>

            {/* Google Maps Embed iframe (No CSS filters to prevent mobile compositing bugs) */}
            <iframe
              src={RESTAURANT_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="ZOA Jodhpur Location"
              className="w-full h-full relative z-10 block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
