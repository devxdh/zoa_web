"use client";

import React, { useState } from "react";
import { RESTAURANT_INFO } from "@/data/restaurantData";
import {
  MessageCircle,
  Calendar,
  Users,
  Clock,
  MapPin,
  Sparkles,
  Phone,
  Info,
  Heart,
} from "lucide-react";

export default function ReservationWidget() {
  const [guests, setGuests] = useState<string>("2 Guests (Date / Duo)");
  const [dateOption, setDateOption] = useState<string>("Today");
  const [customDate, setCustomDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("8:30 PM (Prime Dinner)");
  const [seatingZone, setSeatingZone] = useState<string>("Alfresco Courtyard");
  const [occasion, setOccasion] = useState<string>("Casual Dining");
  const [specialNote, setSpecialNote] = useState<string>("");

  const guestOptions = ["2 Guests (Date / Duo)", "3–4 Guests (Social)", "5–8 Guests (Group)", "8+ (Private Event)"];
  const dateOptions = ["Today", "Tomorrow", "This Weekend", "Other Date"];
  const timeSlots = [
    "12:30 PM (Lunch)",
    "1:30 PM (Lunch)",
    "4:30 PM (Coffee & Sunset)",
    "6:00 PM (Golden Hour)",
    "7:30 PM (Dinner)",
    "8:30 PM (Prime Dinner)",
    "9:30 PM (Late Dinner)",
    "10:15 PM (Nightcap)",
  ];
  const seatingOptions = [
    "Alfresco Courtyard",
    "Evening Lounge",
    "Sunlit Day Bar",
    "Best Available Table",
  ];
  const occasions = ["Casual Dining", "Date Night", "Birthday Celebration", "Anniversary", "Business Meet"];

  // Selected date label
  const resolvedDate = dateOption === "Other Date" ? (customDate || "an upcoming date") : dateOption;

  // Construct formatted WhatsApp message
  const constructMessage = () => {
    let msg = `Hi ZOA Jodhpur, I'd like to reserve a table:\n\n`;
    msg += `• Party Size: ${guests}\n`;
    msg += `• Date: ${resolvedDate}\n`;
    msg += `• Preferred Time: ${timeSlot}\n`;
    msg += `• Seating Preference: ${seatingZone}\n`;
    if (occasion !== "Casual Dining") {
      msg += `• Occasion: ${occasion}\n`;
    }
    if (specialNote.trim()) {
      msg += `• Special Note: ${specialNote.trim()}\n`;
    }
    msg += `\nPlease let me know if a table is available. Thank you!`;
    return msg;
  };

  const whatsappMessage = constructMessage();
  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="reserve" className="py-20 sm:py-28 bg-espresso-950 text-sand-50 relative overflow-hidden scroll-mt-12">
      {/* Background Ambience Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-champagne-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.25em] uppercase text-champagne-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zero-Friction Booking</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-sand-50 tracking-tight text-balance">
            Reserve Your Experience
          </h2>

          <p className="mt-4 text-sand-300/80 text-sm sm:text-base leading-relaxed">
            No endless account setups or waiting. Tap your preferred party details below and
            connect directly with our venue host via WhatsApp for immediate confirmation.
          </p>
        </div>

        {/* The Action Box */}
        <div className="glass-dark rounded-3xl p-6 sm:p-10 border border-sand-500/25 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Builder Options */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Party Size */}
              <div>
                <label className="flex items-center space-x-2 text-xs uppercase tracking-wider text-sand-300 font-semibold mb-2.5">
                  <Users className="w-3.5 h-3.5 text-champagne-400" />
                  <span>1. Select Party Size</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {guestOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setGuests(opt)}
                      className={`p-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                        guests === opt
                          ? "bg-sand-100 text-espresso-950 font-semibold shadow ring-1 ring-sand-100"
                          : "bg-espresso-900/60 hover:bg-espresso-850 text-sand-200 border border-sand-500/20"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Date Selection */}
              <div>
                <label className="flex items-center space-x-2 text-xs uppercase tracking-wider text-sand-300 font-semibold mb-2.5">
                  <Calendar className="w-3.5 h-3.5 text-champagne-400" />
                  <span>2. When are you joining us?</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {dateOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setDateOption(opt)}
                      className={`p-2.5 rounded-xl text-xs font-medium text-center transition-all ${
                        dateOption === opt
                          ? "bg-sand-100 text-espresso-950 font-semibold shadow ring-1 ring-sand-100"
                          : "bg-espresso-900/60 hover:bg-espresso-850 text-sand-200 border border-sand-500/20"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {dateOption === "Other Date" && (
                  <div className="mt-2.5">
                    <input
                      type="date"
                      value={customDate}
                      onChange={(e) => setCustomDate(e.target.value)}
                      className="w-full bg-espresso-900 border border-sand-500/30 rounded-xl px-3.5 py-2 text-xs text-sand-100 focus:outline-none focus:border-champagne-400"
                    />
                  </div>
                )}
              </div>

              {/* Step 3: Time Slot */}
              <div>
                <label className="flex items-center space-x-2 text-xs uppercase tracking-wider text-sand-300 font-semibold mb-2.5">
                  <Clock className="w-3.5 h-3.5 text-champagne-400" />
                  <span>3. Preferred Seating Time</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`p-2 rounded-xl text-[11px] sm:text-xs font-medium text-center transition-all ${
                        timeSlot === slot
                          ? "bg-sand-100 text-espresso-950 font-semibold shadow ring-1 ring-sand-100"
                          : "bg-espresso-900/60 hover:bg-espresso-850 text-sand-200 border border-sand-500/20"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Zone & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center space-x-2 text-xs uppercase tracking-wider text-sand-300 font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5 text-champagne-400" />
                    <span>Seating Zone</span>
                  </label>
                  <select
                    value={seatingZone}
                    onChange={(e) => setSeatingZone(e.target.value)}
                    className="w-full bg-espresso-900 border border-sand-500/30 rounded-xl px-3 py-2 text-xs text-sand-100 focus:outline-none focus:border-champagne-400"
                  >
                    {seatingOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-xs uppercase tracking-wider text-sand-300 font-semibold mb-2">
                    <Heart className="w-3.5 h-3.5 text-champagne-400" />
                    <span>Occasion (Optional)</span>
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-espresso-900 border border-sand-500/30 rounded-xl px-3 py-2 text-xs text-sand-100 focus:outline-none focus:border-champagne-400"
                  >
                    {occasions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Request */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-sand-300 font-semibold mb-1.5">
                  Special Notes / Requests (Dietary, High Chair, Table Decor)
                </label>
                <input
                  type="text"
                  placeholder="e.g., Corner booth, anniversary cake arrangement"
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  className="w-full bg-espresso-900/80 border border-sand-500/30 rounded-xl px-3.5 py-2.5 text-xs text-sand-100 placeholder:text-sand-600 focus:outline-none focus:border-champagne-400"
                />
              </div>
            </div>

            {/* Live Message Preview & Instant Routing Card */}
            <div className="lg:col-span-5 bg-espresso-900/90 rounded-2xl p-5 sm:p-6 border border-sand-500/20 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-sand-500/20 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-sand-200">
                      Live WhatsApp Preview
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono">Direct Host Desk</span>
                </div>

                {/* Simulated Chat Bubble */}
                <div className="p-4 rounded-2xl bg-espresso-950/80 border border-sand-500/20 text-xs sm:text-sm text-sand-200 font-sans leading-relaxed whitespace-pre-line shadow-inner">
                  {whatsappMessage}
                </div>

                <div className="mt-4 flex items-center space-x-2 text-[11px] text-sand-400">
                  <Info className="w-3.5 h-3.5 text-champagne-400 shrink-0" />
                  <span>
                    No pre-payment required. Our team confirms table availability in 5–10 minutes.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-sand-500/20 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2.5 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/80 active:scale-95 text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Book via WhatsApp</span>
                </a>

                <div className="flex items-center justify-between gap-2 pt-1 text-center">
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-espresso-800/80 hover:bg-espresso-800 border border-sand-500/20 text-sand-200 text-xs font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-sand-400" />
                    <span>Direct Call: {RESTAURANT_INFO.formattedPhone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
