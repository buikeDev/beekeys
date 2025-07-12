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
} from "../types";
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
} from "../data/staticData";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  async getHeroContent(): Promise<HeroContent> {
    await delay(300);
    return heroContent;
  },

  async getFeatures(): Promise<Feature[]> {
    await delay(500);
    return features;
  },

  async getTrustCompanies(): Promise<TrustCompany[]> {
    await delay(400);
    return trustCompanies;
  },

  async getUserTypeCards(): Promise<UserTypeCard[]> {
    await delay(600);
    return userTypeCards;
  },

  async getHowItWorksSteps(): Promise<HowItWorksStep[]> {
    await delay(450);
    return howItWorksSteps;
  },

  async getTrustIndicators(): Promise<TrustIndicator[]> {
    await delay(350);
    return trustIndicators;
  },

  async getSearchHeroContent(): Promise<SearchHeroContent> {
    await delay(300);
    return searchHeroContent;
  },

  async getFeatureCards(): Promise<FeatureCard[]> {
    await delay(400);
    return featureCards;
  },

  async getServices(): Promise<Service[]> {
    await delay(450);
    return services;
  },

  async getTestimonials(): Promise<Testimonial[]> {
    await delay(350);
    return testimonials;
  },

  async getContributorHero(): Promise<ContributorHero> {
    await delay(300);
    return contributorHero;
  },

  async getActionCards(): Promise<ActionCard[]> {
    await delay(400);
    return actionCards;
  },

  async getBenefitItems(): Promise<BenefitItem[]> {
    await delay(450);
    return benefitItems;
  },

  async getImpactCTA(): Promise<ImpactCTA> {
    await delay(350);
    return impactCTA;
  },
};
