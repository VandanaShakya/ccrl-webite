import React, { useState, useEffect } from 'react';
// Assuming images, projects, testimonials, and Form are correctly imported
import images from '../assets/images';
import { projects, testimonials } from './data';
import Form from '../components/Form';

const Homepage = () => {

    // services (Projects Filter Logic)
    const [activeFilter, setActiveFilter] = useState('All projects');

    const filters = ['All projects', 'Stoves', 'Fridges & freezers', 'Rational ovens'];

    const filteredProjects = activeFilter === 'All projects'
        ? projects
        : projects.filter(project => project.category === activeFilter);


    // testimonials (Carousel Logic)
   const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(2); // 2 on desktop
      } else {
        setItemsPerView(1); // 1 on mobile
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const total = testimonials.length;
  const maxIndex = total - itemsPerView;

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const shiftPercent = (index * 100) / itemsPerView;


    return (
        <>
            {/* Hero Section */}
            <div>
                <div className="relative min-h-screen flex items-center justify-center p-4">
                    {/* Background Image Section */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={images.heroImage}
                            alt="Atmospheric background"
                            // object-cover is generally better for hero images than object-contain/cover combo
                            className="w-full h-full object-cover" 
                        />
                        {/* Optional dark overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    {/* Content Section */}
                    <div className="relative z-10 text-white text-center max-w-4xl mx-auto p-6 md:p-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-6">
                            Title of the Section
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 font-light max-w-3xl mx-auto">
                            A compelling description that goes right here. It should be concise and clearly communicate the main message or purpose.
                        </p>

                        <button
                            className="relative px-8 py-3 text-lg font-semibold uppercase tracking-wider
                                        text-white rounded-full overflow-hidden
                                        transition-all duration-500 ease-out
                                        border border-sky-400
                                        hover:text-white shadow-lg group"
                        >
                            <span className="relative z-10">Get Started</span>
                            <span
                                className="absolute inset-0 bg-sky-600 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 rounded-full"
                            ></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* OUR PROJECTS / About Section */}
            {/* Standardize container usage: max-w-7xl mx-auto px-4 */}
            <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto"> 
                    {/* Header (replaced with About content) */}
                    <div className="mb-10 sm:mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            OUR PROJECTS
                        </h1>
                        <div className="w-12 h-1 bg-sky-500 mb-6"></div>

                        <p className="text-gray-600 sm:text-lg leading-relaxed max-w-7xl">
                            <strong>About Pimlico Commercial Catering & Repairs Ltd</strong>
                            <br />
                            Since 2023, Pimlico Commercial Catering & Repairs Ltd has proudly served prestigious
                            clients including The Montcalm Hotel, Marriott Hotels, and Shaftesbury Hotels. We
                            specialise in the maintenance, repairing, and installation of a wide range of commercial
                            kitchen equipment, including: Dishwashers, Commercial range ovens with stoves, Fridges
                            & freezers, and Rational ovens. We take great pride in delivering exceptional service,
                            backed by competitive pricing and reliable workmanship. Our team is committed to
                            ensuring your kitchen operations run smoothly, 24/7. Whether it's a minor repair or a
                            full kitchen setup, you can trust us to provide the best value and dependable support in
                            the industry.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="mb-8 sm:mb-12 overflow-x-auto">
                        <div className="flex gap-2 sm:gap-4 border-b border-gray-200 pb-2">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-medium whitespace-nowrap transition-colors duration-300 ${
                                        activeFilter === filter
                                            ? 'text-sky-500 border-b-2 border-sky-500'
                                            : 'text-gray-600 hover:text-sky-500'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="relative h-64 sm:h-72 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        // Use 'object-cover' for consistent image size
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-4 sm:p-6">
                                    <p className="text-xs sm:text-sm text-sky-500 font-semibold uppercase tracking-wider mb-2">
                                        {project.category}
                                    </p>
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-sky-500 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Parallax/CTA Banner */}
            <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
                <div className='w-full'>
                    {/* 🖼️ Background Image Tag Block */}
                    <img
                        src={images.homeBackImage}
                        alt="Commercial Catering Repair Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Dark Overlay for text readability */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    {/* Content Container */}
                    <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-8">
                        <div className="max-w-xl text-left text-white">
                            {/* Main Heading */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight uppercase tracking-wide mb-3">
                                COMMERCIAL <span className='text-sky-400'>CATERING</span> REPAIR LTD
                            </h1>


                            {/* Body Text */}
                            <p className="text-base sm:text-lg md:text-xl mb-6 max-w-lg font-light">
                                We are dedicated to mastering every repair, ensuring your commercial kitchen runs flawlessly. Our commitment to quality and swift response goes above and beyond, providing a fantastic, reliable experience every time.
                            </p>

                            {/* Call to Action Button */}
                            <button
                                className={`bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded transition duration-300 uppercase tracking-wider shadow-xl text-sm`}
                                aria-label="Contact us for repair service"
                            >
                                GET REPAIR QUOTE
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonials Carousel */}
         <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-8 bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto md:mx-0">
            Hear from our satisfied customers who’ve experienced our commitment
            to quality, creativity, and exceptional service firsthand.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 justify-center mt-4 md:mt-0">
          <button
            onClick={prev}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
              index === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-sky-500 text-white hover:bg-sky-600"
            }`}
            disabled={index === 0}
          >
            <span className="text-xl leading-none">‹</span>
          </button>
          <button
            onClick={next}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
              index >= maxIndex
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-sky-500 text-white hover:bg-sky-600"
            }`}
            disabled={index >= maxIndex}
          >
            <span className="text-xl leading-none">›</span>
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(total / itemsPerView) * 100}%`,
            transform: `translateX(-${shiftPercent}%)`,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id || i}
              style={{
                flex: `0 0 ${100 / itemsPerView}%`,
              }}
              className="p-2 sm:p-4"
            >
              <div className="bg-gray-50 p-6 h-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  {/* Image */}
                  <div className="w-full sm:w-1/3 flex-shrink-0 overflow-hidden">
                    <img
                      src={t.imageSrc}
                      alt={t.name}
                      className="w-full h-24 object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-full sm:w-2/3">
                    <h3 className="font-bold text-lg text-gray-900">
                      {t.name}
                    </h3>
                    <p className="text-sky-500 text-sm mb-3">{t.company}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

            {/* Form Component */}
            <Form />

        </>
    )
}

export default Homepage