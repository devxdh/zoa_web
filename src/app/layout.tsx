import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#141210",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "ZOA Jodhpur | Modern Luxury Dining & Artisanal Coffee",
  description:
    "Where culinary art meets architectural calm. Experience modern luxury dining, artisanal brews, and contemporary cuisine at ZOA, Pal Bypass, Jodhpur.",
  keywords: [
    "ZOA Jodhpur",
    "ZOA cafe Jodhpur",
    "Luxury cafe Jodhpur",
    "Best dining in Jodhpur",
    "Artisanal coffee Jodhpur",
    "Neapolitan pizza Jodhpur",
    "Alfresco dining Jodhpur",
    "Pal Bypass restaurant",
    "zoaindia",
  ],
  authors: [{ name: "ZOA Jodhpur" }],
  creator: "ZOA",
  metadataBase: new URL("https://zoa-jodhpur.vercel.app"),
  openGraph: {
    title: "ZOA Jodhpur | Where Culinary Craft Meets Architectural Calm",
    description:
      "Modern luxury dining, artisanal coffees, crafted continental & contemporary cuisine, and an immersive architectural dining ambiance in Jodhpur.",
    url: "https://zoa-jodhpur.vercel.app",
    siteName: "ZOA Jodhpur",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "ZOA Jodhpur - Luxury Dining & Artisanal Cafe Ambiance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZOA Jodhpur | Modern Luxury Dining & Artisanal Coffee",
    description: "Where culinary art meets architectural calm. Pal Bypass, Jodhpur.",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "ZOA Jodhpur",
  image: [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  ],
  "@id": "https://zoa-jodhpur.vercel.app",
  url: "https://zoa-jodhpur.vercel.app",
  telephone: "+919414100919",
  priceRange: "₹₹",
  menu: "https://zoa-jodhpur.vercel.app/#menu",
  servesCuisine: [
    "Artisanal Coffee",
    "Continental",
    "Neapolitan Pizza",
    "Italian",
    "Contemporary Vegetarian",
    "Desserts & Patisserie",
  ],
  acceptsReservations: "True",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "01, Pal Bypass, Bhadu Market, near Veetrag City, Jaisalmer Bypass Road / Ring Road, Chaukhan",
    addressLocality: "Jodhpur",
    addressRegion: "Rajasthan",
    postalCode: "342014",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.2415,
    longitude: 72.9732,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "00:00",
    },
  ],
  sameAs: ["https://www.instagram.com/zoaindia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${plusJakarta.variable} font-sans antialiased bg-[#FAF7F2] text-[#1A1714] min-h-screen selection:bg-champagne-300 selection:text-espresso-950`}
      >
        {children}
      </body>
    </html>
  );
}
