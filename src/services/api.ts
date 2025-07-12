// This file fakes ("mocks") API calls for the app. Instead of calling a real server, it just returns local data after a short wait.

// Import types (shapes of data) for TypeScript
import {
  Feature,
  TrustCompany,
  UserTypeCard,
  HowItWorksStep,
  TrustIndicator,
  HeroContent,
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
  NigeriaHero,
  GovernmentService,
  BusinessListing,
  NigerianState,
} from "../types";
// Import the actual mock data (pretend data) from a local file
import {
  heroContent,
  features,
  trustCompanies,
  userTypeCards,
  howItWorksSteps,
  trustIndicators,
  searchHeroContent,
  featureCards,
  services,
  testimonials,
  contributorHero,
  actionCards,
  benefitItems,
  impactCTA,
  nigeriaHero,
  governmentServices,
  businessListings,
  nigerianStates,
} from "../data/staticData";

// This function just waits for a bit (to act like a real network call)
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// This 'api' object has functions that act like real API calls, but just return local data after a short delay.
export const api = {
  // Get the hero section data for the landing page
  async getHeroContent(): Promise<HeroContent> {
    await delay(300); // wait 300ms
    return heroContent; // return the mock data
  },

  // Get the list of features
  async getFeatures(): Promise<Feature[]> {
    await delay(500);
    return features;
  },

  // Get the list of trusted companies
  async getTrustCompanies(): Promise<TrustCompany[]> {
    await delay(400);
    return trustCompanies;
  },

  // Get the user type cards (for different user roles)
  async getUserTypeCards(): Promise<UserTypeCard[]> {
    await delay(600);
    return userTypeCards;
  },

  // Get the steps for "How it works"
  async getHowItWorksSteps(): Promise<HowItWorksStep[]> {
    await delay(450);
    return howItWorksSteps;
  },

  // Get the trust indicators (badges, etc.)
  async getTrustIndicators(): Promise<TrustIndicator[]> {
    await delay(350);
    return trustIndicators;
  },

  // Get the hero section for the search page
  async getSearchHeroContent(): Promise<SearchHeroContent> {
    await delay(300);
    return searchHeroContent;
  },

  // Get the feature cards for the search page
  async getFeatureCards(): Promise<FeatureCard[]> {
    await delay(400);
    return featureCards;
  },

  // Get the list of services
  async getServices(): Promise<Service[]> {
    await delay(450);
    return services;
  },

  // Get the testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    await delay(350);
    return testimonials;
  },

  // Get the hero section for the contributor page
  async getContributorHero(): Promise<ContributorHero> {
    await delay(300);
    return contributorHero;
  },

  // Get the action cards for contributors
  async getActionCards(): Promise<ActionCard[]> {
    await delay(400);
    return actionCards;
  },

  // Get the benefit items for contributors
  async getBenefitItems(): Promise<BenefitItem[]> {
    await delay(450);
    return benefitItems;
  },

  // Get the call-to-action section for contributors
  async getImpactCTA(): Promise<ImpactCTA> {
    await delay(350);
    return impactCTA;
  },

  // Get the hero section for the Nigeria page
  async getNigeriaHero(): Promise<NigeriaHero> {
    await delay(300);
    return nigeriaHero;
  },

  // Get the list of government services (Nigeria page)
  async getGovernmentServices(): Promise<GovernmentService[]> {
    await delay(400);
    return governmentServices;
  },

  // Get the list of business listings (Nigeria page)
  async getBusinessListings(): Promise<BusinessListing[]> {
    await delay(500);
    return businessListings;
  },

  // Get the list of Nigerian states
  async getNigerianStates(): Promise<NigerianState[]> {
    await delay(350);
    return nigerianStates;
  },
};
