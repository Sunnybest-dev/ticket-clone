import React from 'react';

// Reusable Icon component for simplicity (using Tailwind's default colors)
const Icon = ({ children, className = '' }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);

const EventCardScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* --- Top Navigation Header --- */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        {/* Top Bar (App Title & Icons) */}
        <div className="flex justify-between items-center p-4">
          <Icon className="text-gray-900">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </Icon>
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-semibold text-gray-900">My Events</h1>
            {/* US Flag Icon Placeholder */}
            <span className="text-xl">🇺🇸</span>
          </div>
          <p className="text-blue-600 font-medium">Help</p>
        </div>

        {/* Tab Bar (UPCOMING / PAST) */}
        <div className="flex text-center font-medium text-sm">
          {/* Active Tab */}
          <div className="w-1/2 py-3 bg-blue-600 text-white border-b-2 border-blue-600">
            UPCOMING(1)
          </div>
          {/* Inactive Tab */}
          <div className="w-1/2 py-3 text-gray-600 bg-white border-b-2 border-gray-300">
            PAST(1)
          </div>
        </div>
      </header>

      {/* --- Main Content Area --- */}
      <main className="flex-grow p-4 space-y-4">
        
        {/* "Enjoy your event" Text with Calendar Icon */}
        <div className="flex justify-between items-center text-gray-600">
          <p className="text-base">Enjoy your event</p>
          <Icon className="text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </Icon>
        </div>

        {/* --- The Event Card --- */}
        <div className="relative w-full rounded-lg overflow-hidden shadow-xl bg-gray-800" style={{ paddingBottom: '120%' }}>
          
          {/* Video Placeholder Background (Gray gradient) */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-600 flex items-center justify-center">
             {/* Play Button Icon */}
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
              <Icon className="w-8 h-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197 2.132A1 1 0 0110 13.132V10.868a1 1 0 011.555-.832l3.197 2.132z"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </Icon>
            </div>
          </div>

          {/* Event Details Overlay (Black Footer Bar) */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 text-white">
            <p className="text-sm mb-1 font-light">Tue, Sep 30, 2025 • 7:30 PM</p>
            
            {/* Event Name */}
            <h2 className="text-3xl font-bold leading-9 mb-2">
              NBA YOUNGBOY <br />- MASA TOUR
            </h2>

            <div className="flex justify-between items-end border-t border-gray-700 pt-2">
              {/* Venue */}
              <p className="text-sm font-light">Capital One Arena</p>
              
              {/* Ticket Count Icon */}
              <div className="flex items-center space-x-1">
                <Icon className="w-5 h-5 text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-11 0h22"></path>
                </Icon>
                <span className="text-lg font-semibold text-white">X3</span>
              </div>
            </div>
          </div>

          {/* View Tickets Button (Full Width, Blue) */}
          <button className="absolute bottom-0 left-0 right-0 h-16 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg">
            View Tickets
          </button>
        </div>
      </main>

      {/* --- Bottom Navigation Bar --- */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
        <nav className="flex justify-around items-center h-16">
          
          {/* Icon Link 1: Discover */}
          <div className="flex flex-col items-center text-xs text-gray-500 hover:text-blue-600">
            <Icon><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></Icon>
            <span>Discover</span>
          </div>

          {/* Icon Link 2: For You */}
          <div className="flex flex-col items-center text-xs text-gray-500 hover:text-blue-600">
            <Icon><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364l-.318.318-.318-.318a4.5 4.5 0 00-6.364 0z"></path></Icon>
            <span>For You</span>
          </div>

          {/* Icon Link 3: My Tickets (Active) */}
          <div className="flex flex-col items-center text-xs text-blue-600">
            <Icon className="text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"></path></Icon>
            <span>My Tickets</span>
          </div>

          {/* Icon Link 4: Sell */}
          <div className="flex flex-col items-center text-xs text-gray-500 hover:text-blue-600">
            <Icon><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.485 0-4.5 2.015-4.5 4.5v.5h9v-.5c0-2.485-2.015-4.5-4.5-4.5zM12 18v-4M4 12h16"></path></Icon>
            <span>Sell</span>
          </div>

          {/* Icon Link 5: My Account */}
          <div className="flex flex-col items-center text-xs text-gray-500 hover:text-blue-600">
            <Icon><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z"></path></Icon>
            <span>My Account</span>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default EventCardScreen;