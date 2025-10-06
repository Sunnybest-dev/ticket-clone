import React from 'react';

const SuccessModal = () => {
  return (
    // Backdrop for the modal (optional: you might wrap this in a state check)
    <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex items-center justify-center p-4">
      
      {/* Modal Container */}
      <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-8 flex flex-col items-center text-center">
        
        {/* Success Icon */}
        <div className="mb-6">
          <svg
            className="w-16 h-16 text-blue-600 border-2 border-blue-600 rounded-full p-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Successful !
        </h1>
        
        {/* Subtitle/Message */}
        <p className="text-gray-500 mb-8">
          Ticket Transfer was successful.
        </p>
        
        {/* Action Button (OK) */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-150 ease-in-out shadow-lg"
          // You would typically add an onClick handler here to close the modal
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;