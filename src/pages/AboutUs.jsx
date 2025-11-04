import React, { useState, useEffect } from 'react';
import images from '../assets/images';
import Loader from '../components/Loader';

const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
      setLoading(false);
    }, 200);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <div className="relative w-full h-[32rem] md:h-[40rem] overflow-hidden">
        {/* Background Image */}
        <img
          src={images.aboutMainImage}
          alt="Commercial kitchen background"
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
                Our Mission
              </h1>

              <p className="text-gray-200 text-lg md:text-xl max-w-xl leading-relaxed">
                <span className="font-bold">Commercial Catering Repairs Ltd</span> is built on a foundation of reliability,
                speed, and expert knowledge. We are dedicated to ensuring your commercial kitchen operates at peak efficiency
                by providing rapid, reliable repair and maintenance services. Discover the core values that drive our
                commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-24 items-center mb-16 sm:mb-24">
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 text-left font-sans">
                About <span className="text-[#2B7FFF] font-semibold">Commercial Catering & Repairs Ltd</span>
              </h1>

              {/* Use a div instead of a <p> when you need to include a block list */}
              <div className="mt-4 text-lg text-gray-700 leading-relaxed max-w-xl">
                <p>
                  Since 2023, Pimlico Commercial Catering & Repairs Ltd has proudly served prestigious clients including
                  The Montcalm Hotel, Marriott Hotels, and Shaftesbury Hotels. We specialise in the maintenance, repairing,
                  and installation of a wide range of commercial kitchen equipment, including:
                </p>

                <ul className="list-disc list-inside mt-4 ml-4 space-y-1 text-gray-700">
                  <li>Dishwashers</li>
                  <li>Commercial range ovens with stoves</li>
                  <li>Fridges & freezers</li>
                  <li>Rational ovens</li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 mt-8 md:mt-0">
              <div className="h-auto w-auto md:h-96 w-full flex items-center mt-5 justify-center text-gray-700 font-medium">
                <img
                  src={images.aboutRightImage}
                  alt="Technician repairing commercial equipment"
                  className="max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-24 items-center">
            <div className="order-2 md:order-1 mt-8 md:mt-0">
              <div className="h-auto w-auto md:h-96 w-full flex items-center justify-center text-white text-xl font-bold p-6">
                <img
                  src={images.aboutLeftImage}
                  alt="Team at work"
                  className="max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Commitment: Dependable Support, 24/7
              </h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                We take great pride in delivering exceptional service, backed by competitive pricing and reliable workmanship.
                Our team is committed to ensuring your kitchen operations run smoothly, 24/7.
                <br />
                <br />
                Whether it's a minor repair or a full kitchen setup, you can trust us to provide the best value and dependable
                support in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
