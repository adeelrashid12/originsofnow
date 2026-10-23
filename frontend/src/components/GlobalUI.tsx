'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalUI() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeQuiz = () => setIsQuizOpen(false);
  const closeConcierge = () => setIsConciergeOpen(false);

  const [quizStep, setQuizStep] = useState(1);
  const [answers, setAnswers] = useState({ 
    waterDrink: '', waterSource: '', waterAmount: '', waterPeople: '', 
    devices: '', router: '', wfh: '', 
    homeWho: [] as string[], priorities: [] as string[],
    name: '', email: '' 
  });

  
  
  return (
    <>

      {/* Navigation - Floating Apple-style Pill with Mobile Menu Support */}
      <nav className={`absolute top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-40 bg-white/95 backdrop-blur-3xl border border-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-300 ${
        isMobileMenuOpen ? "rounded-[2rem]" : "rounded-full"
      }`}>
        <div className="flex items-center justify-between px-6 md:px-8 py-3">
          <Link href="/" className="flex items-center">
            <img src="/assets/logo_dark.png" alt="Origins of Now" className="h-7 md:h-10 w-auto object-contain drop-shadow-sm" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-10 text-sm font-bold tracking-wide text-gray-800 uppercase">
            <Link href="/" className="hover:text-[#3D6C6A] transition-colors">Home</Link>
            <Link href="/origins" className="hover:text-[#3D6C6A] transition-colors">Origins</Link>
            <Link href="/explore" className="hover:text-[#3D6C6A] transition-colors">Explore</Link>
            <Link href="/science" className="hover:text-[#3D6C6A] transition-colors">Science</Link>
            <Link href="/connect" className="hover:text-[#3D6C6A] transition-colors">Connect</Link>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={() => setIsQuizOpen(true)}
              className="bg-[#826443] text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-[#6b5d50] hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Check-In
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#073348]/5 text-[#073348] hover:bg-[#073348]/10 transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <span className="text-2xl font-light leading-none">&times;</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu for Apple/Android Devices */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden px-6 pb-6 pt-2 border-t border-gray-100 flex flex-col space-y-3"
            >
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-[#073348] hover:text-[#3D6C6A] py-1 border-b border-gray-50">Home</Link>
              <Link href="/origins" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-[#073348] hover:text-[#3D6C6A] py-1 border-b border-gray-50">Origins</Link>
              <Link href="/explore" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-[#073348] hover:text-[#3D6C6A] py-1 border-b border-gray-50">Explore</Link>
              <Link href="/science" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-[#073348] hover:text-[#3D6C6A] py-1 border-b border-gray-50">Science</Link>
              <Link href="/connect" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-[#073348] hover:text-[#3D6C6A] py-1 border-b border-gray-50">Connect</Link>
              
              <button 
                onClick={() => { setIsMobileMenuOpen(false); setIsQuizOpen(true); }}
                className="w-full bg-[#826443] text-white py-3 rounded-full text-sm font-bold shadow-md hover:bg-[#6b5d50] transition-colors text-center mt-3"
              >
                Check-In
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
<footer className="bg-[#1C2826] text-white pt-24 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <img src="/assets/logo_light.png" alt="OON Logo" className="h-8 md:h-12 w-auto mb-8 opacity-90 object-contain drop-shadow-md" />
              <p className="text-gray-400 max-w-sm leading-relaxed mb-8 text-lg">
                For those who honor where they come from, carry pride in their roots, and live according to values they refuse to compromise. Live by it.
              </p>
              <div className="flex space-x-4 mb-6">
                <a href="https://www.instagram.com/originsofnow" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#3D6C6A] hover:border-[#3D6C6A] transition-all cursor-pointer group" title="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:scale-110 transition-transform">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="mailto:connect@originofnow.com" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#3D6C6A] hover:border-[#3D6C6A] transition-all cursor-pointer group" title="Email connect@originofnow.com">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:scale-110 transition-transform">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span className="text-[#C9B79E]">Direct contact:</span>
                <a href="mailto:connect@originofnow.com" className="text-white hover:text-[#C9B79E] transition-colors underline underline-offset-4 font-medium">
                  connect@originofnow.com
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Explore</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                  <li><a href="/" className="hover:text-[#3D6C6A] transition-colors">Home</a></li>
                  <li><a href="/origins" className="hover:text-[#3D6C6A] transition-colors">Origins</a></li>
                  <li><a href="/explore" className="hover:text-[#3D6C6A] transition-colors">Explore</a></li>
                  <li><a href="/science" className="hover:text-[#3D6C6A] transition-colors">Science</a></li>
                  <li><a href="/connect" className="hover:text-[#3D6C6A] transition-colors">Connect</a></li>
                </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Join The OON Club</h4>
              <p className="text-gray-400 text-sm mb-4">For exclusive insights on intelligent living.</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 w-full text-white focus:outline-none focus:border-[#3D6C6A] placeholder-gray-500" />
                <button className="bg-[#3D6C6A] text-white px-6 py-3 rounded-r-xl font-bold hover:bg-[#5A7A68] transition-colors">&rarr;</button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
            <p>&copy; {new Date().getFullYear()} Origins of Now. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Quiz Modal */}
      {isQuizOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-[#1C2826]/80 backdrop-blur-md" onClick={closeQuiz}></div>
          
          <div className="relative w-full max-w-5xl bg-[#F9F7F3] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] animate-in fade-in zoom-in-95 duration-300">
            
            {/* Left Image Side */}
            <div className="hidden md:flex md:w-2/5 relative bg-[#1C2826] flex-col justify-between p-10 text-white">
              <div className="absolute inset-0">
                <Image src="/assets/hero_water.jpg" alt="Wellness" fill className="object-cover opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2826] to-transparent"></div>
              </div>
              <div className="relative z-10 pr-6">
                <h3 className="text-3xl font-serif text-[#3D6C6A] mb-6 tracking-tight">THE OON CHECK-IN</h3>
                <div className="space-y-4 text-white/90 font-sans text-sm leading-relaxed">
                  <p>What surrounds you matters. And you're here to take a closer look.</p>
                  <p>Your water. Your daily consumption. Your digital environment. The things that quietly shape your everyday.</p>
                  <p>This is your moment to check in with your reality... to look at what surrounds you, recognise what's already working for you, and discover what might be worth a second look.</p>
                  <p>Because a more intentional way of living begins with seeing things as they are.</p>
                </div>
              </div>
              
              <div className="relative z-10 space-y-8">
                {quizStep < 6 && (
                  <>
                    <p className="font-bold tracking-widest text-[#3D6C6A] uppercase text-sm">Progress</p>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(step => (
                        <div key={step} className={`h-1.5 w-10 rounded-full transition-colors ${quizStep >= step ? 'bg-[#3D6C6A]' : 'bg-white/20'}`}></div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right Content Side */}
            <div className="w-full md:w-3/5 p-8 md:p-12 relative flex flex-col overflow-y-auto max-h-[90vh]">
              <button onClick={closeQuiz} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 z-10">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              
              <div className="flex-1 flex flex-col justify-center max-w-lg w-full mx-auto">
                {quizStep === 1 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4">
                    <span className="text-[#3D6C6A] font-bold tracking-widest uppercase text-sm">01 — Your Water</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1C2826]">What does your household mainly drink?</h2>
                    <div className="grid grid-cols-1 gap-3">
                      {['Bottled water', 'Filtered water', 'Tap water', 'Mineral water', 'A combination'].map(opt => (
                        <button key={opt} onClick={() => { setAnswers({...answers, waterDrink: opt}); setQuizStep(2); }} className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium shadow-sm ${answers.waterDrink === opt ? 'border-[#3D6C6A] bg-[#3D6C6A]/5 text-[#1C2826]' : 'border-[#EAE5DB] hover:border-[#3D6C6A]/50 hover:bg-white text-[#3A4A45]'}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 2 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4">
                    <button onClick={() => setQuizStep(1)} className="text-sm text-gray-400 hover:text-[#1C2826] font-medium flex items-center gap-1 mb-2">← Back</button>
                    <span className="text-[#3D6C6A] font-bold tracking-widest uppercase text-sm">01 — Your Water</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1C2826]">How do you mainly get your drinking water?</h2>
                    <div className="grid grid-cols-1 gap-3">
                      {['Individual bottles', 'Large bottles (1-1.5 L)', 'Dispenser gallons', 'Filtered / tap', 'A combination'].map(opt => (
                        <button key={opt} onClick={() => { setAnswers({...answers, waterSource: opt}); setQuizStep(3); }} className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium shadow-sm ${answers.waterSource === opt ? 'border-[#3D6C6A] bg-[#3D6C6A]/5 text-[#1C2826]' : 'border-[#EAE5DB] hover:border-[#3D6C6A]/50 hover:bg-white text-[#3A4A45]'}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 3 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4">
                    <button onClick={() => setQuizStep(2)} className="text-sm text-gray-400 hover:text-[#1C2826] font-medium flex items-center gap-1 mb-2">← Back</button>
                    <span className="text-[#3D6C6A] font-bold tracking-widest uppercase text-sm">02 — Your Digital Environment</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1C2826]">How connected is your home?</h2>
                    <p className="text-[#3A4A45]">Approximately how many Wi-Fi connected devices are regularly operating?</p>
                    <div className="grid grid-cols-2 gap-3">
                      {['1-5', '6-15', '16-30', '30+'].map(opt => (
                        <button key={opt} onClick={() => { setAnswers({...answers, devices: opt}); setQuizStep(4); }} className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium shadow-sm ${answers.devices === opt ? 'border-[#3D6C6A] bg-[#3D6C6A]/5 text-[#1C2826]' : 'border-[#EAE5DB] hover:border-[#3D6C6A]/50 hover:bg-white text-[#3A4A45]'}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 4 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4">
                    <button onClick={() => setQuizStep(3)} className="text-sm text-gray-400 hover:text-[#1C2826] font-medium flex items-center gap-1 mb-2">← Back</button>
                    <span className="text-[#3D6C6A] font-bold tracking-widest uppercase text-sm">03 — Your Home & Family</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1C2826]">Which areas matter most to you right now?</h2>
                    <div className="grid grid-cols-1 gap-3">
                      {['Better hydration', 'Reducing bottled-water use', 'Reducing unnecessary plastic', 'Mindful technology use', 'Overall wellness & lifestyle'].map(opt => (
                        <label key={opt} className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all font-medium shadow-sm ${answers.priorities.includes(opt) ? 'border-[#3D6C6A] bg-[#3D6C6A]/5 text-[#1C2826]' : 'border-[#EAE5DB] hover:border-[#3D6C6A]/50 hover:bg-white text-[#3A4A45]'}`}>
                          <input type="checkbox" checked={answers.priorities.includes(opt)} onChange={(e) => {
                            const newPriorities = e.target.checked 
                              ? [...answers.priorities, opt] 
                              : answers.priorities.filter(p => p !== opt);
                            setAnswers({...answers, priorities: newPriorities});
                          }} className="w-5 h-5 accent-[#3D6C6A]" />
                          {opt}
                        </label>
                      ))}
                    </div>
                    <button onClick={() => setQuizStep(5)} disabled={answers.priorities.length === 0} className="w-full mt-4 bg-[#1C2826] text-white font-bold py-4 rounded-xl hover:bg-[#3D6C6A] transition-colors shadow-lg disabled:opacity-50">
                      Continue →</button>
                  </div>
                )}

                {quizStep === 5 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4">
                    <button onClick={() => setQuizStep(4)} className="text-sm text-gray-400 hover:text-[#1C2826] font-medium flex items-center gap-1 mb-2">← Back</button>
                    <span className="text-[#3D6C6A] font-bold tracking-widest uppercase text-sm">04 — Final Step</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1C2826]">Where should we send your profile?</h2>
                    <p className="text-[#3A4A45]">Enter your details below to reveal your personalized Home Environment Profile.</p>
                    <form onSubmit={(e) => { e.preventDefault(); setQuizStep(6); }} className="space-y-4 mt-6">
                      <input required type="text" value={answers.name} onChange={e => setAnswers({...answers, name: e.target.value})} className="w-full p-4 rounded-xl border-2 border-[#EAE5DB] focus:border-[#3D6C6A] focus:outline-none bg-white font-medium text-[#1C2826]" placeholder="Your Name" />
                      <input required type="email" value={answers.email} onChange={e => setAnswers({...answers, email: e.target.value})} className="w-full p-4 rounded-xl border-2 border-[#EAE5DB] focus:border-[#3D6C6A] focus:outline-none bg-white font-medium text-[#1C2826]" placeholder="Your Email Address" />
                      <button type="submit" className="w-full bg-[#1C2826] text-white font-bold py-4 rounded-xl hover:bg-[#3D6C6A] transition-colors shadow-lg mt-4">
                        Reveal My Profile &rarr;
                      </button>
                    </form>
                  </div>
                )}

                {quizStep === 6 && (
                  <div className="space-y-8 animate-in slide-in-from-bottom-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-black text-[#1C2826]">Your Home Environment Profile is ready.</h2>
                      <p className="text-[#3A4A45] mt-2">You have areas worth looking at more closely.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="p-6 bg-white rounded-2xl border border-[#EAE5DB] shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">💧</span>
                            <h4 className="font-bold text-[#1C2826] uppercase tracking-widest text-sm">WATER — HIGH IMPACT AREA</h4>
                          </div>
                        <p className="text-[#3A4A45]">You consume mainly {answers.waterDrink.toLowerCase()} via {answers.waterSource.toLowerCase()}. Did you know the average household consumes over 1,500 single-use bottles per year?</p>
                      </div>

                      <div className="p-6 bg-white rounded-2xl border border-[#EAE5DB] shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">📱</span>
                            <h4 className="font-bold text-[#1C2826] uppercase tracking-widest text-sm">DIGITAL — AWARENESS AREA</h4>
                          </div>
                        <p className="text-[#3A4A45]">Your home has {answers.devices} connected devices running regularly, creating a consistent digital environment.</p>
                      </div>

                      <div className="p-6 bg-[#3D6C6A]/10 rounded-2xl border border-[#3D6C6A]/20">
                        <h4 className="font-bold text-[#1C2826] uppercase tracking-widest text-sm mb-2">Your Priorities</h4>
                        <p className="text-[#3A4A45] font-medium">{answers.priorities.join(', ')}</p>
                      </div>
                    </div>
                    
                    <p className="text-center font-serif text-[#3D6C6A] text-xl italic pt-4">"Interesting what we discover when we look at everyday things differently."</p>

                    <button onClick={closeQuiz} className="w-full bg-[#1C2826] text-white font-bold py-4 rounded-xl hover:bg-[#3D6C6A] transition-colors shadow-lg">
                      Close Profile
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Concierge Widget */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isConciergeOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mb-6 w-[340px] bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-[2rem] overflow-hidden"
            >
              <div className="bg-[#1C2826] p-6 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3D6C6A] blur-[50px] opacity-20 rounded-full"></div>
                <h4 className="text-xl font-black mb-1 relative z-10">OON Concierge</h4>
                <p className="text-sm text-[#3D6C6A] font-medium relative z-10">Elevate your living.</p>
              </div>
              <div className="p-6 space-y-5">
                <p className="text-gray-600 text-sm leading-relaxed text-center font-medium">
                  Have questions about intelligent hydration or space harmonization? Connect directly with our specialists.
                </p>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-3.5 px-4 rounded-xl font-bold hover:bg-[#20b858] transition-all shadow-md hover:-translate-y-0.5 text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Chat on WhatsApp
                </a>
                <a 
                  href="mailto:connect@originofnow.com" 
                  className="w-full flex items-center justify-center gap-3 bg-[#073348] text-white py-3.5 px-4 rounded-xl font-bold hover:bg-[#0a4d6d] transition-all shadow-md hover:-translate-y-0.5 text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  Email Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsConciergeOpen(!isConciergeOpen)}
          className="w-16 h-16 bg-gradient-to-br from-[#1C2826] to-[#273832] rounded-full flex items-center justify-center text-[#3D6C6A] shadow-[0_10px_40px_rgba(212,175,55,0.4)] border border-[#3D6C6A]/30 hover:scale-110 transition-transform relative z-10 group"
        >
          {isConciergeOpen ? (
             <span className="text-3xl font-light text-white leading-none">&times;</span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          )}
        </button>
      </div>
    </>
  );
}
