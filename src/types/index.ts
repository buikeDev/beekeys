export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: "yellow" | "green" | "orange" | "blue";
  benefits: string[];
}

export interface TrustCompany {
  id: string;
  name: string;
  logo: string;
}

export interface UserTypeCard {
  id: string;
  type: "business-seeker" | "business-owner" | "affiliate";
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaColor: string;
}

export interface HowItWorksStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface TrustIndicator {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  overlayColor: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}

export interface SearchHeroContent {
  badge: string;
  title: string;
  description: string;
}

export interface ContributorHero {
  title: string;
  description: string;
  ctaText: string;
  image: string;
}

export interface ActionCard {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  icon?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface ImpactCTA {
  title: string;
  description: string;
  ctaText: string;
  backgroundImage: string;
}
export interface NigeriaHero {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  searchPlaceholder: string;
}

export interface GovernmentService {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
  contactInfo: string;
  themeColor: string;
}

export interface BusinessListing {
  id: string;
  name: string;
  category: string;
  location: string;
  state: string;
  image: string;
  rating: number;
  verified: boolean;
  description: string;
  contact: {
    phone: string;
    address: string;
  };
  tags: string[];
}

export interface NigerianState {
  id: string;
  name: string;
  image: string;
  businessCount: number;
  featured: boolean;
}
