import React, { useState, useEffect, useRef } from 'react'
import images from '../assets/images'
import { projects, testimonials } from './data';


const Homepage = () => {

    
//   services //
  const [activeFilter, setActiveFilter] = useState('All projects');

  const filters = ['All projects', 'Stoves', 'Fridges & freezers', 'Rational ovens'];

  const filteredProjects = activeFilter === 'All projects' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);



    // testimonials //
    const [itemsPerView, setItemsPerView] = useState(typeof window !== 'undefined' && window.innerWidth >= 1024 ? 2 : 1);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setItemsPerView(window.innerWidth >= 1024 ? 2 : 1);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const total = testimonials.length;
  if (total === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const shiftPercent = (index * 100) / itemsPerView; // shift by one card each click
  const cardWidth = `${100 / itemsPerView}%`;

  return (
    <>
        <div>
        <div className="relative min-h-screen flex items-center justify-center p-4">
      
      <div className="absolute inset-0 z-0">
        <img
          src={images.heroImage}
          alt="Atmospheric background"
          className="w-full h-full object-cover" 
        />
        
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-white text-center max-w-4xl mx-auto p-6 md:p-10rounded-lg shadow-2xl">
        
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

{/* home services */}
<div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
  <div className="max-w-7xl mx-auto">
    {/* Header (replaced with About content) */}
    <div className="mb-8 sm:mb-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
        OUR PROJECTS
      </h1>
      <div className="w-12 h-1 bg-sky-500 mb-6"></div>

      <p className="text-gray-600 sm:text-base leading-relaxed max-w-7xl">
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
      <div className="flex gap-2 sm:gap-4 min-w-min border-b border-gray-200 pb-4">
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
          className="group cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
          <div className="p-4 sm:p-6 bg-white">
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


{/* testimonials */}
 <div className="max-w-7xl mx-auto py-8 px-4 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium">Testimonials</h2>
        <div className="flex gap-2">
          <button onClick={prev} className="w-10 h-10 bg-blue-500 text-white rounded">‹</button>
          <button onClick={next} className="w-10 h-10 bg-blue-500 text-white rounded">›</button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-400"
          style={{ transform: `translateX(-${shiftPercent}%)` }}
        >
          {testimonials.map((t, i) => (
           <div key={t.id || i} style={{ flex: `0 0 ${cardWidth}` }} className="p-4">
  <div className="bg-gray-50 rounded h-full">
    <div className="flex items-center gap-4">
      <div className="w-1/2 flex justify-center">
        <img
          src={t.imageSrc}
          alt={t.name}
          className="w-full h-full object-cover "
        />
      </div>
      <div className="w-1/2">
        <h3 className="font-semibold text-lg">{t.name}</h3>
        <p className="text-blue-500 text-sm">{t.company}</p>
        <p className="text-gray-600 mt-3 text-sm leading-relaxed">{t.text}</p>
      </div>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </div>

    </>
  )
}

export default Homepage
