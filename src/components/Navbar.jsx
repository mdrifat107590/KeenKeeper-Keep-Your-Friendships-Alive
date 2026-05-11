import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/", icon: "/assets/icons/home.svg" },      // ICON HERE
  { name: "Timeline", path: "/timeline", icon: "/assets/icons/timeline.svg" }, // ICON HERE
  { name: "Stats", path: "/stats", icon: "/assets/icons/stats.svg" }           // ICON HERE
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-8 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/assets/logo.png" className="h-8 w-auto mr-2" alt="KeenKeeper" /> {/* LOGO PHOTO HERE */}
        <span className="font-bold text-xl text-green-900">KeenKeeper</span>
      </div>
      <div className="flex gap-6">
        {navLinks.map(link => (
          <NavLink
            key={link.path}
            exact={link.path === '/'}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded transition 
               ${isActive ? 'bg-green-800 text-white' : 'text-gray-800 hover:bg-green-50'}`
            }
          >
            <img src={link.icon} alt="" className="w-5 h-5" /> {/* ICON HERE */}
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}