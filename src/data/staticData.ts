import {
  Feature,
  TrustCompany,
  UserTypeCard,
  HowItWorksStep,
  TrustIndicator,
  HeroContent,
  NigeriaHero,
  GovernmentService,
  BusinessListing,
  NigerianState,
} from "../types";
import {
  FeatureCard,
  Service,
  Testimonial,
  SearchHeroContent,
  ContributorHero,
  ActionCard,
  BenefitItem,
  ImpactCTA,
} from "../types";

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
    title: `Business/Service/Brand Owner`,
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

export const contributorHero: ContributorHero = {
  title: "Empower Local Businesses. Earn as a Beekeys Contributor.",
  description:
    "Join our community of local business advocates and earn rewards while helping businesses thrive. As a Beekeys Contributor, you'll help verify business information, add valuable insights, and build trust in your local community.",
  ctaText: "Get Started",
  image: "/images/hero.jpg",
};

export const actionCards: ActionCard[] = [
  {
    id: "1",
    title: "Photograph Local Businesses and Landmarks",
    description:
      "Capture high-quality photos of local businesses, storefronts, and landmarks to help customers find and recognize them easily.",
    backgroundImage:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "2",
    title: "Add Descriptive Data",
    description:
      "Provide detailed information about business hours, services, contact details, and other relevant information to help customers.",
    backgroundImage:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "3",
    title: "Share Local Insights",
    description:
      "Share your local knowledge about businesses, events, and community insights that help others discover great local services.",
    backgroundImage:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const benefitItems: BenefitItem[] = [
  {
    id: "1",
    title: "Enhances Platform Accuracy",
    description:
      "Your contributions help maintain the most accurate and up-to-date business information on our platform.",
    icon: "check-circle",
    image: "/images/Container.png",
    features: ["Verified Content", "Quality Assurance"],
  },
  {
    id: "2",
    title: "Builds Community Trust",
    description:
      "Your contributions help maintain the most accurate and up-to-date business information on our platform.",
    icon: "shield-check",
    image: "/images/Container.png",
    features: ["Community Impact", "Trust Building"],
  },
  {
    id: "3",
    title: "Earns Rewards",
    description:
      "Your contributions help maintain the most accurate and up-to-date business information on our platform.",
    icon: "star",
    image: "/images/Container.png",
    features: ["Monetary Rewards", "Recognition"],
  },
];

export const impactCTA: ImpactCTA = {
  title: "Ready to Make an Impact?",
  description:
    "Join thousands of contributors who are helping local businesses thrive. Start earning rewards while making a difference in your community today.",
  ctaText: "Get Started",
  backgroundImage:
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
};

export const nigeriaHero: NigeriaHero = {
  title: "Discover Amazing Places Around You",
  subtitle:
    "The simplest, smartest way to find businesses, services, and hidden gems across Nigeria. Your local discovery starts here",
  description:
    "Find verified businesses, government services, and local gems across all Nigerian states",
  backgroundImage:
    "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=1920",
  searchPlaceholder: "Search businesses in any Nigerian...",
};

export const governmentServices: GovernmentService[] = [
  {
    id: "1",
    name: "Fire Station",
    type: "fire",
    image:
      "https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Emergency fire services and rescue operations",
    contactInfo: "199",
    themeColor: "red",
  },
  {
    id: "2",
    name: "Police Station",
    type: "police",
    image:
      "https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Law enforcement and public safety services",
    contactInfo: "199",
    themeColor: "blue",
  },
  {
    id: "3",
    name: "Road Safety",
    type: "road-safety",
    image:
      "https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Traffic management and road safety enforcement",
    contactInfo: "122",
    themeColor: "green",
  },
  {
    id: "4",
    name: "Emergency Services",
    type: "emergency",
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "General emergency response and medical services",
    contactInfo: "112",
    themeColor: "white",
  },
];

export const businessListings: BusinessListing[] = [
  {
    id: "1",
    name: "Jollof Palace Restaurant",
    category: "Restaurant",
    location: "Victoria Island",
    state: "Lagos",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    verified: true,
    description: "Authentic Nigerian cuisine with modern twist",
    contact: {
      phone: "+234 801 234 5678",
      address: "15 Ahmadu Bello Way, Victoria Island, Lagos",
    },
    tags: ["Nigerian Cuisine", "Fine Dining", "Delivery"],
  },
  {
    id: "2",
    name: "Eko Hotel & Suites",
    category: "Hotel",
    location: "Victoria Island",
    state: "Lagos",
    image:
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    verified: true,
    description: "Luxury accommodation in the heart of Lagos",
    contact: {
      phone: "+234 701 234 5678",
      address: "1415 Adetokunbo Ademola Street, Victoria Island, Lagos",
    },
    tags: ["Luxury", "Business Center", "Pool"],
  },
  {
    id: "3",
    name: "Shoprite Ikeja",
    category: "Shopping",
    location: "Ikeja",
    state: "Lagos",
    image:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.2,
    verified: true,
    description: "One-stop shopping destination for groceries and more",
    contact: {
      phone: "+234 901 234 5678",
      address: "Ikeja City Mall, Obafemi Awolowo Way, Ikeja, Lagos",
    },
    tags: ["Groceries", "Electronics", "Fashion"],
  },
  {
    id: "4",
    name: "Lagos University Teaching Hospital",
    category: "Healthcare",
    location: "Surulere",
    state: "Lagos",
    image:
      "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.0,
    verified: true,
    description: "Leading medical facility providing comprehensive healthcare",
    contact: {
      phone: "+234 802 234 5678",
      address: "Idi-Araba, Surulere, Lagos",
    },
    tags: ["Emergency Care", "24/7", "Specialist Care"],
  },
  {
    id: "5",
    name: "Terra Kulture",
    category: "Entertainment",
    location: "Tiamiyu Savage",
    state: "Lagos",
    image:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    verified: true,
    description: "Cultural center showcasing Nigerian arts, crafts and cuisine",
    contact: {
      phone: "+234 703 234 5678",
      address: "Tiamiyu Savage Street, Victoria Island, Lagos",
    },
    tags: ["Arts", "Culture", "Events"],
  },
  {
    id: "6",
    name: "Zenith Bank Headquarters",
    category: "Banking",
    location: "Victoria Island",
    state: "Lagos",
    image:
      "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    verified: true,
    description:
      "Leading Nigerian bank offering comprehensive financial services",
    contact: {
      phone: "+234 704 234 5678",
      address: "Plot 84, Ajose Adeogun Street, Victoria Island, Lagos",
    },
    tags: ["Banking", "ATM", "Corporate Banking"],
  },
];

export const nigerianStates: NigerianState[] = [
  {
    id: "1",
    name: "Lagos",
    image:
      "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=600",
    businessCount: 1250,
    featured: true,
  },
  {
    id: "2",
    name: "Abuja",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    businessCount: 890,
    featured: true,
  },
  {
    id: "3",
    name: "Kano",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    businessCount: 650,
    featured: false,
  },
  {
    id: "4",
    name: "Rivers",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
    businessCount: 420,
    featured: false,
  },
];
