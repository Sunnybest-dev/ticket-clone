import React from 'react';

const RecipientForm = () => {
  return (
    // Outer container to simulate the modal sitting over other content
    // Note: In a real app, this form might be passed inside another modal component.
    <div className="bg-white max-w-lg w-full p-4 md:p-6 shadow-2xl rounded-t-xl overflow-hidden">

      {/* RECIPIENT DETAILS Header */}
      <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
        RECIPIENT DETAILS
      </h2>

      {/* Form Fields Container */}
      <form className="space-y-6">
        
        {/* First Name Field */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            className="w-full border-gray-300 border-b-2 focus:border-blue-600 focus:ring-blue-600 focus:ring-1 py-2 px-0 text-lg placeholder-gray-400 focus:outline-none"
            style={{ 
              // Custom style to mimic the very thin, wide input
              borderTop: 'none', 
              borderLeft: 'none', 
              borderRight: 'none',
              paddingLeft: 0,
              paddingRight: 0,
              // Adjust font/padding to match visual height
            }}
          />
        </div>

        {/* Last Name Field */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            className="w-full border-gray-300 border-b-2 focus:border-blue-600 focus:ring-blue-600 focus:ring-1 py-2 px-0 text-lg placeholder-gray-400 focus:outline-none"
            style={{ 
              borderTop: 'none', 
              borderLeft: 'none', 
              borderRight: 'none',
              paddingLeft: 0,
              paddingRight: 0,
            }}
          />
        </div>

        {/* Email Field & "Use Mobile Number instead" Link */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            className="w-full border-gray-300 border-b-2 focus:border-blue-600 focus:ring-blue-600 focus:ring-1 py-2 px-0 text-lg placeholder-gray-400 focus:outline-none"
            style={{ 
              borderTop: 'none', 
              borderLeft: 'none', 
              borderRight: 'none',
              paddingLeft: 0,
              paddingRight: 0,
            }}
          />
          <button 
            type="button"
            className="text-blue-600 text-sm font-medium mt-2 hover:text-blue-700"
          >
            Use Mobile Number instead
          </button>
        </div>

        {/* Note Textarea */}
        <div className="pt-2">
          <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">
            Note
          </label>
          <textarea
            id="note"
            rows="4"
            className="w-full border-gray-300 border-2 rounded-lg focus:border-blue-600 focus:ring-blue-600 focus:ring-1 p-2 placeholder-gray-400 focus:outline-none resize-none"
            placeholder=""
          />
        </div>

        {/* Placeholder for the rest of the UI (Ticket Card & Footer) 
            In the original image, these elements exist outside of the form/modal.
        */}
      </form>
    </div>
  );
};

export default RecipientForm;