import React, { useState } from 'react';
import { Upload, Trash2, Image, Loader2 } from 'lucide-react';
import { generateImageURL } from '../utils/uploadHelper';
import { analyzeImageWithGemini } from '../utils/geminiVision';

const ClassifySection = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    handleFile(selectedFile);
  };

  const handleFile = (selectedFile) => {
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
      const tempUrl = URL.createObjectURL(selectedFile);
      setPreview(tempUrl);
      setResult(null);
      setError(null);
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
    setError(null);
  };

  const classifyImage = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);

    try {
      console.log("File selected:", file);
      const imagePayload = await generateImageURL(file);
      console.log("Base64 payload generated");

      const response = await analyzeImageWithGemini(imagePayload);
      console.log("Gemini response received");
      
      if (response && response.startsWith("Error:")) {
        setError(response);
        setResult(null);
      } else if (!response) {
        setError("No response received from API. Please check your API key and try again.");
        setResult(null);
      } else {
        setResult(response);
        setError(null);
      }
    } catch (err) {
      console.error("❌ Error analyzing image:", err);
      setError("Something went wrong. Please try again.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-poppins text-gray-800 sm:text-4xl mb-4">
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
                  <p className="text-xs text-gray-500">Supported formats: JPG, PNG, GIF (max 10MB)</p>
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
                          Analyzing...
                        </>
                      ) : (
                        <>Classify E-Waste</>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            {result ? (
              <div className="bg-white p-6 rounded-xl shadow-md h-full overflow-auto">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Analysis Result</h3>
                  <pre className="text-sm bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">{result}</pre>
                </div>
              </div>
            ) : error ? (
              <div className="bg-white p-6 rounded-xl shadow-md h-full overflow-auto">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-red-600">Error</h3>
                  <div className="text-sm bg-red-50 p-4 rounded-lg border border-red-200 text-red-800">
                    {error}
                  </div>
                  <div className="text-sm text-gray-700">
                    <p>Possible solutions:</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Check if your Gemini API key is valid</li>
                      <li>Ensure your API key has access to the gemini-1.5-flash model</li>
                      <li>Try with a different image</li>
                      <li>Check your internet connection</li>
                    </ul>
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
