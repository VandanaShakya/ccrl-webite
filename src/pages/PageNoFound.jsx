import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <main className="h-screen flex flex-col items-center justify-center text-center">
    <h1 className="text-5xl font-bold mb-4">404</h1>
    <p className="text-lg mb-6">Oops! The page you’re looking for doesn’t exist.</p>
    <Link
      to="/"
      className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      Go Back Home
    </Link>
  </main>
);

export default PageNotFound;
