"use client";

import React from "react";
import Link from "next/link";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { InstagramIcon } from "@/components/Icons";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-espresso-950 text-sand-300 border-t border-sand-500/15 pt-16 pb-28 md:pb-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-sand-500/15">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block group focus:outline-none">
              <span className="font-serif tracking-[0.3em] text-3xl font-light text-sand-50 group-hover:text-champagne-300 transition-colors">
                Z O A
              </span>
              <span className="text-[10px] tracking-[0.4em] uppercase font-sans font-medium text-sand-400 block -mt-1">
                JODHPUR
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-sand-400 font-light leading-relaxed max-w-sm">
              Artisanal coffees, slow-crafted cuisine, and an immersive architectural dining ambiance
              in Jodhpur.
            </p>

            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-sand-300 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Follow @zoaindia</span>
                <ArrowUpRight className="w-3 h-3 text-sand-500" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-sand-200 block mb-2">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-sand-400 font-light">
              <li>
                <Link href="#space" className="hover:text-sand-100 transition-colors">
                  The Space & Architecture
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-sand-100 transition-colors">
                  Curated Menu
                </Link>
              </li>
              <li>
                <Link href="#reserve" className="hover:text-sand-100 transition-colors">
                  Table Reservations
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-sand-100 transition-colors">
                  Location & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Details */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-sand-200 block mb-2">
              Address & Hours
            </span>
            <p className="text-xs text-sand-400 font-light leading-relaxed">
              {RESTAURANT_INFO.address.full}
            </p>
            <p className="text-xs text-sand-400 font-light">
              Open Daily: 12:00 PM – 12:00 AM
            </p>
            <div className="pt-1">
              <a
                href={RESTAURANT_INFO.reservationWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-champagne-400 hover:text-champagne-300 transition-colors underline underline-offset-4 decoration-champagne-500/40"
              >
                WhatsApp Host Desk
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-sand-500 gap-4">
          <p>© {new Date().getFullYear()} ZOA Jodhpur. Architectural calm & modern dining.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-sand-400 hover:text-sand-200 transition-colors"
          >
            <span className="uppercase tracking-widest text-[10px]">Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
