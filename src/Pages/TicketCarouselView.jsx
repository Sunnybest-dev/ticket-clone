import React, { useState, useRef, useEffect } from "react";
import { XMarkIcon, TicketIcon } from "@heroicons/react/24/solid";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { OneTimeCodeAuth } from "./OneTimeCodeAuth";

const TicketCard = ({ ticket, onClick }) => (
  <div
    onClick={onClick}
    className="flex-shrink-0 w-[90%] mx-3 bg-white rounded-2xl shadow-lg overflow-hidden h-[450px] snap-center cursor-pointer flex flex-col items-center"
  >
    <div className="w-full text-center py-2 bg-blue-700 text-white font-semibold text-sm">
      {ticket.type}
    </div>

    <div className="flex justify-around w-full bg-blue-700 text-white py-2">
      <div className="flex-1 text-center">
        <span className="block text-xs text-blue-200">SEC</span>
        <span className="block text-lg font-bold">{ticket.section}</span>
      </div>
      <div className="flex-1 text-center">
        <span className="block text-xs text-blue-200">ROW</span>
        <span className="block text-lg font-bold">{ticket.row}</span>
      </div>
      <div className="flex-1 text-center">
        <span className="block text-xs text-blue-200">SEAT</span>
        <span className="block text-lg font-bold">
          {ticket.seats?.[0]?.label ?? "N/A"}
        </span>
      </div>
    </div>

    <div className="relative w-full h-40 bg-gray-100">
      <img
        src={ticket.image}
        alt={ticket.eventName}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full text-center text-white bg-gradient-to-t from-black/60 to-transparent p-3">
        <p className="font-semibold text-sm">{ticket.eventName}</p>
        <p className="text-xs text-gray-300">
          {ticket.date} • {ticket.venue}
        </p>
      </div>
    </div>

    <div className="p-2 text-center text-gray-800 flex flex-col items-center flex-grow">
      <p className="text-sm mt-2 font-semibold">
        FLOOR {ticket.section?.replace(/\D/g, "") || "5"}
      </p>

      <button
        className="bg-blue-700 text-white w-full py-2 mt-8 rounded-lg flex items-center justify-center gap-2"
        onClick={() => onClick(ticket)}
      >
        <TicketIcon className="w-4 h-4" />
        View Ticket
      </button>

      <p className="text-xs text-blue-700 mt-8 cursor-pointer">Ticket Details</p>
    </div>
  </div>
);

const TicketCarouselView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAuth, setShowAuth] = useState(false);
  const [showPreloader, setShowPreloader] = useState(
    location.state?.showPreloader || false
  );

  const tickets = [
    {
      id: 1,
      eventName: "NBA YoungBoy — MASA TOUR",
      type: "Artist Presale",
      date: "Tue, Sep 30, 2025 · 7:30 PM",
      venue: "Capital One Arena",
      section: "FLR-5",
      row: "E",
      seats: [{ label: "2" }],
      image:
        "https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      eventName: "Rock Nation Live",
      type: "Artist Presale",
      date: "Jan 4, 2026",
      venue: "Wembley Stadium",
      section: "B5",
      row: "7",
      seats: [{ label: "8" }],
      image:
        "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      eventName: "Jazz in the Park",
      type: "Artist Presale",
      date: "Feb 10, 2026",
      venue: "Madison Square Garden",
      section: "C2",
      row: "9",
      seats: [{ label: "3" }],
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollX = carouselRef.current.scrollLeft;
      const width = carouselRef.current.offsetWidth;
      const index = Math.round(scrollX / width);
      setActiveIndex(index);
    };

    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.state?.fromScan) {
      setShowPreloader(true);
      const loaderTimer = setTimeout(() => setShowPreloader(false), 2000);
      const popupTimer = setTimeout(() => setShowAuth(true), 2200);
      return () => {
        clearTimeout(loaderTimer);
        clearTimeout(popupTimer);
      };
    }
  }, [location.state]);

  return (
    <div className="min-h-screen text-white font-sans flex flex-col items-center relative pb-20 overflow-hidden">
      <header className="w-full max-w-sm bg-black sticky top-0 z-20">
        <div className="flex justify-between items-center px-4 py-3">
          <Link to="/" className="text-white hover:opacity-75">
            <XMarkIcon className="w-6 h-6" />
          </Link>
          <span className="text-lg font-semibold text-white">My Tickets</span>
          <button className="text-white font-semibold text-sm hover:text-gray-300">
            Help
          </button>
        </div>

        <div className="flex justify-around bg-blue-600 text-sm font-bold">
          <div className="py-3 px-4 border-b-2 border-white text-white">
            MY TICKETS
          </div>
          <div className="py-3 px-4 text-blue-100 hover:text-white">
            ADD-ONS
          </div>
        </div>
      </header>

      <div className="w-full max-w-sm flex-grow flex flex-col items-center pt-0 overflow-hidden">
        <div
          ref={carouselRef}
          className="w-full flex overflow-x-auto snap-x snap-mandatory space-x-3 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onClick={() =>
                navigate("/mytickets/barcode", { state: { fromCarousel: true } })
              }
            />
          ))}
        </div>

        <div className="flex space-x-2 mt-4 mb-6">
          {tickets.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === i ? "bg-blue-600 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="bottom-0 mt-3.5 w-full max-w-sm flex gap-3 bg-transparent">
          <button
            onClick={() => setShowAuth(true)}
            className="flex-1 py-3 bg-blue-700 rounded-xl text-white font-semibold"
          >
            Transfer
          </button>
          <button
            onClick={() => setShowAuth(true)}
            className="flex-1 py-3 bg-gray-200 rounded-xl text-gray-400 font-semibold"
          >
            Sell
          </button>
        </div>
      </div>

      {showPreloader && (
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-40">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 animate-ping rounded-full bg-white/30"></div>
            <div className="absolute inset-0 rounded-full bg-white"></div>
          </div>
          <p className="mt-3 text-gray-300 text-sm">Loading tickets...</p>
        </div>
      )}

      <div
        className={`absolute left-0 right-0 bottom-0 transform rounded-t transition-transform duration-300 ease-in-out z-50 ${
          showAuth ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          height: "78%",
          backgroundColor: "rgba(0,0,0,0.2)",
          backdropFilter: "blur(4px)",
        }}
      >
        {showAuth && (
          <div className="absolute bottom-0 w-full rounded-t-3xl bg-white h-[100%] shadow-xl">
            <div className="flex justify-center mt-2">
              <div className="w-12 h-2 bg-gray-300 rounded-full"></div>
            </div>
            <OneTimeCodeAuth
              onAuthSuccess={() => setShowAuth(false)}
              onCancel={() => setShowAuth(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketCarouselView;
