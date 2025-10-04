import { MapPin, Calendar, ChevronDown, Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="w-full bg-white rounded-md h-auto">
      {/* Top: Location + Dates */}
      <div className="flex items-center justify-between px-3 py-2 flex-wrap">
        {/* Location */}
        <div className="flex items-center space-x-2 flex-1 min-w-[150px]">
          <svg
            className="text-blue-500 fill-current"
            viewBox="0 0 24 24"
            width="2em"
            height="2em"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M17.75 1H6.25v11.71L12 18.85l5.75-6.14zm-10 11.12V2.5h8.5v9.62L12 16.65zM12 5.66a1.34 1.34 0 1 0 0 2.67 1.34 1.34 0 0 0 0-2.67M9.34 7a2.67 2.67 0 1 1 5.33 0 2.67 2.67 0 0 1-5.33 0m-5.1 10.69H8.5v1.33H5.04L3.6 21.69h16.81l-1.33-2.67H15.5v-1.33h4.41l2.67 5.33H1.39z"></path>
          </svg>
          <div className="flex flex-col w-full">
            <span className="text-[12px] font-semibold uppercase">
              Location
            </span>
            <input
              type="text"
              placeholder="City or Zip Code"
              className="text-sm placeholder-gray-500 font-semibold outline-none border-none focus:ring-0 bg-transparent w-full"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="h-12 w-px bg-gray-300 mx-3 sm:block"></div>

        {/* Dates */}
        <div className="flex items-center flex-1 min-w-[150px] sm:mt-0">
          <svg
            className="text-blue-500 fill-current"
            viewBox="0 0 24 24"
            width="2.5em"
            height="2.5em"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M8.75 3V1h-1.5v2H1v20h17.03L23 18.1V3h-6.25V1h-1.5v2zm6.5 3.5h1.5v-2h4.75v3.25h-19V4.5h4.75v2h1.5v-2h6.5zm6.25 2.75v7.59h-4.66v4.66h.57H2.5V9.25zm-.7 8.91-2.64 2.6v-2.6zm-16.55-6.9h5.5v5.5h-5.5zm1.5 1.5v2.5h2.5v-2.5z"></path>
          </svg>
          <div
            onClick={() => document.getElementById("dateInput").showPicker()}
            className="flex flex-col p-3 cursor-pointer hover:border-blue-500 w-full"
          >
            <input
              id="dateInput"
              type="date"
              className="absolute opacity-0 pointer-events-none"
            />
            <span className="text-[12px] font-semibold uppercase">Dates</span>
            <span className="text-sm text-gray-600 font-semibold outline-none border-none focus:ring-0 bg-transparent">
              All Dates
            </span>
          </div>
          <svg
            className="mx-5 opacity-40"
            viewBox="0 0 24 24"
            width="2.3em"
            height="2.3em"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8z"></path>
          </svg>
        </div>
      </div>

      {/* Bottom: Search */}
      <div className="flex items-center justify-center px-3 py-2">
        <div className="flex flex-col flex-1 max-w-md border rounded px-2 py-3 w-full">
          <span className="text-[12px] font-semibold uppercase text-left">
            Search
          </span>
          <div className="flex items-center w-full">
            <input
              type="text"
              placeholder="Artist, Event or Venue"
              className="flex-1 text-sm text-gray-600 placeholder-gray-500 placeholder:font-semibold outline-none border-none text-left"
            />
            <svg
              className="text-blue-500 fill-current mb-2"
              viewBox="0 0 23 24"
              width="1.5em"
              height="1.5em"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M3.78 4.78 1.62 10l2.16 5.22L9 17.38l5.22-2.16L16.38 10l-2.16-5.22L9 2.62zM9 1l6.36 2.64L18 10l-2.33 5.61 6.11 6.11-1.06 1.06-6.1-6.1L9 19l-6.36-2.64L0 10l2.64-6.36z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
