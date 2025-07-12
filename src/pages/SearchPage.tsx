import React from "react";
import { SearchHeroSection } from "../components/sections/getStarted/SearchHeroSection";
import { TrustSection } from "../components/sections/TrustSection";
import { ValuePropositionSection } from "../components/sections/getStarted/ValuePropositionSection";
import { FeatureCardsSection } from "../components/sections/getStarted/FeatureCardsSection";
import { ServicesSection } from "../components/sections/getStarted/ServicesSection";
import { HowItWorksSection } from "../components/sections/getStarted/HowItWorksSection";
import { TestimonialSection } from "../components/sections/TestimonialSection";
import { FinalCTASection } from "../components/sections/FinalCTASection";
import { Header } from "../components/sections/getStarted/Header";

export const SearchPage: React.FC = () => {
  return (
    <>
      <Header />
      <SearchHeroSection />
      <TrustSection />
      <ValuePropositionSection />
      <FeatureCardsSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialSection />
      <FinalCTASection />
    </>
  );
};
