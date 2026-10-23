'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#073348] pt-32 pb-24 font-sans">
      
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <motion.div {...fadeUp}>
          <h1 className="text-5xl md:text-7xl font-black text-[#073348] mb-8 tracking-tight">
            Connect
          </h1>
          <p className="text-xl md:text-2xl text-[#3A4A45] font-medium leading-relaxed max-w-3xl mx-auto">
            Are you looking for a better way to approach your everyday environment? Or perhaps you simply want to understand something before bringing it into your home?
          </p>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Form Section (Left - 3 Cols) */}
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="md:col-span-3 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-[#073348] mb-8">Send us a message</h2>
            
            {submitted ? (
              <div className="bg-[#3D6C6A]/10 border border-[#3D6C6A]/20 rounded-2xl p-8 text-center space-y-4">
                <div className="w-14 h-14 bg-[#3D6C6A] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#073348]">Thank you for reaching out</h3>
                <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                  Your message has been received. Our team will connect with you shortly. You can also write to us directly at{" "}
                  <a href="mailto:connect@originofnow.com" className="text-[#3D6C6A] font-bold underline hover:text-[#073348]">
                    connect@originofnow.com
                  </a>.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }); }}
                  className="text-sm font-bold text-[#073348] hover:text-[#3D6C6A] transition-colors pt-4 inline-block underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#3D6C6A] uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#F9F7F3] border border-[#EAE5DB] rounded-xl px-5 py-4 focus:outline-none focus:border-[#3D6C6A] focus:ring-1 focus:ring-[#3D6C6A] transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#3D6C6A] uppercase tracking-wider mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#F9F7F3] border border-[#EAE5DB] rounded-xl px-5 py-4 focus:outline-none focus:border-[#3D6C6A] focus:ring-1 focus:ring-[#3D6C6A] transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-[#3D6C6A] uppercase tracking-wider mb-2">WhatsApp / Phone</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#F9F7F3] border border-[#EAE5DB] rounded-xl px-5 py-4 focus:outline-none focus:border-[#3D6C6A] focus:ring-1 focus:ring-[#3D6C6A] transition-all"
                      placeholder="Your contact number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#3D6C6A] uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#F9F7F3] border border-[#EAE5DB] rounded-xl px-5 py-4 focus:outline-none focus:border-[#3D6C6A] focus:ring-1 focus:ring-[#3D6C6A] transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <button 
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-[#073348] text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:bg-[#0a4d6d] hover:scale-105 transition-all duration-300"
                  >
                    CONNECT &rarr;
                  </button>

                  <a 
                    href="mailto:connect@originofnow.com" 
                    className="text-sm font-bold text-[#3D6C6A] hover:text-[#073348] transition-colors"
                  >
                    Or email: connect@originofnow.com
                  </a>
                </div>
              </form>
            )}
          </motion.div>

          {/* Direct Contact Options (Right - 2 Cols) */}
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="md:col-span-2 space-y-6">
            
            {/* Email Card - Direct connect@originofnow.com */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#578595]/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center space-x-3 mb-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#073348]/5 flex items-center justify-center text-[#073348]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#073348]">Email us directly</h3>
              </div>
              <p className="text-gray-500 font-medium mb-6 text-sm relative z-10 leading-relaxed">
                Prefer to write? Drop us an inquiry anytime and we will respond promptly.
              </p>
              <a 
                href="mailto:connect@originofnow.com" 
                className="inline-flex items-center text-[#3D6C6A] font-bold text-base hover:text-[#073348] transition-colors relative z-10 break-all"
              >
                connect@originofnow.com &rarr;
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#073348] text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3D6C6A] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Reach us directly</h3>
              <p className="text-gray-300 font-medium mb-6 text-sm relative z-10 leading-relaxed">
                For a quick question or a more personal conversation.
              </p>
              <a href="#" className="inline-flex items-center text-white font-bold tracking-widest text-xs uppercase hover:text-[#3E6C6A] transition-colors relative z-10">
                WhatsApp us &rarr;
              </a>
            </div>

            {/* Call Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4F1EA] rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-xl font-bold mb-3 text-[#073348] relative z-10">Sometimes it's easier to simply talk.</h3>
              <p className="text-gray-500 font-medium mb-6 text-sm relative z-10 leading-relaxed">
                Give us a call and we'll gladly answer your questions.
              </p>
              <a href="#" className="inline-flex items-center text-[#3D6C6A] font-bold tracking-widest text-xs uppercase hover:text-[#073348] transition-colors relative z-10">
                Call us &rarr;
              </a>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}
