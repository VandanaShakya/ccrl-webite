import React, {useState, useEffect } from 'react'
import Form from '../components/Form'
import Map from '../components/Map'
import images from '../assets/images'
import Loader from '../components/Loader'

const Contact = () => {

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
<h1 className="text-white text-3xl sm:text-4xl md:text-7xl font-extrabold uppercase tracking-widest drop-shadow-lg">
  Contact Us
</h1>

<p className="text-gray-200 text-sm sm:text-base md:text-xl max-w-xl leading-relaxed">
  At CCRL, your commercial kitchen is our priority. Whether you need emergency repairs,
  scheduled servicing or a bespoke maintenance contract, our expert team is on hand
  to ensure peak performance and minimal downtime. Get in touch today and let us
  help keep your operations running smoothly and safely.
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