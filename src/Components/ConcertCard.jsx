import React from 'react';
import { MapPin, ChevronDown, ArrowRight } from "lucide-react";
import hero from "../images/hero.png";

const ConcertCard = () => {
  return (
    <div className="max-w-md mx-auto space-y-6 p-4 font-sans overflow-hidden sm:max-w-full sm:px-2">

      <div className="relative w-full h-60 bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={hero}
          alt="Eric Church"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4">
          <h2 className="text-2xl font-semibold text-white mb-2 sm:text-xl">Eric Church</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-max text-sm sm:px-3 sm:py-1">
            Find Tickets
          </button>
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="w-full mt-2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <li className="rounded-sm overflow-hidden">
              <a
                href="https://shops.ticketmasterpartners.com/comedy?utm_source=hero&utm_campaign=comedyguide"
                className="block"
              >
                <div className="relative">
                  <img
                    src="https://s3.us-east-1.amazonaws.com/prd3318.tmp-digital-assets.prod.us-east-1.tmaws/assets/ComedyGuide_720x405.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp"
                    alt=""
                    className="w-full h-48 object-cover rounded"
                  />
                  <svg
                    className="absolute right-2 top-2 text-white bg-black/50 rounded-full p-1"
                    viewBox="0 0 24 24"
                    width="1.5em"
                    height="1.5em"
                    aria-hidden="true"
                  >
                    <path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8z" />
                  </svg>
                </div>
                <p className="text-sm font-sans text-gray-500 mt-2">
                  Discover can’t-miss comedy shows and more
                </p>
                <h3 className="font-semibold text-gray-700 text-sm sm:text-base">Your Ultimate Comedy Guide</h3>
              </a>
            </li>

            <li className="rounded-sm overflow-hidden">
              <a
                href="https://www.ticketmaster.com/parker-mccollum-tickets/artist/2316027?ac_link=iccp_hp_t3_fallback_K8vZ9174n5V"
                className="block"
              >
                <div className="relative">
                  <img
                    src="https://s1.ticketm.net/dam/a/b8c/5f4f5fab-6c0a-4fbd-bcfe-fdf7995dcb8c_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp"
                    alt=""
                    className="w-full h-48 object-cover rounded"
                  />
                  <svg
                    className="absolute right-2 top-2 text-white bg-black/50 rounded-full p-1"
                    viewBox="0 0 24 24"
                    width="1.5em"
                    height="1.5em"
                  >
                    <path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8z" />
                  </svg>
                </div>
                <p className="text-sm font-sans text-gray-500 mt-2">Country</p>
                <h3 className="font-semibold text-gray-700 text-sm sm:text-base">Parker McCollum</h3>
              </a>
            </li>

            <li className="rounded-sm overflow-hidden">
              <a
                href="https://www.ticketmaster.com/brandon-lake-tickets/artist/2874067?ac_link=iccp_hp_t4_fallback_K8vZ917QfBf"
                className="block"
              >
                <div className="relative">
                  <img
                    src="https://s1.ticketm.net/dam/a/c11/c361b950-449b-4bad-9bf7-374247ee9c11_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp"
                    alt=""
                    className="w-full h-48 object-cover rounded"
                  />
                  <svg
                    className="absolute right-2 top-2 text-white bg-black/50 rounded-full p-1"
                    viewBox="0 0 24 24"
                    width="1.5em"
                    height="1.5em"
                  >
                    <path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8z" />
                  </svg>
                </div>
                <p className="text-sm font-sans text-gray-500 mt-2">Rock</p>
                <h3 className="font-semibold text-gray-700 text-sm sm:text-base">Brandon Lake</h3>
              </a>
            </li>

            <li className="rounded-sm overflow-hidden">
              <a
                href="https://www.ticketmaster.com/zach-top-tickets/artist/3031977?ac_link=iccp_hp_t5_fallback_K8vZ917hLWV"
                className="block"
              >
                <div className="relative">
                  <img
                    src="https://s1.ticketm.net/dam/a/504/287ed2b4-4859-4ff8-ba44-8e8baa2ea504_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp"
                    alt=""
                    className="w-full h-48 object-cover rounded"
                  />
                  <svg
                    className="absolute right-2 top-2 text-white bg-black/50 rounded-full p-1"
                    viewBox="0 0 24 24"
                    width="1.5em"
                    height="1.5em"
                  >
                    <path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8z" />
                  </svg>
                </div>
                <p className="text-sm font-sans text-gray-500 mt-2">Country</p>
                <h3 className="font-semibold text-gray-700 text-sm sm:text-base">Zach Top</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section
        data-testid="sponsorship-presales"
        id="sponsorship-presales"
        className="bg-white p-4 rounded-md shadow"
      >
        <div className="mb-4">
          <h2 className="text-lg font-bold text-center sm:text-base w-72">SPONSORED PRESALES AND OFFERS</h2>
        </div>

        <div className="flex items-center justify-center mb-4 space-x-2">
          <svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M17.75 1H6.25v11.71L12 18.85l5.75-6.14zm-10 11.12V2.5h8.5v9.62L12 16.65zM12 5.66a1.34 1.34 0 1 0 0 2.67 1.34 1.34 0 0 0 0-2.67M9.34 7a2.67 2.67 0 1 1 5.33 0 2.67 2.67 0 0 1-5.33 0m-5.1 10.69H8.5v1.33H5.04L3.6 21.69h16.81l-1.33-2.67H15.5v-1.33h4.41l2.67 5.33H1.39z"></path>
          </svg>
          <span className="text-sm font-medium">Near</span>
          <button
            aria-expanded="false"
            className="flex items-center text-sm font-medium text-blue-600 underline"
          >
            Select your location
            <ChevronDown size={18} className="ml-1" />
          </button>
        </div>

        <div className="relative">
          <button
            type="button"
            className="absolute -right-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full sm:p-1"
          >
            <ArrowRight size={18} />
            <span className="sr-only">Next item</span>
          </button>

          <ul className="space-y-4">
            <li>
              <a
                href="/record-raid-presented-by-louisiana-vintage-new-orleans-louisiana-11-15-2025/event/1B00633EE6047E16"
                className="block rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src="https://s1.ticketm.net/dam/e/918/3c0f39f7-ccff-4b8f-ab1b-9654ec99a918_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp"
                    alt="Record Raid Event"
                    className="w-full h-40 object-cover"
                  />
                  <span className="absolute top-30 left-2 bg-fuchsia-600 text-white font-medium px-2 py-1 rounded text-xs sm:text-[10px]">
                    PRESALE: Fri • Oct 03 • 10:00 AM
                  </span>
                </div>

                <div className="p-2">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                    <span className="text-xs sm:text-[10px]">Sat • Nov 15 • 12:00 PM</span>
                    <img
                      src="//uk.tmconst.com/rc-665c708e/images/logo/citi.svg"
                      alt="Citi Logo"
                      width="35"
                      height="22"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    Record Raid presented by Louisiana Vintage Fest
                  </h3>
                  <p className="text-sm text-gray-600 w-72 sm:w-60 font-normal mt-1 opacity-80">
                    New Orleans, LA • House of Blues New Orleans
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ConcertCard;
