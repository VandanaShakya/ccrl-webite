import React from 'react'
import { Mail, Phone, MapPin, Globe, Factory, Smartphone } from 'lucide-react';

const ACCENT_COLOR_CLASS = 'text-blue-500';
const ACCENT_BG_CLASS = 'bg-blue-500 hover:bg-blue-600';
const ACCENT_FOCUS_RING = 'focus:ring-blue-500';

const Form = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 py-8 sm:py-12 md:py-16">
      
      {/* Header and Description */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 pl-2 sm:pl-4">
        DO CONTACT US
      </h1>
      <p className="text-gray-500 mb-10 sm:mb-12 text-sm sm:text-base leading-relaxed">
        Curabitur maximus feugiat velit, sed dapibus sem auctor quis. Maecenas 
        turpis purus, tincidunt eget mattis ac, placerat sit amet dolor. 
        Aenean vel porttitor libero, nec tempor magna. Mauris sed ex at tellus 
        elementum tempus dignissim ac est. Curabitur maximus feugiat velit, 
        sed dapibus sem auctor quis.
      </p>

      {/* Main Content: Info and Form */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10">
        
        {/* Contact Info Section */}
        <div className="w-full lg:w-5/12 xl:w-4/12 space-y-4">
          {[
            { Icon: Factory, text: 'Industrial Ltd. Inc.' },
            { Icon: MapPin, text: '300 Pennsylvania Ave NW, Washington, DC 20006, USA' },
            { Icon: Phone, text: '+386 40 222 555', link: 'tel:+38640222555' },
            { Icon: Phone, text: '+386 40 222 554', link: 'tel:+38640222554' },
            { Icon: Smartphone, text: '+386 40 222 555', link: 'tel:+38640222555' },
            { Icon: Mail, text: 'mail@companyname.com', link: 'mailto:mail@companyname.com' },
            { Icon: Globe, text: 'www.yoursitename.com', link: 'http://www.yoursitename.com', target: '_blank' },
          ].map(({ Icon, text, link, target }, i) => (
            <div key={i}>
              <div className="flex items-start">
                <div className={`p-2 mr-4 ${ACCENT_COLOR_CLASS}`}>
                  <Icon size={20} />
                </div>
                <div className="flex-1 pt-1 min-w-0">
                  {link ? (
                    <a
                      href={link}
                      target={target}
                      rel={target ? 'noopener noreferrer' : undefined}
                      className="text-gray-600 hover:text-gray-800 transition"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-gray-700 font-medium">{text}</span>
                  )}
                </div>
              </div>
              {i < 6 && <hr className="border-t border-gray-100 mx-1 mb-2" />}
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-7/12 xl:w-8/12">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className={`w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${ACCENT_FOCUS_RING} text-gray-700`}
            />
            <input
              type="email"
              placeholder="Email"
              className={`w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${ACCENT_FOCUS_RING} text-gray-700`}
            />
            <input
              type="text"
              placeholder="Subject"
              className={`w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${ACCENT_FOCUS_RING} text-gray-700`}
            />
            <textarea
              placeholder="Message"
              rows="8"
              className={`w-full p-3 sm:p-4 border border-[#2B7FFF] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-opacity-50 ${ACCENT_FOCUS_RING} text-gray-700`}
              style={{ minHeight: '200px' }}
            />
            <button
              type="submit"
              className={`w-full sm:w-auto px-8 py-3 text-white font-semibold rounded-lg ${ACCENT_BG_CLASS} transition duration-150 shadow-md`}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
