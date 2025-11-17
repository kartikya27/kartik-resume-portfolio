import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { getChatbotResponse } from '../services/geminiService';
import { PERSONAL_INFO } from '../constants';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'ai', text: `Hello! I'm ${PERSONAL_INFO.name.split(' ')[0]}'s AI assistant. Feel free to ask me any questions about his skills or experience.` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getChatbotResponse(input);
      const aiMessage: ChatMessage = { sender: 'ai', text: responseText };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { sender: 'ai', text: "Sorry, I'm having trouble connecting. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <div className={`fixed bottom-8 right-8 transition-all duration-300 z-50 ${isOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black dark:bg-white text-white dark:text-black rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-gray-500/40 hover:opacity-80 transition-transform transform hover:scale-110"
          aria-label="Open chat"
        >
          <i className="fas fa-robot text-2xl"></i>
        </button>
      </div>

      <div className={`fixed bottom-8 right-8 w-[calc(100%-4rem)] max-w-md h-[70vh] bg-white dark:bg-dark-bg rounded-lg shadow-2xl flex flex-col transition-all duration-500 transform z-50 border border-gray-300 dark:border-gray-800 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <header className="bg-white dark:bg-dark-card text-black dark:text-white p-4 flex justify-between items-center rounded-t-lg border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-bold text-lg">AI Assistant</h3>
          <button onClick={() => setIsOpen(false)} aria-label="Close chat">
            <i className="fas fa-times text-xl"></i>
          </button>
        </header>

        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-dark-bg">
          {messages.map((msg, index) => (
            <div key={index} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200'}`}>
                {msg.text}
              </div>
            </div>
          ))}
           {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="rounded-lg px-4 py-2 bg-gray-200 dark:bg-gray-700">
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-bg rounded-b-lg">
          <div className="flex items-center bg-gray-100 dark:bg-dark-card rounded-full">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about my experience..."
              className="w-full bg-transparent p-3 focus:outline-none text-gray-900 dark:text-gray-200 placeholder-gray-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="p-3 text-black dark:text-white disabled:text-gray-400"
              aria-label="Send message"
            >
              <i className="fas fa-paper-plane text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;