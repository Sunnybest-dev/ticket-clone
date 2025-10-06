// src/components/SearchSection.jsx
import React from 'react';
import { MapPinIcon, CalendarIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Searchbar = () => (
    <div className="space-y-3 bg-black w-full px-0">
        
        {/* Search Bar */}
        <div className="relative">
            <input
                type="text"
                placeholder="Artist, Event or Venue"
                className="w-full text-black rounded-lg pt-5 pl-4 pr-12 text-base h-14 border border-neutral-700 bg-white"
            />
            <p className="absolute top-4 -translate-y-1/2 left-4 text-xs font-bold uppercase text-black/70">SEARCH</p>
            {/* <MagnifyingGlassIcon className="absolute top-1/2 right-4 -translate-y-1/2 w-6 h-6 text-blue-400 cursor-pointer" /> */}
            <svg className='text-blue-700 bg-transparent top-5 right-4 absolute' viewBox="0 0 23 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false"   fill="currentColor"   // ← this is the magic line
 >
              <path d="M3.78 4.78 1.62 10l2.16 5.22L9 17.38l5.22-2.16L16.38 10l-2.16-5.22L9 2.62zM9 1l6.36 2.64L18 10l-2.33 5.61 6.11 6.11-1.06 1.06-6.1-6.1L9 19l-6.36-2.64L0 10l2.64-6.36z">
                </path>
                </svg>
                <div className='h-2'></div>
        </div>
    </div>
);

export default Searchbar;
