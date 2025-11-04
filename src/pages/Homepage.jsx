import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Assuming images, projects, testimonials, and Form are correctly imported
import images from '../assets/images';
import { projects, testimonials } from './data';
import Form from '../components/Form';
import { Link } from 'react-router-dom'

const Homepage = () => {
  // services (Projects Filter Logic)
  const [activeFilter, setActiveFilter] = useState('All projects');
  const filters = ['All projects', 'Stoves', 'Fridges & freezers', 'Rational ovens'];
  const filteredProjects = activeFilter === 'All projects'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // testimonials (Carousel Logic)
  const total = testimonials.length;
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      const newItems = window.innerWidth >= 992 ? 2 : 1; // >=768 => 2, else 1
      setItemsPerView((prev) => {
        // if itemsPerView changed, clamp index so it stays in range
        if (prev !== newItems) {
          setIndex((currIndex) => {
            const newMaxIndex = Math.max(0, total - newItems);
            return Math.min(currIndex, newMaxIndex);
          });
        }
        return newItems;
      });
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [total]);

  const maxIndex = Math.max(0, total - itemsPerView);
  const shiftPercent = index * (100 / itemsPerView); // move by one item width

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
  /* ---------------------------
     Framer Motion Variants
     --------------------------- */
  const containerStagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const heroTitle = {
    hidden: { opacity: 0, y: -18, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: 'easeOut' } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 10, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const ctaVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center p-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
         <Link to="/">
          <img
            src={images.heroImage}
            alt="Atmospheric background"
            className="w-full h-full object-cover"
          /></Link>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-white text-center max-w-4xl mx-auto p-6 md:p-10"
          variants={containerStagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={heroTitle}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 text-center"
          >
            Expert{' '}
            <span className="text-[#2B7FFF]">Commercial Kitchen Equipment</span>{' '}
            Repairs & Maintenance
          </motion.h1>


          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl mb-8 md:mb-10 font-light max-w-3xl mx-auto"
          >
            At Commercial Catering Repairs Ltd, we specialize in professional repair, servicing, and maintenance of all types of commercial kitchen equipment. Our skilled engineers ensure your business runs smoothly with reliable, efficient, and safety-compliant solutions.
          </motion.p>



          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-3 text-lg font-semibold uppercase tracking-wider hover:bg-[#46c4f7] text-white rounded-full overflow-hidden transition-all duration-500 ease-out border border-sky-400 hover:text-white shadow-lg group"
          >


            <Link
              to="/contact-us"
              className="inline-block relative overflow-hidden  text-white font-semibold"
            >
              <span className="relative z-10">Get Started</span>
            </Link>

          </motion.button>
        </motion.div>
      </section>

      {/* OUR PROJECTS / About Section */}
      <section className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={containerStagger} className="mb-10 sm:mb-16">
          <motion.div
  variants={fadeUp}
  className="group inline-block text-left"
>
  <motion.h1
    variants={fadeUp}
    className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 transition-all duration-300"
  >
    OUR PROJECTS
  </motion.h1>

  <motion.div
    variants={fadeUp}
    className="w-20 h-1 bg-sky-500 mb-6 transition-all duration-500 group-hover:w-80"
  />
</motion.div>



            <motion.p variants={fadeUp} className="text-gray-600 sm:text-lg leading-relaxed max-w-7xl">
              <strong>About Commercial Catering & Repairs Ltd</strong>
              <br />
              Since 2023, Commercial Catering & Repairs Ltd has proudly served prestigious
              clients including The Montcalm Hotel, Marriott Hotels, and Shaftesbury Hotels. We
              specialise in the maintenance, repairing, and installation of a wide range of commercial
              kitchen equipment, including: Dishwashers, Commercial range ovens with stoves, Fridges
              & freezers, and Rational ovens. We take great pride in delivering exceptional service,
              backed by competitive pricing and reliable workmanship. Our team is committed to
              ensuring your kitchen operations run smoothly, 24/7. Whether it's a minor repair or a
              full kitchen setup, you can trust us to provide the best value and dependable support in
              the industry.
            </motion.p>
          </motion.div>

          {/* Filters (slightly animating) */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-8 sm:mb-12 overflow-x-auto">
            <div className="flex gap-2 sm:gap-4 border-b border-gray-200 pb-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-medium whitespace-nowrap transition-colors duration-300 ${activeFilter === filter ? 'text-sky-500 border-b-2 border-sky-500' : 'text-gray-600 hover:text-sky-500'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="w-15/16 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6, boxShadow: '0 18px 35px rgba(2,6,23,0.12)' }}
                className="group cursor-pointer bg-white overflow-hidden shadow-lg transition-all duration-300 transform"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-sky-500 font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-sky-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Parallax/CTA Banner */}
      <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
        <img src={images.homeBackImage} alt="Commercial Catering Repair Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div initial="hidden" whileInView="show" variants={ctaVariant} viewport={{ once: true, amount: 0.25 }} className="max-w-xl text-left text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight uppercase tracking-wide mb-3">
              COMMERCIAL <span className="text-sky-400">CATERING</span> REPAIR LTD
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 max-w-lg font-light">
              We are dedicated to mastering every repair, ensuring your commercial kitchen runs flawlessly. Our commitment to quality and swift response goes above and beyond, providing a fantastic, reliable experience every time.
            </p>
<Link to="/contact-us">

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-sky-500 hover:bg-sky-600 hover:cursor-pointer text-white font-bold py-3 px-8 rounded transition duration-300 uppercase tracking-wider shadow-xl text-sm"
              aria-label="Contact us for repair service"
            >
              GET REPAIR QUOTE
            </motion.button></Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-8 bg-white">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 text-center md:text-left">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-2 tracking-tight">
              What Our <span className="text-sky-500 font-semibold">Clients</span> Say
            </motion.h2>

            <motion.p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto md:mx-0">
              Hear from our satisfied customers who’ve experienced our commitment to quality, creativity, and exceptional service firsthand.
            </motion.p>
          </motion.div>

          <div className="flex gap-3 justify-center mt-4 md:mt-0">
            <motion.button
              onClick={prev}
              whileTap={{ scale: 0.95 }}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${index === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-sky-500 text-white hover:bg-sky-600'}`}
              disabled={index === 0}
            >
              <span className="text-xl leading-none">‹</span>
            </motion.button>
            <motion.button
              onClick={next}
              whileTap={{ scale: 0.95 }}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${index >= maxIndex ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-sky-500 text-white hover:bg-sky-600'}`}
              disabled={index >= maxIndex}
            >
              <span className="text-xl leading-none">›</span>
            </motion.button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${shiftPercent}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id ?? i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                // each item takes exactly (100 / itemsPerView)% of the carousel viewport
                style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                className="p-3 sm:p-5"
              >
                <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full">
                  <div className="flex flex-col sm:flex-row items-stretch gap-0 sm:gap-4 h-full">
                    <div className="sm:w-1/3 flex-shrink-0">
                      <img
                        src={t.imageSrc}
                        alt={t.name}
                        loading="lazy"
                        className="h-64 sm:h-full md:h-72 lg:h-80 object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none transition-transform duration-300 transform hover:scale-105 w-full"
                      />
                    </div>

                    <div className="p-5 sm:p-6 flex flex-col justify-center text-center sm:text-left">
                      <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1">{t.name}</h3>
                      <p className="text-sky-500 text-sm mb-2 font-medium">{t.company}</p>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">{t.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Component (animated reveal) */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <Form />
      </motion.div>
    </>
  );
};

export default Homepage;
