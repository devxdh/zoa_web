export interface MenuItem {
  id: string;
  name: string;
  category: "coffee" | "small-plates" | "mains" | "desserts";
  description: string;
  price: string;
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
  phone: "+919829012345",
  formattedPhone: "+91 98290 12345",
  whatsappNumber: "919829012345",
  instagramUrl: "https://www.instagram.com/zoaindia",
  instagramHandle: "@zoaindia",
  googleMapsUrl: "https://maps.google.com/?q=ZOA+Pal+Bypass+Jodhpur+Rajasthan",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114515.69896791456!2d72.93489816668725!3d26.241574744212975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4e402bfd97%3A0x67dbad97a8e2cb5a!2sPal%20Bypass%2C%20Jodhpur%2C%20Rajasthan%20342014!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin",
  address: {
    line1: "Pal Bypass, No. 01 Bhadu Market",
    landmark: "Near Veetrag City, Ring Road / Jaisalmer Bypass",
    city: "Jodhpur",
    state: "Rajasthan",
    pincode: "342014",
    full: "Pal Bypass, No. 01 Bhadu Market, near Veetrag City, Ring Road, Chaukhan, Jodhpur, Rajasthan 342014",
  },
  hours: {
    display: "12:00 PM – 11:30 PM",
    days: "Daily (Monday – Sunday)",
  },
  reservationWhatsAppLink:
    "https://wa.me/919829012345?text=Hi%20ZOA%20Jodhpur,%20I'd%20like%20to%20reserve%20a%20table%20for%20an%20upcoming%20visit.",
};

export const SPACES_DATA: AmbianceSpace[] = [
  {
    id: "day-bar",
    title: "The Sunlit Day Bar",
    eyebrow: "Morning to Twilight",
    description:
      "Framed by raw Jodhpur sandstone, custom travertine counters, and gentle acoustic jazz. Designed for quiet morning rituals, solitary book reading, and artisanal pour-overs.",
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
      "Deep espresso-stained walnut, curved plaster alcoves, and moody 2200K ambient illumination. Tailored for celebratory dinners, botanical coolers, and unhurried conversation.",
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
    price: "₹290",
    isVeg: true,
  },
  {
    id: "c-2",
    name: "Spanish Iced Cortado",
    category: "coffee",
    description: "Double ristretto over silky condensed milk and textured oat milk, dusted with Ceylon cinnamon.",
    price: "₹320",
    isVeg: true,
  },
  {
    id: "c-3",
    name: "Kyoto Ceremonial Matcha",
    category: "coffee",
    description: "First-harvest Uji ceremonial matcha whisked with warm almond milk and subtle wild agave.",
    price: "₹340",
    isVeg: true,
  },
  {
    id: "c-4",
    name: "Wild Hibiscus & Elderflower Spritz",
    category: "coffee",
    description: "Slow-reduced Egyptian hibiscus, mountain elderflower, effervescent tonic, and garden mint.",
    price: "₹280",
    isVeg: true,
  },
  {
    id: "c-5",
    name: "Flared Rosemary Pour-Over",
    category: "coffee",
    description: "Estate Arabica brewed over hand-carved ice with fragrant torched rosemary and Valencia orange.",
    price: "₹310",
    isVeg: true,
  },

  // Small Plates & Tapas
  {
    id: "s-1",
    name: "Truffle & Aged Parmesan Fries",
    category: "small-plates",
    description: "Double-cooked hand-cut Russet potatoes, white winter truffle oil, shaved Reggiano, garlic aioli.",
    price: "₹380",
    isVeg: true,
  },
  {
    id: "s-2",
    name: "Whipped Lemon Ricotta & Fig Toast",
    category: "small-plates",
    description: "Slow-fermented seeded sourdough, whipped Meyer lemon ricotta, charred spiced figs, wild forest honey.",
    price: "₹420",
    isVeg: true,
  },
  {
    id: "s-3",
    name: "Wood-Fired Wild Mushroom Bruschetta",
    category: "small-plates",
    description: "Shiitake, cremini and shimeji sautéed in thyme butter over charred rustic ciabatta.",
    price: "₹390",
    isVeg: true,
  },
  {
    id: "s-4",
    name: "Edamame & Black Truffle Dim Sum",
    category: "small-plates",
    description: "Steamed translucent crystal skin, tender young edamame, water chestnut crunch, black truffle jus.",
    price: "₹460",
    isVeg: true,
  },
  {
    id: "s-5",
    name: "Pugliese Burrata & Heirloom Tartine",
    category: "small-plates",
    description: "Creamy fresh burrata, macerated heirloom cherry tomatoes, basil-pine nut pesto, aged Modena balsamic.",
    price: "₹490",
    isVeg: true,
  },

  // Mains & Oven Bakes
  {
    id: "m-1",
    name: "Margherita Con Bufala",
    category: "mains",
    description: "72-hour fermented dough, San Marzano D.O.P. tomato sugo, water buffalo mozzarella, torn basil, evoo.",
    price: "₹590",
    isVeg: true,
  },
  {
    id: "m-2",
    name: "Truffle Forest Fungi Pizza",
    category: "mains",
    description: "Fior di latte, roasted wild portobello and king oyster mushrooms, roasted garlic confit, white truffle oil.",
    price: "₹680",
    isVeg: true,
  },
  {
    id: "m-3",
    name: "Handmade Tagliatelle Cacio e Pepe",
    category: "mains",
    description: "Bronze-die ribbon pasta tossed in starchy emulsion of 24-month Pecorino Romano and cracked toasted peppercorns.",
    price: "₹540",
    isVeg: true,
  },
  {
    id: "m-4",
    name: "Smoked Paneer Tikka Tortellini",
    category: "mains",
    description: "Artisan pasta parcels filled with smoked cottage cheese, velvety fenugreek makhani reduction, chive oil.",
    price: "₹560",
    isVeg: true,
  },
  {
    id: "m-5",
    name: "Fire-Roasted Penne All'Arrabbiata",
    category: "mains",
    description: "Charred Roma sugo, fermented Calabrian chilies, roasted garlic slivers, cold-pressed olive oil, parmesan.",
    price: "₹490",
    isVeg: true,
  },

  // Patisserie & Desserts
  {
    id: "d-1",
    name: "ZOA Basque Burnt Cheesecake",
    category: "desserts",
    description: "Caramelized dark golden crown, ultra-creamy molten center, accompanied by wild raspberry coulis.",
    price: "₹390",
    isVeg: true,
  },
  {
    id: "d-2",
    name: "Artisanal Classic Tiramisu",
    category: "desserts",
    description: "Airy Savoiardi soaked in signature ZOA espresso and dark cacao liqueur, layered with mascarpone cream.",
    price: "₹420",
    isVeg: true,
  },
  {
    id: "d-3",
    name: "70% Dark Callebaut Lava Fondant",
    category: "desserts",
    description: "Warm Belgian chocolate cake with a molten liquid core, paired with hand-churned vanilla bean gelato.",
    price: "₹440",
    isVeg: true,
  },
  {
    id: "d-4",
    name: "Saffron & Cardamom Tres Leches",
    category: "desserts",
    description: "Tender sponge soaked in three milks infused with Kashmiri saffron, green cardamom, toasted Iranian pistachios.",
    price: "₹380",
    isVeg: true,
  },
];
