
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-16">
          <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-6">
            <span className="text-5xl font-bold">404</span>
          </div>
          <h1 className="text-4xl font-bold font-poppins mb-4 text-gray-900">
            Page not found
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 transition-colors"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
