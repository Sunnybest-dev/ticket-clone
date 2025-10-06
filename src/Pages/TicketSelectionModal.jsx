import React, { useState } from 'react';

const TicketSelectionModal = () => {
  // State to manage which seats are selected
  const [selectedSeats, setSelectedSeats] = useState(['SEAT 2', 'SEAT 3']);

  // Function to toggle seat selection
  const toggleSeat = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const seats = [
    { label: 'SEAT 2', selected: selectedSeats.includes('SEAT 2') },
    { label: 'SEAT 3', selected: selectedSeats.includes('SEAT 3') },
    { label: 'SEAT 4', selected: selectedSeats.includes('SEAT 4') },
  ];

  const selectedCount = selectedSeats.length;

  // Checkmark Icon
  const CheckIcon = ({ className = 'text-blue-600' }) => (
    <svg className={`w-3 h-3 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
    </svg>
  );

  // Info Icon
  const InfoIcon = ({ className = 'text-gray-600' }) => (
    <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );

  return (
    // Fixed container to position the modal at the bottom of the screen
    <div className="fixed inset-0 flex items-end justify-center z-50">
      
      {/* Modal Overlay/Content Container */}
      <div className="bg-white max-w-lg w-full rounded-t-2xl shadow-2xl pb-0">

        {/* --- 1. Ticket Info Header (The Section Behind the Modal) --- */}
        {/* Note: This section is visible in the image but typically belongs to the screen *behind* the modal. */}
        <div className="p-4 pt-0 sm:p-6 sm:pt-0">
          <div className="text-sm font-semibold text-center mb-4 text-gray-800">
            <div className="flex justify-between w-full">
              <span className="w-1/3">SEC</span>
              <span className="w-1/3">ROW</span>
              <span className="w-1/3">SEAT</span>
            </div>
            <div className="flex justify-between text-2xl font-bold mt-1">
              <span className="w-1/3">FLR-5</span>
              <span className="w-1/3">E</span>
              <span className="w-1/3">2</span>
            </div>
          </div>
          <hr className="mb-4" />
        </div>

        {/* --- 2. Modal Content (The Main Selector Area) --- */}
        <div className="px-4 sm:px-6">
          
          {/* Title */}
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            SELECT TICKETS TRANSFER TICKET
          </h2>

          {/* Safety Notice Box */}
          <div className="flex items-start p-3 bg-gray-100 rounded-lg mb-6">
            <InfoIcon className="text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Only transfer tickets</span> to people you know and trust to ensure everyone stays safe and socially distanced.
            </p>
          </div>

          {/* Seat Section Header */}
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm font-semibold text-gray-700">Sec FLR-5, Row E</p>
            <p className="text-sm text-gray-500">3 Tickets</p>
          </div>

          {/* Selectable Seat Buttons */}
          <div className="flex space-x-3 mb-6">
            {seats.map((seat) => (
              <button
                key={seat.label}
                onClick={() => toggleSeat(seat.label)}
                // Adjusted width and height for a more accurate visual match
                className={`relative w-24 h-14 rounded-lg text-base font-semibold transition duration-150 ease-in-out 
                  ${seat.selected 
                    ? 'bg-blue-600 text-white border-2 border-blue-600' 
                    : 'bg-white text-gray-700 border-2 border-gray-400 hover:border-gray-500'
                  }`}
              >
                {/* The Seat Label */}
                {seat.label}
                
                {/* Checkmark or Empty Circle Overlay */}
                <div 
                  className={`absolute top-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center 
                    ${seat.selected ? 'bg-white' : 'bg-white border border-gray-400'}`}
                >
                  {seat.selected && <CheckIcon />}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* --- 3. Persistent Footer Bar (bottom edge of screen) --- */}
        <div className="flex justify-between items-center px-4 sm:px-6 py-4 border-t border-gray-200 bg-white">
          <p className="text-lg font-semibold text-gray-800">
            {selectedCount} Selected
          </p>
          <button
            className={`flex items-center text-blue-600 font-semibold text-lg py-2 transition duration-150 ease-in-out
              ${selectedCount === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-700'}`}
            disabled={selectedCount === 0}
          >
            TRAN...ER TO
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelectionModal;