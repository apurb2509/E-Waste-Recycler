
import React, { useState } from 'react';
import { ArrowRight, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.webp';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight text-gray-900">
                Recycle Your E-Waste <span className="text-primary-500">Smartly</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-lg">
                Our AI-powered platform helps you identify, classify, and properly recycle electronic waste to protect our environment.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/classify"
                className="bg-primary-500 text-white px-6 py-3 rounded-md text-md font-medium hover:bg-primary-600 transition-colors flex items-center justify-center shadow-lg shadow-primary-500/20"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Classify Your E-Waste
                <ArrowRight className={`ml-2 h-5 w-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
              </Link>
              <Link
                to="/learn"
                className="bg-white text-gray-800 px-6 py-3 rounded-md text-md font-medium hover:bg-gray-100 transition-colors border border-gray-200 flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 mt-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">AS</div>
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">KM</div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">1,000+</span> users already recycling smarter
              </p>
            </div>
          </div>
          
          <div className="relative md:h-96 flex justify-center items-center mt-8 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 to-secondary-200/20 rounded-full blur-3xl"></div>
            <img 
              src={heroImage}
              alt="E-waste recycling illustration" 
              className="relative z-10 scale-y-[1.7] scale-x-[1.2]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
