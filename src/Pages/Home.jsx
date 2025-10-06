// src/App.jsx
import React from 'react';
import {
  MapPinIcon,
  CalendarIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  TicketIcon,
  UserIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

// Components
import Header from "../Components/Header";
import Searchbar from "../Components/Searchbar";
import FeaturedEvent from "../Components/FeaturedEvent";
import PopularNearYou from "../Components/PopularNearYou";
import MobileNavigation from "../Components/MobileNavigation";

const Home = () => {
  const navItems = [
    { name: 'Discover', icon: Squares2X2Icon, current: true },
    { name: 'For You', icon: HeartIcon, current: false },
    { name: 'My Tickets', icon: TicketIcon, current: false },
    { name: 'Sell', icon: null, current: false },
    { name: 'My Account', icon: UserIcon, current: false },
  ];


  return (
    <div className="min-h-screen w-full text-black font-sans flex flex-col items-center overflow-hidden no-scrollbar">
      {/* Header Section */}
      <div className="w-full h-10 flex items-center bg-black justify-center px-4 pt-1 text-sm">
        <div className="flex items-center space-x-1 relative w-full justify-center">
          <span className="font-semibold text-white text-xl text-center">ticketmaster</span>
          <div className="absolute right-1 h-5 w-5 border border-white rounded-full overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="US Flag"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
     
      {/* Main Content */}
      <div className="w-full flex-grow pb-20 overflow-hidden no-scrollbar">
        <div className="p-4 space-y-4 bg-black">
          <Header />
          <Searchbar />
        </div>

        <div className="pt-4 space-y-4">
          <FeaturedEvent />
        </div>

        <div className="px-4 mt-6">
          <PopularNearYou />
        </div>
      </div>

      {/* Bottom Navigation */}
      <MobileNavigation navItems={navItems} />
    </div>
  );
};

export default Home;
