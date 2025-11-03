import React from "react";

const Loader = ({ text = "Loading..." }) => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-white text-gray-700 z-50">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
    <p>{text}</p>
  </div>
);

export default Loader;
