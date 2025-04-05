import React, {lazy, Suspense} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import CallToAction from "../components/CallToAction";
const ClassifySection = lazy(() => import("../components/ClassifySection"));
const EducationalSection = lazy(() => import("../components/EducationalSection"));
const ChatbotSection = lazy(() => import("../components/ChatbotSection"));

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <Suspense fallback={<div>Loading...</div>}>
          <EducationalSection />
          <ChatbotSection />
        </Suspense>
        <ClassifySection />

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
