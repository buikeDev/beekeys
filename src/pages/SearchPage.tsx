import React from 'react';
import { SearchHeroSection } from '../components/sections/SearchHeroSection';
import { TrustSection } from '../components/sections/TrustSection';
import { ValuePropositionSection } from '../components/sections/ValuePropositionSection';
import { FeatureCardsSection } from '../components/sections/FeatureCardsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { TestimonialSection } from '../components/sections/TestimonialSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';

export const SearchPage: React.FC = () => {
  return (
    <>
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