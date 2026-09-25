export interface MenuItem {
  id: string;
  name: string;
  category: "coffee" | "small-plates" | "mains" | "desserts";
  description: string;
  provenance: string;
  isVeg?: boolean;
}

export interface AmbianceSpace {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  atmosphere: string;
  image: string;
}

export const RESTAURANT_INFO = {
  name: "ZOA",
  subTitle: "JODHPUR",
  tagline: "Where Culinary Craft Meets Architectural Calm",
  shortDesc:
    "An unhurried sanctuary in Jodhpur celebrating artisanal coffee, slow-crafted cuisine, and the tranquil warmth of desert architecture.",
  phone: "+919414100919",
  formattedPhone: "+91 94141 00919",
  whatsappNumber: "919414100919",
  instagramUrl: "https://www.instagram.com/zoaindia",
  instagramHandle: "@zoaindia",
  googleMapsUrl:
    "https://maps.google.com/?cid=5119202190271312355",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=ZOA&destination_place_id=0x39418fc3faca44eb:0x470b0f44f485f1e3",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.798547446144!2d72.95141177497604!3d26.235734488856213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418fc3faca44eb%3A0x470b0f44f485f1e3!2sZOA!5e0!3m2!1sen!2sin!4v1790345324408!5m2!1sen!2sin",
  address: {
    line1: "01, Pal Bypass, Bhadu Market",
    landmark: "Near Veetrag City, Jaisalmer Bypass Road / Ring Road",
    city: "Jodhpur",
    state: "Rajasthan",
    pincode: "342014",
    full: "01, Pal Bypass, Bhadu Market, near Veetrag City, Jaisalmer Bypass Road / Ring Road, Chaukhan, Jodhpur, Rajasthan 342014",
  },
  hours: {
    display: "12:00 PM – 12:00 AM (Midnight)",
    short: "12:00 PM – 12:00 AM",
    days: "Open Daily (Monday – Sunday)",
  },
  reservationWhatsAppLink:
    "https://wa.me/919414100919?text=Hi%20ZOA%20Jodhpur,%20I'd%20like%20to%20reserve%20a%20table%20for%20an%20upcoming%20visit.",
};

export const SPACES_DATA: AmbianceSpace[] = [
  {
    id: "day-bar",
    title: "The Sunlit Day Bar",
    eyebrow: "Afternoon to Twilight",
    description:
      "Framed by raw Jodhpur sandstone, custom travertine counters, and gentle acoustic jazz. Designed for quiet daytime rituals, solitary book reading, and artisanal pour-overs.",
    atmosphere: "Luminous, calm, acoustically gentle",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=85&w=1200&auto=format&fit=crop",
  },
  {
    id: "alfresco",
    title: "The Courtyard Alfresco",
    eyebrow: "Open Sky Dining",
    description:
      "An open-air garden surrounded by desert flora and terracotta warmth. As golden hour softens into dusk, soft candlelight transforms the courtyard into an intimate retreat.",
    atmosphere: "Breezy, romantic, conversational",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=1200&auto=format&fit=crop",
  },
  {
    id: "evening-lounge",
    title: "The Ambient Evening Lounge",
    eyebrow: "Intimate Dinner Service",
    description:
      "Deep espresso-stained walnut, curved plaster alcoves, and bespoke private dining suites including 'Ash & Oak'. Tailored for celebratory dinners, botanical coolers, and unhurried midnight conversations.",
    atmosphere: "Refined, moody, unhurried",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=85&w=1200&auto=format&fit=crop",
  },
];

export const MENU_CATEGORIES = [
  { id: "coffee", label: "Artisanal Coffee & Coolers" },
  { id: "small-plates", label: "Small Plates & Tapas" },
  { id: "mains", label: "Mains & Oven Bakes" },
  { id: "desserts", label: "Patisserie & Desserts" },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Artisanal Coffee & Coolers
  {
    id: "c-1",
    name: "ZOA Signature Cold Brew",
    category: "coffee",
    description: "18-hour slow steeped single-origin Arabica, clarified orange peel zest, artisanal tonic over crystal ice.",
    provenance: "Chikmagalur Single Estate",
    isVeg: true,
  },
  {
    id: "c-2",
    name: "Spanish Iced Cortado",
    category: "coffee",
    description: "Double ristretto over condensed dulce milk and textured oat milk, lightly dusted with Ceylon cinnamon.",
    provenance: "Specialty Espresso Roast",
    isVeg: true,
  },
  {
    id: "c-3",
    name: "Kyoto Ceremonial Matcha",
    category: "coffee",
    description: "First-harvest ceremonial matcha whisked with warm almond milk and subtle wild agave nectar.",
    provenance: "Uji, Kyoto Harvest",
    isVeg: true,
  },
  {
    id: "c-4",
    name: "Wild Hibiscus & Elderflower Spritz",
    category: "coffee",
    description: "Slow-reduced Egyptian hibiscus, mountain elderflower, effervescent botanical tonic, fresh garden mint.",
    provenance: "Botanical Infusion",
    isVeg: true,
  },
  {
    id: "c-5",
    name: "Torched Rosemary Pour-Over",
    category: "coffee",
    description: "Estate Arabica brewed over crystal ice with flared organic rosemary and dried Valencia orange.",
    provenance: "Hand-Crafted V60",
    isVeg: true,
  },

  // Small Plates & Tapas
  {
    id: "s-1",
    name: "Truffle & Aged Parmesan Fries",
    category: "small-plates",
    description: "Double-blanched Russet potatoes, white winter truffle oil, shaved 24-month Reggiano, garlic aioli emulsion.",
    provenance: "House Specialty",
    isVeg: true,
  },
  {
    id: "s-2",
    name: "Whipped Lemon Ricotta & Fig Toast",
    category: "small-plates",
    description: "Slow-fermented seeded sourdough, whipped Meyer lemon ricotta, charred spiced figs, wild forest thyme honey.",
    provenance: "Artisanal Sourdough",
    isVeg: true,
  },
  {
    id: "s-3",
    name: "Wood-Fired Wild Mushroom Bruschetta",
    category: "small-plates",
    description: "Shiitake, cremini, and shimeji sautéed in garlic thyme butter over charred rustic ciabatta.",
    provenance: "Forest Foraged",
    isVeg: true,
  },
  {
    id: "s-4",
    name: "Edamame & Black Truffle Dim Sum",
    category: "small-plates",
    description: "Steamed translucent crystal skin, tender young edamame, water chestnut crunch, black truffle jus.",
    provenance: "Steam Basket",
    isVeg: true,
  },
  {
    id: "s-5",
    name: "Pugliese Burrata & Heirloom Tartine",
    category: "small-plates",
    description: "Fresh creamy burrata bulb, macerated heirloom cherry tomatoes, basil-pine nut pesto, aged Modena balsamic.",
    provenance: "Artisanal Cheese",
    isVeg: true,
  },

  // Mains & Oven Bakes
  {
    id: "m-1",
    name: "Margherita Con Bufala",
    category: "mains",
    description: "72-hour fermented dough blistered at 450°C, San Marzano D.O.P. tomato sugo, buffalo mozzarella, fresh basil, evoo.",
    provenance: "Neapolitan Wood-Fired",
    isVeg: true,
  },
  {
    id: "m-2",
    name: "Truffle Forest Fungi Pizza",
    category: "mains",
    description: "White base with fior di latte, roasted wild portobello and king oyster mushrooms, roasted garlic confit, truffle oil.",
    provenance: "Neapolitan Wood-Fired",
    isVeg: true,
  },
  {
    id: "m-3",
    name: "Handmade Tagliatelle Cacio e Pepe",
    category: "mains",
    description: "Bronze-die ribbon pasta tossed in starchy emulsion of 24-month Pecorino Romano and cracked toasted peppercorns.",
    provenance: "Fresh Bronze-Die Pasta",
    isVeg: true,
  },
  {
    id: "m-4",
    name: "Smoked Paneer Tikka Tortellini",
    category: "mains",
    description: "Artisan pasta parcels filled with smoked cottage cheese, velvety fenugreek makhani reduction, chive oil.",
    provenance: "Contemporary Fusion",
    isVeg: true,
  },
  {
    id: "m-5",
    name: "Fire-Roasted Penne All'Arrabbiata",
    category: "mains",
    description: "Charred Roma sugo, fermented Calabrian chilies, roasted garlic slivers, cold-pressed olive oil, aged parmesan.",
    provenance: "Classic Italian",
    isVeg: true,
  },

  // Patisserie & Desserts
  {
    id: "d-1",
    name: "ZOA Basque Burnt Cheesecake",
    category: "desserts",
    description: "Caramelized dark golden crust, ultra-creamy molten center, accompanied by wild raspberry coulis.",
    provenance: "House Patisserie",
    isVeg: true,
  },
  {
    id: "d-2",
    name: "Artisanal Classic Tiramisu",
    category: "desserts",
    description: "Airy Savoiardi soaked in signature ZOA espresso and dark cacao liqueur, layered with mascarpone cream.",
    provenance: "Traditional Recipe",
    isVeg: true,
  },
  {
    id: "d-3",
    name: "70% Dark Callebaut Lava Fondant",
    category: "desserts",
    description: "Warm Belgian chocolate cake with a molten liquid core, paired with hand-churned Madagascar vanilla bean gelato.",
    provenance: "Belgian Single Origin",
    isVeg: true,
  },
  {
    id: "d-4",
    name: "Saffron & Cardamom Tres Leches",
    category: "desserts",
    description: "Tender sponge soaked in three milks infused with Kashmiri saffron, green cardamom, toasted Iranian pistachios.",
    provenance: "Regional Inspiration",
    isVeg: true,
  },
];
