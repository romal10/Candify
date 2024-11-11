import React, { useState } from 'react';
import CandyBackground from './components/CandyBackground/CandyBackground';
import TabContent from './components/TabContent/TabContent';
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import { allLocations } from './utils/locations';

const CandifyApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('locations');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    
    const results = allLocations.filter(location => 
      location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
      <CandyBackground />

      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <HeroSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      <TabContent 
        activeTab={activeTab} 
        searchQuery={searchQuery} 
        searchResults={searchResults} 
        allLocations={allLocations} 
        isSearching={isSearching} 
        setIsSearching={setIsSearching} 
      />

      <Footer />
    </div>
  );
};

export default CandifyApp;
