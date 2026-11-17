import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, X, Send, Bot, Sparkles, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const FloatingWidgets = () => {
  const { toastMessage } = useCart();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Namaste! 🙏 I am your Shatavari Ayurvedic Assistant. How can I help you choose the right herbal formulation today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Scroll detection for back-to-top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // WhatsApp configurable phone number
  const whatsappNumber = '919493782350';
  const whatsappMessage = encodeURIComponent('Namaste Shatavari Ayurvedic! I would like to inquire about your herbal products.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Predefined Ayurvedic Chat Responses
  const predefinedSuggestions = [
    'Best Shatavari product for female vitality?',
    'How to take Triphala Juice for digestion?',
    'Natural routine for hair fall reduction?',
    'Are these formulations 100% certified?'
  ];

  const handleSendMessage = (textToSend = null) => {
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    // Append user message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputMessage('');

    // Formulate response
    setTimeout(() => {
      const lower = query.toLowerCase();
      let botReply = '';

      if (lower.includes('shatavari') || lower.includes('women') || lower.includes('female') || lower.includes('hormon')) {
        botReply = 'For female vitality and hormonal harmony, our signature "Shatavari Kalpa Granules" (taken with warm milk) is our #1 recommendation. If you prefer capsules, our "Shatavari Hormonal Balance Veg-Caps" offer a standardized 40% saponin extract.';
      } else if (lower.includes('triphala') || lower.includes('digest') || lower.includes('gut') || lower.includes('stomach') || lower.includes('constipat')) {
        botReply = 'Our "Triphala Detox & Digestion Juice" blends organic Amla, Haritaki, and Bibhitaki. Take 30ml diluted in warm water 30 minutes before bedtime or upon waking for natural, gentle colon cleansing.';
      } else if (lower.includes('hair') || lower.includes('fall') || lower.includes('dandruff') || lower.includes('bald')) {
        botReply = 'For hair loss, we recommend a two-step Ayurvedic therapy: massage scalp twice weekly with warm "Bhringraj & Brahmi Hair Oil" (leave on for 2 hours or overnight), then cleanse gently with our sulfate-free "Onion & Kalonji Revitalizing Shampoo".';
      } else if (lower.includes('skin') || lower.includes('glow') || lower.includes('pimple') || lower.includes('acne') || lower.includes('kumkumadi')) {
        botReply = 'For radiant, spot-free skin: use "Neem & Tulsi Purifying Cleanser" to cleanse pores, followed by 3-4 drops of our authentic 26-herb "Kumkumadi Miraculous Beauty Oil" pressed gently into damp skin before sleeping.';
      } else if (lower.includes('certif') || lower.includes('safe') || lower.includes('pure') || lower.includes('natural') || lower.includes('chemical')) {
        botReply = 'Yes! All Shatavari Ayurvedic formulations are manufactured in Ayush & GMP-certified facilities. Every batch undergoes stringent third-party testing for heavy metals, pesticides, and microbial purity with zero synthetic colors or harmful parabens.';
      } else {
        botReply = 'Thank you for your inquiry! Our herbal formulations are prepared using classical Charaka Samhita recipes. You can browse our categories via the top menu or tap on any product to view its complete ingredients, benefits, and dosage guidelines.';
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <>
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 animate-bounce">
          <div className="bg-[#153C27] text-white px-4 py-3 rounded-2xl shadow-2xl border border-[#C59A3F]/50 flex items-center gap-3 text-xs sm:text-sm font-medium">
            <div className="w-6 h-6 rounded-full bg-[#C59A3F] text-[#153C27] flex items-center justify-center font-bold flex-shrink-0">
              <Check size={14} />
            </div>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Floating Action Buttons Area (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white text-[#153C27] border border-[#D9CBB5] shadow-lg hover:shadow-xl hover:bg-[#FAF7F2] flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            title="Back to Top"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={18} />
          </button>
        )}

        {/* WhatsApp Floating Contact Icon */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center transition-all group relative"
          aria-label="Chat with Ayurvedic Advisor on WhatsApp"
          title="Chat on WhatsApp"
        >
          {/* WhatsApp SVG */}
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 18.15c-1.49 0-2.94-.4-4.22-1.16l-.3-.18-3.13.82.83-3.05-.2-.31a8.19 8.19 0 01-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.19 8.23zm4.51-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
          </svg>
          {/* Tooltip on hover */}
          <span className="absolute right-14 bg-stone-900 text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            WhatsApp Herbal Help
          </span>
        </a>

        {/* Frontend Chatbot Button */}
        <button
          type="button"
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-13 h-13 p-3 rounded-full bg-[#153C27] hover:bg-[#1E5437] text-white shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center transition-all group relative border-2 border-[#C59A3F]"
          aria-label="Ayurvedic Vaidya Assistant"
          title="Ayurvedic Vaidya Chatbot"
        >
          <Bot size={26} className="text-[#ECC468]" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
        </button>

      </div>

      {/* Ayurvedic Advisor Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-[#D9CBB5] flex flex-col overflow-hidden animate-fadeIn max-h-[550px] h-[500px]">
          {/* Chat Header */}
          <div className="p-4 bg-[#153C27] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1E5437] border border-[#C59A3F] flex items-center justify-center">
                <Sparkles size={18} className="text-[#ECC468]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Ayurvedic Assistant</span>
                  <span className="text-[10px] bg-[#ECC468] text-[#153C27] px-1.5 py-0.2 rounded font-bold">24/7</span>
                </h4>
                <p className="text-[11px] text-[#A6C4AE]">SHATAVARI AYURVEDIC</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-full transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF7F2] text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[82%] p-3 rounded-2xl leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#153C27] text-white rounded-tr-none'
                      : 'bg-white text-[#29382B] border border-[#E8DEC9] shadow-sm rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Predefined Questions */}
          <div className="p-2.5 bg-white border-t border-[#E8DEC9] overflow-x-auto flex gap-1.5 no-scrollbar">
            {predefinedSuggestions.map((sug, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSendMessage(sug)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#F3EDE2] hover:bg-[#E5DAC6] text-[10px] font-medium text-[#153C27] border border-[#D9CBB5] transition"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-[#E8DEC9] flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about herbs, dosage, or skin..."
              className="flex-1 px-3.5 py-2 text-xs rounded-full bg-[#FAF7F2] border border-[#D9CBB5] focus:outline-none focus:ring-1 focus:ring-[#153C27]"
            />
            <button
              type="button"
              onClick={() => handleSendMessage()}
              className="p-2 rounded-full bg-[#153C27] text-white hover:bg-[#1E5437] transition flex-shrink-0"
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
