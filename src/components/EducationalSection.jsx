
import React, { useState } from 'react';
import { ArrowRight, Info, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationalSection = () => {
  const [activeTab, setActiveTab] = useState('impacts');
  
  const resourceCategories = [
    {
      id: 'impacts',
      title: 'Environmental Impacts',
      description: 'Learn how e-waste affects our environment',
      items: [
        {
          title: 'Soil Contamination',
          description: 'E-waste contains heavy metals that can leach into soil, contaminating groundwater and affecting plant growth.',
          icon: <AlertCircle className="h-5 w-5" />
        },
        {
          title: 'Air Pollution',
          description: 'Burning e-waste to recover metals releases toxic fumes containing dioxins, furans and other harmful substances.',
          icon: <AlertCircle className="h-5 w-5" />
        },
        {
          title: 'Resource Depletion',
          description: 'Manufacturing new electronics requires mining for rare earth elements, leading to habitat destruction.',
          icon: <AlertCircle className="h-5 w-5" />
        }
      ]
    },
    {
      id: 'benefits',
      title: 'Recycling Benefits',
      description: 'Discover the advantages of proper e-waste recycling',
      items: [
        {
          title: 'Resource Recovery',
          description: 'Proper e-waste recycling recovers valuable metals like gold, silver, copper and rare earth elements.',
          icon: <Info className="h-5 w-5" />
        },
        {
          title: 'Energy Conservation',
          description: 'Recycling aluminum from e-waste uses 95% less energy than mining bauxite ore.',
          icon: <Info className="h-5 w-5" />
        },
        {
          title: 'Landfill Reduction',
          description: 'E-waste is one of the fastest-growing waste streams, and recycling helps reduce landfill pressure.',
          icon: <Info className="h-5 w-5" />
        }
      ]
    },
    {
      id: 'types',
      title: 'E-Waste Types',
      description: 'Different categories of electronic waste',
      items: [
        {
          title: 'Consumer Electronics',
          description: 'Includes smartphones, laptops, tablets, TVs, and other personal electronic devices.',
          icon: <Info className="h-5 w-5" />
        },
        {
          title: 'Household Appliances',
          description: 'Refrigerators, washing machines, microwaves, and other home electronic equipment.',
          icon: <Info className="h-5 w-5" />
        },
        {
          title: 'IT Equipment',
          description: 'Servers, networking equipment, printers, and other enterprise technology.',
          icon: <Info className="h-5 w-5" />
        }
      ]
    }
  ];
  
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-poppins text-gray-900 sm:text-4xl">
            Learn About E-Waste
          </h2>
          <p className="mt-4 text-gray-600">
            Education is the first step toward responsible e-waste management.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px overflow-x-auto custom-scrollbar">
              {resourceCategories.map((category) => (
                <button
                  key={category.id}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === category.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.title}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-6">
            {resourceCategories.map((category) => (
              <div
                key={category.id}
                className={`space-y-6 ${activeTab === category.id ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-600">{category.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 border border-gray-200 rounded-lg hover:border-primary-200 hover:bg-primary-50/30 transition-colors card-hover"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Link
                    to="/learn"
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Learn more about {category.title.toLowerCase()}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalSection;
