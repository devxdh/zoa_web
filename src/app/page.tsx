import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ambiance from "@/components/Ambiance";
import MenuHighlights from "@/components/MenuHighlights";
import ReservationWidget from "@/components/ReservationWidget";
import LocationContact from "@/components/LocationContact";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1A1714] relative selection:bg-champagne-300 selection:text-espresso-950">
      {/* Top Navbar */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* Aesthetic Marquee / Editorial Quote Interlude */}
      <section className="py-12 bg-sand-200/60 border-y border-sand-300 text-espresso-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center space-x-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-espresso-950">
                4.8 / 5.0 on Google Reviews (680+ verified patrons)
              </span>
            </div>

            <div className="italic font-serif text-sm sm:text-base text-espresso-800 max-w-xl text-center md:text-right">
              &ldquo;An architectural triumph in Jodhpur. The cold brews and wood-fired pizzas are unmatched.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Space & Atmosphere (About ZOA) */}
      <Ambiance />

      {/* 3. Curated Menu Highlights */}
      <MenuHighlights />

      {/* 4. Zero-Friction Table Reservation Widget */}
      <ReservationWidget />

      {/* 5. Location, Operating Hours & Contact */}
      <LocationContact />

      {/* Luxury Footer */}
      <Footer />

      {/* Mobile Sticky Bar for Instagram / Mobile Visitors */}
      <MobileStickyBar />
    </main>
  );
}
