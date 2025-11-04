import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Phone, Mail } from 'lucide-react';
import images from '../assets/images';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const topBarHeight = 36;
  const mainNavHeight = 80;
  const fixedSpacerHeight = topBarHeight + mainNavHeight;

  // Handle resize
  useEffect(() => {
    const onResize = () => {
      const newIsLargeScreen = window.innerWidth >= 1024;
      setIsLargeScreen(newIsLargeScreen);
      if (newIsLargeScreen && isOpen) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isOpen]);

  // Handle scroll
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 10;

    setIsScrolled(currentScrollY > scrollThreshold);

    if (isLargeScreen) {
      if (currentScrollY > lastScrollY) setShowTopBar(false);
      else if (currentScrollY < lastScrollY) setShowTopBar(true);
      if (currentScrollY <= scrollThreshold) setShowTopBar(true);
    } else {
      setShowTopBar(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isLargeScreen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const headerTranslate =
    isLargeScreen && !showTopBar ? '-translate-y-9' : 'translate-y-0';

  const spacerHeightStyle = {
    height: `${isLargeScreen ? fixedSpacerHeight : mainNavHeight}px`,
  };

  // mobile menu classes (uses transform translate-x to be off-screen on the right initially)
  const mobileMenuBase = `
    fixed top-0 right-0 h-screen bg-[#052E53] z-50
    transform transition-transform duration-300 ease-in-out
    w-1/2 max-w-xs lg:hidden
  `;
  const mobileMenuTransform = isOpen ? 'translate-x-0' : 'translate-x-full';

  // overlay classes so it can fade in/out while staying mounted (lets close animation run)
  const overlayBase = 'fixed inset-0 z-40 lg:hidden transition-opacity duration-300';
  const overlayVisible = isOpen ? 'opacity-100 visible bg-black/50' : 'opacity-0 invisible';

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${headerTranslate} ${
          isScrolled ? 'shadow-xl' : ''
        }`}
      >
        {/* 🧭 TOP BAR — only on large screens */}
        <div
          className={`bg-gray-800 py-2 text-sm text-gray-100 hidden lg:block transition-transform duration-300 ease-in-out`}
          style={{ height: `${topBarHeight}px` }}
        >
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
            <div className="flex space-x-6">
              <div className="flex items-center space-x-1">
                <MapPin size={16} className="text-orange-500" />
                <span>23 Wexham Close, Luton, Bedfordshire, United Kingdom, LU3 3TU</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={16} className="text-orange-500" />
                <span>Mon - Sat: 9:00 - 18:00</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone size={16} className="text-orange-500" />
                <span>03301337762</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Mail size={16} className="text-orange-500" />
                <span>service@pimlicocateringrepairs.co.uk</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION */}
        <nav
          className={`bg-[#052E53] ${isScrolled ? 'backdrop-blur-sm bg-[#052E53]/90 shadow-lg' : ''} transition-all duration-300`}
          style={{ height: `${mainNavHeight}px` }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
            {/* LOGO */}
            <div className="flex items-center space-x-2">
              <Link to="/">
                <img src={images.logo} className="h-10 w-25" alt="CCRL Logo" />
              </Link>
              <span className="text-2xl font-bold tracking-wider text-white">CCRL</span>
            </div>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden lg:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white text-sm font-medium hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="flex items-center lg:hidden">
              <button
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsOpen((s) => !s)}
                className="p-2 text-gray-300 hover:text-orange-500 hover:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* 📱 MOBILE MENU & OVERLAY — always mounted so enter/exit animations run smoothly */}
      <div
        className={overlayBase + ' ' + overlayVisible}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      >
        {/* sliding menu — stop click from bubbling to overlay */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-hidden={!isOpen}
          className={`${mobileMenuBase} ${mobileMenuTransform}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={images.logo} className="h-8 w-auto" alt="CCRL Logo" />
              </Link>
              <span className="text-white font-semibold">Menu</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-200 hover:text-white focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="pt-6 pb-4 px-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block pl-4 pr-4 py-3 text-gray-100 text-base font-medium hover:text-orange-500 hover:bg-gray-800 border-l-4 border-transparent hover:border-orange-500"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* SPACER */}
      <div style={spacerHeightStyle} />
    </>
  );
};

export default Navbar;
