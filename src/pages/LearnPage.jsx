
import React, {lazy, Suspense} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatsSection from '../components/StatsSection';
const EducationalSection = lazy(() => import("../components/EducationalSection"));
const ChatbotSection = lazy(() => import("../components/ChatbotSection"));

const LearnPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="hero-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
            Learn About E-Waste
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the environmental impact of e-waste and how proper recycling makes a difference.
          </p>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">
              The Growing Crisis of E-Waste
            </h2>
            <p className="text-gray-600">
              Electronic waste, or e-waste, is one of the fastest-growing waste streams globally. 
              With technological advancements accelerating and product lifespans shortening, more electronic 
              devices are being discarded than ever before.
            </p>
            <p className="text-gray-600">
              In 2022 alone, the world generated approximately 59 million tons of e-waste – equivalent 
              to the weight of 350 cruise ships. This number is projected to reach 75 million tons by 2030.
            </p>
            
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mt-8 mb-4">
              What Makes E-Waste Dangerous?
            </h3>
            <p className="text-gray-600">
              Electronic devices contain a complex mix of materials, including hazardous substances like lead, 
              mercury, cadmium, and flame retardants. When improperly disposed of, these toxins can leach into soil 
              and water systems or release harmful fumes when burned.
            </p>
            
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Lead:</strong> Found in older CRT screens and circuit boards, can damage nervous systems and affect brain development.</li>
              <li><strong>Mercury:</strong> Used in flat-screen displays and switches, can damage the brain, kidneys, and developing fetuses.</li>
              <li><strong>Cadmium:</strong> Present in rechargeable batteries and circuit boards, is carcinogenic and can cause bone and kidney damage.</li>
              <li><strong>Brominated flame retardants:</strong> Found in plastic casings, can disrupt endocrine systems.</li>
            </ul>
            
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mt-8 mb-4">
              The Value in E-Waste
            </h3>
            <p className="text-gray-600">
              Despite these hazards, e-waste also contains valuable materials that can be recovered and reused:
            </p>
            
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Precious metals:</strong> Gold, silver, platinum, and palladium are present in circuit boards and connectors.</li>
              <li><strong>Base metals:</strong> Copper, aluminum, and iron make up significant portions of electronics.</li>
              <li><strong>Rare earth elements:</strong> Critical for many modern technologies, including smartphone screens and speakers.</li>
            </ul>
            
            <p className="text-gray-600">
              It's estimated that there is 100 times more gold in a ton of mobile phones than in a ton of gold ore. 
              Proper recycling can recover these valuable materials while preventing environmental harm.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
      <Suspense fallback={<div>Loading...</div>}>
          <EducationalSection />
        </Suspense>
      </div>
      <StatsSection />
      <Suspense fallback={<div>Loading...</div>}>
          <ChatbotSection />
        </Suspense>
      <Footer />
    </div>
  );
};

export default LearnPage;
