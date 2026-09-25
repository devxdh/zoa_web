export interface MenuItem {
  id: string;
  name: string;
  category: "coffee" | "small-plates" | "mains" | "desserts";
  description: string;
  price: number;
  tags: ("Veg" | "Vegan" | "Chef's Choice" | "Signature" | "Popular")[];
  image: string;
  calories?: string;
  pairingNote?: string;
}

export interface AmbianceZone {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  atmosphere: string;
  bestTime: string;
  image: string;
  features: string[];
}

export const RESTAURANT_INFO = {
  name: "ZOA",
  legalName: "ZOA Jodhpur",
  tagline: "Where Culinary Craft Meets Architectural Calm",
  subheading:
    "An unhurried sanctuary in Jodhpur celebrating artisanal coffees, contemporary continental flavors, and warm sandstone minimalism.",
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
    landmark: "Near Veetrag City, Jaisalmer Bypass Road / Ring Road",
    area: "Chaukhan",
    city: "Jodhpur",
    state: "Rajasthan",
    pincode: "342014",
    full: "Pal Bypass, No. 01 Bhadu Market, near Veetrag City, Jaisalmer Bypass Road / Ring Road, Chaukhan, Jodhpur, Rajasthan 342014",
  },
  operatingHours: {
    openHour: 12, // 12:00 PM
    closeHour: 23, // 11:30 PM (23:30)
    closeMinute: 30,
    text: "12:00 PM – 11:30 PM",
    days: "Monday to Sunday (Open All 7 Days)",
  },
  rating: {
    score: "4.8",
    reviewCount: "680+",
    label: "Google Verified Dining Experience",
  },
  averageSpend: "₹1,200 for two",
};

export const AMBIANCE_ZONES: AmbianceZone[] = [
  {
    id: "day-bar",
    name: "The Sunlit Day Bar",
    subtitle: "Artisanal Brews & Natural Light",
    description:
      "A soaring double-height architectural volume framed by handcrafted Jodhpur sandstone, custom travertine counters, and the hypnotic hum of bespoke espresso extractions.",
    atmosphere: "Serene, luminous, acoustically gentle",
    bestTime: "12:00 PM – 4:30 PM",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Specialty pour-over bar",
      "Ergonomic travertine communal seating",
      "Soft acoustic jazz soundscapes",
      "Abundant natural skylight",
    ],
  },
  {
    id: "alfresco",
    name: "Outdoor Alfresco Seating",
    subtitle: "Breeze-Caressed Courtyard",
    description:
      "Open-air desert elegance flanked by indigenous arid flora, low-slung linen lounge chairs, and starry Jodhpur twilight skies under gentle warm fairy lanterns.",
    atmosphere: "Romantic, breezy, conversational",
    bestTime: "5:30 PM – 11:30 PM",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Open sky sunset viewing",
      "Surrounding lush olive & desert greens",
      "Evening candlelit tables",
      "Pet-friendly patio corners",
    ],
  },
  {
    id: "evening-lounge",
    name: "Ambient Evening Lounge",
    subtitle: "Intimate Textures & Mood Lighting",
    description:
      "Rich espresso-toned walnut wood, curved plaster alcoves, and moody warm amber luminance tailored for celebratory dinners and deep unhurried conversations.",
    atmosphere: "Refined luxury, intimate, relaxed",
    bestTime: "7:00 PM – 11:30 PM",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Plush velvet & leather banquettes",
      "Curated botanical mocktail counter",
      "Intimate private dinner alcoves",
      "Warm 2200K ambient illumination",
    ],
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Artisanal Coffee & Coolers
  {
    id: "c-1",
    name: "ZOA Signature Cold Brew",
    category: "coffee",
    description:
      "18-hour slow steeped single-estate Chikmagalur Arabica, clarified orange peel zest, artisanal tonic, served over a crystal ice sphere.",
    price: 290,
    tags: ["Chef's Choice", "Vegan"],
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Pairs exquisitely with Whipped Ricotta Sourdough",
  },
  {
    id: "c-2",
    name: "Spanish Iced Cortado",
    category: "coffee",
    description:
      "Double ristretto pulled over condensed dulce milk, organic oat milk, finished with dusted Madagascar cinnamon.",
    price: 320,
    tags: ["Popular", "Veg"],
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Creamy, smooth, with subtle caramelized sweetness",
  },
  {
    id: "c-3",
    name: "Kyoto Ceremonial Matcha",
    category: "coffee",
    description:
      "First-harvest Uji ceremonial matcha whisked with warm almond milk, touch of raw wild agave, layered over crushed ice.",
    price: 340,
    tags: ["Vegan", "Signature"],
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Earthy, vibrant, loaded with natural antioxidants",
  },
  {
    id: "c-4",
    name: "Wild Hibiscus & Elderflower Fizz",
    category: "coffee",
    description:
      "Slow-reduced Egyptian hibiscus petals, mountain elderflower, effervescent botanical tonic, fresh garden mint sprig.",
    price: 280,
    tags: ["Vegan", "Popular"],
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Crisp, tart, exceptionally refreshing under desert sun",
  },
  {
    id: "c-5",
    name: "Rosemary Torched Pour-Over",
    category: "coffee",
    description:
      "Hand-poured V60 single origin coffee infused with freshly flared organic rosemary sprig and dried Valencia orange slice.",
    price: 310,
    tags: ["Chef's Choice", "Vegan"],
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Aromatic woody notes with a clean, winey finish",
  },

  // Small Plates & Bites
  {
    id: "s-1",
    name: "Truffle & Shaved Parmesan Fries",
    category: "small-plates",
    description:
      "Double-blanched hand-cut Russet potatoes, pure white winter truffle oil, 24-month aged Reggiano shavings, roasted garlic aioli.",
    price: 380,
    tags: ["Popular", "Veg"],
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop",
    pairingNote: "The undisputed crowd favorite starter",
  },
  {
    id: "s-2",
    name: "Whipped Lemon Ricotta & Fig Toast",
    category: "small-plates",
    description:
      "Artisanal slow-fermented seeded sourdough, silky Meyer lemon whipped ricotta, grilled fresh figs, wild thyme honey drizzle.",
    price: 420,
    tags: ["Chef's Choice", "Veg"],
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Balanced citrus acidity with rich dairy sweetness",
  },
  {
    id: "s-3",
    name: "Wood-Fired Wild Mushroom Bruschetta",
    category: "small-plates",
    description:
      "Pan-roasted shiitake, cremini and shimeji mushrooms sautéed in garlic thyme emulsion over charred rustic sourdough ciabatta.",
    price: 390,
    tags: ["Veg", "Popular"],
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Deep umami, crisp artisan crust",
  },
  {
    id: "s-4",
    name: "Translucent Edamame & Truffle Dim Sum",
    category: "small-plates",
    description:
      "Steamed crystal pockets stuffed with young edamame, water chestnut crunch, black truffle jus, served with scallion chili dip.",
    price: 460,
    tags: ["Chef's Choice", "Vegan"],
    image:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Delicate, aromatic, and steaming hot",
  },
  {
    id: "s-5",
    name: "Pugliese Burrata & Heirloom Tartine",
    category: "small-plates",
    description:
      "Handcrafted creamy burrata bulb, macerated heirloom cherry tomatoes, basil-pine nut pesto, aged Modena balsamic glaze.",
    price: 490,
    tags: ["Signature", "Veg"],
    image:
      "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Luscious creamy center bursting with freshness",
  },

  // Mains & Oven Bakes
  {
    id: "m-1",
    name: "Margherita Con Bufala Neapolitan",
    category: "mains",
    description:
      "72-hour cold-fermented dough blistered at 450°C, San Marzano D.O.P. tomato sugo, fresh water buffalo mozzarella, torn basil, evoo.",
    price: 590,
    tags: ["Popular", "Veg"],
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Puffy leopard-spotted crust with airy cornicione",
  },
  {
    id: "m-2",
    name: "Truffle Forest Fungi Pizza",
    category: "mains",
    description:
      "White base pizza with fior di latte, roasted wild portobello and king oyster mushrooms, caramelized garlic confit, white truffle oil.",
    price: 680,
    tags: ["Chef's Choice", "Veg"],
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Decadent, earthy, and aromatic",
  },
  {
    id: "m-3",
    name: "Handmade Tagliatelle Cacio e Pepe",
    category: "mains",
    description:
      "Bronze-cut fresh ribbon pasta tossed in starchy emulsion of 24-month Pecorino Romano and freshly toasted crushed Kampot peppercorns.",
    price: 540,
    tags: ["Signature", "Veg"],
    image:
      "https://images.unsplash.com/photo-1621996346565-e3d5d6281292?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Minimalist Italian mastery done to authentic perfection",
  },
  {
    id: "m-4",
    name: "Smoked Paneer Tikka Tortellini Fusion",
    category: "mains",
    description:
      "Artisan Italian pasta pillows filled with smoked malai paneer, bathed in a velvety fenugreek makhani reduction, garlic chive oil.",
    price: 560,
    tags: ["Chef's Choice", "Veg"],
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Contemporary Indian soul wrapped in European culinary art",
  },
  {
    id: "m-5",
    name: "Fire-Roasted Penne All'Arrabbiata",
    category: "mains",
    description:
      "Penne rigate slow-cooked in charred Roma tomatoes, fermented Calabrian chilies, roasted garlic slivers, shaved parmesan.",
    price: 490,
    tags: ["Veg"],
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Bold, piquant, and comforting",
  },

  // Desserts & Patisserie
  {
    id: "d-1",
    name: "ZOA Basque Burnt Cheesecake",
    category: "desserts",
    description:
      "Caramelized dark golden crown giving way to an impossibly creamy, custardy molten center. Accompanied by fresh raspberry rosemary coulis.",
    price: 390,
    tags: ["Chef's Choice", "Signature"],
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop",
    pairingNote: "The signature sweet ending ordered by 85% of guests",
  },
  {
    id: "d-2",
    name: "Artisanal Classic Tiramisu",
    category: "desserts",
    description:
      "Airy Savoiardi ladyfingers soaked in ZOA double espresso and dark cacao liqueur, layered with whipped mascarpone cream.",
    price: 420,
    tags: ["Popular", "Veg"],
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Silky, coffee-forward, perfectly balanced",
  },
  {
    id: "d-3",
    name: "70% Dark Callebaut Lava Fondant",
    category: "desserts",
    description:
      "Warm Belgian dark chocolate cake with an erupting liquid chocolate core, paired with hand-churned vanilla bean gelato.",
    price: 440,
    tags: ["Veg"],
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Rich, decadent, decadent chocolate heaven",
  },
  {
    id: "d-4",
    name: "Saffron & Cardamom Tres Leches",
    category: "desserts",
    description:
      "Ultra-soft sponge cake steeped in three milks infused with Kashmiri saffron strands, green cardamom, toasted Iranian pistachios.",
    price: 380,
    tags: ["Popular", "Chef's Choice"],
    image:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop",
    pairingNote: "Royal Rajasthani heritage meets Latin American patisserie",
  },
];

export const FULL_MENU_DOWNLOAD_DATA = [
  {
    category: "Artisanal Coffee & Tea",
    items: [
      { name: "Signature Cold Brew", price: "₹290" },
      { name: "Spanish Iced Cortado", price: "₹320" },
      { name: "Kyoto Ceremonial Matcha", price: "₹340" },
      { name: "Single Origin Aeropress", price: "₹280" },
      { name: "Rosemary Torched Pour-Over", price: "₹310" },
      { name: "Kashmiri Kahwa Botanical", price: "₹260" },
    ],
  },
  {
    category: "Signature Coolers & Mocktails",
    items: [
      { name: "Wild Hibiscus & Elderflower", price: "₹280" },
      { name: "Yuzu & Kaffir Lime Spritz", price: "₹290" },
      { name: "Smoked Jalapeno Guava Cooler", price: "₹270" },
      { name: "Cucumber Basil Tonic", price: "₹250" },
    ],
  },
  {
    category: "Small Plates & Tapas",
    items: [
      { name: "Truffle & Shaved Parmesan Fries", price: "₹380" },
      { name: "Whipped Lemon Ricotta & Fig Toast", price: "₹420" },
      { name: "Wood-Fired Wild Mushroom Bruschetta", price: "₹390" },
      { name: "Translucent Edamame & Truffle Dim Sum", price: "₹460" },
      { name: "Pugliese Burrata & Heirloom Tartine", price: "₹490" },
      { name: "Charred Corn & Avocado Tostadas", price: "₹410" },
    ],
  },
  {
    category: "Wood-Fired Neapolitan Pizzas",
    items: [
      { name: "Margherita Con Bufala", price: "₹590" },
      { name: "Truffle Forest Fungi Pizza", price: "₹680" },
      { name: "Burrata, Pesto & Sun-Dried Tomato", price: "₹640" },
      { name: "Quattro Formaggi Con Miele", price: "₹660" },
    ],
  },
  {
    category: "Artisanal Pastas & Mains",
    items: [
      { name: "Handmade Tagliatelle Cacio e Pepe", price: "₹540" },
      { name: "Smoked Paneer Tikka Tortellini Fusion", price: "₹560" },
      { name: "Fire-Roasted Penne All'Arrabbiata", price: "₹490" },
      { name: "Creamy Wild Porcini Risotto", price: "₹590" },
    ],
  },
  {
    category: "Patisserie & Desserts",
    items: [
      { name: "ZOA Basque Burnt Cheesecake", price: "₹390" },
      { name: "Artisanal Classic Tiramisu", price: "₹420" },
      { name: "70% Dark Callebaut Lava Fondant", price: "₹440" },
      { name: "Saffron & Cardamom Tres Leches", price: "₹380" },
      { name: "Hand-Churned Pistachio Gelato", price: "₹260" },
    ],
  },
];
