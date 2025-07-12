import React from "react";
import { motion } from "framer-motion";
import { BusinessCard } from "../../ui/BusinessCard";
import { Button } from "../../ui/Button";
import { useBusinessListings } from "../../../hooks/useApiData";

export const ExploreStatesSection: React.FC = () => {
  const { data: businesses, isLoading } = useBusinessListings();

  if (isLoading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-500">
            Loading Nigerian businesses...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Nigerian States
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover verified businesses and services across all Nigerian states
          </p>
        </motion.div>

        {/* Business Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {businesses?.map((business, index) => (
            <BusinessCard key={business.id} business={business} index={index} />
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="yellow" size="lg" className="px-12 py-4">
            Explore More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
