"use client";

import React, { useState, useEffect } from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { InstagramIcon } from "@/components/Icons";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  ExternalLink,
  Car,
} from "lucide-react";

export default function LocationContact() {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 3600000 * 5.5);
      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      const openMinutes = 12 * 60; // 12:00 PM
      const closeMinutes = 23 * 60 + 30; // 11:30 PM

      setIsOpenNow(totalMinutes >= openMinutes && totalMinutes < closeMinutes);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#FAF7F2] text-espresso-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.25em] uppercase text-champagne-600 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find & Visit ZOA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-espresso-950 tracking-tight text-balance">
            Location, Timings & Arrival
          </h2>

          <p className="mt-4 text-espresso-700/85 text-sm sm:text-base leading-relaxed">
            Conveniently situated along Jodhpur&apos;s scenic Pal Bypass, easily accessible from
            all major city quadrants with expansive on-premise dedicated parking.
          </p>
        </div>

        {/* Main Grid: Details + Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details & One-Tap Action Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/80 border border-sand-300 shadow-sm space-y-3">
              <div className="flex items-center space-x-2.5 text-champagne-600 text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Our Address</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-espresso-950">
                ZOA Jodhpur
              </h3>
              <p className="text-sm text-espresso-700 leading-relaxed font-light">
                {RESTAURANT_INFO.address.line1}, {RESTAURANT_INFO.address.landmark},{" "}
                {RESTAURANT_INFO.address.area}, {RESTAURANT_INFO.address.city},{" "}
                {RESTAURANT_INFO.address.state} {RESTAURANT_INFO.address.pincode}
              </p>

              <div className="pt-2 flex items-center space-x-2 text-xs text-sage-800">
                <Car className="w-3.5 h-3.5 text-sage-700" />
                <span className="font-medium">Free Valet & Dedicated Parking Available</span>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/80 border border-sand-300 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5 text-champagne-600 text-xs font-semibold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Hours of Hospitality</span>
                </div>
                <div
                  className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    isOpenNow
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-sand-200 text-espresso-700"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isOpenNow ? "bg-emerald-600 animate-pulse" : "bg-amber-500"
                    }`}
                  />
                  <span>{isOpenNow ? "Open Now" : "Closed Now"}</span>
                </div>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <span className="text-base sm:text-lg font-serif font-medium text-espresso-950">
                  Daily Service
                </span>
                <span className="text-base sm:text-lg font-semibold text-espresso-900 font-mono">
                  {RESTAURANT_INFO.operatingHours.text}
                </span>
              </div>
              <p className="text-xs text-sand-700 font-light">
                {RESTAURANT_INFO.operatingHours.days} • Last kitchen orders taken at 11:00 PM.
              </p>
            </div>

            {/* One-Tap Contact & Direction CTAs */}
            <div className="space-y-2.5">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-espresso-900 hover:bg-espresso-800 text-sand-50 transition-all duration-200 shadow group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-espresso-800 flex items-center justify-center text-champagne-400 group-hover:scale-110 transition-transform">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs sm:text-sm font-semibold block">
                      Open in Google Maps
                    </span>
                    <span className="text-[11px] text-sand-400">Get 1-Tap Driving Directions</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-sand-400 group-hover:text-sand-100" />
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex items-center space-x-2.5 p-3.5 rounded-2xl bg-sand-200/80 hover:bg-sand-300/80 text-espresso-900 transition-colors border border-sand-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-sand-300/60 flex items-center justify-center text-espresso-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-semibold block">Call Us</span>
                    <span className="text-[10px] text-sand-700">Direct Voice Line</span>
                  </div>
                </a>

                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 p-3.5 rounded-2xl bg-sand-200/80 hover:bg-sand-300/80 text-espresso-900 transition-colors border border-sand-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-semibold block">Instagram</span>
                    <span className="text-[10px] text-sand-700">@zoaindia</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Google Maps Responsive Iframe Wrapper */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-sand-300 shadow-xl bg-sand-200 min-h-[380px] sm:min-h-[460px] relative flex flex-col">
            <iframe
              src={RESTAURANT_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ZOA Jodhpur Location Map"
              className="flex-1 w-full h-full filter saturate-[0.9] contrast-[1.02]"
            />

            {/* Bottom floating map control banner */}
            <div className="p-4 bg-white/95 backdrop-blur-md border-t border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-2 text-xs text-espresso-800">
                <MapPin className="w-3.5 h-3.5 text-champagne-600 shrink-0" />
                <span className="truncate">Near Veetrag City, Ring Road / Bypass</span>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl bg-espresso-950 text-sand-50 text-xs font-semibold uppercase tracking-wider hover:bg-espresso-850 transition-colors"
              >
                <span>Navigate via GPS</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
