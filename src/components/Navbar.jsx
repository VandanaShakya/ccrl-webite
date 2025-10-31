import React, { useState, useEffect} from 'react'
import { Menu, X, MapPin, Clock, Phone, Mail, Search } from 'lucide-react';
import images from '../assets/images';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll and Header Logic State
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
  );

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: 'services' },
    { name: 'How It Works', href: 'how-it-works' },
    { name: 'About Us', href: 'about-us' },
    { name: 'Brands We Work On', href: 'our-brands' },
    { name: 'Contact Us', href: 'contact-us' },
  ];

  const topBarHeight = 36; // Approx. height of the top bar
  const mainNavHeight = 80; // Height of the main nav bar
  const fixedSpacerHeight = topBarHeight + mainNavHeight;

  // --- Effect: Handle window resize for responsiveness ---
  useEffect(() => {
    const onResize = () => {
      const newIsLargeScreen = window.innerWidth >= 1024;
      setIsLargeScreen(newIsLargeScreen);
      // Close menu if switching to desktop view
      if (newIsLargeScreen && isOpen) {
        setIsOpen(false);
      }
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isOpen]);

  // --- Effect: Handle scroll behavior (hide/show top bar and shadow) ---
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 10;

    setIsScrolled(currentScrollY > scrollThreshold);

    if (isLargeScreen) {
      if (currentScrollY > lastScrollY) { // Scrolling down
        if (currentScrollY > 10) {
          setShowTopBar(false);
        }
      } else if (currentScrollY < lastScrollY) { // Scrolling up
        setShowTopBar(true);
      }
      if (currentScrollY <= scrollThreshold) {
        setShowTopBar(true);
      }
    } else {
      setShowTopBar(false); // Top bar is never shown on mobile
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY, isLargeScreen]);

  const headerTranslate =
    isLargeScreen && !showTopBar ? '-translate-y-9' : 'translate-y-0';

  const spacerHeightStyle = {
    height: `${isLargeScreen ? fixedSpacerHeight : mainNavHeight}px`,
  };

  // --- Menu Visibility Class for Animation ---
  // If we rely on conditional rendering {isOpen && (...)}, the transition won't be smooth.
  // Instead, we use a single component and toggle the 'translate-x' class.
  // We'll use the backdrop's conditional rendering to manage the full-screen overlay.
  const mobileMenuClasses = `
    fixed top-0 right-0 w-1/2 h-screen bg-[#052E53] z-50 
    transition-transform duration-300 ease-in-out transform 
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
  `;
  
  return (
    <>
      {/* Main Fixed Header Container */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${headerTranslate} ${
          isScrolled ? 'shadow-xl' : ''
        }`}
      >
        {/* TOP INFORMATIONAL BAR — only shown on large screens */}
        <div
          className={`bg-gray-800 py-2 text-sm text-gray-100 hidden lg:block transition-transform duration-300 ease-in-out`}
          style={{ height: `${topBarHeight}px` }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
            {/* Left Section - Address, Time, Phone */}
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

            {/* Right Section - Email */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Mail size={16} className="text-orange-500" />
                <span>info@yourdomain.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <nav
          className={`bg-[#052E53] ${isScrolled ? 'backdrop-blur-sm bg-[#052E53]/90 shadow-lg' : ''} transition-all duration-300`}
          style={{ height: `${mainNavHeight}px` }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-full">
              {/* Logo Section */}
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <Link to='/'>
                    <img src={images.logo} className="h-10 w-25" alt="CCRL Logo" />
                  </Link>
                  <span className="text-2xl font-bold tracking-wider text-white">CCRL</span>
                </div>
              </div>

              {/* Desktop Menu Links */}
              <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-orange-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-orange-500"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Search Icon (desktop only) */}
              <div className="hidden lg:flex lg:items-center">
                <button className="p-2 text-gray-300 hover:text-orange-500">
                  <Search className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Menu Button (Hamburger/X) */}
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
        </nav>
      </header>

      {/* 📱 MOBILE MENU AND CLICK-OUTSIDE BACKDROP */}
      {/* Renders a full-screen backdrop when isOpen is true */}
      {isOpen && (
        <div 
          className="fixed inset-0 w-full h-full bg-black/50 z-40 lg:hidden" // z-40 is below the menu (z-50)
          onClick={() => setIsOpen(false)} // 🔑 Closes menu when backdrop is clicked
        >
          <div 
            className={mobileMenuClasses}
            id="mobile-menu"
            // 🔑 Prevents the click from bubbling up to the backdrop and closing the menu immediately
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="pt-24 pb-3 space-y-1"> {/* Increased padding to clear the fixed header */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  // Close menu after clicking a link
                  onClick={() => setIsOpen(false)}
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-100 hover:text-orange-500 hover:bg-gray-800 hover:border-orange-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Spacer Element: always present, height depends on screen size */}
      <div style={spacerHeightStyle} />
    </>
  );
};

export default Navbar;