import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { useAuth } from '../../context/AuthContext';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Aarogyantix AI Assistant. I have access to your hospital's real-time data and predictions. How can I help you optimize operations today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { user } = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let responseText = "I can help with that. Based on current data...";
      
      if (input.toLowerCase().includes('surge') || input.toLowerCase().includes('prediction')) {
        responseText = "My models predict a 15% surge in respiratory cases over the next 3 days due to rising AQI levels. I recommend increasing staff in Pulmonology.";
      } else if (input.toLowerCase().includes('staff') || input.toLowerCase().includes('nurse')) {
        responseText = "Current staffing is adequate, but you may need 2 additional nurses for the night shift in Emergency based on predicted patient inflow.";
      } else if (input.toLowerCase().includes('supply') || input.toLowerCase().includes('oxygen')) {
        responseText = "Oxygen supplies are stable (12 days remaining). However, Epinephrine stock is low and should be restocked within 48 hours.";
      }

      const aiMessage = { id: Date.now() + 1, text: responseText, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Only show for Pro/Enterprise users (mock check)
  // In a real app, check user.subscription or similar
  if (!user) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white shadow-lg hover:shadow-primary/50 transition-all duration-300 animate-bounce-slow"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <Card className="w-80 md:w-96 h-[500px] flex flex-col p-0 shadow-2xl border-primary/20 animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-surface/50 flex justify-between items-center rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Aarogyantix AI</h3>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-400">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white rounded-tr-none'
                      : 'bg-surface border border-white/10 text-gray-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-surface border border-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-surface/50 rounded-b-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask about predictions, staffing..."
                className="w-full bg-background/50 border border-white/10 rounded-full pl-4 pr-12 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary/50"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="absolute right-1 top-1 p-1.5 bg-primary text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
            <div className="flex gap-2 mt-2 overflow-x-auto pb-1 scrollbar-hide">
              {['What\'s my patient surge prediction?', 'Any staffing recommendations?', 'Show critical alerts'].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setInput(suggestion)}
                  className="whitespace-nowrap px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </form>
        </Card>
      )}
    </div>
  );
};

export default Chatbot;
