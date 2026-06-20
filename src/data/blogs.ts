import type { BlogPost } from "@/types";

const blogCoverImages: Record<string, { coverImage: string; imageAlt: string }> = {
  "best-time-to-visit-rara-lake": { coverImage: "/images/karnali/rara-lake.jpg", imageAlt: "Panoramic view of Rara Lake in Karnali" },
  "how-to-reach-rara-lake-from-surkhet": { coverImage: "/images/destinations/rara-lake-camping-sunrise.png", imageAlt: "Camping beside Rara Lake at sunrise" },
  "surkhet-to-rara-lake-jeep-route-guide": { coverImage: "/images/destinations/vehicle-rental-car-jeep-van-bus.png", imageAlt: "Car, jeep, van and bus rental options" },
  "vehicle-rental-in-surkhet-guide": { coverImage: "/images/destinations/car-rental-nepal-with-driver.png", imageAlt: "Vehicle rental in Nepal with driver" },
  "jeep-rental-for-karnali-routes": { coverImage: "/images/destinations/vehicle-rental-car-jeep-van-bus.png", imageAlt: "Jeep rental from Surkhet for Karnali routes" },
  "things-to-know-before-traveling-to-karnali": { coverImage: "/images/destinations/himalayan-trekking-adventure.png", imageAlt: "Himalayan trekking route in Nepal" },
  "dailekh-heritage-eternal-flame-tour-guide": { coverImage: "/images/destinations/karnali-cultural-temple-mountain.png", imageAlt: "Cultural heritage temple in Karnali mountain region" },
  "dolpo-trek-planning-guide": { coverImage: "/images/destinations/himalayan-trekking-adventure.png", imageAlt: "Himalayan trekking route in Nepal" },
  "corporate-travel-vehicle-rental-karnali": { coverImage: "/images/destinations/car-rental-nepal-with-driver.png", imageAlt: "Vehicle rental in Nepal with driver" },
};

function post(
  slug: string,
  title: string,
  category: string,
  targetKeyword: string,
  readingTime: string,
  excerpt: string,
  outline: string[],
): BlogPost {
  return {
    slug,
    title,
    category,
    targetKeyword,
    seoTitle: `${title} | Bheri Karnali Tours & Travels`,
    seoDescription: excerpt,
    readingTime,
    excerpt,
    outline,
    content: outline.map((item) => `${item}: Practical guidance depends on season, route condition, vehicle choice, and group needs. Contact Bheri Karnali Tours & Travels for current Karnali travel support.`),
    coverImage: blogCoverImages[slug]?.coverImage || "/images/karnali/rara-lake.jpg",
    imageAlt: blogCoverImages[slug]?.imageAlt || "Karnali travel planning image",
  };
}

export const blogPosts: BlogPost[] = [
  post("best-time-to-visit-rara-lake", "Best Time to Visit Rara Lake", "Rara Lake", "best time to visit Rara Lake", "5 min read", "Season-by-season guidance for planning a comfortable, scenic Rara Lake tour from Surkhet.", ["Spring travel window", "Autumn travel window", "Monsoon and winter cautions", "How buffer days help"]),
  post("how-to-reach-rara-lake-from-surkhet", "How to Reach Rara Lake from Surkhet", "Route Guide", "how to reach Rara Lake from Surkhet", "6 min read", "A practical route overview covering driving days, stopovers, and vehicle planning for the Rara route.", ["Surkhet as gateway", "Suggested stopovers", "Vehicle recommendation", "Road condition notes"]),
  post("surkhet-to-rara-lake-jeep-route-guide", "Surkhet to Rara Lake Jeep Route Guide", "Vehicle Rental", "Surkhet to Rara Lake Jeep route", "6 min read", "What to know before booking a Jeep for the Surkhet to Rara Lake route.", ["Why Jeep matters", "Group and luggage planning", "Driver experience", "Quote factors"]),
  post("rara-lake-tour-cost-guide", "Rara Lake Tour Cost Guide", "Cost Guide", "Rara Lake tour cost", "5 min read", "Understand the main factors that influence Rara Lake tour pricing without fake fixed-price promises.", ["Vehicle type", "Number of days", "Accommodation level", "Group size", "Season and road condition"]),
  post("phoksundo-lake-travel-guide", "Phoksundo Lake Travel Guide", "Phoksundo", "Phoksundo Lake travel guide", "7 min read", "A practical guide to planning a remote Phoksundo Lake adventure with flexible route support.", ["Access options", "Remote travel expectations", "Best season", "Safety and buffer days"]),
  post("rara-lake-vs-phoksundo-lake", "Rara Lake vs Phoksundo Lake", "Trip Planning", "Rara Lake vs Phoksundo Lake", "5 min read", "Compare Karnali's two famous lake adventures and choose the route that fits your time and comfort level.", ["Accessibility", "Travel style", "Difficulty", "Best for families or trekkers"]),
  post("best-places-to-visit-in-karnali-province", "Best Places to Visit in Karnali Province", "Destinations", "places to visit in Karnali Province", "8 min read", "Explore Rara, Phoksundo, Jumla, Dailekh, Humla, Dolpo, Surkhet, and more.", ["Lake destinations", "Cultural routes", "Remote adventures", "Gateway towns"]),
  post("vehicle-rental-in-surkhet-guide", "Vehicle Rental in Surkhet Guide", "Vehicle Rental", "vehicle rental in Surkhet", "6 min read", "How to choose cars, Jeeps, Hiace, Bolero, buses, and 4WD vehicles from Surkhet.", ["Vehicle types", "Route-based pricing", "Driver availability", "How to request a quote"]),
  post("jeep-rental-for-karnali-routes", "Jeep Rental for Karnali Routes", "Vehicle Rental", "Jeep rental for Karnali routes", "5 min read", "Why Jeep rental is commonly preferred for Rara, Jumla, Kalikot, and remote Karnali roads.", ["Rara route", "Jumla route", "4WD need", "Comfort and luggage"]),
  post("things-to-know-before-traveling-to-karnali", "Things to Know Before Traveling to Karnali", "Preparation", "Karnali travel tips", "6 min read", "Important planning notes about roads, timing, packing, vehicle choice, and flexibility.", ["Road conditions", "Packing", "Communication", "Buffer days"]),
  post("karnali-river-rafting-guide", "Karnali River Rafting Guide", "Adventure", "Karnali River rafting guide", "5 min read", "A practical introduction to rafting-related travel support and safe group logistics.", ["Season", "Certified operators", "Transfers", "Safety notes"]),
  post("surkhet-valley-travel-guide", "Surkhet Valley Travel Guide", "Surkhet", "Surkhet Valley travel guide", "4 min read", "How to plan short sightseeing, airport pickup, and local movement in Surkhet.", ["Local sightseeing", "Airport pickup", "Short stays", "Vehicle options"]),
  post("dailekh-heritage-eternal-flame-tour-guide", "Dailekh Heritage and Eternal Flame Tour Guide", "Heritage", "Dailekh Eternal Flame tour", "5 min read", "Why Dailekh is one of the best short cultural and religious trips from Surkhet.", ["Who should go", "Suggested timing", "Vehicle options", "Surkhet extension"]),
  post("jumla-sinja-valley-cultural-travel-guide", "Jumla Sinja Valley Cultural Travel Guide", "Culture", "Jumla Sinja Valley tour", "6 min read", "Plan a cultural and educational route through Jumla and Sinja Valley.", ["Cultural value", "Student tours", "Apple season", "Road planning"]),
  post("dolpo-trek-planning-guide", "Dolpo Trek Planning Guide", "Trekking", "Dolpo trek planning", "7 min read", "Understand route flexibility, permits, access, and preparation for Dolpo trekking.", ["Access planning", "Permits", "Trek difficulty", "Buffer days"]),
  post("humla-limi-valley-travel-guide", "Humla Limi Valley Travel Guide", "Remote Adventure", "Humla Limi Valley travel", "7 min read", "How to think about remote Humla and Limi Valley adventure planning.", ["Access complexity", "Best season", "Expedition timing", "Safety planning"]),
  post("student-tour-ideas-in-karnali", "Student Tour Ideas in Karnali", "Student Tours", "student tour Karnali", "5 min read", "Educational tour ideas for schools and colleges exploring Karnali.", ["Rara learning route", "Dailekh heritage", "Jumla culture", "Group vehicle planning"]),
  post("family-tour-guide-for-rara-lake", "Family Tour Guide for Rara Lake", "Family Travel", "Rara Lake family tour", "5 min read", "Plan a comfortable Rara Lake family tour with realistic pacing and vehicle support.", ["Family pacing", "Vehicle comfort", "Packing", "Buffer days"]),
  post("corporate-travel-vehicle-rental-karnali", "Corporate Travel and Vehicle Rental in Karnali", "Official Travel", "corporate vehicle rental Karnali", "5 min read", "Vehicle and route planning tips for official, corporate, NGO, and project travel in Karnali.", ["Field visits", "Vehicle selection", "Schedule planning", "Route support"]),
  post("nepalgunj-to-surkhet-to-rara-travel-plan", "Nepalgunj to Surkhet to Rara Travel Plan", "Route Guide", "Nepalgunj to Surkhet to Rara", "6 min read", "How Nepalgunj, Surkhet, and Rara can connect in a practical western Nepal travel plan.", ["Nepalgunj transit", "Surkhet gateway", "Rara route", "Vehicle coordination"]),
];
