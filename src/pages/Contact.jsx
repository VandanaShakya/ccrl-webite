import React from 'react'
import Form from '../components/Form'
import Map from '../components/Map'
import images from '../assets/images'

const Contact = () => {
  return (
   <>
    <div className="relative w-full h-[32rem] md:h-[40rem] overflow-hidden">
  {/* Background Image */}
  <img
    src={images.contactHeroImage}
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
  Contact Us
</h1>
<p className="text-gray-200 text-lg md:text-xl max-w-xl leading-relaxed">
  At Commercial Catering Repairs Ltd, we’re always here to help. Whether you need 
  expert advice, equipment servicing, or a custom maintenance plan, our team is 
  ready to assist. Get in touch with us today to discuss your requirements and 
  keep your kitchen running smoothly.
</p>


       
      </div>
    </div>
  </div>
</div>


    <Form/>
    <Map/>

   </>
  )
}

export default Contact