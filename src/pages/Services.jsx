import React, { useState, useEffect } from 'react';
import { serviceData } from './data';
import images from '../assets/images'

const CUSTOM_BLUE = '#2B7FFF';

// Simple Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white p-6 mt-10 rounded-t-lg shadow-inner">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Our Company Name. All rights reserved. | Contact us at info@domain.com</p>
      <div className="mt-2 text-xs text-gray-400">
        Privacy Policy | Terms of Service
      </div>
    </div>
  </footer>
);


const Services = () => {
  
  // Use the ID of the first service in the new array ('combi-ovens') as the default
  const initialServiceId = serviceData.length > 0 ? serviceData[0].id : null;
  const [activeServiceId, setActiveServiceId] = useState(initialServiceId);

  // Find the active service based on the ID
  const activeService = serviceData.find(service => service.id === activeServiceId);

  // Effect to ensure the first service is selected on initial load
  useEffect(() => {
    if (!activeServiceId && serviceData.length > 0) {
      setActiveServiceId(serviceData[0].id);
    }
  }, [activeServiceId]);
  
  let contentJSX;

  if (!activeService) {
    contentJSX = (
      <div className="flex justify-center items-center h-full bg-gray-50 w-full">
        <h1 className="text-2xl font-semibold text-gray-500">Please select a service from the left sidebar to view details.</h1>
      </div>
    );
  } else {
    // Full content display when a service is active
    const service = activeService;
    
    // Function to encode and format text for placeholder image URLs
    const formatTextForPlaceholder = (text) => encodeURIComponent(text.toUpperCase().replace(/ /g, '+').substring(0, 20));

    contentJSX = (
      <div className=" p-4 md:p-8 bg-gray-50 min-h-screen">
        
        {/* Main Image Banner - NOW DYNAMICALLY GENERATED from service.title */}
<div className="relative mb-6 rounded-lg overflow-hidden shadow-lg h-64 md:h-80 bg-gray-900">
  <img
    src={
      service?.mainImage
        ? service.mainImage
        : `https://placehold.co/1200x400/2B7FFF/ffffff?text=${formatTextForPlaceholder(
            service.title
          )}+SHOWCASE`
    }
    alt={`${service.title} project showcase`}
    className="w-full h-full object-cover transition-transform duration-300"
    loading="lazy"
    style={{
      imageRendering: "crisp-edges", // Improves sharpness for large images
    }}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src =
        "https://placehold.co/1200x400/94A3B8/ffffff?text=Image+Unavailable";
    }}
  />

</div>






        {/* Thumbnail Gallery (Dynamic images generated from service.galleryImages titles) */}
        <div className="flex space-x-4 overflow-x-auto pb-4 mb-8">
          {/* Use optional chaining here to prevent 'map is undefined' error */}
         {serviceData[0].galleryImages?.map((img, index) => (
  <div
    key={index}
    className="w-32 h-20 border-2 border-transparent rounded-md overflow-hidden cursor-pointer hover:border-blue-500 transition shadow-md"
  >
    <img
      src={img}
      alt={`Gallery Image ${index + 1}`}
      className="w-full h-full object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/300x200/A0AEC0/000000?text=Thumb";
      }}
    />
  </div>
))}

        </div>

        {/* Dynamic Content Sections */}
        <div className=" p-6 md:p-8 rounded-lg shadow-md">

          {/* --- SERVICE HEADING & DESCRIPTION --- */}
          <h2 className="text-3xl font-extrabold mb-2 uppercase" style={{ color: CUSTOM_BLUE }}>
            {service.title}
          </h2>
          <h3 className="text-xl font-bold mb-4 text-gray-700">{service.heading}</h3>
          <p className="text-base mb-8 text-gray-600">
            {service.description}
          </p>
          
          <hr className="my-6 border-gray-200" />
          
          <div className="grid lg:grid-cols-2 gap-10">
            
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-gray-800">
                Service Details
              </h4>
              
              {/* Details List */}
              <div className="space-y-4 mb-8">
                {/* Use optional chaining here */}
                {service.details?.map((detail, index) => (
                  <div key={index}>
                    <p className="font-semibold text-gray-800 flex items-center">
                      <span className="text-xl mr-2" style={{ color: CUSTOM_BLUE }}>•</span> 
                      {detail.subtitle}
                    </p>
                    <p className="text-sm text-gray-500 pl-4">{detail.content}</p>
                  </div>
                ))}
              </div>

           
            </div>
            
            {/* --- PROJECT MISSION --- */}
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-gray-800">
                Project Mission
              </h4>
              <blockquote className="border-l-4 pl-4 py-2 italic text-gray-600 bg-gray-50 p-4 rounded-md" style={{ borderColor: CUSTOM_BLUE }}>
                "{service.mission}"
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    );
  }

  
  return (
    <>
  <div>
 <div className="relative w-full h-[32rem] md:h-[40rem] overflow-hidden">
  {/* Background Image */}
  <img
    src={images.serviceHeroImage}
    alt="Industrial Background"
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
  />

  {/* Dark overlay with gradient for better contrast */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center">
    {/* Constrain content to max width */}
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-center md:justify-start">
      {/* Text Content */}
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-widest drop-shadow-lg">
          Services
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-xl leading-relaxed">
          We’re here to help you with your industrial solutions — reach out to
          us for quotes, consultations, or support.
        </p>
      
      </div>
    </div>
  </div>
</div>

</div>



    <div className="min-h-screen pt-16"> 
          <section className="px-8 py-12 bg-white text-gray-700 w-7xl m-auto">
      {/* Heading Block */}
      <div className="mb-4 group w-fit">
        <h2
  className="text-2xl font-semibold tracking-wide text-black relative w-fit 
  after:content-[''] after:block after:w-12 after:h-[3px] after:bg-[#2B7FFF] 
  after:transition-all after:duration-300 group-hover:after:w-20"
>
  OUR INDUSTRIAL SERVICES
</h2>
</div>

{/* Description */}
<p className="max-w-5xl text-sm md:text-base leading-relaxed text-gray-500">
  We deliver comprehensive industrial solutions designed to enhance efficiency, 
  safety, and sustainability. Our services span across equipment installation, 
  process automation, maintenance, and energy management — helping industries 
  optimize operations and reduce downtime. With a commitment to innovation and 
  precision, we partner with clients to build reliable and future-ready 
  industrial systems.
</p>

    </section>
        {/* --- 1. MAIN LAYOUT WRAPPER (max-w-7xl mx-auto) --- */}
        <div className="max-w-7xl mx-auto font-sans bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <div className="flex flex-col md:flex-row">
                
                {/* 1. SIDEBAR AREA */}
                <div className="w-full md:w-64 flex-shrink-0 bg-white border-b md:border-b-0 md:border-r border-gray-200 z-10 shadow-lg md:shadow-none">
                    
                    <div className="p-4 pt-6">
                        <h3 className="text-xl font-bold uppercase mb-4" style={{ color: CUSTOM_BLUE }}>All Services</h3>
                        
                        {/* Services List */}
                        <nav className="flex flex-col space-y-1">
                            {serviceData.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveServiceId(service.id)}
                                    className={`
                                        text-left px-4 py-3 text-sm font-medium transition-all duration-200 rounded
                                        ${
                                            activeServiceId === service.id
                                                ? 'text-white' // Active state
                                                : 'text-gray-700 hover:bg-blue-50 hover:text-gray-900' // Default state
                                        }
                                    `}
                                    // Apply custom blue color for active background
                                    style={activeServiceId === service.id ? { backgroundColor: CUSTOM_BLUE } : {}}
                                >
                                    {service.title}
                                </button>
                            ))}
                        </nav>

                        <hr className="my-6 border-gray-200" />
                    </div>
                    
                </div>

                {/* 2. MAIN CONTENT AREA */}
                <main className="flex-grow w-full">
                    {contentJSX}
                </main>
            </div>
        </div>
        {/* --- 2. FOOTER --- */}
        <Footer />
    </div>
    </>
  );
};

export default Services;