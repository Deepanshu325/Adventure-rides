import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/AR - BL -  logo.png";
import { useLanguage } from "./Languagecontext";

const Navbar = () => {
  const { t, setLanguage } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuItems = [
    { name: t("why"), path: "/whytotravel" },
    { name: t("nextadv"), path: "/yournextadventure" },
    { name: t("ourfleet"), path: "/ourfleet" },
    { name: t("blog"), path: "/blog" },
    { name: t("gallery"), path: "/gallery" },
    { name: t("about2"), path: "/aboutus" },
    { name: t("contact2"), path: "/download" },
  ];

  return (
    <>
      {/* Sticky Transparent Second Navbar */}
      <nav className="bg-black bg-opacity-85 text-white px-4 py-3 z-50 sticky top-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-16 lg:w-24 lg:mb-1">
          <Link to="/" onClick={closeMenu} >  <img src={Logo} alt="Logo" className="rounded-lg" /> </Link>
          </div>

          {/* Toggle button: only visible on smaller screens */}
          <button
            className="text-2xl lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          {/* Full menu for larger screens */}
          <ul className="hidden lg:flex space-x-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="pt-0.5 hover:text-sky-500 active:text-sky-500 lg:text-sm"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}

            <select
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-black rounded-lg text-white font-semibold px-2 border-0.5 border-sky-500"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
          </ul>
        </div>

        {/* Dropdown menu for smaller screens */}
        <div
          className={`lg:hidden mt-4 transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className="active:text-sky-500 hover:text-gray-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <select
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-black rounded-lg text-white font-semibold px-2 border-0.5 border-sky-500"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
