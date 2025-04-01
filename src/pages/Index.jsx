
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ClassifySection from '../components/ClassifySection';
import StatsSection from '../components/StatsSection';
import EducationalSection from '../components/EducationalSection';
import ChatbotSection from '../components/ChatbotSection';
import CallToAction from '../components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <ClassifySection />
        <EducationalSection />
        <ChatbotSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
