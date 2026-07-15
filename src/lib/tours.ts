import cityImg from "@/assets/tour-city.jpg";
import hikingImg from "@/assets/tour-hiking.jpg";
import wineImg from "@/assets/tour-wine.jpg";
import atvImg from "@/assets/tour-atv.jpg";
import transferImg from "@/assets/tour-transfer.jpg";
import privateImg from "@/assets/tour-private.jpg";
import groupImg from "@/assets/tour-group.jpg";

export type Tour = {
  slug: string;
  title: string;
  short: string;
  long: string;
  image: string;
  highlights: string[];
};

export const tours: Tour[] = [
  {
    slug: "city-tours",
    title: "Batumi, Tbilisi & Kutaisi City Tours",
    short: "Walking histories through the heart of Georgia's most beloved cities.",
    long:
      "Explore the colorful facades of Batumi's old town, the winding lanes of Tbilisi's Abanotubani, and the ancient Bagrati Cathedral above Kutaisi — each led by guides who grew up walking these streets.",
    image: cityImg,
    highlights: ["Old town walks", "Local guides", "Half & full day"],
  },
  {
    slug: "group-tours",
    title: "Daily & Group Tours",
    short: "Join fellow travelers on scheduled departures every day of the week.",
    long:
      "Small mixed groups, friendly pace, shared discoveries. Perfect for solo travelers and couples who want company on the road without paying private prices.",
    image: groupImg,
    highlights: ["Daily departures", "Small groups", "Great value"],
  },
  {
    slug: "private-tours",
    title: "Private & Individual Tours",
    short: "Tailored itineraries designed around what you actually want to see.",
    long:
      "Tell us what you love — hidden viewpoints, quiet monasteries, off-menu restaurants — and we'll build a route that's yours alone. Pickup from your hotel, pace on your terms.",
    image: privateImg,
    highlights: ["Custom itinerary", "Hotel pickup", "Your pace"],
  },
  {
    slug: "hiking",
    title: "Adjara Mountain Hiking",
    short: "Trek the lush green peaks above Batumi with an experienced local guide.",
    long:
      "From cloud-forest ridges to shepherd huts and hidden waterfalls, the Adjara mountains stay wild just an hour from the coast. Routes for gentle walkers up to full-day summit hikers.",
    image: hikingImg,
    highlights: ["All skill levels", "Guided routes", "Snacks included"],
  },
  {
    slug: "wine-cooking",
    title: "Home Visit: Wine Tasting & Cooking Masterclass",
    short: "Step inside a local home for khachapuri, khinkali and family-reserve wine.",
    long:
      "This is the tour our guests write home about. A family welcomes you into their kitchen for a hands-on Georgian cooking class, followed by a supra feast with homemade wine, toasts, and stories.",
    image: wineImg,
    highlights: ["Hands-on cooking", "Homemade wine", "Real Georgian hospitality"],
  },
  {
    slug: "atv",
    title: "ATV / Off-Road Mountain Adventures",
    short: "High-adrenaline quad-bike trails on ridges only reachable by 4x4.",
    long:
      "Ride mud tracks and switchbacks above Batumi to panoramas most visitors never see. Full safety briefing, gear provided, guide leading the pack.",
    image: atvImg,
    highlights: ["Gear provided", "All levels welcome", "Panoramic ridges"],
  },
  {
    slug: "transfers",
    title: "Airport Transfers (All Airports)",
    short: "Reliable, comfortable pickup from Batumi, Kutaisi and Tbilisi airports.",
    long:
      "Flight tracked, driver waiting with a name sign, fixed fair price. Available 24/7 for early arrivals and late-night landings.",
    image: transferImg,
    highlights: ["24/7 service", "Flight tracking", "Fixed price"],
  },
];
