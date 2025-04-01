
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClassifySection from '../components/ClassifySection';
import CallToAction from '../components/CallToAction';

const ClassifyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="hero-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
            E-Waste Classification
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload images of your electronic waste for AI-powered identification and recycling recommendations.
          </p>
        </div>
      </div>
      <ClassifySection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ClassifyPage;
