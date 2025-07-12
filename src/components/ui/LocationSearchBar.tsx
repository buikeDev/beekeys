import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "./Button";

interface LocationSearchBarProps {
  placeholder?: string;
  showFilters?: boolean;
}

export const LocationSearchBar: React.FC<LocationSearchBarProps> = ({
  placeholder = "Search businesses in any Nigerian...",
  showFilters = true,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "verification",
  ]);

  const filterTags = [
    { id: "dining", label: "Dining" },
    { id: "open-now", label: "Open Now" },
    { id: "accessibility", label: "Accessibility" },
    { id: "verification", label: "Verification" },
  ];

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row gap-2">
        <div className="flex-1 flex items-center px-4 py-3 border-r border-gray-200 md:border-r-0 md:border-b-0 text-sm md:text-md">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        <Button
          variant="yellow"
          size="lg"
          className="md:w-auto w-full text-[12px] text-white rounded-full"
        >
          Search
        </Button>
      </div>

      {showFilters && (
        <div className="mt-4 flex flex-wrap gap-2 justify-start">
          {filterTags.map((filter) => (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-sm font-small transition-colors ${
                activeFilters.includes(filter.id)
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-white text-black hover:bg-white/30"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
