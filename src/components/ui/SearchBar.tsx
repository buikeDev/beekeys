import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from './Button';

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row gap-2">
        <div className="flex-1 flex items-center px-4 py-3 border-r border-gray-200 md:border-r-0 md:border-b-0">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search for businesses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
        <div className="flex-1 flex items-center px-4 py-3">
          <MapPin className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
        <Button variant="yellow" size="lg" className="md:w-auto w-full">
          Search
        </Button>
      </div>
      <div className="mt-4 text-center">
        <span className="text-white/80 text-sm">Popular in your area: </span>
        <button className="text-white underline text-sm hover:text-yellow-300 transition-colors">
          Restaurants
        </button>
      </div>
    </div>
  );
};