import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { tourPackages } from "../src/data/packages";
import { destinations } from "../src/data/destinations";
import { vehicles } from "../src/data/vehicles";

const prisma = new PrismaClient();

async function main() {
  await prisma.destination.createMany({
    skipDuplicates: true,
    data: [
      {
        name: "Rara Lake",
        slug: "rara-lake",
        district: "Mugu",
        category: "Lake",
        shortDescription: "Nepal's largest lake and Karnali's signature destination.",
        description: "A pristine alpine lake route for families, groups, photographers, and domestic travelers.",
        bestSeason: "March to May, September to November",
        altitude: "2,990 m",
        difficulty: "Moderate",
        image: "/images/karnali-hero.png",
        isFeatured: true,
      },
      {
        name: "Shey Phoksundo",
        slug: "shey-phoksundo",
        district: "Dolpa",
        category: "Lake and Trek",
        shortDescription: "A remote turquoise lake with dramatic cliffs and deep Dolpo culture.",
        description: "A premium remote adventure destination requiring careful transport and route planning.",
        bestSeason: "April to June, September to October",
        difficulty: "Remote Adventure",
        image: "/images/karnali-hero.png",
        isFeatured: true,
      },
      {
        name: "Surkhet Valley",
        slug: "surkhet-valley",
        district: "Surkhet",
        category: "Gateway",
        shortDescription: "The practical gateway for Karnali tours and vehicle rentals.",
        description: "A convenient base for sightseeing, pickups, official travel, and western Nepal routes.",
        bestSeason: "Year round",
        difficulty: "Easy",
        image: "/images/karnali-hero.png",
        isFeatured: true,
      },
      {
        name: "Dailekh",
        slug: "dailekh",
        district: "Dailekh",
        category: "Heritage",
        shortDescription: "A religious and cultural route known for heritage sites and sacred flame areas.",
        description: "An accessible route from Surkhet for families, religious groups, and short holidays.",
        bestSeason: "October to May",
        difficulty: "Easy",
        image: "/images/karnali-hero.png",
      },
    ],
  });

  await prisma.tourPackage.createMany({
    skipDuplicates: true,
    data: [
      {
        title: "Rara Lake Tour from Surkhet",
        slug: "rara-lake-tour-from-surkhet",
        destination: "Rara Lake, Mugu",
        duration: "5 nights / 6 days",
        difficulty: "Moderate",
        startingPoint: "Surkhet",
        shortDescription: "A signature Karnali lake tour through mountain roads, forests, and villages.",
        description: "A practical Rara Lake tour package with vehicle planning, route timing, and buffer guidance.",
        groupSize: "2-14 guests",
        bestSeason: "March to May, September to November",
        includes: ["Vehicle coordination", "Itinerary planning", "Driver support"],
        excludes: ["Personal expenses", "Travel insurance", "Meals unless quoted"],
        itinerary: [
          { day: 1, title: "Surkhet to Kalikot" },
          { day: 2, title: "Kalikot to Talcha" },
          { day: 3, title: "Rara Lake exploration" },
          { day: 4, title: "Buffer and return planning" },
        ],
        images: ["/images/karnali-hero.png"],
        isFeatured: true,
      },
      {
        title: "Shey Phoksundo Lake Adventure",
        slug: "shey-phoksundo-lake-adventure",
        destination: "Dolpo",
        duration: "7 nights / 8 days",
        difficulty: "Remote Adventure",
        startingPoint: "Surkhet or Nepalgunj",
        shortDescription: "A premium remote adventure to Phoksundo Lake.",
        description: "Designed for travelers who need careful transport, trekking, and buffer-day coordination.",
        groupSize: "2-10 guests",
        bestSeason: "April to June, September to October",
        includes: ["Route consultation", "Vehicle and flight coordination", "Local planning"],
        excludes: ["Permits unless quoted", "Personal gear", "Emergency evacuation"],
        itinerary: [{ day: 1, title: "Route briefing and transfer coordination" }],
        images: ["/images/karnali-hero.png"],
        isFeatured: true,
      },
      {
        title: "Surkhet Valley Sightseeing",
        slug: "surkhet-valley-sightseeing",
        destination: "Surkhet",
        duration: "1 day",
        difficulty: "Easy",
        startingPoint: "Surkhet",
        shortDescription: "A comfortable sightseeing day around Surkhet valley.",
        description: "Ideal for families, officials, and short-stay visitors needing a clean local plan.",
        groupSize: "1-30 guests",
        bestSeason: "Year round",
        includes: ["Private vehicle options", "Local route planning"],
        excludes: ["Entry fees", "Meals"],
        images: ["/images/karnali-hero.png"],
      },
      {
        title: "Dailekh Heritage and Flame Tour",
        slug: "dailekh-heritage-flame-tour",
        destination: "Dailekh",
        duration: "2 nights / 3 days",
        difficulty: "Easy",
        startingPoint: "Surkhet",
        shortDescription: "A short heritage route with religious and cultural highlights.",
        description: "A group-friendly Dailekh plan with vehicle rental from Surkhet.",
        groupSize: "2-25 guests",
        bestSeason: "October to May",
        includes: ["Vehicle planning", "Route support"],
        excludes: ["Personal expenses"],
        images: ["/images/karnali-hero.png"],
      },
      {
        title: "Jumla Sinja Valley Cultural Tour",
        slug: "jumla-sinja-valley-cultural-tour",
        destination: "Jumla and Sinja",
        duration: "4 nights / 5 days",
        difficulty: "Easy",
        startingPoint: "Surkhet",
        shortDescription: "A culture-focused tour through Jumla and historic Sinja Valley.",
        description: "Built for education groups, cultural travelers, and official visits.",
        groupSize: "2-18 guests",
        bestSeason: "March to November",
        includes: ["Itinerary planning", "Vehicle support"],
        excludes: ["Meals unless quoted"],
        images: ["/images/karnali-hero.png"],
      },
      {
        title: "Karnali River Rafting Experience",
        slug: "karnali-river-rafting-experience",
        destination: "Karnali River corridor",
        duration: "3 nights / 4 days",
        difficulty: "Challenging",
        startingPoint: "Surkhet",
        shortDescription: "Rafting, camping, and group logistics on the Karnali River corridor.",
        description: "A youth, student, and corporate adventure plan with transfer support.",
        groupSize: "6-30 guests",
        bestSeason: "October to April",
        includes: ["Transfer planning", "Group logistics"],
        excludes: ["Specialized rafting operator fees unless quoted"],
        images: ["/images/karnali-hero.png"],
      },
      {
        title: "Humla Limi Valley Adventure",
        slug: "humla-limi-valley-adventure",
        destination: "Humla",
        duration: "10 nights / 11 days",
        difficulty: "Remote Adventure",
        startingPoint: "Surkhet or Nepalgunj",
        shortDescription: "A serious remote Himalayan route for experienced groups.",
        description: "Prepared for expedition-style planning, buffer days, and remote logistics.",
        groupSize: "2-10 guests",
        bestSeason: "May to October",
        includes: ["Route planning", "Remote logistics consultation"],
        excludes: ["Permits", "Flights", "Emergency support unless quoted"],
        images: ["/images/karnali-hero.png"],
      },
      {
        title: "Dolpo Trekking Experience",
        slug: "dolpo-trekking-experience",
        destination: "Dolpo",
        duration: "8 nights / 9 days",
        difficulty: "Remote Adventure",
        startingPoint: "Surkhet or Nepalgunj",
        shortDescription: "A remote Dolpo trekking plan with practical logistics.",
        description: "For trekkers who want a realistic Dolpo plan with transport coordination.",
        groupSize: "2-12 guests",
        bestSeason: "May to October",
        includes: ["Route planning", "Support coordination"],
        excludes: ["Permits", "Guide fees unless quoted"],
        images: ["/images/karnali-hero.png"],
      },
    ],
  });

  await prisma.vehicle.createMany({
    skipDuplicates: true,
    data: [
      {
        name: "Scorpio Jeep",
        slug: "scorpio-jeep",
        type: "Jeep",
        seatingCapacity: "6-7 passengers",
        luggageCapacity: "Medium",
        bestFor: "Rara, Jumla, Kalikot, Dailekh, and official field visits",
        description: "A comfortable Jeep option for Karnali highways and mixed road conditions.",
        withDriverAvailable: true,
        fourWheelDrive: true,
        image: "/images/karnali-hero.png",
      },
      {
        name: "4WD Jeep for Karnali Route",
        slug: "4wd-jeep-karnali-route",
        type: "4WD",
        seatingCapacity: "5-7 passengers",
        luggageCapacity: "Medium",
        bestFor: "Remote Karnali routes and expedition support",
        description: "A stronger vehicle choice for difficult roads and remote route planning.",
        withDriverAvailable: true,
        fourWheelDrive: true,
        image: "/images/karnali-hero.png",
      },
      {
        name: "Car for City and Highway",
        slug: "car-city-highway",
        type: "Car",
        seatingCapacity: "3-4 passengers",
        luggageCapacity: "Small",
        bestFor: "Airport pickup, Surkhet sightseeing, Nepalgunj, and Dailekh",
        description: "A clean private car option for city, airport, and highway travel.",
        withDriverAvailable: true,
        fourWheelDrive: false,
        image: "/images/karnali-hero.png",
      },
      {
        name: "Hiace for Group Travel",
        slug: "hiace-group-travel",
        type: "Hiace",
        seatingCapacity: "12-15 passengers",
        luggageCapacity: "Medium",
        bestFor: "Student tours, family groups, team travel, and official groups",
        description: "A practical group vehicle for comfortable regional travel.",
        withDriverAvailable: true,
        fourWheelDrive: false,
        image: "/images/karnali-hero.png",
      },
      {
        name: "Bolero Pickup",
        slug: "bolero-pickup",
        type: "Bolero",
        seatingCapacity: "4-6 passengers",
        luggageCapacity: "High",
        bestFor: "Village roads, rural access, luggage-heavy project travel",
        description: "A strong rural-route vehicle for field work and practical transport.",
        withDriverAvailable: true,
        fourWheelDrive: false,
        image: "/images/karnali-hero.png",
      },
      {
        name: "Tourist Bus",
        slug: "tourist-bus",
        type: "Bus",
        seatingCapacity: "25-40 passengers",
        luggageCapacity: "High",
        bestFor: "Schools, religious groups, events, and large tours",
        description: "A group travel option for large passenger counts and planned routes.",
        withDriverAvailable: true,
        fourWheelDrive: false,
        image: "/images/karnali-hero.png",
      },
    ],
  });

  await prisma.destination.createMany({
    skipDuplicates: true,
    data: destinations.map((destination) => ({
      name: destination.name,
      slug: destination.slug,
      district: destination.district,
      province: destination.province || "Karnali",
      category: destination.category || destination.region,
      shortDescription: destination.shortDescription || destination.summary,
      description: destination.description || destination.summary,
      bestSeason: destination.bestSeason,
      altitude: destination.altitude,
      difficulty: destination.difficulty,
      image: destination.image,
      isFeatured: Boolean(destination.featured),
      isActive: destination.active ?? true,
    })),
  });

  await prisma.tourPackage.createMany({
    skipDuplicates: true,
    data: tourPackages.map((tour) => ({
      title: tour.title,
      slug: tour.slug,
      destination: tour.destination,
      duration: tour.duration,
      difficulty: tour.difficulty,
      startingPoint: tour.startingPoint,
      endingPoint: tour.endingPoint,
      shortDescription: tour.shortDescription || tour.summary,
      description: tour.description || tour.summary,
      priceFrom: undefined,
      currency: "NPR",
      groupSize: tour.groupSize,
      bestSeason: tour.bestSeason,
      includes: tour.includes || [],
      excludes: tour.excludes || [],
      itinerary: tour.itinerary.map((item, index) => ({ day: index + 1, title: item })),
      images: [tour.image],
      isFeatured: Boolean(tour.featured),
      isActive: tour.active ?? true,
    })),
  });

  await prisma.vehicle.createMany({
    skipDuplicates: true,
    data: vehicles.map((vehicle) => ({
      name: vehicle.name,
      slug: vehicle.slug,
      type: vehicle.type || vehicle.name,
      seatingCapacity: vehicle.seatingCapacity,
      luggageCapacity: vehicle.luggageCapacity,
      bestFor: vehicle.bestFor || vehicle.bestUseCase,
      description: vehicle.description || vehicle.bestUseCase,
      pricePerDay: undefined,
      pricePerKm: undefined,
      withDriverAvailable: vehicle.withDriverAvailable ?? vehicle.withDriver,
      fourWheelDrive: Boolean(vehicle.fourWheelDrive),
      image: vehicle.image,
      isActive: vehicle.active ?? true,
    })),
  });

  await prisma.testimonial.createMany({
    skipDuplicates: true,
    data: [
      {
        name: "Prakash B.",
        location: "Surkhet",
        rating: 5,
        message: "The team planned our Rara route clearly and arranged the right vehicle for our family.",
        packageName: "Rara Lake Tour from Surkhet",
        isPublished: true,
      },
      {
        name: "Nisha K.",
        location: "Kathmandu",
        rating: 5,
        message: "Communication was fast and the driver knew the Surkhet to Dailekh route well.",
        packageName: "Dailekh Heritage and Flame Tour",
        isPublished: true,
      },
    ],
  });

  if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
    const existingAdmin = await prisma.adminUser.findUnique({
      where: { email: process.env.ADMIN_EMAIL },
      select: { id: true },
    });

    if (!existingAdmin) {
      await prisma.adminUser.create({
        data: {
          name: "Default Admin",
          email: process.env.ADMIN_EMAIL,
          passwordHash: await bcrypt.hash(process.env.ADMIN_PASSWORD, 12),
          role: "ADMIN",
          isActive: true,
        },
      });
      console.log(`Created default admin: ${process.env.ADMIN_EMAIL}`);
    } else {
      console.log(`Default admin already exists: ${process.env.ADMIN_EMAIL}`);
    }
  } else {
    console.warn("ADMIN_EMAIL or ADMIN_PASSWORD missing. Skipping default admin creation.");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
