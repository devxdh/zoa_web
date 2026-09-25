"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-sand-300/40 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          : "bg-gradient-to-b from-espresso-950/70 via-espresso-950/20 to-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col items-start focus:outline-none">
            <span
              className={`font-serif tracking-[0.3em] text-2xl sm:text-3xl font-light transition-colors ${
                scrolled ? "text-espresso-950" : "text-sand-50"
              }`}
            >
              Z O A
            </span>
            <span
              className={`text-[9px] tracking-[0.4em] uppercase font-sans font-medium -mt-0.5 ${
                scrolled ? "text-sand-600" : "text-sand-300/80"
              }`}
            >
              JODHPUR
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 text-[13px] tracking-[0.16em] uppercase font-medium">
            <Link
              href="#space"
              className={`transition-colors duration-200 ${
                scrolled
                  ? "text-espresso-800 hover:text-champagne-600"
                  : "text-sand-200 hover:text-white"
              }`}
            >
              The Space
            </Link>
            <Link
              href="#menu"
              className={`transition-colors duration-200 ${
                scrolled
                  ? "text-espresso-800 hover:text-champagne-600"
                  : "text-sand-200 hover:text-white"
              }`}
            >
              Menu
            </Link>
            <Link
              href="#reserve"
              className={`transition-colors duration-200 ${
                scrolled
                  ? "text-espresso-800 hover:text-champagne-600"
                  : "text-sand-200 hover:text-white"
              }`}
            >
              Reservations
            </Link>
            <Link
              href="#location"
              className={`transition-colors duration-200 ${
                scrolled
                  ? "text-espresso-800 hover:text-champagne-600"
                  : "text-sand-200 hover:text-white"
              }`}
            >
              Location
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href={RESTAURANT_INFO.reservationWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs tracking-[0.18em] uppercase font-medium px-5 py-2.5 rounded-full transition-all duration-300 border ${
                scrolled
                  ? "border-espresso-900 text-espresso-950 hover:bg-espresso-900 hover:text-sand-50"
                  : "border-sand-200/50 text-sand-50 hover:bg-white hover:text-espresso-950 backdrop-blur-sm"
              }`}
            >
              Reserve a Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${
                scrolled ? "text-espresso-950" : "text-sand-50"
              }`}
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-8 bg-[#FAF8F5]/98 backdrop-blur-xl border-b border-sand-300/60 shadow-lg text-espresso-950 animate-fade-in mt-3">
          <nav className="flex flex-col space-y-4 pt-2 pb-5 text-sm tracking-[0.2em] uppercase font-medium">
            <Link
              href="#space"
              onClick={() => setIsOpen(false)}
              className="py-1 text-espresso-800 hover:text-champagne-600"
            >
              The Space
            </Link>
            <Link
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="py-1 text-espresso-800 hover:text-champagne-600"
            >
              Menu
            </Link>
            <Link
              href="#reserve"
              onClick={() => setIsOpen(false)}
              className="py-1 text-espresso-800 hover:text-champagne-600"
            >
              Reservations
            </Link>
            <Link
              href="#location"
              onClick={() => setIsOpen(false)}
              className="py-1 text-espresso-800 hover:text-champagne-600"
            >
              Location & Hours
            </Link>
          </nav>

          <div className="pt-4 border-t border-sand-200 flex flex-col gap-3">
            <a
              href={RESTAURANT_INFO.reservationWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-full bg-espresso-950 text-sand-50 text-xs tracking-[0.18em] uppercase font-medium"
            >
              Reserve via WhatsApp
            </a>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-full border border-sand-300 text-espresso-900 text-xs tracking-[0.18em] uppercase font-medium"
            >
              Directions (Google Maps)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
