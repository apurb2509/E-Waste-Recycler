
import React, { useState } from 'react';
import { Upload, Trash2, Image, Check, Loader2 } from 'lucide-react';

// Dummy data for e-waste types and recommendations
const ewasteData = {
  "smartphone": {
    name: "Smartphone",
    components: ["Battery", "Circuit Board", "Screen", "Plastic Casing", "Metals"],
    recyclingMethods: [
      "Remove battery before recycling (hazardous waste)",
      "Circuit boards contain valuable metals (gold, silver, copper)",
      "Screens should be specially processed for hazardous materials",
      "Plastic can be separated and recycled"
    ],
    impact: "Smartphones contain various rare earth elements and hazardous materials. Recycling one million smartphones can recover 35,000+ pounds of copper, 772 pounds of silver, 75 pounds of gold, and 33 pounds of palladium."
  },
  "laptop": {
    name: "Laptop",
    components: ["Battery", "Circuit Board", "Display", "Hard Drive", "Keyboard", "Metals", "Plastic"],
    recyclingMethods: [
      "Data sanitization before recycling",
      "Battery removal (contains lithium and other hazardous materials)",
      "Disassembly to separate components",
      "Circuit boards processed for valuable metal recovery",
      "Plastic components should be sorted by type"
    ],
    impact: "Properly recycling laptops prevents harmful chemicals like lead, mercury and cadmium from entering the environment. It also recovers valuable materials and reduces energy consumption compared to mining raw materials."
  },
  "television": {
    name: "Television",
    components: ["Screen (LED/LCD/Plasma)", "Circuit Boards", "Plastic Housing", "Metals", "Cables"],
    recyclingMethods: [
      "CRT TVs contain lead and require specialized handling",
      "LCD screens contain mercury and need careful processing",
      "Circuit boards can be processed for precious metals",
      "Plastics can be separated by type and recycled",
      "Metals can be recovered and melted down"
    ],
    impact: "Old CRT televisions contain several pounds of lead. Modern flat-screen TVs contain less lead but may have mercury in backlights. Proper recycling prevents these toxins from leaching into groundwater."
  }
};

const ClassifySection = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [ewasteType, setEwasteType] = useState("");
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    handleFile(selectedFile);
  };
  
  const handleFile = (selectedFile) => {
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
    }
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };
  
  const handleDragLeave = () => {
    setDragging(false);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  const removeFile = () => {
    setFile(null);
    setPreview('');
    setResult(null);
    setEwasteType("");
  };
  
  const classifyImage = () => {
    setLoading(true);
    
    // Simulate AI classification with timeout
    setTimeout(() => {
      // Random classification for demo purposes
      const types = Object.keys(ewasteData);
      const randomType = types[Math.floor(Math.random() * types.length)];
      
      setResult(ewasteData[randomType]);
      setEwasteType(randomType);
      setLoading(false);
    }, 2000);
  };
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-poppins text-gray-900 sm:text-4xl mb-4">
            Classify Your E-Waste
          </h2>
          <p className="text-gray-600">
            Upload an image of your electronic waste for AI-powered classification and receive personalized recycling recommendations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center ${
                dragging ? 'border-primary-500 bg-primary-50' : 'border-gray-300'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {!preview ? (
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <Upload className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-gray-700">Drag and drop an image here, or</p>
                    <label className="mt-2 inline-flex items-center px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-md hover:bg-primary-600 cursor-pointer">
                      Browse files
                      <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">
                    Supported formats: JPG, PNG, GIF (max 10MB)
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative w-full h-64">
                    <img
                      src={preview}
                      alt="Preview"
                      className="h-full w-full object-contain rounded-md"
                    />
                    <button
                      onClick={removeFile}
                      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm hover:bg-red-50"
                    >
                      <Trash2 className="h-5 w-5 text-red-500" />
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={classifyImage}
                      disabled={loading}
                      className={`px-5 py-2 bg-primary-500 text-white rounded-md flex items-center ${
                        loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-600'
                      }`}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Classifying...
                        </>
                      ) : (
                        <>
                          Classify E-Waste
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div>
            {result ? (
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">{result.name}</h3>
                      <p className="text-gray-500">E-waste successfully classified</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Components
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {result.components.map((component, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Recycling Methods
                    </h4>
                    <ul className="space-y-2">
                      {result.recyclingMethods.map((method, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <span className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                            <span className="text-primary-600 text-xs">{index + 1}</span>
                          </span>
                          <span className="text-gray-700">{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-blue-800 uppercase tracking-wider mb-2">
                      Environmental Impact
                    </h4>
                    <p className="text-sm text-blue-700">
                      {result.impact}
                    </p>
                  </div>
                  
                  <div>
                    <button className="w-full px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
                      Find Recycling Centers Near You
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-xl shadow-md h-full flex items-center justify-center">
                <div className="text-center max-w-md">
                  <div className="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <Image className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">No Image Classified Yet</h3>
                  <p className="mt-2 text-gray-600">
                    Upload an image of your electronic device to receive detailed classification and recycling recommendations.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassifySection;
