import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ambiance from "@/components/Ambiance";
import MenuHighlights from "@/components/MenuHighlights";
import ReservationWidget from "@/components/ReservationWidget";
import LocationContact from "@/components/LocationContact";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1714] relative selection:bg-champagne-300 selection:text-espresso-950 font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Editorial Quotation Interlude with refined, snug spacing */}
      <section className="pt-12 pb-6 sm:pt-16 sm:pb-8 bg-[#FAF8F5] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-serif italic text-xl sm:text-2xl text-espresso-900 font-light leading-relaxed">
            &ldquo;An architectural pause in the heart of Jodhpur — where calm desert stone meets
            the precision of artisanal coffee and slow dining.&rdquo;
          </p>
          <span className="mt-3 block text-[10px] uppercase tracking-[0.28em] text-sand-600 font-medium">
            ZOA Jodhpur • Pal Bypass
          </span>
          <div className="mt-6 w-12 h-[1px] bg-sand-300/60 mx-auto" />
        </div>
      </section>

      {/* The Space & Atmosphere */}
      <Ambiance />

      {/* Curated Culinary Menu */}
      <MenuHighlights />

      {/* Table Reservations & WhatsApp Inquiries */}
      <ReservationWidget />

      {/* Location, Timings & Google Maps */}
      <LocationContact />

      {/* Luxury Footer */}
      <Footer />

      {/* Discreet Mobile Floating Action */}
      <MobileStickyBar />
    </main>
  );
}
