import React from 'react';

const TabContent = ({ activeTab, searchQuery, searchResults, allLocations, isSearching, setIsSearching }) => {
  switch (activeTab) {
    case 'locations':
      return (
        <div className="max-w-6xl mx-auto px-4 py-8">
          {isSearching ? (
            searchResults.length > 0 ? (
              <div>
                <h2 className="text-2xl font-bold mb-6">Gefundene Standorte für "{searchQuery}"</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {searchResults.map((location) => (
                    <div key={location.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <h3 className="font-bold text-lg mb-2">{location.name}</h3>
                      <p className="text-gray-600">{location.address}</p>
                      <p className="text-gray-600">{location.area}, {location.city}</p>
                      <button className="mt-4 text-pink-500 hover:text-pink-600 font-medium">
                        Route anzeigen →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-xl text-gray-600">Keine Standorte gefunden für "{searchQuery}"</p>
                <button onClick={() => setIsSearching(false)} className="mt-4 text-pink-500 hover:text-pink-600">
                  Alle Standorte anzeigen
                </button>
              </div>
            )
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-6">Alle Standorte</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {allLocations.map((location) => (
                  <div key={location.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-lg mb-2">{location.name}</h3>
                    <p className="text-gray-600">{location.address}</p>
                    <p className="text-gray-600">{location.area}, {location.city}</p>
                    <button className="mt-4 text-pink-500 hover:text-pink-600 font-medium">
                      Route anzeigen →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    case 'about':
      return (
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6">Über Uns</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600 mb-4">
              Candify revolutioniert die Art und Weise, wie Menschen Süßigkeiten kaufen. 
              Unsere digitalen Automaten bieten eine große Auswahl an Süßigkeiten und sind 
              an vielen Standorten in ganz Deutschland zu finden.
            </p>
            <p className="text-gray-600">
              Unser Ziel ist es, Süßigkeiten-Liebhabern den schnellsten und einfachsten 
              Zugang zu ihren Lieblingsprodukten zu ermöglichen.
            </p>
          </div>
        </div>
      );
    case 'blog':
      return (
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6">Blog</h2>
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">Neuigkeiten von Candify</h3>
                <p className="text-gray-600">Bleiben Sie auf dem Laufenden über unsere neuesten Standorte und Angebote.</p>
              </div>
            ))}
          </div>
        </div>
      );
    case 'contact':
      return (
        <div className="max-w-2xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
          <form className="bg-white p-8 rounded-xl shadow-lg space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:border-pink-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:border-pink-400 focus:outline-none"
            />
            <textarea
              placeholder="Ihre Nachricht"
              className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:border-pink-400 focus:outline-none h-32"
            />
            <button className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors">
              Nachricht senden
            </button>
          </form>
        </div>
      );
    default:
      return null;
  }
};

export default TabContent;
