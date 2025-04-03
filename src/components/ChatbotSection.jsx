
// import React, { useState } from 'react';
// import { Send, Bot, User, ChevronRight } from 'lucide-react';

// const ChatbotSection = () => {
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       type: 'bot',
//       text: "Hi there! I'm EcoBot, your e-waste recycling assistant. How can I help you today?",
//       options: [
//         "How do I recycle my old smartphone?",
//         "Where is the nearest recycling center?",
//         "What is e-waste?",
//         "How is e-waste harmful?"
//       ]
//     }
//   ]);
//   const [inputValue, setInputValue] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
  
//   const mockResponses = {
//     "How do I recycle my old smartphone?": "To recycle your old smartphone:\n\n1. Back up your data\n2. Factory reset the device to remove personal info\n3. Remove the battery if possible (it needs special recycling)\n4. Take it to an e-waste collection center or retailer program\n5. Some manufacturers have trade-in or mail-back programs\n\nWould you like more specific information?",
//     "Where is the nearest recycling center?": "To find the nearest e-waste recycling center, I'd need your location. However, here are some general ways to find recycling centers:\n\n• Check Earth911.com and enter your zip code\n• Visit your local municipality's website\n• Look for retailer take-back programs at Best Buy, Apple, or Staples\n• Search for e-Stewards or R2 certified recyclers in your area",
//     "What is e-waste?": "E-waste (electronic waste) refers to discarded electronic devices and equipment such as smartphones, computers, TVs, printers, and household appliances.\n\nThese items contain valuable materials like gold, silver, copper, and rare earth elements, but also hazardous substances like lead, mercury, cadmium, and flame retardants that can harm the environment if not properly handled.",
//     "How is e-waste harmful?": "E-waste is harmful in several ways:\n\n• Contains toxic materials (lead, mercury, cadmium) that can leach into soil and water\n• Improper recycling (especially burning) releases harmful chemicals into the air\n• When landfilled, it wastes valuable resources like gold, silver, and copper\n• Informal recycling in developing countries often exposes workers to hazardous substances\n\nProper recycling prevents these environmental and health impacts."
//   };
  
//   const handleSendMessage = () => {
//     if (inputValue.trim() === '') return;
    
//     const newUserMessage = {
//       id: Date.now(),
//       type: 'user',
//       text: inputValue
//     };
    
//     setMessages([...messages, newUserMessage]);
//     setInputValue('');
//     setIsTyping(true);
    
//     // Simulate AI response
//     setTimeout(() => {
//       const botResponse = {
//         id: Date.now() + 1,
//         type: 'bot',
//         text: "Thanks for your question. Our AI is analyzing the best response for you. For demonstration purposes, please try one of the suggested questions below.",
//         options: [
//           "How do I recycle my old smartphone?",
//           "Where is the nearest recycling center?",
//           "What is e-waste?",
//           "How is e-waste harmful?"
//         ]
//       };
      
//       setMessages(prev => [...prev, botResponse]);
//       setIsTyping(false);
//     }, 1500);
//   };
  
//   const handleOptionClick = (option) => {
//     const newUserMessage = {
//       id: Date.now(),
//       type: 'user',
//       text: option
//     };
    
//     setMessages([...messages, newUserMessage]);
//     setIsTyping(true);
    
//     // Simulate AI response
//     setTimeout(() => {
//       const botResponse = {
//         id: Date.now() + 1,
//         type: 'bot',
//         text: mockResponses[option] || "I don't have specific information on that topic yet. Our team is continuously improving the AI assistant.",
//         options: [
//           "How do I recycle my old smartphone?",
//           "Where is the nearest recycling center?",
//           "What is e-waste?",
//           "How is e-waste harmful?"
//         ]
//       };
      
//       setMessages(prev => [...prev, botResponse]);
//       setIsTyping(false);
//     }, 1500);
//   };
  
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSendMessage();
//     }
//   };
  
//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h2 className="text-3xl font-bold font-poppins text-gray-900 sm:text-4xl">
//             Ask Our EcoBot
//           </h2>
//           <p className="mt-4 text-gray-600">
//             Have questions about e-waste recycling? Our AI assistant is here to help.
//           </p>
//         </div>
        
//         <div className="max-w-3xl mx-auto">
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
//             <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-4">
//               <div className="flex items-center">
//                 <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow">
//                   <Bot className="h-6 w-6 text-primary-500" />
//                 </div>
//                 <div className="ml-3 text-white">
//                   <p className="font-medium">EcoBot</p>
//                   <p className="text-xs text-white/80">AI Recycling Assistant</p>
//                 </div>
//                 <div className="ml-auto h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
//               </div>
//             </div>
            
//             <div className="h-96 overflow-y-auto p-4 flex flex-col space-y-4 custom-scrollbar">
//               {messages.map((message) => (
//                 <div
//                   key={message.id}
//                   className={`max-w-3/4 ${
//                     message.type === 'user' ? 'ml-auto' : 'mr-auto'
//                   }`}
//                 >
//                   <div className="flex items-start">
//                     {message.type === 'bot' && (
//                       <div className="h-8 w-8 rounded-full bg-primary-100 flex-shrink-0 flex items-center justify-center mr-2">
//                         <Bot className="h-5 w-5 text-primary-600" />
//                       </div>
//                     )}
//                     <div
//                       className={`rounded-2xl px-4 py-2 ${
//                         message.type === 'user'
//                           ? 'bg-primary-500 text-white'
//                           : 'bg-gray-100 text-gray-800'
//                       }`}
//                     >
//                       <p className="whitespace-pre-line">{message.text}</p>
//                     </div>
//                     {message.type === 'user' && (
//                       <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center ml-2">
//                         <User className="h-5 w-5 text-gray-600" />
//                       </div>
//                     )}
//                   </div>
                  
//                   {message.type === 'bot' && message.options && (
//                     <div className="ml-10 mt-3 flex flex-wrap gap-2">
//                       {message.options.map((option, index) => (
//                         <button
//                           key={index}
//                           onClick={() => handleOptionClick(option)}
//                           className="bg-white text-gray-700 text-sm border border-gray-300 rounded-full px-3 py-1 flex items-center hover:bg-gray-50 hover:border-primary-300 transition-colors"
//                         >
//                           <span>{option}</span>
//                           <ChevronRight className="h-3 w-3 ml-1" />
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
              
//               {isTyping && (
//                 <div className="flex items-start">
//                   <div className="h-8 w-8 rounded-full bg-primary-100 flex-shrink-0 flex items-center justify-center mr-2">
//                     <Bot className="h-5 w-5 text-primary-600" />
//                   </div>
//                   <div className="bg-gray-100 rounded-2xl px-4 py-2 text-gray-800">
//                     <div className="flex space-x-1">
//                       <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></div>
//                       <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                       <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             <div className="border-t p-4">
//               <div className="flex items-center">
//                 <input
//                   type="text"
//                   placeholder="Ask a question about e-waste recycling..."
//                   className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
//                   value={inputValue}
//                   onChange={(e) => setInputValue(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                 />
//                 <button
//                   onClick={handleSendMessage}
//                   className="bg-primary-500 text-white px-4 py-2 rounded-r-lg hover:bg-primary-600 transition-colors"
//                 >
//                   <Send className="h-5 w-5" />
//                 </button>
//               </div>
//               <p className="mt-2 text-xs text-gray-500 text-center">
//                 This demo responds to the questions provided above.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatbotSection;


import React, { useState } from 'react';
import { Send, Bot, User, ChevronRight } from 'lucide-react';
import { generateContent } from './model'; 

const ChatbotSection = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi there! I'm EcoBot, your e-waste recycling assistant. How can I help you today?",
      options: [
        "How do I recycle my old smartphone?",
        "Where is the nearest recycling center?",
        "What is e-waste?",
        "How is e-waste harmful?"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;  // Prevent empty messages
    
    const newUserMessage = {
      id: Date.now(),
      type: 'user',
      text: inputValue
    };
    
    setMessages([...messages, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await generateContent(inputValue);
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        text: response
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (err) {
      console.error("AI response error:", err);
      setMessages(prev => [...prev, { id: Date.now(), type: 'bot', text: "Sorry, I couldn't process that request." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    handleSendMessage();
  };

  // ✅ Handle pressing "Enter" to send a message
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();  // Prevent default form submission
      handleSendMessage();
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-poppins text-gray-900 sm:text-4xl">
            Ask Our EcoBot
          </h2>
          <p className="mt-4 text-gray-600">
            Have questions about e-waste recycling? Our AI assistant is here to help.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-green-800 to-green-600 p-4 text-white">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow">
                  <Bot className="h-6 w-6 text-green-800" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">EcoBot</p>
                  <p className="text-xs opacity-80">AI Recycling Assistant</p>
                </div>
                <div className="ml-auto h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
              </div>
            </div>

            <div className="h-96 overflow-y-auto p-4 flex flex-col space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`max-w-3/4 ${message.type === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                  <div className="flex items-start">
                    {message.type === 'bot' && (
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                        <Bot className="h-5 w-5 text-green-600" />
                      </div>
                    )}
                    <div className={`rounded-2xl px-4 py-2 ${message.type === 'user' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                      <p className="whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                  {message.type === 'bot' && message.options && (
                    <div className="ml-10 mt-3 flex flex-wrap gap-2">
                      {message.options.map((option, index) => (
                        <button key={index} onClick={() => handleOptionClick(option)} className="bg-white text-gray-700 text-sm border border-gray-300 rounded-full px-3 py-1 flex items-center hover:bg-gray-50">
                          <span>{option}</span>
                          <ChevronRight className="h-3 w-3 ml-1" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                    <Bot className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-2 text-gray-800">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></div>
                      <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t p-4">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Ask a question about e-waste recycling..."
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}  // ✅ Detect Enter key press
                />
                <button onClick={handleSendMessage} className="bg-green-600 text-white px-4 py-2 rounded-r-lg">
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500 text-center">
                Powered by Gemini AI.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSection;
