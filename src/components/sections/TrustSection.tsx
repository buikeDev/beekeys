import React from "react";
import { motion } from "framer-motion";
import { useTrustCompanies } from "../../hooks/useApiData";

export const TrustSection: React.FC = () => {
  const { data: companies, isLoading, isError, error } = useTrustCompanies();

  if (isLoading) {
    return (
      <section className="py-5 bg-gray-50 mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-500">
            Loading trusted companies...
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-5 bg-gray-50 mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-red-500">Error: {error.message}</div>
        </div>
      </section>
    );
  }

  console.log("TrustSection companies:", companies);

  return (
    <section className="py-5 bg-gray-50 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-small text-gray-900 mb-8">
            Trusted. Verified Business
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {companies?.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center gap-1"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
              <span className="font-bold ">{company.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
