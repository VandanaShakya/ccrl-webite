import React from 'react';
// Replaced FontAwesome with Lucide icons, which are typically available in single-file React environments.
import { 
  MapPin, Phone, Printer, Mail, Calendar, 
  Twitter, Facebook, Linkedin, Dribbble, Rss 
} from 'lucide-react';

const Footer = () => {
  // Define a reusable Icon component for consistency and styling in contact info
  const ContactIcon = ({ icon: Icon, text }) => (
    <p className="flex items-start">
      <Icon className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" /> 
      <span className="break-words">{text}</span>
    </p>
  );

  // Define a reusable Social Icon component for buttons
  const SocialButton = ({ icon: Icon, href }) => (
    <a href={href} className="bg-blue-500 hover:bg-blue-600 text-white w-8 h-8 flex items-center justify-center transition-colors rounded">
      <Icon className="w-4 h-4" />
    </a>
  );
  
  // Define a reusable Social Link component for simple links
  const SocialLink = ({ icon: Icon, href }) => (
    <a href={href} className="hover:text-white transition-colors">
      <Icon className="w-5 h-5" />
    </a>
  );


  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info / About Us */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              {/* Placeholder logo */}
              <div className="h-8 w-8 bg-blue-500 rounded flex items-center justify-center mr-2">
                <Dribbble className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase">Industrial</h3>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tellus, venenatis sed
              nisi in, egestas bibendum sem. Nam tempus dolor quis interdum auctor.
            </p>
            <div className="space-y-2 text-sm">
              <ContactIcon icon={MapPin} text="300 Pennsylvania Ave NW, Washington, DC 20006, USA" />
              <ContactIcon icon={Phone} text="158-985-66-22" />
              <ContactIcon icon={Printer} text="158-985-66-33" />
              <ContactIcon icon={Mail} text="mail@domain.com" />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2 inline-block">Navigation</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm mt-4">
              <a href="#" className="hover:text-white transition-colors flex items-center"><span className="mr-2 text-blue-500 text-xs font-bold">&gt;</span> Home</a>
              <a href="#" className="hover:text-white transition-colors flex items-center"><span className="mr-2 text-blue-500 text-xs font-bold">&gt;</span> Features</a>
              <a href="#" className="hover:text-white transition-colors flex items-center"><span className="mr-2 text-blue-500 text-xs font-bold">&gt;</span> About Us</a>
              <a href="#" className="hover:text-white transition-colors flex items-center"><span className="mr-2 text-blue-500 text-xs font-bold">&gt;</span> Services</a>
              <a href="#" className="hover:text-white transition-colors flex items-center"><span className="mr-2 text-blue-500 text-xs font-bold">&gt;</span> Projects</a>
              <a href="#" className="hover:text-white transition-colors flex items-center"><span className="mr-2 text-blue-500 text-xs font-bold">&gt;</span> News</a>
              <a href="#" className="hover:text-white transition-colors flex items-center"><span className="mr-2 text-blue-500 text-xs font-bold">&gt;</span> Shop</a>
              <a href="#" className="hover:text-white transition-colors flex items-center"><span className="mr-2 text-blue-500 text-xs font-bold">&gt;</span> Contact Us</a>
            </div>
            
            {/* Socialise with us (under Navigation on smaller screens, moves to separate row on larger) */}
            <div className="mt-8 lg:hidden"> {/* Only visible on md and smaller */}
              <h4 className="text-white text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2 inline-block">Socialise with us</h4>
              <p className="text-sm mb-4">Contact us via social networks</p>
              <div className="flex space-x-4 text-lg">
                <SocialLink icon={Twitter} href="#" />
                <SocialLink icon={Facebook} href="#" />
                <SocialLink icon={Linkedin} href="#" />
                <SocialLink icon={Dribbble} href="#" />
                <SocialLink icon={Rss} href="#" />
              </div>
            </div>
          </div>

          {/* Column 3: Working Hours */}
          <div className="col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2 inline-block">Working Hours</h4>
            <p className="text-sm leading-relaxed mt-4 mb-6">
              Visit us at our HQ for a mean cup of coffee and a fantastic consulting team.
            </p>
            <div className="text-sm space-y-1">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                <div key={day} className="flex justify-between">
                  <span>{day}</span>
                  <span>9am &gt; 5pm</span>
                </div>
              ))}
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9am &gt; 1pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-400">Sunday</span>
                <span className="text-red-400">Closed</span>
              </div>
            </div>
          </div>

          {/* Column 4: Latest News & Subscribe */}
          <div className="col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2 inline-block">Latest News</h4>
            <div className="mt-4 space-y-4">
              <div>
                <a href="#" className="text-white hover:text-blue-500 transition-colors text-base font-normal">Responsible to environment</a>
                <p className="text-xs text-gray-500 mt-1 flex items-center"><Calendar className="mr-1 h-3 w-3" /> January 18, 2016</p>
              </div>
              <div>
                <a href="#" className="text-white hover:text-blue-500 transition-colors text-base font-normal">The engineering of today</a>
                <p className="text-xs text-gray-500 mt-1 flex items-center"><Calendar className="mr-1 h-3 w-3" /> January 7, 2016</p>
              </div>
            </div>

            <h4 className="text-white text-lg font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2 inline-block">Subscribe</h4>
            <form className="flex">
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
        </div>

        {/* Separator for Socialise with us section on larger screens */}
        <div className="hidden lg:block mt-12 pt-8 border-t border-gray-700"> {/* Visible only on lg and larger */}
          <h4 className="text-white text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2 inline-block">Socialise with us</h4>
          <p className="text-sm mb-4">Contact us via social networks</p>
          <div className="flex space-x-4 text-lg">
            <SocialLink icon={Twitter} href="#" />
            <SocialLink icon={Facebook} href="#" />
            <SocialLink icon={Linkedin} href="#" />
            <SocialLink icon={Dribbble} href="#" />
            <SocialLink icon={Rss} href="#" />
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; 2016 Industrial Wordpress Theme - Theme by Anosthemes.com</p>
          <div className="flex space-x-3 text-lg mt-4 md:mt-0">
            <SocialButton icon={Twitter} href="#" />
            <SocialButton icon={Facebook} href="#" />
            <SocialButton icon={Linkedin} href="#" />
            <SocialButton icon={Dribbble} href="#" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;