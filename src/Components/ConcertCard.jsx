import React from 'react';
import hero from "../images/hero.png"

const ConcertCard = () => {
  return (
    <div className="max-w-md mx-auto space-y-6 p-4 font-sans">

      {/* Eric Church Card with overlay text/button */}
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={hero}
          alt="Eric Church"          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4">
          <h2 className="text-2xl font-semibold text-white mb-2">Eric Church</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-max">
            Find Tickets
          </button>
        </div>
      </div>


      {/* VIP Package Card */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/500x250?text=VIP+Experience"
          alt="VIP Packages"
          className="w-full h-64 object-cover"
        />
        <div className="p-4 space-y-2">
          <p className="text-black text-lg font-semibold leading-tight">
            FEEL THE PERFORMANCE,<br />
            LIVE THE MOMENT<br />
            AS A VIP.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Browse Packages
          </button>
          <p className="text-sm text-gray-500 pt-2">
            Meet & Greets, Special Access and more
          </p>
          <p className="text-md font-medium text-gray-800">
            Browse Available VIP Packages
          </p>
        </div>
      </div>

    </div>
  );
};

export default ConcertCard;
