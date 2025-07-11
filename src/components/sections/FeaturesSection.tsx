import React from "react";
import { motion } from "framer-motion";
import { Key, ShieldCheck, Search, Zap, CheckCircle } from "lucide-react";
import { Card } from "../ui/Card";
import { useFeatures } from "../../hooks/useApiData";

const iconMap = {
  key: Key,
  "shield-check": ShieldCheck,
  search: Search,
  zap: Zap,
};

export const FeaturesSection: React.FC = () => {
  const { data: features, isLoading } = useFeatures();

  if (isLoading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse text-gray-500">Loading features...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Beekeys?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're building your trusted business directory that helps customers
            find what they want fast anywhere they are.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features?.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div
                    className={`w-12 h-12 rounded-lg bg-[#DBB109] text-white flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed text-[12px]">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-500 bg-[#10FF7E33] p-[8px] rounded-[12px] "
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
