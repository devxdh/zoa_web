"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import {
  Menu,
  X,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check real-time operating hours (12:00 PM - 11:30 PM IST)
  useEffect(() => {
    const checkOpenStatus = () => {
      // Calculate current IST time
      const now = new Date();
      // IST is UTC + 5:30
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 3600000 * 5.5);
      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      // 12:00 PM (720 min) to 11:30 PM (1410 min)
      const openMinutes = 12 * 60; // 720
      const closeMinutes = 23 * 60 + 30; // 1410

      setIsOpenNow(totalMinutes >= openMinutes && totalMinutes < closeMinutes);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-sand-300/40 py-3.5"
            : "bg-gradient-to-b from-espresso-950/70 via-espresso-950/30 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="group flex flex-col items-start focus:outline-none">
              <span
                className={`font-serif tracking-[0.28em] text-2xl sm:text-3xl font-medium transition-colors ${
                  scrolled
                    ? "text-espresso-900 group-hover:text-champagne-600"
                    : "text-sand-50 group-hover:text-champagne-300"
                }`}
              >
                Z O A
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-sans font-semibold -mt-1 ${
                  scrolled ? "text-sand-600" : "text-sand-300/80"
                }`}
              >
                J O D H P U R
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#ambiance"
                className={`text-sm tracking-wider uppercase transition-colors font-medium ${
                  scrolled
                    ? "text-espresso-700 hover:text-champagne-600"
                    : "text-sand-100 hover:text-champagne-300"
                }`}
              >
                The Space
              </Link>
              <Link
                href="#menu"
                className={`text-sm tracking-wider uppercase transition-colors font-medium ${
                  scrolled
                    ? "text-espresso-700 hover:text-champagne-600"
                    : "text-sand-100 hover:text-champagne-300"
                }`}
              >
                Culinary Highlights
              </Link>
              <Link
                href="#reserve"
                className={`text-sm tracking-wider uppercase transition-colors font-medium ${
                  scrolled
                    ? "text-espresso-700 hover:text-champagne-600"
                    : "text-sand-100 hover:text-champagne-300"
                }`}
              >
                Reservations
              </Link>
              <Link
                href="#location"
                className={`text-sm tracking-wider uppercase transition-colors font-medium ${
                  scrolled
                    ? "text-espresso-700 hover:text-champagne-600"
                    : "text-sand-100 hover:text-champagne-300"
                }`}
              >
                Location & Hours
              </Link>
            </nav>

            {/* Desktop Action Badges & WhatsApp Reserve */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Status Pill */}
              <div
                className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium border ${
                  scrolled
                    ? isOpenNow
                      ? "bg-sage-50 text-sage-800 border-sage-300"
                      : "bg-sand-100 text-espresso-700 border-sand-300"
                    : isOpenNow
                    ? "bg-espresso-900/60 text-sand-100 border-sand-500/30 backdrop-blur-sm"
                    : "bg-espresso-900/60 text-sand-300 border-sand-500/30"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-amber-400"
                  }`}
                />
                <span>{isOpenNow ? "Open Today (12 - 11:30 PM)" : "Opens at 12:00 PM"}</span>
              </div>

              {/* Direct WhatsApp CTA */}
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hi%20ZOA%20Jodhpur,%20I'd%20like%20to%20inquire%20about%20a%20table%20reservation.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm ${
                  scrolled
                    ? "bg-espresso-900 hover:bg-espresso-800 text-sand-50 hover:shadow"
                    : "bg-sand-50 hover:bg-white text-espresso-900 hover:shadow-lg"
                }`}
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Reserve Table</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hi%20ZOA%20Jodhpur,%20I'd%20like%20to%20reserve%20a%20table.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-emerald-600 text-white shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled
                    ? "text-espresso-900 hover:bg-sand-200"
                    : "text-sand-50 hover:bg-espresso-800/50"
                }`}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 px-4 pt-2 pb-6 bg-[#FAF7F2]/98 backdrop-blur-xl border-b border-sand-300/70 shadow-xl animate-fade-in text-espresso-900">
            <div className="flex items-center justify-between py-2 border-b border-sand-200 mb-3">
              <div className="flex items-center space-x-2 text-xs font-medium text-espresso-700">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-amber-400"
                  }`}
                />
                <span>
                  {isOpenNow ? "Open Today (12:00 PM – 11:30 PM)" : "Opens 12:00 PM"}
                </span>
              </div>
              <span className="text-[11px] font-serif italic text-sand-600">Pal Bypass, Jodhpur</span>
            </div>

            <nav className="flex flex-col space-y-3">
              <Link
                href="#ambiance"
                onClick={() => setIsOpen(false)}
                className="py-2 px-3 rounded-lg text-sm font-medium tracking-wide uppercase text-espresso-800 hover:bg-sand-200/60"
              >
                The Space & Atmosphere
              </Link>
              <Link
                href="#menu"
                onClick={() => setIsOpen(false)}
                className="py-2 px-3 rounded-lg text-sm font-medium tracking-wide uppercase text-espresso-800 hover:bg-sand-200/60"
              >
                Curated Highlights Menu
              </Link>
              <Link
                href="#reserve"
                onClick={() => setIsOpen(false)}
                className="py-2 px-3 rounded-lg text-sm font-medium tracking-wide uppercase text-espresso-800 hover:bg-sand-200/60 flex items-center justify-between"
              >
                <span>Table Reservation</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-normal">
                  Instant
                </span>
              </Link>
              <Link
                href="#location"
                onClick={() => setIsOpen(false)}
                className="py-2 px-3 rounded-lg text-sm font-medium tracking-wide uppercase text-espresso-800 hover:bg-sand-200/60"
              >
                Location & Google Maps
              </Link>
            </nav>

            <div className="pt-4 mt-3 border-t border-sand-200 space-y-2">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hi%20ZOA%20Jodhpur,%20I'd%20like%20to%20reserve%20a%20table.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-espresso-900 text-sand-50 text-xs font-semibold uppercase tracking-wider shadow"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Book via WhatsApp</span>
              </a>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg bg-sand-200 text-espresso-800 text-xs font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-sand-700" />
                  <span>Call Venue</span>
                </a>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg bg-sand-200 text-espresso-800 text-xs font-medium"
                >
                  <MapPin className="w-3.5 h-3.5 text-champagne-600" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
