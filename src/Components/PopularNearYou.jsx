// src/components/PopularNearYou.jsx
import React from 'react';

const PopularNearYou = () => (
    <div className="space-y-4">
        <div className='border-t w-100 border-gray-600'></div>
        <h2 className="text-xl font-bold uppercase tracking-wide text-center">
            POPULAR NEAR YOU
        </h2>

        <div className="flex justify-between items-baseline">
            <h3 className="font-semibold text-sm">Concerts</h3>
            <button className="text-blue-400 text-sm font-semibold hover:text-blue-300">
                See All
            </button>
        </div>

        {/* Placeholder for the horizontal scroll card section */}
        <div className="overflow-x-auto flex space-x-3 pb-2">
            {/* The multi-colored "50%" card placeholder */}
            <div className="flex-shrink-0 w-64 h-32 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-lg shadow-lg flex items-center justify-center">
                {/* Simple graphical element placeholder */}
                <span className="text-5xl font-extrabold text-white">50%</span>
            </div>
            {/* Additional placeholder card */}
            <div className="flex-shrink-0 w-64 h-32 bg-neutral-700 rounded-lg shadow-lg"></div>
            <div className="flex-shrink-0 w-64 h-32 bg-neutral-700 rounded-lg shadow-lg"></div>
        </div>
    </div>
);

export default PopularNearYou;