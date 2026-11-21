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
                  </a>{" "}
                  or reach us on WhatsApp at{" "}
                  <a href="https://wa.me/971504585668" target="_blank" rel="noopener noreferrer" className="text-[#3D6C6A] font-bold underline hover:text-[#073348]">
                    +971 50 458 5668
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

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm font-bold text-[#3D6C6A]">
                    <a 
                      href="mailto:connect@originofnow.com" 
                      className="hover:text-[#073348] transition-colors"
                    >
                      Email: connect@originofnow.com
                    </a>
                    <span className="hidden sm:inline text-gray-300">|</span>
                    <a 
                      href="https://wa.me/971504585668" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#073348] transition-colors"
                    >
                      WhatsApp: +971 50 458 5668
                    </a>
                  </div>
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
              <div className="flex items-center space-x-3 mb-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold relative z-10">WhatsApp directly</h3>
              </div>
              <p className="text-gray-300 font-medium mb-6 text-sm relative z-10 leading-relaxed">
                For a quick inquiry or personal conversation regarding our solutions.
              </p>
              <a 
                href="https://wa.me/971504585668" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white font-bold tracking-wider text-sm hover:text-[#25D366] transition-colors relative z-10 gap-2"
              >
                <span>+971 50 458 5668</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Call Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4F1EA] rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center space-x-3 mb-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#073348]/5 flex items-center justify-center text-[#073348]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#073348] relative z-10">Sometimes it's easier to simply talk.</h3>
              </div>
              <p className="text-gray-500 font-medium mb-6 text-sm relative z-10 leading-relaxed">
                Give us a call and we'll gladly answer your questions.
              </p>
              <a 
                href="tel:+971504585668" 
                className="inline-flex items-center text-[#3D6C6A] font-bold tracking-wider text-sm hover:text-[#073348] transition-colors relative z-10 gap-2"
              >
                <span>+971 50 458 5668</span>
                <span>&rarr;</span>
              </a>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}
