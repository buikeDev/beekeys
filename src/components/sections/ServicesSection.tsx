import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { useServices } from "../../hooks/useApiData";

export const ServicesSection: React.FC = () => {
  const { data: services, isLoading } = useServices();

  if (isLoading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-500">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="space-y-16">
          {services?.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Content */}
                <div className="lg:col-span-8 ">
                  <h3 className="text-2xl md:text-3xl lg:text-[76px] font-bold text-yellow-500 mb-16 lg:w-[300px]">
                    {service.title}
                  </h3>
                  <div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Button variant="outline" size="md">
                      {service.ctaText}
                    </Button>
                  </div>
                </div>

                {/* Number */}
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="text-8xl md:text-9xl font-bold text-yellow-400/20">
                    {service.number}
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < services.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
