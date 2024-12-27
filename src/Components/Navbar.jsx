import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/AR - BL -  logo.png";
import { useLanguage } from "./Languagecontext";
import india from "../Assets/Icons/27130.jpg";
import france from "../Assets/Icons/27099.jpg";

const Navbar = () => {
  const { t, setLanguage } = useLanguage();

  const language = sessionStorage.getItem("language") || "en";

  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const switchToEnglish = () => {
    setLanguage("en");
    sessionStorage.setItem("language", "en");
  };

  const switchToFrench = () => {
    setLanguage("fr");
    sessionStorage.setItem("language", "fr");
  };

  // Scroll event to handle Navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
    <nav
      className={`bg-black/65 bg-opacity-0 text-white px-4 py-3 z-50 sticky top-0 transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="w-16 lg:w-24 lg:mb-1">
          <Link to="/" onClick={closeMenu}>
            <img src={Logo} alt="Logo" className="rounded-lg" />
          </Link>
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
        <ul className="hidden lg:flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="pt-0.5 hover:text-sky-500 active:text-sky-500 lg:text-sm"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}

          {/* Language Toggle */}
          <div className="flex space-x-3 items-center ">
          <a className="text-white">EN</a>
            <img
              src={india}
              alt="Switch to English"
              className={`h-5 cursor-pointer ${
                language === "en" ? "opacity-50" : "opacity-100"
              }`}
              onClick={switchToEnglish}
            />
            <a className="text-white border-l-2 pl-2">FR</a>
            <img
              src={france}
              alt="Switch to French"
              className={`h-5 cursor-pointer ${
                language === "fr" ? "opacity-50" : "opacity-100"
              }`}
              onClick={switchToFrench}
            />
          </div>
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

          {/* Language Toggle for Small Screens */}
          <div className="flex space-x-3 items-center ">
           <a className="text-white">EN</a>
            <img
              src={india}
              alt="Switch to English"
              className={`h-5 cursor-pointer ${
                language === "en" ? "opacity-50" : "opacity-100"
              }`}
              onClick={switchToEnglish}
            />
            <a className="text-white border-l-2 pl-2">FR</a>
            <img
              src={france}
              alt="Switch to French"
              className={`h-5 cursor-pointer ${
                language === "fr" ? "opacity-50" : "opacity-100"
              }`}
              onClick={switchToFrench}
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
