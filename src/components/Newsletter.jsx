import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-16 sm:py-20 bg-[#153C27] text-white relative overflow-hidden">
      {/* Background botanical SVG accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="20%" r="150" fill="#C59A3F" />
          <circle cx="90%" cy="80%" r="200" fill="#E8DEC9" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E5437] text-[#ECC468] text-xs font-semibold uppercase tracking-widest mb-4 border border-[#286B47]">
          <Sparkles size={13} />
          <span>Vedic Wellness Community</span>
        </div>

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Subscribe to Our Ayurvedic Journal
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#D4E0D6] max-w-xl mx-auto mb-8 leading-relaxed">
          Receive seasonal Ayurvedic lifestyle wisdom (Ritucharya), herbal diet tips from certified Vaidyas, and exclusive member discounts.
        </p>

        {/* Form */}
        {status === 'success' ? (
          <div className="bg-[#1E5437] border border-[#2B734C] text-[#ECC468] p-6 rounded-2xl max-w-lg mx-auto flex items-center justify-center gap-3 animate-fadeIn">
            <CheckCircle2 size={24} className="text-[#ECC468] flex-shrink-0" />
            <div className="text-left text-sm">
              <span className="font-bold block text-white">Namaste &amp; Welcome!</span>
              Your email has been subscribed. Check your inbox soon for your 10% welcome voucher!
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#C59A3F] border border-transparent"
                />
              </div>

              <button
                type="submit"
                className="py-3.5 px-7 rounded-full bg-[#C59A3F] hover:bg-[#D4AF37] text-[#153C27] font-bold text-sm tracking-wider uppercase shadow-lg transition active:scale-95 whitespace-nowrap"
              >
                Join Now
              </button>
            </div>

            {status === 'error' && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-rose-300">
                <AlertCircle size={14} />
                <span>{errorMessage}</span>
              </div>
            )}

            <p className="text-[11px] text-[#A3B8A7] pt-1">
              We respect your privacy. No spam, ever. Unsubscribe at any time.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};
