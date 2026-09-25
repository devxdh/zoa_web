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

      {/* Editorial Quotation Interlude */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] text-center border-b border-sand-300/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-serif italic text-2xl sm:text-3xl text-espresso-900 font-light leading-relaxed">
            &ldquo;An architectural pause in the heart of Jodhpur — where calm desert stone meets
            the precision of artisanal coffee and slow dining.&rdquo;
          </p>
          <span className="mt-4 block text-[11px] uppercase tracking-[0.25em] text-sand-600 font-medium">
            ZOA Jodhpur • Pal Bypass
          </span>
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
