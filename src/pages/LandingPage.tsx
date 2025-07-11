import React from "react";
import { HeroSection } from "../components/sections/HeroSection";
import { TrustSection } from "../components/sections/TrustSection";
import { FeaturesSection } from "../components/sections/FeaturesSection";
import { CTASection } from "../components/sections/CTASection";
import { TrustIndicators } from "../components/sections/TrustIndicators";
import { HowItWorksSection } from "../components/sections/HowItWorksSection";
import { FinalCTASection } from "../components/sections/FinalCTASection";
import { Header } from "../components/layout/Header";

export const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <CTASection />
      <TrustIndicators />
      <HowItWorksSection />
      <FinalCTASection />
    </>
  );
};
