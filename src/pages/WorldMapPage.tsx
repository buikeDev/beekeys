import { Header } from "../components/layout/Header";
import WorldMap from "../components/sections/exploreLocationSection/WorldMap";
import { FinalCTASection } from "../components/sections/FinalCTASection";

export const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <WorldMap />
      <FinalCTASection />
    </>
  );
};
