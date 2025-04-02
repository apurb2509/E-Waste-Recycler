import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.webp";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-400 to-blue-500 text-white">
      {/* Background Pattern Effects */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/path-to-pattern.svg')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section: Title, Description, Buttons */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight animate-fade-in text-[#ffffff]">
              Ready to <span className="text-[#ffffff]">Recycle Your </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-700 to-green-500">
                E-Waste?
              </span>
            </h1>

            <p className="mt-4 text-lg text-[#f6f4f4] max-w-lg animate-slide-up">
              Join thousands of responsible consumers making a positive
              environmental impact through proper e-waste recycling.
            </p>

            {/* Buttons with Hover Effects */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="hover:scale-110 transition-transform duration-300">
                <Link
                  to="/classify"
                  className="bg-white text-green-600 px-6 py-3 rounded-md text-md font-semibold hover:bg-gray-100 transition-all flex items-center justify-center shadow-lg shadow-green-500/30"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Classify Your E-Waste
                  <ArrowRight
                    className={`ml-2 h-5 w-5 transition-transform ${
                      isHovered ? "translate-x-1" : ""
                    }`}
                  />
                </Link>
              </div>

              <div className="hover:scale-110 transition-transform duration-300">
                <Link
                  to="/learn"
                  className="bg-transparent border border-white text-white px-6 py-3 rounded-md text-md font-semibold hover:bg-white hover:text-green-600 transition-all flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section: Animated Hero Image */}
          <div className="relative flex justify-center items-center">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-green-300/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Floating Image */}
            <img
              src={heroImage}
              alt="E-waste recycling illustration"
              className="relative z-10 floating-animation scale-x-[1.1] scale-y-[1.3]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
