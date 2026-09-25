import React from "react";
import Link from "next/link";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-espresso-950 text-sand-50 flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden selection:bg-champagne-300 selection:text-espresso-950 font-sans">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header */}
      <header className="relative z-10 flex items-center justify-between">
        <Link href="/" className="inline-block group focus:outline-none">
          <span className="font-serif tracking-[0.3em] text-2xl font-light text-sand-50 group-hover:text-champagne-300 transition-colors">
            Z O A
          </span>
          <span className="text-[9px] tracking-[0.35em] uppercase font-sans font-medium text-sand-400 block -mt-1">
            JODHPUR
          </span>
        </Link>

        <span className="text-[11px] uppercase tracking-[0.2em] text-sand-500 font-medium">
          Error 404
        </span>
      </header>

      {/* Center Editorial Narrative */}
      <div className="relative z-10 max-w-xl mx-auto text-center py-16 sm:py-24">
        {/* Subtle Eyebrow */}
        <span className="text-xs uppercase tracking-[0.3em] font-sans font-medium text-champagne-400 block mb-4">
          Uncharted Path
        </span>

        {/* Serif Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl font-normal text-sand-50 tracking-tight leading-[1.15]">
          A Moment <span className="italic font-light text-champagne-300">Out of Place</span>.
        </h1>

        {/* Subtext */}
        <p className="mt-5 text-sand-300/85 text-sm sm:text-base leading-relaxed font-light max-w-md mx-auto">
          The table or page you are seeking does not exist or has been relocated.
          Allow us to welcome you back to our curated dining spaces.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-sand-100 hover:bg-white text-espresso-950 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>

          <a
            href={RESTAURANT_INFO.reservationWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full border border-sand-400/30 hover:border-sand-200 text-sand-200 hover:text-white text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 backdrop-blur-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
            <span>WhatsApp Host Desk</span>
          </a>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <footer className="relative z-10 border-t border-sand-500/15 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-sand-500 gap-3">
        <p>© {new Date().getFullYear()} ZOA Jodhpur. Architectural calm & modern dining.</p>
        <p>Pal Bypass, Jodhpur, Rajasthan</p>
      </footer>
    </main>
  );
}
