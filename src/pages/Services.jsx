import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { serviceData } from './data';
import images from '../assets/images';

const CUSTOM_BLUE = '#2B7FFF';

// Simple Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white p-6 mt-10 rounded-t-lg shadow-inner">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Our Company Name. All rights reserved. | Contact us at info@domain.com
      </p>
      <div className="mt-2 text-xs text-gray-400">Privacy Policy | Terms of Service</div>
    </div>
  </footer>
);

const Services = () => {
  // Use the ID of the first service as the default
  const initialServiceId = serviceData.length > 0 ? serviceData[0].id : null;
  const [activeServiceId, setActiveServiceId] = useState(initialServiceId);

  // Find the active service based on the ID
  const activeService = serviceData.find((service) => service.id === activeServiceId);

  // Ensure the first service is selected on initial load if none set
  useEffect(() => {
    if (!activeServiceId && serviceData.length > 0) {
      setActiveServiceId(serviceData[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // Utility to safely format placeholder text for generated images
  const formatTextForPlaceholder = (text) =>
    encodeURIComponent(text?.toUpperCase().replace(/ /g, '+').substring(0, 20) ?? 'SERVICE');

  /* ---------------------------
     Framer Motion variants
     --------------------------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  const sidebarItem = {
    hidden: { opacity: 0, x: -6 },
    show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 8, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  };

  /* ---------------------------
     Render content for selected service
     --------------------------- */
  let contentJSX;
  if (!activeService) {
    contentJSX = (
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="flex justify-center items-center h-full bg-gray-50 w-full p-6"
      >
        <h1 className="text-2xl font-semibold text-gray-500">
          Please select a service from the left (or above on mobile) to view details.
        </h1>
      </motion.div>
    );
  } else {
    const service = activeService;

    contentJSX = (
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="p-4 md:p-8 bg-gray-50 min-h-screen"
      >
        {/* Main Image Banner */}
        <motion.div variants={cardVariant} className="relative mb-6 rounded-lg overflow-hidden shadow-lg h-64 md:h-80 bg-gray-900">
          <img
            src={
              service.mainImage
                ? service.mainImage
                : `https://placehold.co/1200x400/2B7FFF/ffffff?text=${formatTextForPlaceholder(service.title)}+SHOWCASE`
            }
            alt={`${service.title} project showcase`}
            className="w-full h-full object-cover transition-transform duration-300"
            loading="lazy"
            style={{ imageRendering: 'crisp-edges' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/1200x400/94A3B8/ffffff?text=Image+Unavailable';
            }}
          />
        </motion.div>

        {/* Thumbnail Gallery */}
        <motion.div variants={fadeUp} className="flex space-x-4 overflow-x-auto pb-4 mb-8">
          {service.galleryImages?.length ? (
            service.galleryImages.map((img, index) => (
              <motion.button
                key={index}
                variants={cardVariant}
                whileHover={{ scale: 1.02 }}
                className="w-32 h-20 flex-shrink-0 border-2 border-transparent rounded-md overflow-hidden cursor-pointer hover:border-blue-500 transition shadow-md"
                aria-label={`Gallery image ${index + 1}`}
                onClick={() => {
                  // If thumbnails should update the main image, we can add that behavior later.
                }}
              >
                <img
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/300x200/A0AEC0/000000?text=Thumb';
                  }}
                  loading="lazy"
                />
              </motion.button>
            ))
          ) : (
            <div className="w-full text-sm text-gray-500">No gallery images available for this service.</div>
          )}
        </motion.div>

        {/* Dynamic Content Sections */}
        <motion.div variants={fadeUp} className="p-6 md:p-8 rounded-lg shadow-md bg-white">
          {/* Service heading */}
          <h2 className="text-3xl font-extrabold mb-2 uppercase" style={{ color: CUSTOM_BLUE }}>
            {service.title}
          </h2>
          <h3 className="text-xl font-bold mb-4 text-gray-700">{service.heading}</h3>
          <p className="text-base mb-8 text-gray-600">{service.description}</p>

          <hr className="my-6 border-gray-200" />

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-gray-800">Service Details</h4>

              {/* Details List */}
              <div className="space-y-4 mb-8">
                {service.details?.map((detail, index) => (
                  <motion.div key={index} variants={cardVariant}>
                    <p className="font-semibold text-gray-800 flex items-center">
                      <span className="text-xl mr-2" style={{ color: CUSTOM_BLUE }}>
                        •
                      </span>
                      {detail.subtitle}
                    </p>
                    <p className="text-sm text-gray-500 pl-4">{detail.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project mission */}
            <div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-gray-800">Project Mission</h4>
              <blockquote
                className="border-l-4 pl-4 py-2 italic text-gray-600 bg-gray-50 p-4 rounded-md"
                style={{ borderColor: CUSTOM_BLUE }}
              >
                "{service.mission}"
              </blockquote>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <>
      {/* HERO BANNER */}
      <div className="relative w-full h-[28rem] md:h-[36rem] overflow-hidden">
        <img
          src={images.serviceHeroImage}
          alt="Industrial Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left space-y-4"
            >
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest drop-shadow-lg">
                Services
              </h1>
              <p className="text-gray-200 text-base md:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
                We’re here to help you with your industrial solutions — reach out to us for quotes, consultations, or support.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="min-h-screen pt-8 bg-gray-50">
        <section className="px-6 md:px-8 lg:px-12 py-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4 group inline-block">
              <h2
                className="text-2xl font-semibold tracking-wide text-black relative w-fit
                after:content-[''] after:block after:w-12 after:h-[3px] after:bg-[#2B7FFF]
                after:transition-all after:duration-300 group-hover:after:w-20"
              >
                OUR INDUSTRIAL SERVICES
              </h2>
            </div>

            <p className="max-w-4xl text-sm md:text-base leading-relaxed text-gray-500 mt-4">
              We deliver comprehensive industrial solutions designed to enhance efficiency, safety, and sustainability. Our services span
              equipment installation, process automation, maintenance, and energy management — helping industries optimize operations and reduce downtime.
            </p>
          </div>
        </section>

        {/* Layout wrapper */}
        <div className="max-w-7xl mx-auto font-sans bg-white shadow-lg rounded-lg overflow-hidden my-8">
          <div className="flex flex-col md:flex-row">
            {/* SIDEBAR - on mobile this becomes a horizontal scroller */}
            <aside className="w-full md:w-64 flex-shrink-0 bg-white border-b md:border-b-0 md:border-r border-gray-200 z-10">
              <div className="p-4">
                <h3 className="text-xl font-bold uppercase mb-2" style={{ color: CUSTOM_BLUE }}>
                  All Services
                </h3>

                {/* Responsive nav: column on md+, horizontal scroll on small screens */}
                <motion.nav
                  initial="hidden"
                  animate="show"
                  variants={staggerContainer}
                  className="flex md:flex-col flex-row md:space-y-1 space-x-3 md:space-x-0 overflow-x-auto pb-2 md:pb-0"
                >
                  {serviceData.map((service) => (
                    <motion.button
                      key={service.id}
                      variants={sidebarItem}
                      onClick={() => setActiveServiceId(service.id)}
                      className={`flex-shrink-0 whitespace-nowrap text-left px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none ${
                        activeServiceId === service.id
                          ? 'text-white shadow-md'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-gray-900'
                      }`}
                      style={activeServiceId === service.id ? { backgroundColor: CUSTOM_BLUE } : {}}
                      aria-pressed={activeServiceId === service.id}
                    >
                      {service.title}
                    </motion.button>
                  ))}
                </motion.nav>

                <hr className="my-4 border-gray-200" />
              </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="flex-grow w-full">
              {contentJSX}
            </main>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Services;
