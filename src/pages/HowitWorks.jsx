import React, { useRef } from 'react'
import { howWorksData, pricingTiers } from './data'
import images from '../assets/images';
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from 'react-router-dom'

const HowitWorks = () => {
  const hoverBorderColor = 'hover:border-[#3B82F6]';

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 50%", "end -6%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <>
      {/* HERO + HOW IT WORKS (content constrained to max-w-7xl) */}
      <div>
        {/* HERO */}
        <div className="relative w-full h-[32rem] md:h-[40rem] overflow-hidden">
          <img
            src={images.howWorksBackImage}
            alt="Industrial Background"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center">
            <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
              <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-widest drop-shadow-lg">
                How It Works
              </h1>

              <p className="text-gray-200 text-lg md:text-xl mt-4 leading-relaxed">
                Discover how our process transforms your ideas into powerful industrial solutions —
                from consultation and design to implementation and ongoing support.
              </p>

             
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <section ref={ref} id="how-it-works" className="bg-gray-50 py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
            <header className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
                How It Works
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Follow these simple steps to book an engineer visit or request a consultation.
              </p>
            </header>

            <motion.div
              style={{
                height: lineHeight,
                opacity: lineOpacity,
              }}
              className="absolute left-1/2 top-32 w-[3px] bg-[#2B7FFF] hidden md:block rounded-full origin-top"
            ></motion.div>

            <div className="flex flex-col space-y-24 relative">
              {howWorksData?.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                >
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 hidden md:block ${index % 2 === 0
                        ? "left-1/2 w-[120px] h-[2px] bg-[#2B7FFF]"
                        : "right-1/2 w-[120px] h-[2px] bg-[#2B7FFF]"
                      }`}
                  ></div>

                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 hidden md:flex items-center justify-center 
                  w-12 h-12 rounded-full bg-[#2B7FFF] text-white font-bold text-lg shadow-md
                  ${index % 2 === 0 ? "left-[calc(50%+120px)]" : "right-[calc(50%+120px)]"}`}
                  >
                    {step.number}
                  </div>

                  <div
                    className={`relative bg-white border border-gray-200 shadow-sm rounded-lg p-6 sm:p-8 w-full md:w-[45%] ${index % 2 === 0 ? "md:ml-[160px]" : "md:mr-[160px]"
                      }`}
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 space-y-2 text-left">
              <p className="text-sm text-gray-600 italic">
                <span className="font-semibold">Note:</span> All prices include congestion
                charges and parking where applicable.
              </p>
              <p className="text-sm text-gray-600 italic">
                <span className="font-semibold">Note:</span> Call-outs cannot be cancelled
                within 3 hours of the scheduled time.
              </p>
              <p className="text-sm text-gray-600 italic">
                <span className="font-semibold">Note:</span> A minimum of 3 hours’ notice is
                required for cancellations. No refunds will be issued for late cancellations.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* pricing section */}
      <div className="p-4 sm:p-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-10">
         <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-4 font-sans">
  Callout <span className="text-[#2B7FFF] font-serif">Pricing</span>
</h1>

<p className="text-gray-600 text-lg max-w-2xl mx-auto">
  Transparent, upfront, and fair — our callout pricing ensures you know exactly what to expect. 
  Whether you need urgent support or scheduled maintenance, we offer flexible rates designed to 
  match your service needs without hidden charges. Quality service, honest pricing — that’s our promise.
</p>

          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-gray-50 border-t border-b border-gray-100 divide-y divide-gray-200 md:divide-y-0 md:divide-x">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`p-6 sm:p-10 text-center transition duration-300 border border-transparent ${hoverBorderColor} cursor-pointer 
                                ${tier.isFeatured ? 'bg-gray-100' : 'bg-white'} 
                                ${index === 0 ? 'md:rounded-l-xl' : ''} 
                                ${index === pricingTiers.length - 1 ? 'md:rounded-r-xl' : ''}`}
              >
                <h2 className={`text-xl font-bold mb-1 ${tier.isFeatured ? 'text-gray-900' : 'text-gray-700'}`}>
                  {tier.name}
                </h2>
                <p className="text-sm text-gray-500 mb-6">{tier.subtitle}</p>

                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-gray-900 leading-none">
                    {tier.price}
                  </span>
                  <span className="block text-base text-gray-500 mt-1">(including VAT)</span>
                </div>

                <ul className="space-y-3 text-center mb-10">
                  <li className="text-xl font-semibold text-gray-700">
                    {tier.zone}
                  </li>
                </ul>

                {/* Use Link (already imported at top) — no inline imports */}
                <Link to="/contact-us">
                  <button
                    className={`w-full py-3 px-6 rounded-md font-semibold text-lg border transition duration-150 ${tier.buttonStyle}`}
                  >
                    BOOK NOW
                  </button>
                </Link>

              </div>
            ))}
          </div>

          <div className="mt-8 p-4">
            <p className="text-sm text-gray-600 text-center italic">
              <span className="font-semibold">Note:</span> All prices include congestion charges and parking where applicable.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowitWorks
