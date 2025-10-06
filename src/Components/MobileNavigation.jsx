// src/components/MobileNavigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // ✅ Import NavLink for routing

const MobileNavigation = ({ navItems }) => (
  <div className="fixed bottom-0 w-full bg-white h-16 flex justify-around items-center z-50 shadow-[0_-4px_6px_rgba(0,0,0,0.1)] overflow-hidden">
    {navItems.map((item) => (
      <NavLink
        key={item.name}
        to={item.path} // ✅ Directs to specified route
        className={({ isActive }) =>
          `flex flex-col items-center justify-center cursor-pointer transition-colors ${
            isActive
              ? 'text-blue-600' // ✅ Highlight active tab
              : 'text-black hover:text-black/80'
          }`
        }
      >
        {/* SELL button (no icon) */}
        {item.icon ? (
          <item.icon className="w-6 h-6" />
        ) : (
          <span className="text-sm font-bold pt-1">SELL</span>
        )}

        {/* Label text */}
        {item.icon && <span className="text-xs mt-1">{item.name}</span>}
      </NavLink>
    ))}
  </div>
);

export default MobileNavigation;
