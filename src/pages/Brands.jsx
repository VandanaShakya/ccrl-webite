// Brands.jsx
import React, { useState, useEffect } from 'react'
import images from '../assets/images'
import { brandsData, fryerBrandData, dishwasherBrandData } from './data' // make sure dishwasherBrandData is imported
import Loader from '../components/Loader';
import { motion } from 'framer-motion'


const titleIconMap = {
  "Cookers": (/* same SVGs as before */ <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> ),
  "Ovens": ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-1-3m-6.938-1h13.876c.645 0 1.05-.674.673-1.234l-6.938-11.31a1.25 1.25 0 00-2.147 0L2.09 14.766c-.377.56.028 1.234.673 1.234z" /></svg> ),
  "Fryers": ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.621 0 3.242.806 4.225 2.215A4.998 4.998 0 0017 9c0-2.5-2-4-5-4s-5 1.5-5 4c0 1.13.435 2.212 1.275 3.015C8.758 8.806 10.379 8 12 8zm-2 11h4l-.875 3h-2.25L10 19z" /></svg> ),
  "Dish/glasswashers": ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2zM9 14h6m-6 4h6m-6-8h.01M15 11h.01" /></svg> ),
  "default": ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.001 2 2.001-2m-2.001 5l2.001 2 2.001-2M12 21V11" /></svg> ),
};
 const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };


const Brands = () => {
   const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // isolated hover states per grid
  const [hoveredCookerId, setHoveredCookerId] = useState(null);
  const [hoveredOvenId, setHoveredOvenId] = useState(null);
  const [hoveredFryerId, setHoveredFryerId] = useState(null);
  const [hoveredDishwasherId, setHoveredDishwasherId] = useState(null);


   useEffect(() => {
    setTimeout(() => {
      setData(true);
      setLoading(false);
    }, 200);
  }, []);

  if (loading) return <Loader />;
  // use 7xl width as requested
  const containerClass = "max-w-7xl mx-auto";

  // dedupe oven data if needed (fryerBrandData used as ovenData earlier)
  const uniqueOvenData = Array.from(new Map(fryerBrandData.map(b => [b.title, b])).values());

  // dishwasher data (dedupe just in case)
  const uniqueDishwasherData = Array.from(new Map(dishwasherBrandData.map(b => [b.title, b])).values());

  return (
    <>
      {/* HERO */}
      <div className="relative w-full h-[32rem] md:h-[40rem] overflow-hidden">
        <img src={images.cupboard4} alt="Industrial Background" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-left space-y-4">
  <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-widest drop-shadow-lg">
    brands we work on
  </h1>

  <p className="text-gray-200 text-lg md:text-xl max-w-xl leading-relaxed">
    Get in touch with our team for inquiries, technical support, or service bookings. We’re here to assist you with reliable solutions and expert guidance.
  </p>
</div>

          </div>
        </div>
      </div>

      {/* MAIN SECTION (7xl width) */}
      <section className={`px-8 py-12 bg-white text-gray-700 ${containerClass}`}>
        <div className="mb-6 group w-fit">
            <motion.h1
  variants={fadeUp}
  className="text-3xl sm:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6 transition-all duration-300"
>
  Trusted <span className='text-blue-500'>Brands</span> We Service
</motion.h1>

<p className="max-w-3xl text-sm md:text-base leading-relaxed text-gray-500 mb-8">
  At Commercial Catering Repairs Ltd, we specialize in maintaining and repairing equipment from leading catering brands — ensuring your appliances perform at their best with minimal downtime.
</p>
</div>
        {/* COOKER SECTION */}
        <div className={`${containerClass} py-4`}>
          <h3 className="text-2xl font-semibold mb-2">COOKER BRANDS WE WORK WITH</h3>
          <p className="max-w-3xl text-sm text-gray-500 mb-4">We service high-quality cookers from Blue Seal, Falcon, Rational, Hatco, Electrolux and Welbilt.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandsData.map((brand) => (
              <div
                key={`cooker-${brand.id}-${brand.title}`}
                className="relative bg-white overflow-hidden shadow-lg group transition-transform duration-300 ease-in-out hover:-translate-y-2"
                onMouseEnter={() => setHoveredCookerId(brand.id)}
                onMouseLeave={() => setHoveredCookerId(null)}
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img src={brand.image} alt={brand.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
                  <div className="flex items-center text-blue-600 mb-2">
                    <div className="bg-blue-100 p-2 mr-3">{titleIconMap[brand.title] || titleIconMap.default}</div>
                    <h4 className="text-xl font-semibold text-gray-800">{brand.title}</h4>
                  </div>

                  <div className={`overflow-hidden transition-all ease-out duration-300 ${hoveredCookerId === brand.id ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 text-sm">{brand.brands}</p>
                  </div>
                </div>

                <div className="absolute top-48 sm:top-56 left-0 right-0 h-2 bg-blue-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* OVEN SECTION */}
        <div className={`${containerClass} py-8`}>
          <h3 className="text-2xl font-semibold mb-2">OVEN BRANDS WE WORK WITH</h3>
          <p className="max-w-3xl text-sm text-gray-500 mb-4">We service premium ovens like Turbo Fan, Rational and Convotherm — delivering precise, efficient cooking performance.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueOvenData.map((brand) => (
              <div
                key={`oven-${brand.id}-${brand.title}`}
                className="relative bg-white overflow-hidden shadow-lg group transition-transform duration-300 ease-in-out hover:-translate-y-2"
                onMouseEnter={() => setHoveredOvenId(brand.id)}
                onMouseLeave={() => setHoveredOvenId(null)}
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img src={brand.image} alt={brand.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
                  <div className="flex items-center text-blue-600 mb-2">
                    <div className="bg-blue-100 p-2 mr-3">{titleIconMap[brand.title] || titleIconMap.default}</div>
                    <h4 className="text-xl font-semibold text-gray-800">{brand.title}</h4>
                  </div>

                  <div className={`overflow-hidden transition-all ease-out duration-300 ${hoveredOvenId === brand.id ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 text-sm">{brand.brands}</p>
                  </div>
                </div>

                <div className="absolute top-48 sm:top-56 left-0 right-0 h-2 bg-blue-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* DISH / GLASSWASHER SECTION */}
        <div className={`${containerClass} py-8`}>
          <h3 className="text-2xl font-semibold mb-2">DISH & GLASSWASHERS WE WORK WITH</h3>
          <p className="max-w-3xl text-sm text-gray-500 mb-4">We support dish and glasswashers from Winterhalter, Maidaid, Classeq, and Meiko to keep your service running hygienically and efficiently.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueDishwasherData.map((brand) => (
              <div
                key={`dish-${brand.id}-${brand.title}`}
                className="relative bg-white overflow-hidden shadow-lg group transition-transform duration-300 ease-in-out hover:-translate-y-2"
                onMouseEnter={() => setHoveredDishwasherId(brand.id)}
                onMouseLeave={() => setHoveredDishwasherId(null)}
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img src={brand.image} alt={brand.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
                  <div className="flex items-center text-blue-600 mb-2">
                    <div className="bg-blue-100 p-2 mr-3">{titleIconMap[brand.title] || titleIconMap["Dish/glasswashers"] || titleIconMap.default}</div>
                    <h4 className="text-xl font-semibold text-gray-800">{brand.title}</h4>
                  </div>

                  <div className={`overflow-hidden transition-all ease-out duration-300 ${hoveredDishwasherId === brand.id ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 text-sm">{brand.brands}</p>
                  </div>
                </div>

                <div className="absolute top-48 sm:top-56 left-0 right-0 h-2 bg-blue-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Brands
