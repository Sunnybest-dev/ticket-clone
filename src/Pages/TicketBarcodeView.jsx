import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

// ✅ Mock ticket data
const mockTicket = {
  name: "NBA YoungBoy - MASA TOUR:",
  dateTime: "Tue, Sep 30, 2025 8:00PM",
  venue: "Capital ...",
  type: "Artist Presale",
  section: "FLR-5",
  row: "E",
  seats: [{ id: 2, label: "SEAT 12", isAvailable: true }],
  floor: "FLOOR 5",
};

const TicketBarcodeView = () => {
  const navigate = useNavigate();

  // ⏱️ Auto navigate back after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/mytickets");
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  const Barcode = () => (
    <div className="w-12/12 h-30 bg-white rounded-lg shadow-2xl flex items-center justify-center p-3 relative overflow-hidden">
      <div className="w-full h-80 relative">
        <svg viewBox="0 0 300 100" className="w-full h-full justify-center items-center">
          {/* Left solid lines */}
          <rect x="5" y="5" width="4" height="60" fill="#000" />
          <rect x="6" y="5" width="4" height="60" fill="#000" />

          {/* Middle scattered bars */}
          {[...Array(42)].map((_, i) => {
            const width = Math.random() * (4 - 2) + 2;
            const height = 60;
            const x = 3 + i * 6;
            const color = Math.random() > 0.3 ? "#000" : "#FFF";
            return <rect key={i} x={x} y="5" width={width} height={height} fill={color} />;
          })}

          {/* Right solid lines */}
          <rect x="264" y="5" width="4" height="60" fill="#000" />
          <rect x="270" y="5" width="4" height="60" fill="#000" />
        </svg>

        {/* ✅ Two horizontal scan lines */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-green-500 opacity-80 animate-scan-horizontal"></div>
        <div className="absolute top-0 bottom-0 w-[2px] bg-green-400 opacity-60 animate-scan-horizontal-delay"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-sm sticky top-0 bg-black z-10 px-4 py-3 border-b border-neutral-800">
        <div className="flex justify-between items-center text-sm font-medium">
          <Link to="/mytickets" className="text-white hover:opacity-75">
            <XMarkIcon className="w-6 h-6" />
          </Link>
          <div className="flex flex-col items-center flex-1 mx-2">
            <span className="text-white font-semibold whitespace-nowrap overflow-hidden text-ellipsis w-full text-center">
              {mockTicket.name}
            </span>
            <span className="text-gray-400 text-xs mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis w-full text-center">
              {mockTicket.dateTime} - {mockTicket.venue}
            </span>
          </div>
          <button className="text-white font-semibold text-sm hover:opacity-75">
            Help
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="w-full max-w-sm flex-grow p-6 flex flex-col items-center space-y-8 overflow-y-auto">
        <p className="text-sm font-semibold text-white/80">{mockTicket.type}</p>

        <div className="flex justify-around w-full text-center mb-6">
          <div className="flex-1">
            <span className="block text-sm font-bold text-gray-400">SEC</span>
            <span className="block text-xl font-bold">{mockTicket.section}</span>
          </div>
          <div className="flex-1">
            <span className="block text-sm font-bold text-gray-400">ROW</span>
            <span className="block text-xl font-bold">{mockTicket.row}</span>
          </div>
          <div className="flex-1">
            <span className="block text-sm font-bold text-gray-400">SEAT</span>
            <span className="block text-xl font-bold">
              {mockTicket.seats?.[0]?.id ?? "N/A"}
            </span>
          </div>
        </div>

        <div className="mt-15">
          <Barcode />
        </div>

        <p className="text-sm absolute text-black top-90 font-medium text-center">
          Screenshots won't get you in
        </p>

        <button className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg flex items-center space-x-2 shadow-lg hover:bg-gray-200 transition-colors">
          <div className="w-5 h-5 bg-green-600 rounded-md flex items-center justify-center text-white text-xs font-bold">
            W
          </div>
          <span>Add to Apple Wallet</span>
        </button>

        <p className="text-xl mt-8">{mockTicket.floor}</p>
      </div>

      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-purple-800/20 via-black/0 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default TicketBarcodeView;
