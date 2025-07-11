import React from 'react';
import { motion } from 'framer-motion';

export const ValuePropositionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-4">Our Mission</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            We're building trust in local business discovery with{' '}
            <span className="text-yellow-500">unique features</span> you won't find anywhere else.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};