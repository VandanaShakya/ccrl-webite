import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Phone, Mail } from 'lucide-react'; // Using lucide-react for icons
import images from '../assets/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'SERVICES', href: '#' },
    { name: 'CONTACT', href: '#' },
    { name: 'HOW IT WORKS', href: '#' },
    { name: 'Brands We Work On', href: '#' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Fixed header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
          scrolled ? 'shadow-lg backdrop-blur-sm' : ''
        }`}
      >
        <div className="bg-[#052E53] py-2 text-sm text-gray-100 hidden lg:block ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex space-x-6">
              <div className="flex items-center space-x-1">
                <MapPin size={16} className="text-orange-500" />
                <span>300 Pennsylvania Ave NW</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={16} className="text-orange-500" />
                <span>Mon - Sat: 9:00 - 17:00</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone size={16} className="text-orange-500" />
                <span>+395 40 111 5555</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Mail size={16} className="text-orange-500" />
                <span>info@yourdomain.com</span>
              </div>
              <div className="flex space-x-3 text-gray-300">
                <i className="fab fa-facebook-f hover:text-orange-500 transition"></i>
                <i className="fab fa-twitter hover:text-orange-500 transition"></i>
                <i className="fab fa-linkedin-in hover:text-orange-500 transition"></i>
                <i className="fab fa-youtube hover:text-orange-500 transition"></i>
              </div>
            </div>
          </div>
        </div>

        <nav className="bg-[#052E53]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo Section */}
              <div className="flex-shrink-0 flex items-center">
                <div className="flex items-center space-x-2">
                  <img src={images.logo} className="h-10 w-25" alt="CCRL Logo" />
                  <span className="text-2xl font-bold tracking-wider text-white">CCRL</span>
                </div>
              </div>

              {/* Desktop Menu Links */}
              <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-orange-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-orange-500"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Search Icon */}
              <div className="hidden lg:flex lg:items-center">
                <button className="p-2 text-gray-300 hover:text-orange-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-orange-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-[#052E53]" id="mobile-menu">
              <div className="pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-100 hover:text-orange-500 hover:bg-gray-800 hover:border-orange-500"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="p-4 border-t border-gray-700">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 border border-gray-600 rounded-md bg-[#052E53] text-gray-100 placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Spacer: match the height of the fixed header (top info bar + nav) so content isn't hidden */}
      <div className="h-[112px]" />
    </>
  );
};

export default Navbar;
