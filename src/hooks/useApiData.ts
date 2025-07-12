import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useHeroContent = () => {
  return useQuery({
    queryKey: ["heroContent"],
    queryFn: api.getHeroContent,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useFeatures = () => {
  return useQuery({
    queryKey: ["features"],
    queryFn: api.getFeatures,
    staleTime: 1000 * 60 * 5,
  });
};

export const useTrustCompanies = () => {
  return useQuery({
    queryKey: ["trustCompanies"],
    queryFn: api.getTrustCompanies,
    staleTime: 1000 * 60 * 10,
  });
};

export const useUserTypeCards = () => {
  return useQuery({
    queryKey: ["userTypeCards"],
    queryFn: api.getUserTypeCards,
    staleTime: 1000 * 60 * 5,
  });
};

export const useHowItWorksSteps = () => {
  return useQuery({
    queryKey: ["howItWorksSteps"],
    queryFn: api.getHowItWorksSteps,
    staleTime: 1000 * 60 * 5,
  });
};

export const useTrustIndicators = () => {
  return useQuery({
    queryKey: ["trustIndicators"],
    queryFn: api.getTrustIndicators,
    staleTime: 1000 * 60 * 10,
  });
};

export const useSearchHeroContent = () => {
  return useQuery({
    queryKey: ["searchHeroContent"],
    queryFn: api.getSearchHeroContent,
    staleTime: 1000 * 60 * 5,
  });
};

export const useFeatureCards = () => {
  return useQuery({
    queryKey: ["featureCards"],
    queryFn: api.getFeatureCards,
    staleTime: 1000 * 60 * 5,
  });
};

export const useServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: api.getServices,
    staleTime: 1000 * 60 * 5,
  });
};

export const useTestimonials = () => {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: api.getTestimonials,
    staleTime: 1000 * 60 * 10,
  });
};

export const useContributorHero = () => {
  return useQuery({
    queryKey: ["contributorHero"],
    queryFn: api.getContributorHero,
    staleTime: 1000 * 60 * 5,
  });
};

export const useActionCards = () => {
  return useQuery({
    queryKey: ["actionCards"],
    queryFn: api.getActionCards,
    staleTime: 1000 * 60 * 5,
  });
};

export const useBenefitItems = () => {
  return useQuery({
    queryKey: ["benefitItems"],
    queryFn: api.getBenefitItems,
    staleTime: 1000 * 60 * 5,
  });
};

export const useImpactCTA = () => {
  return useQuery({
    queryKey: ["impactCTA"],
    queryFn: api.getImpactCTA,
    staleTime: 1000 * 60 * 10,
  });
};
