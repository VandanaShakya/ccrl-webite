import React from 'react';
import { termsData } from './data'


const Terms = () => {
  // Data structure for easy rendering and maintenance


  return (
    // Outer container with white background (bg-white) and responsive padding
    <div className="min-h-screen bg-white text-gray-800 p-4 sm:p-6 lg:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-1 text-sky-500">
          Terms & Conditions
        </h1>
        
        {/* Sub-text */}
        <p className="text-center mb-8 sm:mb-12 text-gray-600">
          Please read these terms carefully before using our services.
        </p>

        <hr className="mb-8 border-gray-200" />
        
        {/* Sections Map */}
        <div className="space-y-10">
          {termsData.map((section) => (
            <div key={section.id}>
              {/* Section Heading - uses text-sky-500 for the bluish color */}
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
                {section.id}. {section.title}
              </h2>
              
              {/* Section Content */}
              {section.isList ? (
                // Render as a bulleted list
                <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg text-gray-700">
                  {section.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                // Render as a paragraph
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;

