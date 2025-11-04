import React from 'react'
import { Mail, Phone, MapPin, Globe, Factory, Smartphone } from 'lucide-react';

const ACCENT_BG_CLASS = 'bg-blue-500 hover:bg-blue-600';
const ACCENT_FOCUS_RING = 'focus:ring-blue-500';

const Form = () => {
  return (
    <div className=" mx-auto max-w-7xl px-4 sm:px-4 lg:px-8 py-8 sm:py-12 md:py-16">
      
      {/* Header and Description */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-500 mb-2 pl-2 sm:pl-4">
  CONTACT US
</h1>
<p className="text-gray-500 mb-10 sm:mb-12 text-sm sm:text-base leading-relaxed">
  Need fast, reliable commercial kitchen support? At CCRL (Commercial Catering Repairs Ltd), 
  we specialise in the repair, servicing, and maintenance of professional catering equipment. 
  Whether you require urgent assistance, scheduled maintenance, or expert guidance, our 
  experienced engineers are here to help.  
  <br /><br />
  Reach out to us today — we’ll respond quickly to ensure your business keeps running 
  smoothly and efficiently.
</p>


      {/* Main Content: Info and Form */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10">
        
        {/* Contact Info Section */}
        <div className="w-full lg:w-5/12 xl:w-4/12 space-y-4">
          {[
            { Icon: Factory, text: 'Commercial Catering Repairs Ltd.' },
            { Icon: MapPin, text: '23 Wexham Close, Luton, Bedfordshire, United Kingdom, LU3 3TU' },
            { Icon: Phone, text: '03301337762', link: 'tel:+38640222555' },
            { Icon: Phone, text: '03301337762', link: 'tel:+38640222554' },
            { Icon: Smartphone, text: '03301337762', link: 'tel:+38640222555' },
            { Icon: Mail, text: 'service@pimlicocateringrepairs.co.uk', link: 'service@pimlicocateringrepairs.co.uk' },
          ].map(({ Icon, text, link, target }, i) => (
            <div key={i}>
              <div className="flex items-start">
                <div className={`p-2 mr-4 text-sky-500`}>
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
       <div className="w-full xl:w-8/12">
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

    {/* Reduced height message field */}
    <textarea
      placeholder="Message"
      rows="5"
      className={`w-full p-3 sm:p-4 border border-[#2B7FFF] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-opacity-50 ${ACCENT_FOCUS_RING} text-gray-700`}
      style={{ minHeight: "120px" }}
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
