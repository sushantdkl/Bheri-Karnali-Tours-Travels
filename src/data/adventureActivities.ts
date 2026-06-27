export type AdventureActivity = {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  imageAlt: string;
  estimatedPrice: string;
  priceNote: string;
  bestFor: string[];
  duration: string;
  location: string;
  bestSeason: string;
  difficulty: string;
  thingsNeeded: string[];
  safetyNotes: string[];
  includedSupport: string[];
  ctaLabel: string;
  bookingHref: string;
  whatsappMessage: string;
  isFeatured: boolean;
  isActive: boolean;
};

export const adventureActivities: AdventureActivity[] = [
  {
    id: "activity-hiking-trekking",
    title: "Hiking & Trekking",
    slug: "hiking",
    category: "Hiking / Trekking",
    shortDescription: "Plan short Surkhet hikes or multi-day Karnali trekking routes with practical local guidance.",
    description:
      "Hiking and trekking in Karnali can range from short local trails around Surkhet to Rara, Phoksundo, Dolpo, and other remote routes. Cost depends on route, guide, transport, permits, meals, stays, and group size.",
    coverImage: "/images/destinations/himalayan-trekking-adventure.png",
    imageAlt: "Hiking and trekking adventure in the Himalayan region of Nepal",
    estimatedPrice: "Custom quote",
    priceNote:
      "Price depends on route, guide, transport, permits, meals, stay and group size. Official park or permit fees may apply, and Rara or Shey-Phoksundo National Park entry fees can differ for Nepali, SAARC, and foreign visitors.",
    bestFor: ["Families", "Trekkers", "Student groups", "Photo travelers"],
    duration: "Half-day to multi-day",
    location: "Surkhet, Rara, Phoksundo, Dolpo and Karnali routes",
    bestSeason: "Spring and autumn",
    difficulty: "Easy to challenging",
    thingsNeeded: ["Comfortable hiking shoes", "Weather-ready jacket", "Water bottle", "Basic first aid", "Valid ID", "Permit budget where required"],
    safetyNotes: ["Route and weather conditions should be checked before travel.", "Remote Karnali routes may require flexible itinerary and local guidance."],
    includedSupport: ["Route planning", "Guide coordination", "Vehicle support", "Permit guidance"],
    ctaLabel: "Plan This Adventure",
    bookingHref: "/booking?activity=hiking",
    whatsappMessage: "Hello Bheri Karnali Tours & Travels, I want to plan a hiking or trekking trip in Karnali.",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "activity-paragliding-surkhet",
    title: "Paragliding in Surkhet",
    slug: "paragliding",
    category: "Air Adventure",
    shortDescription: "Add a tandem paragliding experience above Surkhet valley when weather and operators allow.",
    description:
      "Paragliding in Surkhet is a weather-dependent tandem activity arranged through available operators. Flight timing, safety clearance, wind condition, pilot availability, and optional photo/video affect the final plan.",
    coverImage: "/images/experiences/paragliding-surkhet.jpg",
    imageAlt: "Paragliding experience above Surkhet valley",
    estimatedPrice: "Estimated NPR 2,500-4,500 per person",
    priceNote:
      "Rate depends on group size, operator availability, photo/video option and current season. Confirm latest price before booking.",
    bestFor: ["Couples", "Friends", "First-time flyers", "Short-stay visitors"],
    duration: "Around 15-25 minutes flight time depending conditions",
    location: "Surkhet Valley / operator-supported flying zone",
    bestSeason: "Clear weather days",
    difficulty: "Beginner-friendly tandem activity",
    thingsNeeded: ["Comfortable clothes", "Sports shoes", "Valid ID", "Weather confirmation", "Photo/video budget if needed"],
    safetyNotes: ["Flight depends on weather, wind condition and pilot safety decision.", "Activity should be done only with trained/licensed operators."],
    includedSupport: ["Operator coordination", "Timing guidance", "WhatsApp confirmation"],
    ctaLabel: "Plan This Adventure",
    bookingHref: "/booking?activity=paragliding",
    whatsappMessage: "Hello Bheri Karnali Tours & Travels, I want to ask about paragliding in Surkhet.",
    isFeatured: true,
    isActive: true,
  },
  {
    id: "activity-karnali-river-rafting",
    title: "Karnali River Rafting",
    slug: "rafting",
    category: "River Adventure",
    shortDescription: "Coordinate short rafting experiences or longer expedition-style Karnali river plans.",
    description:
      "Karnali rafting can be a short custom experience or a longer expedition-style river journey. Pricing varies significantly by river section, days, safety team, equipment, food, camping, transport, permits, and group size.",
    coverImage: "/images/karnali/karnali-river.jpg",
    imageAlt: "Karnali river rafting adventure in Nepal",
    estimatedPrice: "Custom group-based quote",
    priceNote:
      "Short rafting experiences and multi-day Karnali rafting expeditions require route-based or group-based quotes. Cost depends on river section, number of days, guide/safety team, transport, meals, camping, equipment and group size.",
    bestFor: ["Adventure groups", "Youth groups", "Corporate retreats", "Student tours"],
    duration: "Short custom experience to multi-day expedition",
    location: "Karnali / Bheri river sections depending plan",
    bestSeason: "October to April for many plans",
    difficulty: "Moderate to advanced depending section",
    thingsNeeded: ["Quick-dry clothes", "Sandals or water shoes", "Towel", "Sunscreen", "Change of clothes", "Waterproof bag"],
    safetyNotes: ["River level and season must be checked before confirming trip.", "Safety gear and experienced rafting team are required."],
    includedSupport: ["Transfer planning", "Operator coordination", "Group logistics", "Safety planning guidance"],
    ctaLabel: "Plan This Adventure",
    bookingHref: "/booking?activity=rafting",
    whatsappMessage: "Hello Bheri Karnali Tours & Travels, I want to ask about Karnali river rafting.",
    isFeatured: true,
    isActive: true,
  },
];
