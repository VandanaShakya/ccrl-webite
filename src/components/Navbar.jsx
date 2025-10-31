import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Phone, Mail, Search } from 'lucide-react'; 
import images from '../assets/images';
import { FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const [showTopBar, setShowTopBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // NEW: State to clearly indicate when the main nav should get the 'scrolled' styling
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'SERVICES', href: '/services' },
        { name: 'CONTACT', href: '/contact-us' },
        { name: 'HOW IT WORKS', href: '/how-it-works' },
        { name: 'Brands We Work On', href: 'our-brands' },
    ];

    const topBarHeight = 36;  // Approx. height of the top bar
    const mainNavHeight = 80; // Height of the main nav bar
    const fixedSpacerHeight = topBarHeight + mainNavHeight; 

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const scrollThreshold = 10; // Point to trigger 'scrolled' look

        // 1. Determine if the main nav should look 'scrolled' (shadow/blur)
        setIsScrolled(currentScrollY > scrollThreshold);

        // 2. Logic for Top Bar (Hide on Scroll Down, Show on Scroll Up)
        if (currentScrollY > lastScrollY) {
            // Scrolling DOWN: Hide Top Bar quickly
            if (currentScrollY > 10) { 
                setShowTopBar(false);
            }
        } else if (currentScrollY < lastScrollY) {
            // Scrolling UP: Show Top Bar immediately
            setShowTopBar(true);
        }

        // 3. Always ensure Top Bar is visible if user is very near the top
        if (currentScrollY <= scrollThreshold) {
            setShowTopBar(true);
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
    }, [lastScrollY]); 

    // The entire fixed header shifts up/down by 36px to hide/show the top bar.
    // The Main Nav always remains visible.
    // Use an explicit utility class for 36px: -translate-y-9
    const headerTranslate = showTopBar ? 'translate-y-0' : '-translate-y-9'; 

    return (
        <>
            {/* Main Fixed Header Container (wraps both bars) */}
            <header
                // Apply fixed position and the translate class
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
                    headerTranslate
                } ${isScrolled ? 'shadow-xl' : ''}`} // Shadow/blur is tied to isScrolled state
            >
                {/* 1. TOP INFORMATIONAL BAR */}
             
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

    {/* Right Section - Email + Social Icons */}
    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-1">
        <Mail size={16} className="text-orange-500" />
        <span>info@yourdomain.com</span>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 text-gray-300">
        <a
          href="#"
          aria-label="Facebook"
          className="hover:text-orange-500 transition-transform duration-300 hover:scale-110"
        >
          <FaFacebookF size={18} />
        </a>

        <a
          href="#"
          aria-label="WhatsApp"
          className="hover:text-orange-500 transition-transform duration-300 hover:scale-110"
        >
          <FaWhatsapp size={18} />
        </a>

        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-orange-500 transition-transform duration-300 hover:scale-110"
        >
          <FaTwitter size={18} />
        </a>

        <a
          href="#"
          aria-label="YouTube"
          className="hover:text-orange-500 transition-transform duration-300 hover:scale-110"
        >
          <FaYoutube size={18} />
        </a>
      </div>
    </div>
  </div>
</div>

                {/* 2. MAIN NAVIGATION BAR */}
                <nav 
                    // Refined the application of blur and background transition:
                    // Only apply blur/opacity when isScrolled is true.
                    className={`bg-[#052E53] ${
                        isScrolled ? 'backdrop-blur-sm bg-[#052E53]/90 shadow-lg' : ''
                    } transition-all duration-300`} // Changed to transition-all for smoother color/blur change
                    style={{ height: `${mainNavHeight}px` }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-full">
                            {/* Logo Section */}
                            <div className="flex items-center">
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

            {/* SPACER ELEMENT: Always reserves maximum space (116px) */}
            <div style={{ height: `${fixedSpacerHeight}px` }} className="hidden lg:block"></div>
        </>
    );
};

export default Navbar;