import React from "react";
import { motion } from "framer-motion";

export const ValuePropositionSection: React.FC = () => {
  return (
    <section className="pt-16 bg-white">
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-[650px]"
        >
          <p className="text-sm text-gray-500 mb-4">Our Mission</p>
          <h2 className="text-md md:text-1xl lg:text-2xl text-gray-900 leading-tight">
            We're building trust in local business discovery with unique
            features you won't find anywhere else.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
