import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import topLogo from "../images/fav.svg";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Apply dark mode class on mount and when isDark changes
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
    localStorage.setItem('isDarkMode', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    // { path: "/skill", label: "Skills" },
    { path: "/project", label: "Our Project" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="shadow-md sticky top-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" onClick={closeMenu} className="flex items-center gap-2">
              <img src={topLogo} alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold  bg-gradient-to-r from-teal-500 to-pink-700 text-transparent bg-clip-text">
                DEEPAK
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 mb-0">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors duration-200 hover:text-teal-500 ${isActive
                        ? "text-teal-600  border-b-2 border-teal-500"
                        : "text-gray-900 "
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle (Desktop) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-pink-600 dark:text-pink-400"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Dark Mode Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-pink-600 dark:text-pink-400"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <FaSun size={22} /> : <FaMoon size={22} />}
            </button>

            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-500 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
        >
          <ul className="flex flex-col space-y-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block text-lg font-medium transition-colors duration-200 hover:text-teal-500 ${isActive
                      ? "text-teal-600 dark:text-teal-400 pl-2 border-l-4 border-teal-500"
                      : "text-gray-700 dark:text-gray-300"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
