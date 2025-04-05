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
