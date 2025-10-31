import React from 'react'
import images from '../assets/images'
import {brandImages} from './data'

const Brands = () => {
  return (
    <>

   <div className="relative w-full h-[32rem] md:h-[40rem] overflow-hidden">
  {/* Background Image */}
  <img
    src={images.heroImage}
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
          brands we work on 
        </h1>
       <p className="text-gray-200 text-lg md:text-xl max-w-xl leading-relaxed">
  Get in touch with our team for inquiries, technical support, or service bookings. 
  We’re here to assist you with reliable solutions and expert guidance.
</p>

      
      </div>
    </div>
  </div>
</div>

     <div>
        <section className="px-8 py-12 bg-white text-gray-700 w-7xl m-auto">
      {/* Heading Block */}
      <div className="mb-4 group w-fit">
        <h2
  className="text-2xl font-semibold tracking-wide text-black relative w-fit 
  after:content-[''] after:block after:w-12 after:h-[3px] after:bg-[#2B7FFF] 
  after:transition-all after:duration-300 group-hover:after:w-20"
>
  BRANDS WE WORK WITH
</h2>
</div>

{/* Description */}
<p className="max-w-5xl text-sm md:text-base leading-relaxed text-gray-500">
  At Commercial Catering Repairs Ltd, we proudly service and support some of the 
  industry’s most trusted catering equipment brands. Our expertise covers a wide 
  range of appliances including cookers from Blue Seal, Falcon, Rational, Hatco, 
  Electrolux, and Welbilt; ovens from Turbo Fan, Rational, and Convotherm; 
  fryers from Blueseal; and dish and glasswashers from Winterhalter, Maidaid, 
  Classeq, and Meiko. We ensure every piece of equipment runs efficiently and 
  reliably to keep your kitchen operating at its best.
</p>

    </section>
    </div>

    {/* brands */}
<div className="p-4 sm:p-8 bg-white min-h-screen">
  <div className="max-w-6xl mx-auto">
    {/* Brand Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {brandImages.map((image, index) => (
        <div
          key={index}
          className="group relative overflow-hidden" // removed rounded-lg and shadow-md
        >
          {/* Image */}
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Default Description */}
          <p className="mt-3 text-base text-gray-700 font-medium text-center">
            {image.description}
          </p>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-gray-200 text-center text-lg font-normal leading-relaxed">
              {image.brandContent}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>




<div className="p-4 sm:p-8 bg-white min-h-screen">
   
  <div className="max-w-6xl mx-auto">

      <p className="max-w-5xl text-sm md:text-base leading-relaxed text-gray-500">
        Curabitur maximus feugiat velit, sed dapibus sem auctor quis. Maecenas
        turpis purus, tincidunt eget mattis ac, placerat sit amet dolor. Aenean
        vel porttitor libero, nec tempor magna. Mauris sed ex at tellus
        elementum tempus dignissim ac est. Curabitur maximus feugiat velit, sed
        dapibus sem auctor quis.
      </p>
    {/* Brand Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {brandImages.map((image, index) => (
        <div
          key={index}
          className="group relative overflow-hidden" // removed rounded-lg and shadow-md
        >
          {/* Image */}
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Default Description */}
          <p className="mt-3 text-base text-gray-700 font-medium text-center">
            {image.description}
          </p>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-gray-200 text-center text-lg font-normal leading-relaxed">
              {image.brandContent}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

   </>
  )
}

export default Brands