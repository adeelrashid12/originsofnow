'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EmGuardePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const productImages = [
    { 
      src: "/assets/emguarde/emG new 1.jpeg", 
      title: "Connected Living",
      subtitle: "Stay Present in a Connected World"
    },
    { 
      src: "/assets/emguarde/emG new 2.jpeg", 
      title: "Shared Spaces",
      subtitle: "Peaceful Social Gatherings"
    },
    { 
      src: "/assets/emguarde/emG new3.jpeg", 
      title: "On The Move",
      subtitle: "Drive with Peace of Mind"
    },
    { 
      src: "/assets/emguarde/emG new 4.jpeg", 
      title: "Daily Protection",
      subtitle: "Relax. You're Protected"
    }
  ];

  return (
    <main className="min-h-screen bg-[#3E6C6A] text-[#F4F1EA] font-sans selection:bg-white/20 pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Navigation Link */}
        <Link href="/explore" className="inline-flex items-center text-[#C9B79E] font-bold mb-10 hover:text-white transition-colors">
          &larr; Back to Explore
        </Link>
        
        {/* Header - Updated strictly to 13 Oct review */}
        <div className="mb-14">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
            emGuarde
          </h1>
          <div className="space-y-4 text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed font-medium">
            <p>
              Our homes and workplaces are surrounded by electromagnetic fields (EMFs) from everyday technology.
            </p>
            <p>
              emGuarde is a compact, silent device designed to address electromagnetic noise through proprietary harmonic technology.
            </p>
            <p>
              Designed for continuous use, emGuarde works quietly in the background, becoming part of a more intentional approach to the spaces we inhabit.
            </p>
            <p className="font-bold text-white text-xl md:text-2xl pt-2 text-[#C9B79E]">
              A small addition to your surroundings. A more considered relationship with technology.
            </p>
          </div>
        </div>

        {/* 4 Product Images Gallery (Heading 'Product gallery' removed as requested) */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {productImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage(img.src)}
                className="group relative bg-[#073348]/40 rounded-2xl md:rounded-3xl overflow-hidden aspect-video border border-white/15 cursor-pointer hover:border-white/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <img 
                  src={img.src} 
                  alt={img.subtitle}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#C9B79E] font-bold block mb-1">{img.title}</span>
                    <span className="text-sm md:text-base font-bold text-white tracking-wide drop-shadow">{img.subtitle}</span>
                  </div>
                  <span className="text-xs text-[#C9B79E] font-semibold bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm whitespace-nowrap self-end">
                    Enlarge &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal Lightbox */}
        {selectedImage && (
          <div 
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-pointer animate-in fade-in duration-200"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#073348] border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-3 md:p-4"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/60 flex items-center justify-center">
                <img 
                  src={selectedImage} 
                  alt="Expanded product" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 bg-black/60 hover:bg-black/90 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl border border-white/20 transition-colors"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* 4 Total Videos Section (Heading 'Demonstrations & video...' removed as requested) */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Video 1: Main Video (Existing) */}
            <div className="bg-white/10 border border-white/15 rounded-3xl p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between shadow-xl">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-[#C9B79E] text-xs font-bold uppercase tracking-wider mb-4">
                  Overview
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Main Technology Video</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Discover how the emGuarde suppression technology operates to stabilize electromagnetic frequencies.
                </p>
              </div>
              <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative border border-white/10">
                <video 
                  src="/assets/videos/emGuard main.mp4" 
                  controls 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Video 2: emGuarde Science (Sent) */}
            <div className="bg-white/10 border border-white/15 rounded-3xl p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between shadow-xl">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-[#C9B79E] text-xs font-bold uppercase tracking-wider mb-4">
                  Scientific Proof
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">emGuarde Science</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Detailed technical breakdown explaining the physics and wave suppression capabilities.
                </p>
              </div>
              <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative border border-white/10">
                <video 
                  src="/assets/videos/emGaurd sciece.mp4" 
                  controls 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Video 3: Blood Work (Will share) */}
            <div className="bg-white/10 border border-white/15 rounded-3xl p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between shadow-xl">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-[#C9B79E] text-xs font-bold uppercase tracking-wider mb-4">
                  Clinical Observation
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Live Blood Analysis</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Microscopic observation showing cellular vitality and circulation changes in the presence of harmonized frequencies.
                </p>
              </div>
              <div className="w-full aspect-video bg-black/40 rounded-2xl flex flex-col items-center justify-center border border-dashed border-white/20 p-6 text-center">
                <span className="text-4xl mb-3">🔬</span>
                <h4 className="text-lg font-bold text-white">Live Blood Work Video</h4>
                <p className="text-xs text-[#C9B79E] mt-1 font-medium">(Video footage coming soon)</p>
              </div>
            </div>

            {/* Video 4: Car Demo (Will share) */}
            <div className="bg-white/10 border border-white/15 rounded-3xl p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between shadow-xl">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-[#C9B79E] text-xs font-bold uppercase tracking-wider mb-4">
                  Real-World Demonstration
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Automotive & Car Demo</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Testing EMF exposure and electromagnetic noise reduction inside vehicles and on the go.
                </p>
              </div>
              <div className="w-full aspect-video bg-black/40 rounded-2xl flex flex-col items-center justify-center border border-dashed border-white/20 p-6 text-center">
                <span className="text-4xl mb-3">🚗</span>
                <h4 className="text-lg font-bold text-white">Car Demonstration Video</h4>
                <p className="text-xs text-[#C9B79E] mt-1 font-medium">(Video footage coming soon)</p>
              </div>
            </div>

          </div>
        </div>

        {/* Research & Standards Section */}
        <div className="space-y-6 mb-20">
          {/* UTAR University Clinical Research Card */}
          <div className="bg-white/10 border border-white/20 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-[#C9B79E]/50 transition-all duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9B79E]/20 text-[#C9B79E] text-xs font-bold uppercase tracking-wider mb-4 border border-[#C9B79E]/30">
                  <span>Independent University Trials</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                  Universiti Tunku Abdul Rahman (UTAR) Research & Standards
                </h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed font-normal">
                  Review independent university-led testing, physiological microcirculation observations, and international regulatory compliance (FCC, CE, RoHS) documenting the efficacy of emGuarde technology.
                </p>
              </div>

              <a 
                href="https://emguarde.com/research-standards/#utar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-[#C9B79E] text-[#073348] px-8 py-4 rounded-full font-bold text-base shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 whitespace-nowrap self-start lg:self-auto cursor-pointer"
              >
                <span>View UTAR Research Standards</span>
                <span className="text-lg">↗</span>
              </a>
            </div>
          </div>

        {/* Link to Science Page - Neutral Color, Minimized text, No title, 'The Science ->' button */}
        <div className="bg-[#F4F1EA] rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-[#EAE5DB] text-[#073348]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-base md:text-lg text-[#3A4A45] leading-relaxed max-w-2xl font-medium">
              Explore peer-reviewed articles, scientific documentation, and expert research on EMF, biological frequency impact, and harmonization standards.
            </p>
            <Link 
              href="/science" 
              className="inline-flex items-center gap-3 bg-[#073348] text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:bg-[#3E6C6A] hover:scale-105 transition-all duration-300 whitespace-nowrap self-start md:self-auto"
            >
              The Science &rarr;
            </Link>
          </div>
        </div>
        </div>

      </div>
    </main>
  );
}
