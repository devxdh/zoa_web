import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[94vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-espresso-950 pt-24 pb-16">
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=85&w=2000&auto=format&fit=crop"
          alt="ZOA Jodhpur architectural dining ambiance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.78] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/40 to-espresso-950/75" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Subtle Eyebrow */}
        <div className="inline-flex items-center space-x-3 mb-6 text-sand-300 text-xs sm:text-[13px] tracking-[0.32em] uppercase font-sans font-medium">
          <span className="w-6 h-[1px] bg-sand-400/40" />
          <span>Jodhpur • Pal Bypass</span>
          <span className="w-6 h-[1px] bg-sand-400/40" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-sand-50 tracking-tight leading-[1.12] text-balance">
          Where <span className="italic font-light text-champagne-300">Culinary Craft</span> Meets{" "}
          <span className="italic font-light text-champagne-300">Architectural Calm</span>.
        </h1>

        {/* Narrative Subtext */}
        <p className="mt-6 text-sand-200/90 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
          An unhurried dining sanctuary in Jodhpur. Featuring single-origin artisanal brews,
          hand-stretched Neapolitan crusts, and contemporary dining embraced by warm desert sandstone.
        </p>

        {/* Primary CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="#menu"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-sand-100 hover:bg-white text-espresso-950 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            Explore Menu
          </Link>

          <a
            href={RESTAURANT_INFO.reservationWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-sand-300/60 hover:border-white text-sand-100 hover:text-white text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 backdrop-blur-sm"
          >
            Reserve via WhatsApp
          </a>
        </div>

        {/* Subtle Timings & Directions Note */}
        <div className="mt-12 text-sand-400 text-xs tracking-wider flex items-center space-x-3">
          <span>Open Daily 12:00 PM – 12:00 AM</span>
          <span className="text-sand-600">•</span>
          <a
            href={RESTAURANT_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sand-200 underline underline-offset-4 decoration-sand-500/40 transition-colors"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* Gentle Scroll Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <Link href="#space" aria-label="Scroll to space description">
          <ArrowDown className="w-4 h-4 text-sand-300 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
