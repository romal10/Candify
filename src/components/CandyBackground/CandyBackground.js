import React from 'react';

const CandyBackground = () => (
  <div className="absolute inset-0 opacity-10">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-8 h-8 rounded-full bg-pink-400"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${2 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
);

export default CandyBackground;
