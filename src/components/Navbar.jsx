import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Improved transition effect for tagline - smooth crossfade instead of flickering
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineVisible(prev => !prev);
    }, 2500); // Longer interval (4 seconds) for better readability

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex flex-col items-start">
            <Link to="/" className="group flex items-center space-x-2">
              <div className="transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <Leaf className="h-8 w-8 text-primary-500 transition-colors duration-300 group-hover:text-green-600" />
              </div>
              <span className="font-poppins font-bold text-xl text-gray-800 transition-all duration-300 group-hover:text-primary-500">E-WasteMate</span>
            </Link>
            <div 
              className="ml-10 text-xs italic text-primary-400 transition-all duration-1000 ease-in-out"
              style={{ opacity: taglineVisible ? 1 : 0 }}
            >
              Bin It Right, Win the Fight!
            </div>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="relative text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/classify" className="relative text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium group">
              Classify E-Waste
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/learn" className="relative text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium group">
              Learn
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="relative text-gray-700 hover:text-primary-500 transition-colors px-3 py-2 text-sm font-medium group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Clerk Authentication with Modal */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="transform transition-all duration-300 hover:scale-110">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-primary-500 transition-colors duration-300 transform hover:scale-110">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg animate-fadeIn">
            <Link to="/" className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:pl-4" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/classify" className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:pl-4" onClick={() => setIsOpen(false)}>
              Classify E-Waste
            </Link>
            <Link to="/learn" className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:pl-4" onClick={() => setIsOpen(false)}>
              Learn
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:pl-4" onClick={() => setIsOpen(false)}>
              About
            </Link>

            {/* Authentication for Mobile View */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-primary-500 hover:bg-primary-600 text-white block w-full px-3 py-2 rounded-full text-base font-medium transition-all duration-300 hover:shadow-md">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="px-3 py-2">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

// Add this to your global CSS or tailwind.config.js for the fade-in animation
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(-10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fadeIn {
//   animation: fadeIn 0.3s ease-out forwards;
// }

export default Navbar;