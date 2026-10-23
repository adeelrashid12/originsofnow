'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] shadow-2xl flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full"
        >
          <img
            src={images[currentIndex]}
            alt="Product Tip"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#073348] pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-[#073348] mb-6 tracking-tight">What Surrounds You Matters</h2>
          <p className="text-2xl md:text-3xl text-[#3D6C6A] font-serif italic leading-relaxed">A closer look at the environment you live in every day.</p>
        </motion.div>
      </section>

      {/* Kangen Water Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-sm font-bold tracking-widest text-[#578595] uppercase">Structured Hydration</div>
              <h2 className="text-5xl font-black tracking-tight text-[#073348]">
                Kangen Water <br /><span className="text-[#073348]">Redefined.</span>
              </h2>
              <p className="text-lg text-[#073348]/70 leading-relaxed font-medium">
                Before technology, there was nature. Our ancestors drank from rivers and springs, stored water in mineral-rich clay vessels, and lived in constant relationship with the natural elements. Kangen Water® represents a bridge between the wisdom of nature and the technology of today.
              </p>
              <a href="/kangen-water" className="inline-block bg-[#073348] text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#0a4d6d] transition-all duration-300">
                See the tech &rarr;
              </a>
            </div>
            <div className="h-full">
              <ImageSlider images={["/assets/kangen 1 tip web.jpeg"]} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Anespa Section */}
      <section className="py-24 bg-[#578595] text-[#EAE5DB] relative">
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 h-full">
              <ImageSlider images={["/assets/spa1.jpeg"]} />
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <div className="text-sm font-bold tracking-widest text-[#C9B79E] uppercase">Mineral Hot Spring</div>
              <h2 className="text-5xl font-black tracking-tight text-white">Anespa <br /><span className="text-[#C9B79E]">Home Spa System.</span></h2>
              <p className="text-lg text-[#F4F1EA]/90 leading-relaxed font-medium">
                Nature has long provided healing through thermal mineral springs. The Anespa DX brings that very experience into your sanctuary, purifying your water and infusing it with tufa and mic stone minerals.
              </p>
              <a href="/anespa" className="inline-block bg-white text-[#073348] px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-gray-200 transition-all duration-300">
                See the tech &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* emGuarde Section */}
      <section className="py-24 bg-[#3E6C6A] text-[#EAE5DB] relative">
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-sm font-bold tracking-widest text-[#C9B79E] uppercase">Environmental Harmonization</div>
              <h2 className="text-5xl font-black tracking-tight text-white">emGuarde <br /><span className="text-[#C9B79E]">Space Cleanser.</span></h2>
              <p className="text-lg text-[#F4F1EA]/90 leading-relaxed font-medium">
                In an era dominated by invisible frequencies, your surroundings need active protection. emGuarde™ is a next-generation environmental harmoniser that suppresses harmful EMF frequencies (3Mhz-1000Mhz) and restores energetic coherence in your surroundings.
              </p>
              <a href="/emguarde" className="inline-block bg-white text-[#073348] px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#3D6C6A] transition-all duration-300">
                See the tech &rarr;
              </a>
            </div>
            <div className="h-full">
              <ImageSlider images={["/assets/em1.jpeg", "/assets/em2.jpeg", "/assets/em3.jpeg"]} />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
