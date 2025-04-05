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
