"use client";

import React, { useState } from "react";
import { MENU_ITEMS, FULL_MENU_DOWNLOAD_DATA, RESTAURANT_INFO } from "@/data/restaurantData";
import {
  Coffee,
  UtensilsCrossed,
  Pizza,
  Cake,
  Download,
  Eye,
  X,
  Sparkles,
  Leaf,
  FileText,
  Printer,
  Check,
} from "lucide-react";

type CategoryKey = "coffee" | "small-plates" | "mains" | "desserts";

export default function MenuHighlights() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("coffee");
  const [dietaryFilter, setDietaryFilter] = useState<"all" | "veg" | "chef">("all");
  const [showFullMenuModal, setShowFullMenuModal] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const categories = [
    { id: "coffee", label: "Artisanal Coffee & Coolers", shortLabel: "Coffee & Coolers", icon: Coffee },
    { id: "small-plates", label: "Small Plates & Bites", shortLabel: "Small Plates", icon: UtensilsCrossed },
    { id: "mains", label: "Mains & Oven Bakes", shortLabel: "Mains & Bakes", icon: Pizza },
    { id: "desserts", label: "Desserts & Patisserie", shortLabel: "Desserts", icon: Cake },
  ] as const;

  // Filter items
  const filteredItems = MENU_ITEMS.filter((item) => {
    if (item.category !== activeCategory) return false;
    if (dietaryFilter === "veg") {
      return item.tags.includes("Veg") || item.tags.includes("Vegan");
    }
    if (dietaryFilter === "chef") {
      return item.tags.includes("Chef's Choice") || item.tags.includes("Signature");
    }
    return true;
  });

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    // Create simulated printable / text export or print window
    setTimeout(() => {
      window.print();
    }, 400);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#F4EFE6]/60 text-espresso-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.25em] uppercase text-champagne-600 mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Curated Culinary Highlights</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-espresso-950 tracking-tight text-balance">
            Crafted with Provenance & Precision
          </h2>

          <p className="mt-4 text-espresso-700/85 text-sm sm:text-base leading-relaxed">
            Our kitchen and brew bar celebrate single-estate Indian coffee harvests, 72-hour
            fermented Neapolitan doughs, and contemporary continental bites designed for effortless
            sharing. Average spend approx. ₹1,200 for two.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1.5 rounded-2xl bg-sand-200/80 backdrop-blur-md border border-sand-300 overflow-x-auto max-w-full no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id as CategoryKey)}
                  className={`flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-espresso-900 text-sand-50 shadow-sm"
                      : "text-espresso-700 hover:text-espresso-950 hover:bg-sand-300/50"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="hidden sm:inline">{cat.label}</span>
                  <span className="sm:hidden">{cat.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dietary Filter Buttons */}
        <div className="flex items-center justify-center space-x-2 mb-10 text-xs">
          <span className="text-sand-600 uppercase tracking-wider text-[11px] font-semibold mr-1">
            Filter:
          </span>
          <button
            type="button"
            onClick={() => setDietaryFilter("all")}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              dietaryFilter === "all"
                ? "bg-espresso-800 text-sand-50"
                : "bg-white/70 text-espresso-700 hover:bg-white"
            }`}
          >
            All Items
          </button>
          <button
            type="button"
            onClick={() => setDietaryFilter("veg")}
            className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full font-medium transition-colors ${
              dietaryFilter === "veg"
                ? "bg-sage-700 text-white"
                : "bg-white/70 text-sage-800 hover:bg-white"
            }`}
          >
            <Leaf className="w-3 h-3" />
            <span>Vegetarian / Vegan</span>
          </button>
          <button
            type="button"
            onClick={() => setDietaryFilter("chef")}
            className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full font-medium transition-colors ${
              dietaryFilter === "chef"
                ? "bg-champagne-600 text-white"
                : "bg-white/70 text-espresso-700 hover:bg-white"
            }`}
          >
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Chef&apos;s Signatures</span>
          </button>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl overflow-hidden border border-sand-300/80 hover:border-champagne-400/80 transition-all duration-300 hover:shadow-lg flex flex-col group bg-white/75"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-sand-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent opacity-80" />

                {/* Price Tag Pill */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-espresso-950/85 backdrop-blur-md text-sand-50 text-xs font-semibold tracking-wide border border-sand-400/30">
                  ₹{item.price}
                </div>

                {/* Culinary Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md backdrop-blur-md ${
                        tag === "Chef's Choice" || tag === "Signature"
                          ? "bg-champagne-500 text-espresso-950 font-bold"
                          : tag === "Vegan" || tag === "Veg"
                          ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/30"
                          : "bg-espresso-900/80 text-sand-200"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-espresso-950 group-hover:text-champagne-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-espresso-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tasting / Pairing Note */}
                {item.pairingNote && (
                  <div className="mt-4 pt-3 border-t border-sand-200/70 flex items-start space-x-2 text-[11px] text-sand-700 italic">
                    <span className="text-champagne-500 font-serif">✦</span>
                    <span>{item.pairingNote}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sticky / Prominent Complete Menu CTA Banner */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-sand-400/60 shadow-lg text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-champagne-600 block mb-1">
              Full Food & Beverage Directory
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-espresso-950">
              Explore Our Complete Artisanal Menu
            </h3>
            <p className="text-xs sm:text-sm text-espresso-700 mt-1 max-w-md">
              Over 40+ handcrafted preparations, seasonal specials, pour-over origins, and daily baked desserts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={() => setShowFullMenuModal(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-espresso-900 hover:bg-espresso-800 text-sand-50 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-md"
            >
              <Eye className="w-4 h-4 text-champagne-400" />
              <span>View Complete Menu</span>
            </button>

            <button
              type="button"
              onClick={handleSimulateDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-sand-200 hover:bg-sand-300 text-espresso-900 border border-sand-400 text-xs sm:text-sm font-medium tracking-wide uppercase transition-colors"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Preparing Menu...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-espresso-700" />
                  <span>Download PDF</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Complete Menu Modal Viewer */}
      {showFullMenuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#FAF7F2] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-sand-300">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-sand-200 flex items-center justify-between bg-sand-100/60">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-champagne-600" />
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-espresso-950">
                    ZOA Jodhpur — Full Menu Catalog
                  </h3>
                  <p className="text-xs text-espresso-600">
                    Pal Bypass, Jodhpur • Valid for Dine-in & Takeaway
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handleSimulateDownload}
                  className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-sand-200 hover:bg-sand-300 text-espresso-850 text-xs font-medium"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowFullMenuModal(false)}
                  className="p-2 rounded-full hover:bg-sand-200 text-espresso-700"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 print:p-0">
              <div className="text-center pb-4 border-b border-sand-200">
                <span className="font-serif text-2xl tracking-[0.2em] font-medium text-espresso-950">
                  Z O A
                </span>
                <p className="text-[11px] uppercase tracking-widest text-sand-600 mt-1">
                  Artisanal Coffee & Contemporary Dining • Jodhpur
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {FULL_MENU_DOWNLOAD_DATA.map((category, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="font-serif text-lg font-semibold text-espresso-950 border-b border-champagne-400/50 pb-1 flex items-center justify-between">
                      <span>{category.category}</span>
                      <span className="text-xs font-sans font-normal text-sand-600 uppercase tracking-widest">
                        Fresh
                      </span>
                    </h4>
                    <div className="space-y-2.5">
                      {category.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-sand-200/50"
                        >
                          <span className="text-espresso-800 font-medium">{item.name}</span>
                          <span className="text-espresso-950 font-semibold font-mono">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-sand-200/60 border border-sand-300 text-center text-xs text-espresso-700 space-y-1">
                <p className="font-semibold text-espresso-900">
                  Govt. taxes applicable. 100% pure vegetarian & vegan culinary options available.
                </p>
                <p className="text-[11px] text-sand-600">
                  Please inform our barista / server of any food allergies or specific dietary requirements.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-sand-200 bg-sand-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-espresso-600">
                To reserve a table, contact directly via WhatsApp:{" "}
                <strong className="text-espresso-950">{RESTAURANT_INFO.formattedPhone}</strong>
              </span>
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hi%20ZOA%20Jodhpur,%20I'd%20like%20to%20reserve%20a%20table%20to%20experience%20the%20menu.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider text-center"
                >
                  Reserve on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setShowFullMenuModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-sand-200 hover:bg-sand-300 text-espresso-800 text-xs font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
