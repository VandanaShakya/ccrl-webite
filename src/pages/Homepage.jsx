import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import images from '../assets/images';
import emailjs from "@emailjs/browser";
import { projects, testimonials } from './data';
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Factory, Smartphone } from 'lucide-react';

const ACCENT_BG_CLASS = 'bg-blue-500 hover:bg-blue-600';
const ACCENT_FOCUS_RING = 'focus:ring-blue-500';


const Homepage = () => {



  // form handling logic //
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    user_message: "",
  });

  // Read Vite env vars (must start with VITE_)
  const SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function sendEmail(e) {
    e.preventDefault();

    // optional simple validation (already have required attributes)
    if (!form.user_name || !form.user_email || !form.user_message) {
      alert("Please fill all required fields.");
      return;
    }

    setSending(true);

    // Prepare template params — match these to your EmailJS template variables
    const templateParams = {
      user_name: form.user_name,
      user_email: form.user_email,
      user_subject: form.user_subject,
      user_message: form.user_message,
      // you can add extra fields if your template uses them, e.g. sent_at
      sent_at: new Date().toISOString(),
    };

    try {
      // Use emailjs.send(serviceID, templateID, templateParams, publicKey)
      const resp = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      // success
      console.log("EmailJS response:", resp);
      // reset form or give success UI
      setForm({
        user_name: "",
        user_email: "",
        user_subject: "",
        user_message: "",
      });
      alert("Message sent! — Thanks.");
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Sorry — something went wrong sending the message. Check console for details.");
    } finally {
      setSending(false);
    }
  }
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
      />
    </Link>
    {/* Darker blackish overlay */}
    <div className="absolute inset-0 bg-black/70" />
  </div>

  {/* Content */}
<motion.div
  className="relative z-10 text-white text-left w-[95%] md:max-w-[64%] mx-auto py-2 md:py-10"
  variants={containerStagger}
  initial="hidden"
  animate="show"
>
  {/* Heading */}
  <motion.h1
    variants={heroTitle}
    className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight"
  >
    Expert{' '}
    <span
      className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]"
    >
      Commercial Kitchen Equipment
    </span>{' '}
    Repairs & Maintenance
  </motion.h1>

  {/* Paragraph */}
  <motion.p
    variants={fadeUp}
    className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 font-light text-gray-200 max-w-2xl"
  >
    At Commercial Catering Repairs Ltd, we specialize in professional repair, servicing, and maintenance
    of all types of commercial kitchen equipment in around Greater London. Our skilled engineers ensure your business runs smoothly
    with reliable, efficient, and safety-compliant solutions.
  </motion.p>

  {/* Button */}
  <motion.button
    variants={fadeUp}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="relative px-8 sm:px-10 py-3 text-lg font-semibold uppercase tracking-wider border border-sky-400 rounded-full overflow-hidden transition-all duration-500 ease-out hover:bg-sky-500/90 text-white shadow-lg"
  >
    <Link
      to="/contact-us"
      className="inline-block relative overflow-hidden text-white font-semibold"
    >
      <span className="relative z-10">Get Started</span>
    </Link>
  </motion.button>
</motion.div>


</section>

      {/* OUR PROJECTS / About Section */}
  <section className="min-h-screen bg-gray-50 px-0 sm:px-6 lg:px-8 py-12 sm:py-16">
  {/* Wrapper: 95% width on mobile, centered and constrained on sm/lg */}
  <div className="w-[95%] sm:w-9/12 lg:w-8/12 mx-auto">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerStagger}
      className="mb-10 sm:mb-16"
    >
      <motion.div variants={fadeUp} className="group inline-block text-left">
        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 transition-all duration-300"
        >
          OUR PROJECTS
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="w-20 h-1 bg-sky-500 mb-6 transition-all duration-500 group-hover:w-80"
        />
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="text-gray-600 text-sm sm:text-lg leading-relaxed"
      >
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

    {/* Filters */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mb-8 sm:mb-12 overflow-x-auto"
    >
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
    </motion.div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
      {filteredProjects.map((project) => (
        <motion.div
          key={project.id}
          variants={cardVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          whileHover={{ y: -6, boxShadow: '0 18px 35px rgba(2,6,23,0.12)' }}
          className="group cursor-pointer bg-white overflow-hidden shadow-lg transition-all duration-300 transform"
        >
          <div className="relative h-60 sm:h-72 overflow-hidden">
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <p className="text-gray-600 text-lg">
          No projects found in this category.
        </p>
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

     



      {/* form */}

             <div className=" mx-auto max-w-7xl px-4 sm:px-4 lg:px-8 py-8 sm:py-12 md:py-16">
      
      {/* Header and Description */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 pl-2 sm:pl-4">
 Get In<span className='text-sky-500'> Touch</span>
</h1>
<p className="hidden md:block text-gray-500 mb-10 sm:mb-12 text-sm sm:text-base leading-relaxed">
  Need fast, reliable commercial kitchen support? At CCRL (Commercial Catering Repairs Ltd),
  we specialise in the repair, servicing, and maintenance of professional catering equipment.
  Whether you require urgent assistance, scheduled maintenance, or expert guidance, our
  experienced engineers are here to help.
  <br /><br />
  Reach out to us today — we’ll respond quickly to ensure your business keeps running
  smoothly and efficiently.
</p>


      {/* Main Content: Info and Form */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10">
        
        {/* Contact Info Section */}
       <div className="hidden md:block w-full lg:w-5/12 xl:w-4/12 space-y-4">
  {[
    { Icon: Factory, text: 'Commercial Catering Repairs Ltd.' },
    { Icon: MapPin, text: '23 Wexham Close, Luton, Bedfordshire, United Kingdom, LU3 3TU' },
    { Icon: Phone, text: '03301337762', link: 'tel:+38640222555' },
    { Icon: Mail, text: 'service@pimlicocateringrepairs.co.uk', link: 'mailto:service@pimlicocateringrepairs.co.uk' },
  ].map(({ Icon, text, link, target }, i) => (
    <div key={i}>
      <div className="flex items-start">
        <div className="p-2 mr-4 text-sky-500">
          <Icon size={20} />
        </div>
        <div className="flex-1 pt-1 min-w-0">
          {link ? (
            <a
              href={link}
              target={target}
              rel={target ? 'noopener noreferrer' : undefined}
              className="text-gray-600 hover:text-gray-800 transition"
            >
              {text}
            </a>
          ) : (
            <span className="text-gray-700 font-medium">{text}</span>
          )}
        </div>
      </div>
      {i < 6 && <hr className="border-t border-gray-100 mx-1 mb-2" />}
    </div>
  ))}
</div>


        {/* Contact Form Section */}
 <div className="w-full xl:w-8/12">
      <form onSubmit={sendEmail} className="space-y-3">
        {/* Name + Email side by side */}
        <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
          <input
            name="user_name"
            type="text"
            placeholder="Name"
            value={form.user_name}
            onChange={handleChange}
            required
            className={`w-full p-2 sm:p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${ACCENT_FOCUS_RING} text-gray-700`}
          />
          <input
            name="user_email"
            type="email"
            placeholder="Email"
            value={form.user_email}
            onChange={handleChange}
            required
            className={`w-full p-2 sm:p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${ACCENT_FOCUS_RING} text-gray-700`}
          />
        </div>

        {/* Subject */}
        <input
          name="user_subject"
          type="text"
          placeholder="Subject"
          value={form.user_subject}
          onChange={handleChange}
          className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${ACCENT_FOCUS_RING} text-gray-700`}
        />

        {/* Message */}
        <textarea
          name="user_message"
          placeholder="Message"
          rows="3"
          value={form.user_message}
          onChange={handleChange}
          required
          className={`w-full p-2 border border-[#2B7FFF] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-opacity-50 ${ACCENT_FOCUS_RING} text-gray-700`}
          style={{ minHeight: "120px" }}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={sending}
          className={`w-full hover:cursor-pointer sm:w-auto px-6 py-2 text-white font-semibold rounded-lg ${ACCENT_BG_CLASS} transition duration-150 shadow-md ${
            sending ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {sending ? "SENDING..." : "SUBMIT"}
        </button>
      </form>
    </div>


      </div>
    </div>
    </>
  );
};

export default Homepage;
