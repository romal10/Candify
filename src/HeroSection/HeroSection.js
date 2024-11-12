import React from 'react';
import { Search } from 'lucide-react';

const HeroSection = ({ searchQuery, setSearchQuery, handleSearch }) => (
  <div className="pt-32 pb-20 px-4">
    <div className="max-w-4xl mx-auto text-center relative">
      <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
        Candify
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Finden Sie den nächsten Süßigkeitenautomaten in Hamburg und Umgebung
      </p>

      <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
        <input
          type="text"
          className="w-full px-6 py-4 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none pr-12 text-lg shadow-lg"
          placeholder="Stadt oder Standort eingeben..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button 
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-500 hover:text-pink-600 transition-colors"
        >
          <Search className="w-6 h-6" />
        </button>
      </form>
    </div>
  </div>
);

export default HeroSection;
