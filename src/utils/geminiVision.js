// import axios from "axios";

// const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_VISION_API_KEY;
// // Updated API URL to use gemini-1.5-flash model instead of deprecated gemini-pro-vision
// const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`;

// /**
//  * Sends the image base64 to Gemini Vision API for analysis.
//  * @param {{ base64Data: string, mimeType: string }} imagePayload
//  * @returns {Promise<string|null>} - Processed response from Gemini AI
//  */
// export const analyzeImageWithGemini = async ({ base64Data, mimeType }) => {
//   try {
//     console.log("Using API KEY:", GEMINI_API_KEY?.substring(0, 5) + "..." || "Not found");
    
//     const response = await axios.post(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
//       contents: [
//         {
//           parts: [
//             {
//               inlineData: {
//                 mimeType: mimeType,
//                 data: base64Data
//               }
//             },
//             {
//               text:
//                 "Analyze this e-waste image and provide structured details: " +
//                 "All items identified, harmful constituents, disposal methods, " +
//                 "emissions before & after safe disposal, and accuracy in percentage."
//             }
//           ]
//         }
//       ]
//     });

//     // The response structure might be slightly different in the new model
//     if (response.data && response.data.candidates && response.data.candidates.length > 0) {
//       const content = response.data.candidates[0].content;
//       if (content && content.parts && content.parts.length > 0) {
//         return content.parts[0].text;
//       }
//     }
    
//     console.log("Unexpected response structure:", JSON.stringify(response.data, null, 2));
//     throw new Error("Invalid response from Gemini API");
//   } catch (error) {
//     console.error("Gemini Vision API Error:", error.response?.data || error);
//     if (error.response?.data?.error) {
//       // Return a more helpful error message to the user
//       return `Error: ${error.response.data.error.message || 'Unknown API error'}`;
//     }
//     return "Failed to analyze image. Please check your API key and try again.";
//   }
// };





// import axios from "axios";

// const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_VISION_API_KEY;
// // Using gemini-1.5-flash model
// const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`;

// /**
//  * Sends the image base64 to Gemini Vision API for analysis.
//  * @param {{ base64Data: string, mimeType: string }} imagePayload
//  * @returns {Promise<string|null>} - Processed response from Gemini AI
//  */
// export const analyzeImageWithGemini = async ({ base64Data, mimeType }) => {
//   try {
//     console.log("Using API KEY:", GEMINI_API_KEY?.substring(0, 5) + "..." || "Not found");
    
//     const response = await axios.post(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
//       contents: [
//         {
//           parts: [
//             {
//               inlineData: {
//                 mimeType: mimeType,
//                 data: base64Data
//               }
//             },
//             {
//               text: 
//                 "Analyze this e-waste image. Be accurate in identifying all electronic items even if broken or damaged. " +
//                 "Provide a BRIEF, CONCISE response with these sections only:\n\n" +
//                 "1. ITEMS: List all electronic items/components visible (2-3 words per item)\n" +
//                 "2. MATERIALS: Key harmful materials present (just list them)\n" +
//                 "3. DISPOSAL: Short 1-2 sentence recommendation\n" +
//                 "Keep the entire response under 150 words. No introductions or conclusions."
//             }
//           ]
//         }
//       ]
//     });

//     if (response.data && response.data.candidates && response.data.candidates.length > 0) {
//       const content = response.data.candidates[0].content;
//       if (content && content.parts && content.parts.length > 0) {
//         return content.parts[0].text;
//       }
//     }
    
//     console.log("Unexpected response structure:", JSON.stringify(response.data, null, 2));
//     throw new Error("Invalid response from Gemini API");
//   } catch (error) {
//     console.error("Gemini Vision API Error:", error.response?.data || error);
//     if (error.response?.data?.error) {
//       return `Error: ${error.response.data.error.message || 'Unknown API error'}`;
//     }
//     return "Failed to analyze image. Please check your API key and try again.";
//   }
// };





import axios from "axios";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_VISION_API_KEY;
// Using gemini-1.5-flash model
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`;

/**
 * Sends the image base64 to Gemini Vision API for analysis.
 * @param {{ base64Data: string, mimeType: string }} imagePayload
 * @returns {Promise<string|null>} - Processed response from Gemini AI
 */
export const analyzeImageWithGemini = async ({ base64Data, mimeType }) => {
  try {
    console.log("Using API KEY:", GEMINI_API_KEY?.substring(0, 5) + "..." || "Not found");
    
    const response = await axios.post(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      contents: [
        {
          parts: [
            {
              inlineData: {
                mimeType: mimeType,
                data: base64Data
              }
            },
            {
              text: 
                "Analyze this e-waste image carefully. Be accurate regardless of the item's condition. " +
                "Provide a concise analysis with these sections only:\n\n" +
                "1. ITEMS IDENTIFIED: List all electronic components visible\n" +
                "2. HAZARDOUS MATERIALS: Key harmful materials present\n" +
                "3. RECYCLING POTENTIAL: Valuable materials that can be recovered\n" +
                "4. DISPOSAL IMPACT: Include percentage reduction in environmental harm from safe disposal vs regular disposal\n" +
                "5. POTENTIAL PRODUCTS: 2-3 items that could be made from recycled materials based on physical condition\n" +
                "6. DISPOSAL RECOMMENDATIONS: Brief guidance on proper disposal\n\n" +
                "Keep each section to 1-2 sentences maximum. Total response under 250 words. Be specific and factual."
            }
          ]
        }
      ]
    });

    if (response.data && response.data.candidates && response.data.candidates.length > 0) {
      const content = response.data.candidates[0].content;
      if (content && content.parts && content.parts.length > 0) {
        return content.parts[0].text;
      }
    }
    
    console.log("Unexpected response structure:", JSON.stringify(response.data, null, 2));
    throw new Error("Invalid response from Gemini API");
  } catch (error) {
    console.error("Gemini Vision API Error:", error.response?.data || error);
    if (error.response?.data?.error) {
      return `Error: ${error.response.data.error.message || 'Unknown API error'}`;
    }
    return "Failed to analyze image. Please check your API key and try again.";
  }
};