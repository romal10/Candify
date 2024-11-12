import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen, activeTab, setActiveTab }) => (
  <nav className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Candify
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
        </button>

        <div className="hidden md:flex space-x-8">
          {['locations', 'about', 'blog', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-gray-600 hover:text-pink-600 transition-colors ${
                activeTab === tab ? 'text-pink-600 font-medium' : ''
              }`}
            >
              {tab === 'locations' ? 'Standorte finden' : tab === 'about' ? 'Über uns' : tab === 'blog' ? 'Blog' : 'Kontakt'}
            </button>
          ))}
        </div>
      </div>
    </div>

    {isMenuOpen && (
      <div className="md:hidden bg-white border-t">
        <div className="px-4 py-2">
          {['locations', 'about', 'blog', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left py-2 ${activeTab === tab ? 'text-pink-600' : 'text-gray-600'}`}
            >
              {tab === 'locations' ? 'Standorte finden' : tab === 'about' ? 'Über uns' : tab === 'blog' ? 'Blog' : 'Kontakt'}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

export default Navigation
