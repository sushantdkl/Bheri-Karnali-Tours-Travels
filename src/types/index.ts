export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Remote Adventure";

export interface TourPackage {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  difficulty: Difficulty;
  startingPoint: string;
  endingPoint?: string;
  priceFrom: string;
  contactForPrice?: boolean;
  bestSeason?: string;
  groupSize?: string;
  vehicleRecommendation?: string;
  summary: string;
  shortDescription?: string;
  description?: string;
  highlights: string[];
  itinerary: string[];
  includes?: string[];
  excludes?: string[];
  travelNotes?: string[];
  safetyNotes?: string[];
  faqs?: FAQ[];
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  whatsappMessage?: string;
  featured?: boolean;
  active?: boolean;
  bestFor: string[];
  idealFor?: string[];
  image: string;
  coverImage?: string;
  galleryImages?: string[];
  imageAlt?: string;
}

export interface Destination {
  slug: string;
  name: string;
  region: string;
  district?: string;
  province?: string;
  category?: string;
  summary: string;
  shortDescription?: string;
  description?: string;
  bestSeason: string;
  altitude?: string;
  difficulty?: string;
  idealFor?: string[];
  travelStyle?: string;
  highlights?: string[];
  accessNotes?: string;
  nearbyPackages?: string[];
  vehicleSupport?: string;
  seoTitle?: string;
  seoDescription?: string;
  active?: boolean;
  featured?: boolean;
  image: string;
  coverImage?: string;
  galleryImages?: string[];
  imageAlt?: string;
}

export interface Vehicle {
  slug: string;
  name: string;
  type?: string;
  seatingCapacity: string;
  luggageCapacity?: string;
  bestUseCase: string;
  bestFor?: string;
  description?: string;
  withDriver: boolean;
  withDriverAvailable?: boolean;
  fourWheelDrive?: boolean;
  routes: string[];
  priceDisplay?: string;
  priceNote?: string;
  features?: string[];
  faqs?: FAQ[];
  seoTitle?: string;
  seoDescription?: string;
  active?: boolean;
  image: string;
  imageAlt?: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: "General" | "Vehicle Rental" | "Packages";
}

export interface Inquiry {
  fullName: string;
  phone: string;
  email?: string;
  tripType: string;
  destination: string;
  travelDate: string;
  people: string;
  message: string;
  preferredContact: "Call" | "WhatsApp" | "Email";
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  targetKeyword?: string;
  seoTitle?: string;
  seoDescription?: string;
  readingTime: string;
  outline?: string[];
  content: string[];
  coverImage?: string;
  imageAlt?: string;
}

export interface RentalRoute {
  slug: string;
  routeName: string;
  bestVehicleType: string;
  travelNature: string;
  roadConditionNote: string;
  quoteCta: string;
  whatsappMessage: string;
}

export interface GalleryItem {
  title: string;
  category: "Destinations" | "Tours" | "Vehicles" | "Culture" | "Adventure";
  location: string;
  image?: string;
  alt: string;
  description: string;
}
