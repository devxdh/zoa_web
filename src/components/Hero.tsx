"use client";

import React from "react";
import Link from "next/link";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import {
  Compass,
  Star,
  ArrowDown,
  Navigation,
  MessageCircle,
  Coffee,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hi%20ZOA%20Jodhpur,%20I'd%20like%20to%20reserve%20a%20table%20for%20an%20upcoming%20visit.`;

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-espresso-950 pt-20 pb-16">
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=85&w=2000&auto=format&fit=crop"
          alt="ZOA Jodhpur architectural dining ambiance"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle filter brightness-90 contrast-105"
        />
        {/* Layered Luxury Gradient: Heavy at top/bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-espresso-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/75 via-transparent to-espresso-950/75" />
      </div>

      {/* Decorative Subtle Sandstone Light Radial */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badges Row */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 animate-fade-in">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-espresso-900/80 backdrop-blur-md border border-sand-400/20 text-sand-200 text-xs font-medium">
            <Compass className="w-3.5 h-3.5 text-champagne-400" />
            <span>Jodhpur, Rajasthan</span>
          </div>

          {/* Rating Badge */}
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-espresso-900/80 backdrop-blur-md border border-sand-400/20 text-sand-200 text-xs font-medium">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <span className="font-semibold text-sand-50">4.7+</span>
            <span className="text-sand-400 font-normal">Rating</span>
          </div>

          {/* Hours Badge */}
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-950/50 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open Today • 12:00 PM – 11:30 PM</span>
          </div>
        </div>

        {/* Small Brand Monogram / Eyebrow */}
        <div className="flex items-center space-x-3 mb-3 text-sand-400 text-xs tracking-[0.3em] uppercase font-sans">
          <span className="h-[1px] w-8 bg-sand-500/40" />
          <span>Modern Luxury Dining & Artisanal Brews</span>
          <span className="h-[1px] w-8 bg-sand-500/40" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-sand-50 tracking-tight leading-[1.12] max-w-4xl text-balance">
          Where <span className="italic font-normal text-champagne-300">Culinary Craft</span>{" "}
          Meets <span className="italic font-normal text-champagne-300">Architectural Calm</span>.
        </h1>

        {/* Descriptive Subtext */}
        <p className="mt-5 sm:mt-6 text-sand-300/90 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
          An architectural dining retreat in Jodhpur. Featuring single-origin artisanal coffees,
          handcrafted Neapolitan pizzas, contemporary Indian small plates, and serene alfresco
          desert courtyards.
        </p>

        {/* Key Metrics / Attributes Pill */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-sand-300/70 border-t border-b border-sand-500/20 py-2.5 px-4 max-w-xl">
          <div className="flex items-center space-x-1.5">
            <Coffee className="w-3.5 h-3.5 text-champagne-400" />
            <span>Specialty Pour-Overs</span>
          </div>
          <span className="text-sand-600">•</span>
          <div className="flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
            <span>Sandstone Courtyard</span>
          </div>
          <span className="text-sand-600">•</span>
          <div className="flex items-center space-x-1.5">
            <span>Avg. ₹1,200 for two</span>
          </div>
        </div>

        {/* Primary CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          {/* Scroll to Menu */}
          <Link
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-sand-100 hover:bg-white text-espresso-950 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-xl hover:shadow-champagne-500/10 active:scale-95"
          >
            <span>View Highlights</span>
            <ArrowDown className="w-4 h-4 text-espresso-800" />
          </Link>

          {/* Book via WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/40 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Book via WhatsApp</span>
          </a>

          {/* Direct Directions */}
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-espresso-900/80 hover:bg-espresso-800 border border-sand-400/30 text-sand-200 text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:text-white"
          >
            <Navigation className="w-3.5 h-3.5 text-champagne-400" />
            <span>Direct Directions</span>
          </a>
        </div>

        {/* Quick Location Anchor Tag */}
        <div className="mt-8 text-sand-400/70 text-xs flex items-center space-x-2">
          <Compass className="w-3 h-3 text-sand-500" />
          <span>Pal Bypass, Near Veetrag City • Valet & Dedicated Parking</span>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt for Desktop */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
        <Link href="#ambiance" className="text-sand-400 text-[10px] tracking-[0.25em] uppercase mb-1">
          Explore ZOA
        </Link>
        <div className="w-4 h-7 border border-sand-500/40 rounded-full flex justify-center pt-1">
          <div className="w-1 h-1.5 bg-champagne-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
