import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { useUserTypeCards } from "../../hooks/useApiData";

export const CTASection: React.FC = () => {
  const { data: userCards, isLoading } = useUserTypeCards();

  if (isLoading) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-500">
            Loading user options...
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Join the Beekeys Community?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose how you want to get started with trusted local business
            discovery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userCards?.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                variant="borderless"
                className="overflow-hidden h-full flex flex-col"
              >
                <div className="aspect-video overflow-hidden rounded-[8px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 "
                  />
                </div>

                <div className="py-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {card.description}
                  </p>

                  <Button
                    variant={card.ctaColor as any}
                    className="w-full"
                    to="/search"
                  >
                    {card.ctaText}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
