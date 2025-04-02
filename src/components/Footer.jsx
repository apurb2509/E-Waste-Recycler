
import React from 'react';
import { Leaf, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-primary-400" />
              <span className="font-poppins font-bold text-xl">E-WasteMate</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Making e-waste recycling accessible, efficient, and educational for everyone.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="/classify" className="text-gray-400 hover:text-primary-400 transition-colors">Classify E-Waste</a></li>
              <li><a href="/learn" className="text-gray-400 hover:text-primary-400 transition-colors">Learn</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">E-Waste Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Recycling Centers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Environmental Impact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Recycling Statistics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:info@ecorecycle.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                  info@ecorecycle.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href="tel:+123456789" className="text-gray-400 hover:text-primary-400 transition-colors">
                  +1 (234) 567-89
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                <span className="text-gray-400">
                  123 Eco Street, Green City, Earth
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} E-WasteMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
