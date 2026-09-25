"use client";

import React from "react";
import Link from "next/link";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { InstagramIcon } from "@/components/Icons";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-espresso-950 text-sand-300 border-t border-sand-500/20 pt-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-sand-500/20">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-serif tracking-[0.28em] text-3xl font-medium text-sand-50 group-hover:text-champagne-300 transition-colors">
                Z O A
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase font-sans font-semibold text-sand-400 block -mt-1">
                J O D H P U R
              </span>
            </Link>

            <p className="text-sm text-sand-400 leading-relaxed font-light max-w-sm">
              Modern luxury dining, artisanal coffees, crafted continental & contemporary cuisine,
              and an immersive architectural dining ambiance rooted in the desert calmness of Jodhpur.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-espresso-900 border border-sand-500/30 flex items-center justify-center text-sand-200 hover:text-white hover:border-champagne-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hi%20ZOA%20Jodhpur,%20I'd%20like%20to%20reserve%20a%20table.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-espresso-900 border border-sand-500/30 flex items-center justify-center text-sand-200 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-10 h-10 rounded-full bg-espresso-900 border border-sand-500/30 flex items-center justify-center text-sand-200 hover:text-champagne-300 hover:border-champagne-400 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-sand-100 block mb-2">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="#ambiance"
                  className="text-sand-400 hover:text-champagne-300 transition-colors"
                >
                  The Space & Atmosphere
                </Link>
              </li>
              <li>
                <Link
                  href="#menu"
                  className="text-sand-400 hover:text-champagne-300 transition-colors"
                >
                  Curated Highlights Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#reserve"
                  className="text-sand-400 hover:text-champagne-300 transition-colors"
                >
                  WhatsApp Table Booking
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="text-sand-400 hover:text-champagne-300 transition-colors"
                >
                  Location & Timings
                </Link>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-400 hover:text-champagne-300 transition-colors inline-flex items-center space-x-1"
                >
                  <span>Instagram (@zoaindia)</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Timings Snippet */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-sand-100 block mb-2">
              Visit Us
            </span>

            <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-sand-400 font-light">
              <MapPin className="w-4 h-4 text-champagne-400 shrink-0 mt-0.5" />
              <span>
                Pal Bypass, No. 01 Bhadu Market, near Veetrag City, Jodhpur, Rajasthan 342014
              </span>
            </div>

            <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-sand-400 font-light">
              <Clock className="w-4 h-4 text-champagne-400 shrink-0 mt-0.5" />
              <span>Open Daily: 12:00 PM – 11:30 PM (All 7 Days)</span>
            </div>

            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-champagne-400 hover:text-champagne-300 transition-colors"
              >
                <span>Open in Google Maps</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-500 gap-4">
          <p>© {new Date().getFullYear()} ZOA Jodhpur. All rights reserved.</p>

          <p className="flex items-center space-x-1 text-center">
            <span>Designed for architectural calm & luxury hospitality</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-sand-400 hover:text-sand-100 transition-colors py-1 px-3 rounded-lg hover:bg-espresso-900"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
