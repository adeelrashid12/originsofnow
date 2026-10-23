'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

type Research = {
  id: number;
  title: string;
  conclusion: string;
  url: string;
};

const researchData: Research[] = [
  {
    id: 1,
    title: "Molecular hydrogen regulates gene expression",
    conclusion: "Conclusion: Molecular hydrogen acts as a therapeutic antioxidant by modulating gene expression. It helps reduce oxidative stress and inflammation at the cellular level, offering significant protective effects against various diseases.",
    url: "https://static1.squarespace.com/static/6329f7b39ef05d437effb1d3/t/633c7d1ce7ccf2789986c6ef/1664908573747/Molecular+Hydrogen+Gene+Expression.pdf"
  },
  {
    id: 2,
    title: "Alkaline Water Supports Hydration & Performance",
    conclusion: "Conclusion: Drinking alkaline water improves acid-base balance and hydration status in athletes. This leads to enhanced anaerobic exercise performance and faster recovery times by buffering exercise-induced metabolic acidosis.",
    url: "https://static1.squarespace.com/static/6329f7b39ef05d437effb1d3/t/632df229fa4e5f6feeba6381/1663955497275/Alkaline+water+improves+exercise-induced+metabolic+acidosis+and+enhances+anaerobic+exercise+performance+in+combat+sport+athletes.pdf"
  },
  {
    id: 3,
    title: "Electrolyzed-reduced water may be a very powerful antioxidant",
    conclusion: "Conclusion: Electrolyzed Reduced Water (ERW) scavenges active oxygen species and protects DNA from oxidative damage. The dissolved hydrogen gas acts as a potent antioxidant, neutralizing free radicals and potentially preventing cellular aging.",
    url: "https://static1.squarespace.com/static/6329f7b39ef05d437effb1d3/t/633c7e1d6df7371d1c431eca/1664908829298/electrolyzed_reduced_water_reduces_oxidative_damage.pdf"
  },
  {
    id: 4,
    title: "HRW improved anaerobic performance of trained cyclists",
    conclusion: "Conclusion: A 7-day intake of hydrogen-rich water (HRW) helps maintain peak power output during repeated intense exercises. It effectively delays muscle fatigue and improves the anaerobic performance of trained athletes.",
    url: "https://static1.squarespace.com/static/6329f7b39ef05d437effb1d3/t/632e2608753965055f87c260/1663968776958/Effects+of+7-day+intake+of+hydrogen-rich+water+on+physical+performance+of+trained+and+untrained+subjects.pdf"
  }
];

export default function SciencePage() {
  const [activeResearch, setActiveResearch] = useState<Research | null>(null);

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#073348] pt-32 pb-24 font-sans relative overflow-hidden">
      
      {/* Atmospheric Brand Visual Backdrop */}
      <div className="absolute top-0 left-0 right-0 h-[700px] overflow-hidden pointer-events-none z-0 select-none">
        <img 
          src="/assets/science_bg.png" 
          alt="Origins of Now Science Atmosphere" 
          className="w-full h-full object-cover opacity-30 filter blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F1EA]/30 via-[#F4F1EA]/80 to-[#F4F1EA]"></div>
      </div>

      {/* Header Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 mb-20 text-center">
        <motion.div {...fadeUp}>
          <h1 className="text-5xl md:text-7xl font-black text-[#073348] mb-8 tracking-tight">
            The Science
          </h1>
          <p className="text-xl md:text-2xl text-[#3A4A45] font-medium leading-relaxed max-w-3xl mx-auto">
            Our role is not to make the decision for you, but to give you the information you need to make it with greater clarity, confidence, and peace of mind.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div {...fadeUp} className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 mb-16">
          <div className="mb-12 border-b border-gray-200 pb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#073348] mb-6">
              Electrolyzed Reduced Water (ERW) <br className="hidden md:block"/> 
              <span className="text-gray-400">or Hydrogen-rich water</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Extensive research over the past decades has shown that ERW possesses unique properties due to the presence of dissolved molecular hydrogen (H2). It is actively studied for its antioxidant effects, athletic performance benefits, and cellular hydration capabilities.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#073348] mb-8">Featured Research Papers</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {researchData.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveResearch(item)}
                  className="group bg-[#F9F7F3] rounded-2xl p-6 border border-[#EAE5DB] hover:border-[#3D6C6A]/30 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
                >
                  <h4 className="font-bold text-lg text-[#073348] mb-6 group-hover:text-[#3D6C6A] transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center text-sm font-bold text-[#3D6C6A] uppercase tracking-wider">
                    Read Conclusion &rarr;
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Further Reading & Perspectives (Books Section) */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 mb-20">
        <motion.div {...fadeUp} className="bg-white rounded-[3rem] p-8 md:p-14 shadow-xl border border-gray-100">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-[#826443] font-bold text-xs uppercase tracking-widest block mb-2">Curated Literature</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#073348] tracking-tight">Further Reading & Perspectives</h3>
            <p className="text-gray-500 text-base mt-3 font-medium">
              Explore essential literature and expert clinical voices on environmental wellness, intelligent hydration, and EMF awareness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Book 1 */}
            <div className="bg-[#F9F7F3] rounded-3xl p-6 md:p-8 border border-[#EAE5DB] hover:border-[#3D6C6A]/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <a 
                  href="/assets/books/kangen_water_perspectives.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-36 h-52 flex-shrink-0 relative overflow-hidden rounded-xl shadow-lg group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300 block bg-[#073348]"
                  title="Click to read PDF"
                >
                  <img 
                    src="/assets/books/doctors_scientists_kangen_water.png" 
                    alt="Doctors, Scientists and Nutritionists on Kangen Water" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#073348]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#073348] text-xs font-bold px-3 py-1.5 rounded-full shadow-md">Open PDF ↗</span>
                  </div>
                </a>
                
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#3D6C6A] block mb-1">Book 01 &middot; Water Properties</span>
                  <h4 className="text-xl md:text-2xl font-black text-[#073348] leading-snug mb-3">
                    Doctors, Scientists and Nutritionists on Kangen Water
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    A collection of perspectives from doctors, and a selection of books offering further insight into water and its properties.
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    This book brings together voices, references, and reading material that may open the door to new questions and perspectives.
                  </p>
                </div>
              </div>

              <a 
                href="/assets/books/kangen_water_perspectives.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#073348] text-white py-3.5 px-6 rounded-full text-sm font-bold shadow-md hover:bg-[#0a4d6d] hover:gap-3 transition-all"
              >
                <span>Read Full PDF Document</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Book 2 */}
            <div className="bg-[#F9F7F3] rounded-3xl p-6 md:p-8 border border-[#EAE5DB] hover:border-[#3D6C6A]/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="w-36 h-52 flex-shrink-0 relative overflow-hidden rounded-xl shadow-lg group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300 bg-white">
                  <img 
                    src="/assets/books/stop_cooking_kids_brain.png" 
                    alt="Stop Cooking Your Kid's Brain - Dr. Pinky De Leon" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#B45309] block mb-1">Book 02 &middot; EMF Awareness</span>
                  <h4 className="text-xl md:text-2xl font-black text-[#073348] leading-snug mb-1">
                    Stop Cooking Your Kid’s Brain
                  </h4>
                  <p className="text-xs font-bold text-[#826443] mb-3">By Dr. Pinky De Leon - Intal</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    This book focuses on raising electromagnetic field (EMF) radiation awareness. It explores everyday sources of radiation in modern homes and practical insights for environmental protection.
                  </p>
                </div>
              </div>

              <div className="w-full inline-flex items-center justify-between text-xs font-bold text-[#826443] bg-white border border-[#EAE5DB] py-3.5 px-5 rounded-full">
                <span>Featured Radiation Awareness Literature</span>
                <span>Dr. Pinky De Leon &rarr;</span>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* Modal / Pop-up for Research Conclusion */}
      <AnimatePresence>
        {activeResearch && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setActiveResearch(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveResearch(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-500 font-bold"
              >
                &times;
              </button>
              
              <div className="mb-8">
                <div className="text-xs font-bold text-[#3D6C6A] uppercase tracking-widest mb-3">Research Summary</div>
                <h3 className="text-2xl font-black text-[#073348] leading-snug">{activeResearch.title}</h3>
              </div>
              
              <div className="bg-[#F9F7F3] p-6 rounded-2xl border border-[#EAE5DB] mb-8">
                <p className="text-lg text-[#073348] font-medium leading-relaxed">
                  {activeResearch.conclusion}
                </p>
              </div>

              <a 
                href={activeResearch.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-[#073348] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#0a4d6d] transition-colors"
              >
                Read Full PDF Report
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
