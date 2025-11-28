import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import topLogo from "../images/fav.svg";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  // Initialize dark mode from localStorage with fallback
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('isDarkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Apply dark mode class on mount and when isDark changes
  useEffect(() => {
    const rootElement = document.body;

    if (isDark) {
      rootElement.classList.add('dark', 'dark-theme');
      rootElement.classList.remove('light-theme');
    } else {
      rootElement.classList.remove('dark', 'dark-theme');
      rootElement.classList.add('light-theme');
    }

    // Persist to localStorage
    localStorage.setItem('isDarkMode', JSON.stringify(isDark));
  }, [isDark]);

  // Optimized toggle functions using useCallback
  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Memoize navigation links to prevent recreation on every render
  const navLinks = useMemo(() => [
    { path: "/", label: "Home" },
    { path: "/project", label: "Our Project" },
    { path: "/journey", label: "Our Journey" },
    { path: "/contact", label: "Contact" },
  ], []);

  // Memoized function for active link styling
  const getLinkClassName = useCallback((isActive, isMobile = false) => {
    const baseClasses = "text-lg font-medium transition-colors duration-200 hover:text-teal-500";
    const activeClasses = isMobile
      ? "text-teal-600 dark:text-teal-400 pl-2 border-l-4 border-teal-500"
      : "text-teal-600 border-b-2 border-teal-500";
    const inactiveClasses = isMobile
      ? "text-gray-700 dark:text-gray-300"
      : "text-gray-900";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  }, []);

  return (
    <header className="shadow-md sticky top-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" onClick={closeMenu} className="flex items-center gap-2">
              <img src={topLogo} alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-teal-500 to-pink-700 text-transparent bg-clip-text">
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
                    className={({ isActive }) => getLinkClassName(isActive, false)}
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
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
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
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <FaSun size={22} /> : <FaMoon size={22} />}
            </button>

            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-500 focus:outline-none transition-colors"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          aria-hidden={!isMenuOpen}
        >
          <nav>
            <ul className="flex flex-col space-y-4 pb-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) => `block ${getLinkClassName(isActive, true)}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
