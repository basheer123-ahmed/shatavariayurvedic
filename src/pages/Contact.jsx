import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Product Guidance',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Are Shatavari Ayurvedic products 100% vegetarian?',
      a: 'Yes, all our herbal churnas, tablets, cold-pressed juices, and skincare formulations are 100% vegetarian. Our capsules use plant-derived HPMC vegetarian shells.'
    },
    {
      q: 'How long does delivery take across India?',
      a: 'Orders are typically packed and dispatched within 24-48 business hours from our apothecary warehouse. Delivery takes 3 to 5 business days for major metro cities.'
    },
    {
      q: 'Can I consume Shatavari Kalpa during pregnancy or nursing?',
      a: 'Shatavari is historically revered in Ayurveda as Stanya (lactation-promoting) and Garbhasthapaka (nourishing uterine health). However, we advise pregnant or lactating mothers to consult their Vaidya or obstetrician before starting any supplement.'
    },
    {
      q: 'How do I avail free shipping?',
      a: 'Free standard shipping is automatically applied to all orders with a cart subtotal of ₹499 or more.'
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16 border-b border-[#E8DEC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DEC9] text-[#153C27] text-xs font-semibold uppercase tracking-widest">
            <Sparkles size={13} className="text-[#C59A3F]" />
            <span>We are here to assist your wellness</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold text-[#153C27]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Connect with Our Vaidyas &amp; Support
          </h1>
          <p className="text-sm text-[#5C6E5F]">
            Have a question about botanical dosages, herbal combinations, or your recent order? Reach out to our customer care team.
          </p>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Card 1: Customer Care */}
            <div className="bg-white rounded-2xl p-6 border border-[#E9DFCF] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#153C27] flex items-center justify-center flex-shrink-0 border border-[#E8DEC9]">
                <Phone size={22} className="text-[#C59A3F]" />
              </div>
              <div className="space-y-1 text-xs">
                <h3 className="font-bold text-sm text-[#153C27]">Customer Care &amp; WhatsApp</h3>
                <a
                  href="tel:+919493782350"
                  className="text-stone-800 font-semibold text-sm hover:text-[#C59A3F] transition block"
                >
                  +91 94937 82350
                </a>
                <p className="text-stone-500">Available Monday – Saturday, 9:00 AM to 6:00 PM IST</p>
                <div className="pt-1">
                  <a
                    href="https://wa.me/919493782350?text=Namaste%20Shatavari%20Ayurvedic!%20I%20would%20like%20to%20inquire%20about%20your%20herbal%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/10 text-[#128C7E] font-semibold text-[11px] hover:bg-[#25D366]/20 transition"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="bg-white rounded-2xl p-6 border border-[#E9DFCF] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#153C27] flex items-center justify-center flex-shrink-0 border border-[#E8DEC9]">
                <Mail size={22} className="text-[#C59A3F]" />
              </div>
              <div className="space-y-1 text-xs">
                <h3 className="font-bold text-sm text-[#153C27]">Email Consultations</h3>
                <a
                  href="mailto:shatavariayurvedic@gmail.com"
                  className="text-stone-800 font-semibold text-sm hover:text-[#C59A3F] transition block"
                >
                  shatavariayurvedic@gmail.com
                </a>
                <p className="text-stone-500">Response within 24 business hours</p>
              </div>
            </div>

            {/* Card 3: Apothecary Headquarters */}
            <div className="bg-white rounded-2xl p-6 border border-[#E9DFCF] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#153C27] flex items-center justify-center flex-shrink-0 border border-[#E8DEC9]">
                <MapPin size={22} className="text-[#C59A3F]" />
              </div>
              <div className="space-y-1 text-xs">
                <h3 className="font-bold text-sm text-[#153C27]">Headquarters &amp; Registered Office</h3>
                <p className="text-stone-800 leading-relaxed font-medium">
                  23-7-169, 3rd Floor, Santhi Nagar, MR Palli Circle, Tirupati, Andhra Pradesh – 517502, India
                </p>
                <p className="text-stone-500 pt-0.5">Visits by appointment only for bulk &amp; clinical consultations</p>
              </div>
            </div>

            {/* Quick Doctor Consultation Prompt */}
            <div className="bg-[#153C27] text-white rounded-2xl p-6 space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold text-[#ECC468]">
                <Sparkles size={15} />
                <span>Ayurvedic Vaidya Helpline</span>
              </div>
              <p className="text-xs text-[#D1DFD4] leading-relaxed">
                Need personalized advice on whether to take Shatavari Kalpa, Triphala, or Ashwagandha for your current Prakriti? Select "Doctor Consultation" in the form.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E9DFCF] shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EBF3ED] text-[#153C27] flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} className="text-[#1E5437]" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#153C27]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message Received with Gratitude!
                </h3>
                <p className="text-xs sm:text-sm text-[#5D6F60] max-w-md mx-auto leading-relaxed">
                  Namaste, {formData.name}. Our Ayurvedic customer care desk has received your note. One of our specialists will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      inquiryType: 'Product Guidance',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#153C27] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3
                  className="text-xl font-bold text-[#153C27] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Send Us a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#153C27]">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Ananya Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9CBB5] text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#153C27]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#153C27]">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., ananya@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9CBB5] text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#153C27]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#153C27]">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9CBB5] text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#153C27]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#153C27]">Inquiry Subject</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9CBB5] text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#153C27] cursor-pointer"
                    >
                      <option value="Product Guidance">Product Guidance &amp; Herbs</option>
                      <option value="Order Status">Order Tracking &amp; Delivery</option>
                      <option value="Doctor Consultation">Ayurvedic Vaidya Consultation</option>
                      <option value="Wholesale">Bulk / Practitioner Inquiries</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#153C27]">Your Message / Inquiry *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can our herbal team assist you?"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D9CBB5] text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#153C27]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#153C27] hover:bg-[#1E5437] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#153C27]/20 flex items-center justify-center gap-2 transition active:scale-95"
                >
                  <Send size={15} />
                  <span>Send Message to Apothecary Desk</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E9DFCF] shadow-sm max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-1 mb-8">
            <span className="text-xs font-bold text-[#C59A3F] uppercase tracking-wider flex items-center justify-center gap-1">
              <HelpCircle size={14} />
              <span>Frequently Asked Questions</span>
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#153C27]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Common Inquiries
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#EFE8DC] space-y-2">
                <h4 className="text-sm font-bold text-[#153C27] flex items-center gap-2">
                  <span className="text-[#C59A3F]">Q:</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#556957] leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
