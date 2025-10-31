import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Phone, Mail, Search } from 'lucide-react';
import images from '../assets/images';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track if viewport is large (lg / desktop). We'll treat >=1024px as lg.
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
  );

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Brands We Work On', href: '/our-brands' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const topBarHeight = 36; // Approx. height of the top bar (used only on large screens)
  const mainNavHeight = 80; // Height of the main nav bar
  const fixedSpacerHeight = topBarHeight + mainNavHeight;

  useEffect(() => {
    // Resize handler to set isLargeScreen
    const onResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    // run on mount
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 10;

    setIsScrolled(currentScrollY > scrollThreshold);

    // Only show/hide top bar behavior on large screens (where the top bar exists)
    if (isLargeScreen) {
      if (currentScrollY > lastScrollY) {
        if (currentScrollY > 10) {
          setShowTopBar(false);
        }
      } else if (currentScrollY < lastScrollY) {
        setShowTopBar(true);
      }
      if (currentScrollY <= scrollThreshold) {
        setShowTopBar(true);
      }
    } else {
      // On small screens ensure top bar is always hidden because it's not rendered
      setShowTopBar(false);
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
  }, [lastScrollY, isLargeScreen]); // rebind when isLargeScreen changes

  // Only apply the -translate-y-9 when top bar exists (large screens) AND showTopBar=false.
  // On mobile (isLargeScreen === false) we don't translate the header.
  const headerTranslate =
    isLargeScreen && !showTopBar ? '-translate-y-9' : 'translate-y-0';

  // Spacer height should reflect what's actually visible:
  // - On large screens both top bar + main nav might be present (reserve fixedSpacerHeight)
  // - On small screens only main nav is visible so reserve mainNavHeight
  const spacerHeightStyle = {
    height: `${isLargeScreen ? fixedSpacerHeight : mainNavHeight}px`,
  };

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
                  <a
                    key={link.name}
                    href={link.href}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-orange-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:border-orange-500"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Search Icon (desktop only) */}
              <div className="hidden lg:flex lg:items-center">
                <button className="p-2 text-gray-300 hover:text-orange-500">
                  <Search className="h-6 w-6" />
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

          {/* Mobile Menu (search input removed) */}
          {isOpen && (
            <div className="absolutet t-10 r-0 w-[50%] h-screen lg:hidden bg-[#052E53]" id="mobile-menu">
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

                {/* Removed mobile search input per your request */}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Spacer Element: always present, height depends on screen size */}
      <div style={spacerHeightStyle} />
    </>
  );
};

export default Navbar;
