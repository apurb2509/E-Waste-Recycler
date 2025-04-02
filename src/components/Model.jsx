// // components/Model.jsx
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// export const generateContent = async (prompt) => {
//     const result = await model.generateContent(prompt);
//     console.log(result.response.text());
//     return result.response.text; // return the response
// }

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateContent = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();
    return responseText;
  } catch (error) {
    console.error("AI error:", error);
    return "Sorry, I couldn't process your request.";
  }
};
