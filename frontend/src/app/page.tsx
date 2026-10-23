'use client';
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#073348] selection:bg-[#3D6C6A] selection:text-white font-sans overflow-x-hidden">
      <main className="relative">
        
        {/* Slide 1: Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#F4F1EA]">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/assets/kangen_slider/kangen_1.png" 
              alt="Pure Water Wellness"
              fill
              quality={100}
              priority
              className="object-cover opacity-40"
            />
          </div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 md:mt-0">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#073348] leading-[1.05] tracking-tight drop-shadow-sm">
              Clarity for your <br className="hidden md:block" /> 
              <span className="text-[#3D6C6A]">Everyday Environment.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-[#073348]/80 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
              In a world filled with scientific research and expert opinions, knowing what to trust isn't easy. We give you the information you need to make choices with confidence and peace of mind.
            </p>
          </div>
        </section>

        {/* Slide 2: Main Text (Ground in Origin... Live by it) */}
        <section className="relative min-h-screen flex items-center justify-center bg-white py-32">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div {...fadeUp} className="space-y-12">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#073348] tracking-tight leading-tight">
                Origins of Now. <br/>
                <span className="text-[#3D6C6A]">Rooted in what matters.</span>
              </h2>
              <p className="text-2xl md:text-4xl font-serif text-[#073348]/80 italic max-w-4xl mx-auto leading-relaxed">
                "For those who live by their values, not by trends"
              </p>
              <div className="pt-16">
                <a href="/origins" className="inline-block bg-[#073348] text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#0a4d6d] transition-all duration-300">
                  Our story &rarr;
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
