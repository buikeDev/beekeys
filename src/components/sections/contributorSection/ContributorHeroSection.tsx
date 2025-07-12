import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../ui/Button";
import { useContributorHero } from "../../../hooks/useApiData";

export const ContributorHeroSection: React.FC = () => {
  const { data: heroContent, isLoading } = useContributorHero();

  if (isLoading) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-500">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              {heroContent?.title}
            </h1>

            <p className="text-md md:text-lg text-gray-600 mb-8 leading-relaxed">
              {heroContent?.description}
            </p>

            <Button
              variant="yellow"
              size="lg"
              className="text-lg px-6 py-3 rounded-[30px]"
            >
              {heroContent?.ctaText}
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <img
                src={heroContent?.image}
                alt="Contributor Hero"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
