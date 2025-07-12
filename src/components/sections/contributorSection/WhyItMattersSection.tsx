import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Star } from "lucide-react";
import { useBenefitItems } from "../../../hooks/useApiData";

const iconMap = {
  "check-circle": CheckCircle,
  "shield-check": ShieldCheck,
  star: Star,
};

export const WhyItMattersSection: React.FC = () => {
  const { data: benefitItems, isLoading } = useBenefitItems();

  if (isLoading) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-500">Loading benefits...</div>
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
            Why It Matters
          </h2>
        </motion.div>

        <div className="space-y-16">
          {benefitItems?.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="grid grid-cols-1 md:flex justify-between gap-8 bg-[#F8F8F8] rounded-[32px] p-2 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
              >
                {/* Icon */}
                {/* <div
                  className={`lg:col-span-1 flex justify-center lg:justify-${
                    isEven ? "end" : "end"
                  } `}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                </div> */}

                {/* Content */}
                <div
                  className={` flex flex-col justify-between py-5 lg:text- ${
                    !isEven ? "lg:order-1" : ""
                  }`}
                >
                  <div className="px-3">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 justify-center lg:justify-start">
                    {item.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center px-3 py-1  text-sm bg-none text-green-800"
                      >
                        <img
                          src="/icons/good-icon.png"
                          alt="verified icon"
                          className="p-2"
                        />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`lg:col-span-5 overflow-hidden ${
                    !isEven ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 lg:h-[528px] object-cover rounded-[24px] shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
