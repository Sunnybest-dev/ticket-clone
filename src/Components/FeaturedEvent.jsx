// src/components/FeaturedEvent.jsx
import React from 'react';

const FeaturedEvent = () => (
    <div className="w-full flex flex-col items-center p-2 pt-0">
        {/* The main video/image placeholder area */}
        <div className="relative w-full aspect-video bg-neutral-900 flex flex-col justify-center items-center rounded-lg overflow-hidden">
            {/* Placeholder for the black background covering the image/video */}
            <img src="/hero.png" alt="" className='w-full h-full' />
            <div className="absolute inset-0 bg-black/50 z-10"></div> 
            
            <div className="absolute z-20 bottom-15 left-5 text-center space-y-2">
                {/* Event Name */}
                <p className="text-xl font-bold text-white">
                    Eagles Live at Sphere
                </p>
                
                {/* Find Tickets Button */}
                <button className="absolute bg-blue-600 hover:bg-blue-700 rounded left-0 text-white font-bold py-2 px-5 transition-colors shadow-lg shadow-blue-600/50">
                    Find Tickets
                </button>
            </div>
        </div>
        
        {/* "Something went wrong" message */}
        <p className="text-sm text-black mt-4">
            Something went wrong
        </p>
    </div>
);

export default FeaturedEvent;