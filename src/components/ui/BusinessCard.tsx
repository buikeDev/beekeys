import React from "react";
import { motion } from "framer-motion";
import { Star, Shield, Phone, MapPin } from "lucide-react";
import { BusinessListing } from "../../types";
import { Card } from "./Card";
import { Button } from "./Button";

interface BusinessCardProps {
  business: BusinessListing;
  index?: number;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
  business,
  index = 0,
}) => {
  //   const renderStars = (rating: number) => {
  //     return Array.from({ length: 5 }, (_, i) => (
  //       <Star
  //         key={i}
  //         className={`w-4 h-4 ${
  //           i < Math.floor(rating)
  //             ? "text-yellow-400 fill-current"
  //             : "text-gray-300"
  //         }`}
  //       />
  //     ));
  //   };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group">
        {/* Business Image */}
        <div className="aspect-video overflow-hidden relative">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          <div className="absolute  right-3 bg-green-500 text-white p-1 rounded-full">
            {/* <Shield className="w-4 h-4" /> */}
          </div>
        </div>

        {/* Content */}
      </Card>
    </motion.div>
  );
};
