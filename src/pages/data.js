import images from "../assets/images";


export const projects = [
  {
    id: 1,
    category: 'Dishwashers',
    title: 'Montcalm Hotel — Dishwasher Installation & Commissioning',
    image:
      images.serviceDishwasher1
  },
  {
    id: 2,
    category: 'Commercial range ovens',
    title: 'Marriott — Commercial Range Oven Retrofit & Stove Setup',
    image:
      images.oven1
  },
  {
    id: 3,
    category: 'Fridges & freezers',
    title: 'Shaftesbury Hotels — Walk-in Fridge & Freezer Maintenance',
    image:
      images.freez1
  },
  {
    id: 4,
    category: 'Dishwashers',
    title: 'Commercial Kitchen — Emergency Dishwasher Repair (24/7)',
    image:
     images.serviceDishwasher2
  },
  {
    id: 5,
    category: 'Fridges & freezers',
    title: 'Restaurant Chain — Precision Freezer Temperature Calibration',
    image:
     images.freez2
  },
  {
    id: 6,
    category: 'Rational ovens',
    title: 'Event Catering — Rational Oven Full-Service Installation',
    image:
      images.relationalOven
  },
  {
    id: 7,
    category: 'Stoves',
    title: 'Hotel Kitchen — Multi-Burner Gas Stove Maintenance & Safety Check',
    image:
      images.stove1
  },
  {
    id: 8,
    category: 'Stoves',
    title: 'Fine Dining Restaurant — Commercial Stove Replacement & Setup',
    image:
     images.stove2
  }
];


// testimonials //
export const testimonials = [
  {
    id: 1,
    name: 'Frank Honest',
    company: 'Gasco Ltd.',
    imageSrc: images.testimonial1,
    text: 'We’ve been working with this team for over a year, and their industrial equipment solutions have consistently delivered top performance. Their professionalism and technical expertise stand out every time.',
  },
  {
    id: 2,
    name: 'Jack Hanover',
    company: 'Testing Company Ltd.',
    imageSrc: images.testimonial2, 
    text: 'Their attention to detail and commitment to quality made a big difference in our project. From consultation to installation, the process was seamless and well-managed throughout.',
  },
  {
    id: 3,
    name: 'Sarah Connor',
    company: 'Cyberdyne Systems',
    imageSrc: images.testimonial3,
    text: 'The team provided exceptional service and reliable equipment tailored to our production needs. Their understanding of industrial requirements is second to none. Highly recommended for any large-scale operations.',
  },
  {
    id: 4,
    name: 'Alex Johnson',
    company: 'Apex Solutions',
    imageSrc: images.testimonial4,
    text: 'We were impressed by their quick support and clear communication. The products exceeded our expectations in both durability and efficiency, making them a trusted long-term partner for our business.',
  },
];



  // service //
  
  export const serviceData = [
  {
    id: 'combi-ovens',
    title: 'Combi-Ovens',
    heading: 'The Versatility of Combi-Ovens 🍲',
    description: 'Combi-Ovens are the workhorse of any modern commercial kitchen. They combine the functions of a convection oven, a steamer, and a combination of both, offering unparalleled control over temperature and humidity.',
    details: [
      { subtitle: 'Precise Climate Control', content: 'Achieve perfect humidity for baking and steaming.' },
      { subtitle: 'Speed and Efficiency', content: 'Cooks faster while retaining nutrients and flavor.' },
      { subtitle: 'Self-Cleaning Functions', content: 'Most models include automated cleaning cycles for maintenance.' }
    ],
    mission: "Our mission is to supply Combi-Ovens that reduce labor costs and energy consumption while elevating your menu's quality.",
     mainImage: images.mainOven,
    galleryImages: [images.serviceOven1, images.serviceOven2, images.serviceOven3, images.serviceOven4],
    accordionTitles: [
      'Operational Modes & Programs',
      'Installation and Ventilation Requirements',
      'Warranty and Service Information',
    ],
  },
  {
    id: 'commercial-ovens',
    title: 'Commercial Ovens',
    heading: 'Heavy-Duty Commercial Ovens 🍕',
    description: 'Designed for high-volume baking and roasting, our range of commercial ovens provides consistent heat distribution and rugged durability. Reliability is key when service is busy.',
    details: [
      { subtitle: 'High Capacity', content: 'Cook large batches simultaneously.' },
      { subtitle: 'Uniform Heating', content: 'Eliminates hot and cold spots for consistent results.' },
      { subtitle: 'Robust Construction', content: 'Built with heavy-duty materials for a long lifespan.' }
    ],
    mission: 'To ensure every kitchen can access reliable, energy-efficient commercial ovens that meet rigorous health and safety standards.',
     mainImage: images.commercialOven1,
     galleryImages: [images.commercialOven2, images.commercialOven3, images.commercialOven4, images.commercialOven5],
    accordionTitles: [
      'Gas vs. Electric Models',
      'Maintenance and Calibration Schedule',
      'Advanced Temperature Logging Features',
    ],
  },
  {
    id: 'fryers-chip-scuttles',
    title: 'Fryers & Chip Scuttles',
    heading: 'Frying Perfection and Holding 🍟',
    description: 'Deep fat fryers deliver crispy, golden results, while chip scuttles ensure your fried goods stay hot and fresh without drying out. Includes oil filtration systems to extend oil life.',
    details: [
      { subtitle: 'Quick Recovery', content: 'Rapidly return to temperature after adding food.' },
      { subtitle: 'Safety Features', content: 'Integrated cool zones and overheat protection.' },
      { subtitle: 'Ergonomic Design', content: 'Easy to clean and maintain optimal hygiene.' }
    ],
    mission: 'Providing best-in-class frying equipment that prioritizes safety, oil longevity, and superior food texture.',
      mainImage: images.fryerAndChips,
    galleryImages: [images.serviceFryer1, images.serviceFryer2, images.serviceFryer3, images.serviceFryer4],
    accordionTitles: [
      'Oil Management & Disposal Procedures',
      'Thermostat Accuracy Certification',
      'Chip Scuttle Humidity Settings',
    ],
  },
  {
    id: 'solid-top-ranges',
    title: 'Solid Top Ranges',
    heading: 'Consistent Heat Solid Top Ranges 🔥',
    description: 'Solid top ranges offer a continuous cooking surface, providing flexibility for moving heavy pans and maintaining different temperature zones across the surface. Ideal for simmering and boiling.',
    details: [
      { subtitle: 'Even Surface Heat', content: 'Excellent for gentle simmering and heavy-duty stock pots.' },
      { subtitle: 'Durable Build', content: 'Designed to withstand the heaviest commercial use.' },
      { subtitle: 'Easy Cleaning', content: 'Sealed surface simplifies spill management.' }
    ],
    mission: 'To equip commercial kitchens with durable, high-performance solid-top ranges for maximum cooking versatility.',
     mainImage: images.solidTopRanges,
    galleryImages: [images.solidTop1, images.solidTop2, images.solidTop3, images.solidTop4],
    accordionTitles: [
      'Required Gas Line Pressure',
      'Surface Polishing and Care',
      'Integrated Backsplash Options',
    ],
  },
  {
    id: 'open-top-ranges',
    title: 'Open Top Ranges',
    heading: 'Direct Flame Open Top Ranges ♨️',
    description: 'Open top ranges provide direct heat control, allowing chefs to instantly adjust temperatures. They are the standard for high-speed sautéing, searing, and general stovetop cooking.',
    details: [
      { subtitle: 'Immediate Heat Control', content: 'Instant temperature changes via large control knobs.' },
      { subtitle: 'High BTU Burners', content: 'Delivering powerful heat for rapid boiling and searing.' },
      { subtitle: 'Removable Grates', content: 'Simplified maintenance and cleaning.' }
    ],
    mission: 'Delivering powerful and responsive open-top ranges that meet the high-demand needs of professional cooking.',
     mainImage: images.solidTopRanges,
    galleryImages: [images.openTop1, images.solidTop2, images.openTop2, images.solidTop4],
    accordionTitles: [
      'Ventilation Hood Requirements',
      'Burner Head Cleaning Guide',
      'Gas Safety Interlock Systems',
    ],
  },
  {
    id: 'dishwashers',
    title: 'Dishwashers & Glasswashers',
    heading: 'High-Speed Warewashing Solutions 🧼',
    description: 'Keep your tableware sparkling and your turnaround quick with our commercial dishwashers and glasswashers. Our machines offer fast cycle times and superior cleaning performance.',
    details: [
      { subtitle: 'Rapid Cycle Times', content: 'High throughput to meet demand.' },
      { subtitle: 'Energy Efficient', content: 'Minimizing utility costs.' },
      { subtitle: 'Guaranteed Sanitation', content: 'Achieving required health standards.' }
    ],
    mission: 'Delivering sanitation solutions that are fast, efficient, and reliable for all commercial needs.',
     mainImage: images.serviceDishWasher,
    galleryImages: [images.DishWasher1, images.DishWasher2, images.DishWasher3, images.DishWasher4],
    accordionTitles: [
      'Chemical Dosing and Safety',
      'Water Softener Integration',
      'Daily and Weekly Cleaning Protocol',
    ],
  },
  {
    id: 'water-boilers',
    title: 'Water Boilers',
    heading: 'Instant Hot Water Dispensers 💧',
    description: 'Commercial water boilers ensure a constant supply of hot water for beverages, stocks, and light cooking tasks. Countertop and wall-mounted options available.',
    details: [
      { subtitle: 'Instant Dispensing', content: 'No waiting for water to boil.' },
      { subtitle: 'Volume Capacity', content: 'High output for busy periods.' },
      { subtitle: 'Energy Saving Mode', content: 'Reduces consumption during off-peak hours.' }
    ],
    mission: 'To provide reliable, energy-efficient water heating solutions for hospitality and catering businesses.',
     mainImage: images.waterBoiler,
    galleryImages: [images.boiler1, images.boiler2, images.boiler3, images.boiler4],
    accordionTitles: [
      'Water Quality and Scaling Prevention',
      'Boiler Tap Maintenance',
      'Sizing Guide for Cafes',
    ],
  },
  {
    id: 'servery-units',
    title: 'Servery Units',
    heading: 'Display and Serving Solutions 🍽️',
    description: 'From heated gantries to chilled display cases, our servery units are designed to hold food at precise temperatures while showcasing it appealingly to customers.',
    details: [
      { subtitle: 'Temperature Control', content: 'Accurate holding for food safety.' },
      { subtitle: 'Aesthetic Design', content: 'Modern finishes to enhance food presentation.' },
      { subtitle: 'Modular System', content: 'Flexible configurations for different layouts.' }
    ],
    mission: 'Enhancing food service efficiency and presentation through high-quality, reliable servery equipment.',
     mainImage: images.serveyUnits,
    galleryImages: ['Heated Gantry', 'Chilled Salad Bar', 'Tray Slide Design', 'Lighting Fixtures', 'Custom Wood Finish'],
  
  },
  {
    id: 'fridges-freezers',
    title: "Fridges & Freezers including Walk-In's",
    heading: 'Professional Refrigeration Solutions ❄️',
    description: 'We offer a full range of commercial refrigeration, including upright fridges, counter freezers, and custom walk-in cold rooms. Maintaining the cold chain is critical.',
    details: [
      { subtitle: 'Stable Temperature', content: 'Advanced monitoring and control systems.' },
      { subtitle: 'Energy Star Rated', content: 'Minimizing environmental and operating costs.' },
      { subtitle: 'Heavy-Duty Doors', content: 'Designed for high frequency opening and closing.' }
    ],
    mission: 'To deliver reliable, energy-efficient refrigeration that safeguards food quality and complies with all health regulations.',
    mainImage: images.fredgesWalkIn,
    galleryImages: [images.fridge1, images.fridge2, images.fridge3, images.fridge4],
    
  },
  {
    id: 'microwaves',
    title: 'Microwaves',
    heading: 'Commercial Grade Microwaves ⚡',
    description: 'High-power commercial microwaves are essential for rapid reheating, defrosting, and light cooking in a busy kitchen environment. Built to withstand continuous use far beyond domestic models.',
    details: [
      { subtitle: 'High Wattage Output', content: 'Faster, more uniform heating.' },
      { subtitle: 'Programmable Settings', content: 'One-touch operation for standard items.' },
      { subtitle: 'Durable Casing', content: 'Rugged build for long commercial life.' }
    ],
    mission: 'Providing speed and convenience through robust, easy-to-use commercial microwave technology.',
    mainImage: images.microWave,
    galleryImages: [images.microWave1, images.microWave2, images.microWave3, images.microWave4],
     
  },
  {
    id: 'salamanders',
    title: 'Salamanders',
    heading: 'Finishing and Grilling Salamanders 🔥',
    description: 'Salamanders provide intense overhead heat, perfect for melting cheese, browning toppings, glazing dishes, and quickly heating small items. Essential for the plating station.',
    details: [
      { subtitle: 'Instant High Heat', content: 'Achieves intense heat quickly.' },
      { subtitle: 'Adjustable Racks', content: 'Control distance from the heat source.' },
      { subtitle: 'Energy Efficient', content: 'Instant heat prevents energy waste during idle periods.' }
    ],
    mission: 'To supply versatile finishing equipment that adds the perfect final touch to every plate.',
    mainImage: images.salamanders,
    galleryImages: [images.salamander1, images.salamander2, images.salamander3, images.salamander4],
    
  },
  {
    id: 'chargrills-charbroilers',
    title: 'Chargrills & Charbroilers',
    heading: 'Authentic Grill Marks and Flavor 🥩',
    description: 'Achieve authentic chargrilled flavors and signature grill marks with our range of charbroilers. Available in gas and electric, providing intense radiant heat ideal for meats, poultry, and vegetables.',
    details: [
      { subtitle: 'Consistent Grilling', content: 'Even heat distribution across the grate.' },
      { subtitle: 'Heavy-Duty Grates', content: 'Designed to retain heat and impart perfect marks.' },
      { subtitle: 'Easy Grease Management', content: 'Built-in channels for safe waste disposal.' }
    ],
    mission: 'Delivering grilling equipment that captures authentic flavor and meets high-volume demands.',
     mainImage: images.charGrills,
    galleryImages: [images.chargrill1, images.chargrill2, images.chargrill3, images.chargrill4],
     
  },
  {
    id: 'bratt-pans',
    title: 'Bratt Pans',
    heading: 'Multi-Functional Bratt Pans 🍳',
    description: 'The bratt pan is the most versatile piece of equipment, capable of shallow frying, deep frying, braising, boiling, simmering, and stewing. Ideal for batch cooking and easy serving.',
    details: [
      { subtitle: 'Tilt Mechanism', content: 'Easy and safe pouring of contents.' },
      { subtitle: 'Temperature Zones', content: 'Consistent cooking across the large surface area.' },
      { subtitle: 'High Volume', content: 'Perfect for large-scale production kitchens.' }
    ],
    mission: 'To provide multi-functional cooking equipment that maximizes kitchen output and flexibility.',
      mainImage: images.brattPans,
    galleryImages: [images.pan1, images.pan2, images.pan3, images.pan4],
     
  },
  {
    id: 'hot-cupboards-hold-ovens',
    title: 'Hot Cupboards & Hold Ovens',
    heading: 'Precision Holding Equipment 🔥',
    description: 'Essential for high-volume service, hot cupboards and hold ovens keep prepared food at safe, high-quality serving temperatures without drying it out, ensuring simultaneous plating.',
    details: [
      { subtitle: 'Humidity Control', content: 'Prevents food from drying out.' },
      { subtitle: 'Accurate Thermostats', content: 'Maintains required serving temperatures.' },
      { subtitle: 'Mobile Options', content: 'Wheeled units for flexible kitchen layouts.' }
    ],
    mission: 'Ensuring food quality and safety through precise and reliable hot holding technology.',
      mainImage: images.hotCupboard,
    galleryImages: [images.cupboard1, images.cupboard2, images.cupboard3, images.cupboard4],
    
  },
  {
    id: 'induction-cooking',
    title: 'Induction Cooking',
    heading: 'Fast and Efficient Induction Cooking 💡',
    description: 'Induction cooktops offer unmatched speed and energy efficiency by heating the pan directly. They provide instant, precise temperature adjustments, and the surface remains relatively cool.',
    details: [
      { subtitle: 'Rapid Heating', content: 'Boils water faster than traditional burners.' },
      { subtitle: 'Pinpoint Control', content: 'Instant temperature changes for delicate cooking.' },
      { subtitle: 'Superior Safety', content: 'No open flame and less residual heat.' }
    ],
    mission: 'To modernize commercial kitchens with the safest, fastest, and most energy-efficient cooking technology available.',
      mainImage: images.inductionCooking,
    galleryImages: [images.inductionCooking1, images.inductionCooking2, images.inductionCooking3, images.inductionCooking4],
    
  },
  {
    id: 'bain-maries',
    title: 'Bain Maries',
    heading: 'Gentle and Consistent Bain Maries 🥣',
    description: 'Bain Maries are perfect for gently heating and holding delicate sauces, soups, and gravies, ensuring they remain warm without scorching or boiling. Used in buffets and sauce areas.',
    details: [
      { subtitle: 'Gentle Heat', content: 'Prevents burning or drying out sensitive liquids.' },
      { subtitle: 'Wet or Dry Operation', content: 'Flexible heating options for different foods.' },
      { subtitle: 'Modular Design', content: 'Accepts standard Gastronorm containers.' }
    ],
    mission: 'Providing simple, reliable solutions for holding sauces and prepared foods at the perfect serving temperature.',
      mainImage: images.bainMaries,
    galleryImages: [images.bainMaries1, images.bainMaries2, images.bainMaries3, images.bainMaries4],
   
  },
];


// how it is works //
export const howWorksData = [
  {
    number: 1,
    title: "Contact Us to Book",
    description: "You can contact us anytime via email or by phone to book an engineer visit.",
  },
  {
    number: 2,
    title: "Advance Payment Required",
    description: "Please note: A payment is required in advance to confirm the booking.",
  },
  {
    number: 3,
    title: "Call-out Charge & Assessment",
    description: "Our call-out charge includes up to 1 hour of assessment and diagnosis. During this time, our engineer will do their best to resolve the issue on-site.",
  },
  {
    number: 4,
    title: "Parts and Quote",
    description: "If any parts are required, we will inform you of the exact parts needed and provide a clear quote for the parts and any additional labour (if applicable).",
  },
  {
    number: 5,
    title: "Order Parts & Follow-up",
    description: "Upon receipt of payment, we will proceed to order the parts and schedule a follow-up visit.",
  },
  {
    number: 6,
    title: "Service Commitment",
    description: "We are committed to providing fast, honest, and efficient service at every step.",
  },
];


// pricing section //
export const pricingTiers = [
  {
    name: "STANDARD HOURS",
    subtitle: "(Mon–Fri, 09:00–18:00)",
    price: "£204",
    zone: "London Zone 2",
   
    buttonStyle: "bg-gray-200 text-gray-700 hover:bg-[#3B82F6] hover:text-white", // Gray button for non-featured
  },
  {
    name: "STANDARD HOURS",
    subtitle: "(Mon–Fri, 09:00–18:00)",
    price: "£252",
    zone: "London Zone 1",
    buttonStyle: "bg-[#3B82F6] text-white hover:bg-blue-600", // Blue button for center feature-like
    isFeatured: true,
  },
  {
    name: "OUT OF HOURS",
    subtitle: "(18:00–09:00)",
    price: "£360",
    zone: "All Zones",
    buttonStyle: "bg-gray-200 text-gray-700 hover:bg-[#3B82F6] hover:text-white", // Gray button for non-featured
  },
];



// brands page //

// export const brandImages = [
//   {
//     src: images.cooker,
//     alt: 'Industrial Pipes and Tanks',
//     description: 'High-capacity cookers designed for durability and precision.',
//     brandContent: 'Cookers: Blue Seal, Falcon, Rational, Hatco, Electrolux, Welbilt',
//   },
//   {
//     src: images.oven,
//     alt: 'Factory at Night',
//     description: 'Advanced oven systems ensuring consistent results across large batches.',
//     brandContent: 'Ovens: Turbo Fan, Rational, Convotherm',
//   },
//   {
//     src: images.fryer,
//     alt: 'Conveyor Belt System',
//     description: 'Energy-efficient fryers that deliver perfect crispness and reliability.',
//     brandContent: 'Fryers: Blueseal',
//   },
//   {
//     src: images.dishWasher,
//     alt: 'Gear Machinery',
//     description: 'Powerful and hygienic dish and glasswashers built for speed and performance.',
//     brandContent: 'Dish/glasswashers: Winterhalter, Maidaid, Classeq, Meiko',
//   },
  
// ];




//expanded brands page //

export const brandsData = [
  {
    id: 1,
    title: "Blue Seal",
    brands: "Blue Seal is renowned for its durable and high-performance commercial kitchen equipment. Designed for heavy-duty use, their cookers combine power, reliability, and precision for professional kitchens.",
    image: images.blueSeal,
  },
  {
    id: 2,
    title: "Falcon",
    brands: "Falcon cookers are known for their energy efficiency and sleek design. Built to handle the toughest kitchen environments, Falcon delivers consistent results and long-lasting performance.",
    image: images.falcon,
  },
  {
    id: 3,
    title: "Rational",
    brands: "Rational specializes in intelligent cooking systems that simplify commercial food preparation. Their combi ovens are compact, versatile, and deliver perfect results every time.",
    image: images.rational,
  },
  {
    id: 4,
    title: "Hatco",
    brands: "Hatco offers innovative warming and cooking equipment known for quality and dependability. Their cookers and warmers are perfect for busy foodservice environments.",
    image: images.hacto,
  },
  {
    id: 5,
    title: "Electrolux",
    brands: "Electrolux combines advanced technology with modern design. Their commercial cookers are known for precision, energy efficiency, and smart automation features.",
    image: images.electrolux,
  },
  {
    id: 6,
    title: "Welbilt",
    brands: "Welbilt provides cutting-edge catering solutions with a focus on durability and performance. Their cookers are trusted globally for reliability in high-demand commercial kitchens.",
    image: images.welbilt,
  },
];

// fryer brand //
export const fryerBrandData = [
  {
    id: 1,
    title: "Turbo Fan",
    brands:
      "Turbo Fan ovens are compact, efficient, and perfect for professional baking and roasting. Known for their fast heating and even air circulation, they ensure consistent results every time.",
    image: images.turbo,
  },
  {
    id: 2,
    title: "Rational",
    brands:
      "Rational ovens feature advanced combi-cooking technology, offering precision and flexibility for any menu. They deliver exceptional performance, energy efficiency, and intelligent control systems.",
    image: images.rational,
  },
  {
    id: 3,
    title: "Convotherm",
    brands:
      "Convotherm ovens combine innovation with simplicity, providing chefs with powerful steam and convection capabilities. Built for durability, they help achieve perfect cooking consistency and quality.",
    image: images.convotherm,
  },
];


// dishwasher//
export const dishwasherBrandData = [
  {
    id: 1,
    title: "Winterhalter",
    brands:
      "Winterhalter dishwashers are engineered for exceptional cleaning performance, energy efficiency, and long service life — ideal for busy commercial kitchens and bars.",
    image: images.winterhalter,
  },
  {
    id: 2,
    title: "Maidaid",
    brands:
      "Maidaid produces robust glass and dish washing solutions focused on fast cycles, water economy, and dependable performance for hospitality environments.",
    image: images.maidaid,
  },
  {
    id: 3,
    title: "Classeq",
    brands:
      "Classeq offers compact and powerful dishwashing systems with easy maintenance and consistent wash results — perfect for cafés, restaurants and catering operations.",
    image: images.classeq,
  },
  {
    id: 4,
    title: "Meiko",
    brands:
      "Meiko delivers high-quality dishwashers with advanced filtration and drying systems, built for hygiene, durability and reduced operating costs in commercial settings.",
    image: images.meiko,
  },
];