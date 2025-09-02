"use client";

import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-28">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation Links */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-black font-bold text-xl">MM</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block ml-12">
              <div className="flex items-baseline space-x-2">
                <a
                  href="#"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Testimonials
                </a>
              </div>
            </div>
          </div>

          {/* Right side - CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* CTA Button - Responsive text and sizing */}
            <button className="bg-black text-white px-3 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 md:gap-3 hover:bg-gray-800 transition-colors min-h-[40px] touch-manipulation">
              <span className="hidden sm:inline">Let&apos;s Build Together</span>
              <span className="sm:hidden">Let&apos;s Build</span>
              <svg
                width="14"
                height="14"
                className="md:w-4 md:h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors min-h-[40px] min-w-[40px] touch-manipulation"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            <a
              href="#"
              className="text-black hover:text-gray-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors rounded-md touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors rounded-md touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors rounded-md touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors rounded-md touch-manipulation"
            >
              About
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors rounded-md touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}