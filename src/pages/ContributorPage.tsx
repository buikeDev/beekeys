import React from "react";
import { ContributorHeroSection } from "../components/sections/contributorSection/ContributorHeroSection";
import { WhatYouCanDoSection } from "../components/sections/contributorSection/WhatYouCanDoSection";
import { WhyItMattersSection } from "../components/sections/contributorSection/WhyItMattersSection";
import { ImpactCTASection } from "../components/sections/contributorSection/ImpactCTASection";
import { TestimonialSection } from "../components/sections/TestimonialSection";
import { FinalCTASection } from "../components/sections/FinalCTASection";
import { Header } from "../components/sections/getStarted/Header";

export const ContributorPage: React.FC = () => {
  return (
    <>
      <Header />
      <ContributorHeroSection />
      <WhatYouCanDoSection />
      <WhyItMattersSection />
      <ImpactCTASection />
      <TestimonialSection />
      <FinalCTASection />
    </>
  );
};
