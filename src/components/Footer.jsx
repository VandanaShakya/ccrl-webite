import React from 'react';
// Replaced FontAwesome with Lucide icons, which are typically available in single-file React environments.
import { 
  MapPin, Phone, Mail, Calendar 
} from 'lucide-react';
import images from '../assets/images';

const Footer = () => {
  const ContactIcon = ({ icon: Icon, text }) => (
    <p className="flex items-start">
      <Icon className="mr-2 h-5 w-5 text-blue-500 mt-0.5" /> 
      <span className="">{text}</span>
    </p>
  );

  const SocialButton = ({ icon: Icon, href }) => (
    <a href={href} className="bg-blue-500 hover:bg-blue-600 text-white w-8 h-8 flex items-center justify-center transition-colors rounded">
      <Icon className="w-4 h-4" />
    </a>
  );
  
  const SocialLink = ({ icon: Icon, href }) => (
    <a href={href} className="hover:text-white transition-colors">
      <Icon className="w-5 h-5" />
    </a>
  );


  return (
     <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid
            - grid-cols: 1 (mobile) / 2 (md) / 4 (lg)
            - gap for spacing, items-stretch so each column gets equal height
        */}
        <div className="block lg:flex lg:gap-12 gap-8 items-stretch">

      {/* Column 1: Brand Info / About Us */}
      <div className="w-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className="h-10 w-20 flex items-center justify-center mr-2">
            <img
              src={images.logo}
              alt="logo"
              className="h-10 w-20 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-white uppercase leading-tight">
            Commercial <br /> Catering Repairs Ltd
          </h3>
        </div>

        <p className="text-sm leading-relaxed mb-6 flex-1">
          Pimlico Commercial Catering Repairs Ltd specializes in providing fast, reliable, and
          professional repair and maintenance services for all types of commercial kitchen
          equipment. We ensure minimal downtime and maximum efficiency for your business operations.
        </p>

        <div className="space-y-2 text-sm">
          <ContactIcon icon={MapPin} text="23 Wexham Close, Luton, Bedfordshire, LU3 3TU" />
          <ContactIcon icon={Phone} text="0330 133 7762" />
          <ContactIcon icon={Mail} text="service@pimlicocateringrepairs.co.uk" />
        </div>
      </div>

      {/* Column 2: Navigation + Subscribe */}
      <div className="w-full flex flex-col">
        <h4 className="text-white text-lg font-semibold mb-4 border-b-2 border-blue-500 w-22 pb-2 inline-block">
          Navigation
        </h4>

        <div className="grid grid-cols-1 gap-y-2 text-sm mt-4">
          <a href="/" className="hover:text-white transition-colors flex items-center">
            <span className="mr-2 text-blue-500 text-xs font-bold">&gt;</span> Home
          </a>
          <a href="/about-us" className="hover:text-white transition-colors flex items-center">
            <span className="mr-2 text-blue-500 text-xs font-bold">&gt;</span> About Us
          </a>
          <a href="/services" className="hover:text-white transition-colors flex items-center">
            <span className="mr-2 text-blue-500 text-xs font-bold">&gt;</span> Services
          </a>
          <a href="/contact-us" className="hover:text-white transition-colors flex items-center">
            <span className="mr-2 text-blue-500 text-xs font-bold">&gt;</span> Contact Us
          </a>
        </div>

        <h4 className="text-white text-lg font-semibold mt-8 mb-4 border-b-2 border-blue-500 w-20 pb-2 inline-block">
          Subscribe
        </h4>

        <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Email"
            className="p-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full rounded-l"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 transition-colors rounded-r"
          >
            <Mail className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Column 3: Working Hours */}
      <div className="w-full flex flex-col">
        <h4 className="text-white text-lg font-semibold mb-4 border-b-2 border-blue-500 w-32 pb-2">
          Working Hours
        </h4>

        <p className="text-sm leading-relaxed mt-4 mb-6 flex-shrink-0">
          Visit us at our HQ for a mean cup of coffee and a fantastic consulting team.
        </p>

        <div className="text-sm space-y-1 mt-auto">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
            <div key={day} className="flex justify-between">
              <span>{day}</span>
              <span>9am &gt; 6pm</span>
            </div>
          ))}
         
          <div className="flex justify-between">
            <span className="text-red-400">Sunday</span>
            <span className="text-red-400">Closed</span>
          </div>
        </div>
      </div>
      </div>
        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p className="text-sm">
            © {new Date().getFullYear()} Pimlico Commercial Catering Repairs Ltd (CCRL). All rights reserved. &nbsp;
            <a href="/terms&conditions" className="underline">Terms</a> | <a href="/privacy-policy" className="underline">Privacy Policy</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;