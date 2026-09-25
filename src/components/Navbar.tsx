"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center">
      {/* Layer 1: Dark gradient over hero (fades out when scrolled) */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-espresso-950/80 via-espresso-950/40 to-transparent transition-opacity duration-300 pointer-events-none ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Layer 2: Scrolled light glass background with seamless border (fades in when scrolled) */}
      <div
        className={`absolute inset-0 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DDD0]/80 transition-opacity duration-300 pointer-events-none shadow-[0_1px_8px_rgba(0,0,0,0.02)] ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Navbar Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex flex-col items-start focus:outline-none">
          <span
            className={`font-serif tracking-[0.3em] text-2xl sm:text-3xl font-light transition-colors duration-300 ${
              scrolled ? "text-espresso-950" : "text-sand-50"
            }`}
          >
            Z O A
          </span>
          <span
            className={`text-[9px] tracking-[0.4em] uppercase font-sans font-medium -mt-0.5 transition-colors duration-300 ${
              scrolled ? "text-sand-600" : "text-sand-300/80"
            }`}
          >
            JODHPUR
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10 text-[13px] tracking-[0.16em] uppercase font-medium">
          <Link
            href="#space"
            className={`transition-colors duration-300 ${
              scrolled
                ? "text-espresso-800 hover:text-champagne-600"
                : "text-sand-200 hover:text-white"
            }`}
          >
            The Space
          </Link>
          <Link
            href="#menu"
            className={`transition-colors duration-300 ${
              scrolled
                ? "text-espresso-800 hover:text-champagne-600"
                : "text-sand-200 hover:text-white"
            }`}
          >
            Menu
          </Link>
          <Link
            href="#reserve"
            className={`transition-colors duration-300 ${
              scrolled
                ? "text-espresso-800 hover:text-champagne-600"
                : "text-sand-200 hover:text-white"
            }`}
          >
            Reservations
          </Link>
          <Link
            href="#location"
            className={`transition-colors duration-300 ${
              scrolled
                ? "text-espresso-800 hover:text-champagne-600"
                : "text-sand-200 hover:text-white"
            }`}
          >
            Location
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={RESTAURANT_INFO.reservationWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs tracking-[0.18em] uppercase font-medium px-5 py-2.5 rounded-full transition-all duration-300 border ${
              scrolled
                ? "border-espresso-950 text-espresso-950 hover:bg-espresso-950 hover:text-sand-50"
                : "border-sand-200/50 text-sand-50 hover:bg-white hover:text-espresso-950 backdrop-blur-sm"
            }`}
          >
            Reserve a Table
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors duration-300 ${
              scrolled ? "text-espresso-950" : "text-sand-50"
            }`}
            aria-label="Toggle Navigation"
          >
            {isOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 px-6 pt-4 pb-8 bg-[#FAF8F5] border-b border-[#E5DDD0] shadow-xl text-espresso-950 animate-fade-in">
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
              href={RESTAURANT_INFO.googleMapsDirectionsUrl}
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
