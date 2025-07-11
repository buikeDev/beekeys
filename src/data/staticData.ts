import {
  Feature,
  TrustCompany,
  UserTypeCard,
  HowItWorksStep,
  TrustIndicator,
  HeroContent,
} from "../types";
import { FeatureCard, Service, Testimonial, SearchHeroContent } from "../types";

export const heroContent: HeroContent = {
  badge: "Over 200+ verified business",
  title: "Your Business Deserves More Than Just an Address",
  subtitle: "",
  description:
    "Get your unique Beekey handle and make it easier for customers to find, remember, and trust your business in the real world",
};

export const features: Feature[] = [
  {
    id: "1",
    icon: "key",
    title: "Unique business handle",
    description:
      "Every business gets a memorable Beekey handle for social media, but for real-world businesses. Easy to remember, share, and find.",
    color: "yellow",
    benefits: ["Trademark protected"],
  },
  {
    id: "2",
    icon: "shield-check",
    title: "Verified & Trusted",
    description:
      "Owner created listings with manual verification. No fake reviews, no impersonators, just authentic businesses you can trust",
    color: "green",
    benefits: ["100% Verified"],
  },
  {
    id: "3",
    icon: "search",
    title: "Made for Search",
    description:
      "Clinic, café, or the local branch of your favorite franchise, our search is built to find what your customers need. Fast",
    color: "orange",
    benefits: ["Fast Search Options"],
  },
  {
    id: "4",
    icon: "zap",
    title: "Fast & Accurate",
    description:
      "Skip the guesswork. Direct access to verified contact information, hours, and services  updated by business owners themselves.",
    color: "blue",
    benefits: ["Real-time updates"],
  },
];

export const trustCompanies: TrustCompany[] = [
  { id: "1", name: "Logoipsum", logo: "/icons/clubhart.png" },
  { id: "2", name: "Logoipsum", logo: "/icons/Lightining.png" },
  { id: "3", name: "Logoipsum", logo: "/icons/shield.png" },
  { id: "4", name: "Logoipsum", logo: "/icons/wave.png" },
  { id: "5", name: "Logoipsum", logo: "/icons/globe.png" },
];

export const userTypeCards: UserTypeCard[] = [
  {
    id: "1",
    type: "business-seeker",
    title: "I'm Looking for Businesses",
    description:
      "Users can easily discover verified businesses in their area. Search, explore, and connect easily and accurately with trusted businesses and services around them.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    ctaText: "Get Started",
    ctaColor: "yellow",
  },
  {
    id: "2",
    type: "business-owner",
    title: "I Own a Business",
    description:
      "Small, Medium and Large enterprises can get verified and list their business information in simple effective ways across all locations. Both on and offline.",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    ctaText: "Get Started",
    ctaColor: "yellow",
  },
  {
    id: "3",
    type: "affiliate",
    title: "Earn with us",
    description:
      "This is the Affiliate Earnings Program that allows approved registrants to earn commissions from promoting leads to joining Beekeys for registered users.",
    image:
      "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400",
    ctaText: "Get Started",
    ctaColor: "yellow",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "1",
    step: 1,
    title: "Search & Browse",
    description:
      "Find businesses by category, location, or search using their Beekey handle like @coffeeshop.",
    icon: "search",
  },
  {
    id: "2",
    step: 2,
    title: "Verify Trust",
    description:
      "Look for our verification badges. Every business is manually reviewed and owner-approved.",
    icon: "shield-check",
  },
  {
    id: "3",
    step: 3,
    title: "Connect & Share",
    description:
      "Get verified contact info, directions, and easily share the Beekey handle with friends.",
    icon: "share",
  },
];

export const trustIndicators: TrustIndicator[] = [
  {
    id: "1",
    icon: "shield",
    title: "Trademark Protected",
    description: "All Beekey handles are trademark protected",
  },
  {
    id: "2",
    icon: "check-circle",
    title: "Manual Verification",
    description: "Every business is manually verified",
  },
  {
    id: "3",
    icon: "globe",
    title: "Global Network",
    description: "Available in 50+ countries worldwide",
  },
  {
    id: "4",
    icon: "zap",
    title: "Easy Integration",
    description: "Simple setup and integration process",
  },
];

export const searchHeroContent: SearchHeroContent = {
  badge: "Over 200+ verified business",
  title:
    "Find and connect with trusted places, businesses, and services around you",
  description:
    "From leisure and cities to dining, groceries and recreation, we help you LOCAL spend to stand out in a CONTINENTAL Village. A life 100% more than just Quality or Share.",
};

export const featureCards: FeatureCard[] = [
  {
    id: "1",
    title: "Verified & Trusted",
    description:
      "All businesses are manually verified and owner-approved for authenticity.",
    backgroundImage:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    overlayColor: "bg-black/60",
  },
  {
    id: "2",
    title: "Made for Search",
    description:
      "Optimized search functionality to help you find exactly what you need.",
    backgroundImage:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
    overlayColor: "bg-black/60",
  },
  {
    id: "3",
    title: "Fast & Accurate",
    description: "Lightning-fast results with accurate business information.",
    backgroundImage:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    overlayColor: "bg-black/60",
  },
  {
    id: "4",
    title: "Fast & Reliable",
    description: "Consistent performance and reliable data you can trust.",
    backgroundImage:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    overlayColor: "bg-black/60",
  },
];

export const services: Service[] = [
  {
    id: "1",
    number: "01",
    title: "Business/Service/Brand Owner",
    description:
      "Own, Operate and grow businesses can easily showcase their business information in simple effective ways across all locations. Both on and offline.",
    ctaText: "Explore more",
    ctaLink: "/business-owner",
  },
  {
    id: "2",
    number: "02",
    title: "Contributor",
    description:
      "Help build the most comprehensive local business directory by contributing accurate business information and earning rewards.",
    ctaText: "Explore more",
    ctaLink: "/contributor",
  },
  {
    id: "3",
    number: "03",
    title: "Registrar",
    description:
      "Join as a business service registrar and earn commissions by helping businesses get verified and listed on our platform.",
    ctaText: "Explore more",
    ctaLink: "/registrar",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Finally, a directory that addresses the fake business listing problem! The trademark backing is genius. The client interface makes it easy to find what I need quickly. I'm offering, I can see this being really useful for local SEO and brand protection.",
    author: "Esther Howard",
    role: "Business Owner",
  },
];
