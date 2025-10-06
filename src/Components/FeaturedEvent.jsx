// src/components/FeaturedEvent.jsx
import React from 'react';

const heroButtons = ['Concert', 'Sports', 'Art', 'Arts, Theater & Comedy'];

const FeaturedEvent = () => (
  <div className="w-full flex flex-col items-center">
    {/* Hero Section */}
    <div className="relative w-full aspect-video flex flex-col justify-center items-center overflow-hidden">
      {/* Hero Image */}
      <img
        src="/hero.png"
        alt="Hero Event"
        className="w-full h-[300px] object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Scrollable Buttons - on top of overlay */}
      <div className="absolute top-3 left-0 right-0 flex overflow-x-hidden space-x-2 px-2 z-20 scrollbar-hide">
        {heroButtons.map((label, index) => (
          <button
            key={index}
            className="flex-shrink-0 border border-white text-white text-sm font-medium px-3 py-1.5 rounded bg-transparent whitespace-nowrap hover:bg-white hover:text-black transition"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Event Info */}
      <div className="absolute z-20 bottom-3 left-5 text-left space-y-2">
        <p className="text-xl font-bold text-white drop-shadow-md">
          Eagles Live at Sphere
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold py-2 px-4 transition-colors shadow-lg shadow-blue-600/40">
          Find Tickets
        </button>
      </div>
    </div>

    {/* Error / fallback message */}
    <p className="text-sm text-black mt-4">Something went wrong</p>
  </div>
);

export default FeaturedEvent;
