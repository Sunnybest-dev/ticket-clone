// src/components/Header.jsx
import React from 'react';
import { MapPinIcon, CalendarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Header = () => (
    <div className="flex bg-black text-sm font-semibold text-white/70 justify-between px-4 py-2">
        {/* Location */}
        <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-1">
                <MapPinIcon className="w-5 h-5" />
                <span>LOCATION</span>
            </div>
            <p className="text-white/60 text-xs">City or Zip Code</p>
        </div>

        {/* Dates */}
        <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-1">
                <CalendarIcon className="w-5 h-5" />
                <span>DATES</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-white">All Dates</span>
                <ChevronDownIcon className="w-4 h-4 text-white" />
            </div>
        </div>
    </div>
);

export default Header;
