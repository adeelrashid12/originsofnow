'use client';
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

export default function OriginsPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F3] text-[#073348] selection:bg-[#3D6C6A] selection:text-white pt-32 pb-24">
      
      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div {...fadeUp} className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-black text-[#073348] tracking-tight leading-tight mb-8">
            Origins of Now is a wellness brand<br className="hidden md:block"/> rooted in a simple idea: <br/>
            <span className="text-[#3D6C6A]">What surrounds you matters</span>
          </h1>
          <p className="text-xl md:text-3xl font-medium text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We believe wellbeing is shaped not only by what we eat and drink, but by the water we use, the air we breathe, the spaces we inhabit and the choices we make every day.
          </p>
        </motion.div>
      </section>

      {/* Standout Statement 1 */}
      <section className="bg-[#073348] text-white py-24 my-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 {...fadeUp} className="text-3xl md:text-5xl font-serif italic text-[#C9B79E] leading-snug">
            "OON is for those who seek a more considered way of living, those who already live by higher standards, or simply feel there is more to discover."
          </motion.h2>
        </div>
      </section>

      {/* Curated With Intention Section */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <motion.div {...fadeUp} className="mb-16">
          <div className="inline-block mb-6 px-6 py-2 rounded-full border border-[#3D6C6A]/30 bg-[#3D6C6A]/5 text-[#3D6C6A] font-bold tracking-widest text-sm uppercase">
            Curated With Intention
          </div>
          <h3 className="text-3xl md:text-5xl font-black mb-12 leading-tight text-[#073348]">
            We explore, research and question the products, technologies and ideas we come across, so you can look beyond the claims, understand what matters, and... choose with greater clarity and intention.
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="space-y-8">
            <h4 className="text-2xl md:text-3xl font-bold text-[#3D6C6A]">
              Because what we see is not always the whole story
            </h4>
            <p className="text-lg md:text-xl font-medium text-gray-600 leading-relaxed">
              We live in an age of endless information. But more information doesn't always mean a broader understanding.
            </p>
            <p className="text-lg md:text-xl font-medium text-gray-600 leading-relaxed">
              In wellness, certain voices, perspectives and ideas tend to dominate the conversation, while others remain less explored, less discussed or simply outside our usual field of view.
            </p>
            <p className="text-xl font-bold text-[#073348] leading-relaxed p-6 bg-white rounded-2xl shadow-sm border border-[#EAE5DB]">
              What we know matters. But so does what we haven't yet considered.
            </p>
          </motion.div>
          
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="space-y-8">
            <div className="bg-[#3D6C6A] text-white p-6 md:p-8 rounded-2xl shadow-md">
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                We carefully curate what we believe has a place in the OON way of living, products that blend well with a premium, intelligent wellness identity.
              </p>
            </div>
            <p className="text-2xl font-black text-[#073348] pt-4">
              But our role doesn't end with curation.
            </p>
            <p className="text-lg md:text-xl font-medium text-gray-600 leading-relaxed">
              When you become part of the OON Club, we stay connected; answering your questions, exploring further on your behalf and continuing to share the research, insights, protocols and practical ways to make the most of what you have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conclusion Statement */}
      <section className="bg-[#EAE5DB] py-32 text-center px-6">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-6xl font-black text-[#073348] tracking-tight leading-tight">
            With OON, wellness isn't about collecting more things.
          </h2>
          <p className="text-2xl md:text-4xl font-serif text-[#3D6C6A] italic">
            It's about understanding what you bring into your life, and using it with intention.
          </p>
          
          <div className="pt-16 border-t border-[#073348]/10 mt-16">
            <p className="text-xl md:text-2xl font-bold tracking-widest uppercase text-[#073348]">
              Origins of Now
            </p>
            <p className="text-lg md:text-xl text-gray-600 mt-2 font-medium">
              Rooted in what matters. Designed for how we live now.
            </p>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
