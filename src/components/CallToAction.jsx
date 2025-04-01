
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-br from-primary-500 to-secondary-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white font-poppins sm:text-4xl">
          Ready to Recycle Your E-Waste?
        </h2>
        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
          Join thousands of responsible consumers making a positive environmental impact through proper e-waste recycling.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/classify"
            className="bg-white text-primary-600 px-6 py-3 rounded-md text-md font-medium hover:bg-gray-100 hover:text-primary-700 transition-colors shadow-lg flex items-center justify-center"
          >
            Classify Your E-Waste
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/learn"
            className="bg-transparent text-white border border-white px-6 py-3 rounded-md text-md font-medium hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
