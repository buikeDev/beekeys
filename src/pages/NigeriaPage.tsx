import React from "react";
import { NigeriaHeroSection } from "../components/sections/nigeriaPageSection/NigeriaHeroSection";
import { GovernmentServicesSection } from "../components/sections/nigeriaPageSection/GovernmentServicesSection";
import { ExploreStatesSection } from "../components/sections/nigeriaPageSection/ExploreStatesSection";
import { FinalCTASection } from "../components/sections/FinalCTASection";
import { Header } from "../components/layout/Header";

export const NigeriaPage: React.FC = () => {
  return (
    <>
      <Header />
      <NigeriaHeroSection />
      <GovernmentServicesSection />
      <ExploreStatesSection />
      <FinalCTASection />
    </>
  );
};
