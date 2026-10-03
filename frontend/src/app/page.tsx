"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [answers, setAnswers] = useState({ 
    waterDrink: '', waterSource: '', waterAmount: '', waterPeople: '', 
    devices: '', router: '', wfh: '', 
    homeWho: [] as string[], priorities: [] as string[],
    name: '', email: '' 
  });
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const nextStep = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value });
    setQuizStep((prev) => prev + 1);
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
    setTimeout(() => setQuizStep(1), 300); // Reset after animation
  };

  const submitQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we will later integrate the Node.js API to save the lead
    setQuizStep(5); // Success step
  };

  return (
    <main className="min-h-screen bg-white text-[#1C2826] font-sans selection:bg-[#6B8E7B]/30">
      
      {/* Navigation - Floating Apple-style Pill */}
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-40 bg-white/90 backdrop-blur-3xl border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.1)] rounded-full transition-all duration-500">
        <div className="flex items-center justify-between px-8 py-3">
          <div className="flex items-center">
            <Image 
              src="/assets/logo_transparent_cropped.png"
              alt="Origins of Now" 
              width={160} 
              height={56} 
              className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-md"
              priority 
            />
          </div>
          <div className="hidden md:flex space-x-10 text-sm font-bold tracking-wide text-gray-800">
            <a href="#products" className="hover:text-[#6B8E7B] transition-colors">Foundations</a>
            <a href="#products" className="hover:text-[#6B8E7B] transition-colors">Products</a>
            <a href="#science" className="hover:text-[#6B8E7B] transition-colors">The Science</a>
          </div>
          <button 
            onClick={() => setIsQuizOpen(true)}
            className="bg-[#1C2826] text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-[#6B8E7B] hover:scale-105 transition-all duration-300"
          >
            Home Assessment
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#F4F1EA]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/hero_water.jpg" 
            alt="Pure Water Wellness"
            fill
            quality={100}
            priority
            className="object-cover scale-[1.05] opacity-30 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4F1EA] via-transparent to-[#F4F1EA]/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-center text-center">
          <motion.div 
            {...fadeUp}
            className="w-full max-w-4xl space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#6B8E7B]/10 border border-[#6B8E7B]/30 text-[#4A6355] text-sm font-bold tracking-widest uppercase mb-4">
              Welcome to Origins of Now
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1C2826] leading-[1.1] tracking-tighter drop-shadow-sm">
              Clarity for your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B8E7B] to-[#5C7C8A]">Everyday Environment.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#3A4A45] max-w-3xl mx-auto font-medium leading-relaxed">
              In a world filled with scientific research and expert opinions, knowing what to trust isn't easy. We give you the information you need to make choices with confidence and peace of mind.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsQuizOpen(true)}
                className="bg-[#6B8E7B] text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#5A7A68] transition-all duration-300 w-full sm:w-auto"
              >
                Start Home Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Scrolling Marquee */}
      <div className="bg-[#EAE5DB] border-y border-[#D3D9D5] py-4 flex overflow-hidden relative w-full">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}</style>
        <div className="flex w-max animate-marquee items-center text-[#4A6355] font-bold tracking-[0.2em] text-sm uppercase">
          {[1, 2].map((set) => (
            <div key={set} className="flex gap-12 px-6 items-center whitespace-nowrap">
              <span>Pure Hydration</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8E7B]/50"></span>
              <span>EMF Harmonization</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8E7B]/50"></span>
              <span>Cellular Health</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8E7B]/50"></span>
              <span>Elevated Living</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8E7B]/50"></span>
              <span>Japanese Engineering</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8E7B]/50"></span>
              <span>Conscious Design</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B8E7B]/50"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Manifesto Section - Earthy Typography */}
      <section className="py-24 bg-[#F4F1EA] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#6B8E7B] blur-[150px] opacity-10 rounded-full pointer-events-none"></div>
        
        <motion.div 
          {...fadeUp}
          className="relative z-10 max-w-4xl mx-auto space-y-8"
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#6B8E7B] to-transparent mx-auto opacity-40"></div>
          
          <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter text-[#1C2826]">
            Grounded in Origin.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B8E7B] to-[#5C7C8A]">Guided by Standards.</span><br />
            Built for Those Who Know.
          </h2>
          
          <p className="text-lg md:text-xl text-[#3A4A45] font-medium leading-relaxed max-w-2xl mx-auto">
            We are not just a wellness brand; we are a movement for those who live by intention. For those who honor where they come from, carry pride in their roots, and live according to values they refuse to compromise.
          </p>
          
          <p className="text-2xl md:text-3xl font-serif text-[#5C7C8A] italic pt-4">
            Live by It.
          </p>
          
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#6B8E7B] to-transparent mx-auto opacity-40"></div>
        </motion.div>
      </section>

      {/* The 3 Pillars of Wellness Home */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#1C2826] mb-6 tracking-tight">The Wellness Home Foundations</h2>
            <p className="text-lg text-[#3A4A45] font-medium leading-relaxed">A considered approach to your daily environment, built on three essential pillars.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <motion.div {...fadeUp} className="bg-[#F9F7F3] rounded-[2rem] p-8 hover:shadow-xl transition-shadow border border-[#EAE5DB] group">
              <div className="w-16 h-16 rounded-full bg-[#6B8E7B]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B8E7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1C2826] mb-4">Drinking Water</h3>
              <p className="text-[#3A4A45] mb-8 leading-relaxed">Pure, structured hydration engineered to support your body's natural vitality.</p>
              <div className="text-xs font-bold text-[#6B8E7B] uppercase tracking-widest">Kangen Water</div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bg-[#F9F7F3] rounded-[2rem] p-8 hover:shadow-xl transition-shadow border border-[#EAE5DB] group">
              <div className="w-16 h-16 rounded-full bg-[#5C7C8A]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5C7C8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1C2826] mb-4">Shower & Spa</h3>
              <p className="text-[#3A4A45] mb-8 leading-relaxed">Mineral-rich, purified water that respects your skin and transforms daily routines.</p>
              <div className="text-xs font-bold text-[#5C7C8A] uppercase tracking-widest">Anespa</div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="bg-[#F9F7F3] rounded-[2rem] p-8 hover:shadow-xl transition-shadow border border-[#EAE5DB] group">
              <div className="w-16 h-16 rounded-full bg-[#8A7B6B]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A7B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1C2826] mb-4">Home Environment</h3>
              <p className="text-[#3A4A45] mb-8 leading-relaxed">Active harmonization for your connected lifestyle, balancing the modern digital home.</p>
              <div className="text-xs font-bold text-[#8A7B6B] uppercase tracking-widest">emGuarde</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kangen Product Section */}
      <section id="products" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div 
            {...fadeUp}
            className="grid md:grid-cols-2 gap-16 items-start relative"
          >
            {/* Text Side (Scrolling) */}
            <div className="order-2 md:order-1 space-y-16 py-12 md:py-32">
              <div className="space-y-6">
                <div className="text-sm font-bold tracking-widest text-[#6B8E7B] uppercase">Structured Hydration</div>
                <h2 className="text-5xl font-black tracking-tight text-[#1C2826]">
                  Kangen Water <br />
                  <span className="text-[#6B8E7B]">Redefined.</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  A masterpiece of Japanese engineering. Produce antioxidant-rich, alkaline water directly from your tap. Designed for optimal cellular absorption, mental clarity, and lasting energy.
                </p>
              </div>

              {/* Styled features to match emGuarde */}
              <div className="space-y-6 pt-4">
                {[
                  { title: "Micro-Clustered Hydration", desc: "Unlike regular tap or bottled water, Kangen water is micro-clustered. This means the water molecules are smaller, allowing them to penetrate your cells faster and provide unparalleled, immediate hydration." },
                  { title: "Active Hydrogen & Antioxidants", desc: "Our bodies constantly fight oxidative stress. Kangen machines infuse your drinking water with active hydrogen, turning it into a powerful liquid antioxidant that fights aging and fatigue at a cellular level." },
                  { title: "Customizable pH Levels", desc: "More than just drinking water. Select the exact pH level you need at the touch of a button - from highly alkaline water for deep cleaning to mildly acidic 'beauty water' for your daily skincare routine." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 hover:bg-white hover:shadow-xl hover:border-[#6B8E7B]/40 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#6B8E7B]/10 rounded-full flex items-center justify-center group-hover:bg-[#6B8E7B] transition-colors shadow-sm">
                       <span className="text-[#6B8E7B] group-hover:text-white font-bold">0{i+1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1C2826] mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image Side (Sticky) */}
            <div className="order-1 md:order-2 sticky top-32 relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] bg-white flex items-center justify-center p-8 border border-gray-100">
              <Image 
                src="/assets/extracted/kangen_3_1.jpeg" 
                alt="Kangen pH Scale" 
                fill
                className="object-contain p-8"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* emGuarde Section - Light Split-Screen Sticky */}
      <section className="py-32 bg-gray-50 text-[#1C2826] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...fadeUp}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            
            {/* Image Side (Sticky) */}
            <div className="sticky top-32 relative w-full h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100">
              <Image 
                src="/assets/extracted/ppt/media/image60.png" 
                alt="emGuarde EMF Protection Workspace" 
                fill
                className="object-cover" 
              />
            </div>

            {/* Content Side (Scrolling) */}
            <div className="space-y-12 py-12 md:py-32">
              <div>
                <div className="text-sm font-bold tracking-widest text-[#6B8E7B] uppercase mb-4">Space Harmonization</div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-[#1C2826] leading-[1.1]">
                  Invisible Protection.<br />
                  <span className="text-[#6B8E7B]">emGuarde EMF.</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  In a world surrounded by digital noise, create a sanctuary of calm. Advanced harmonizing technology that protects your space and restores your natural frequency.
                </p>
              </div>
              
              <div className="space-y-8 pt-4">
                {[
                  { title: "Harmonize", desc: "Neutralizes harmful high-frequency EMF radiation instantly, providing a calm environment for deep focus." },
                  { title: "Restore", desc: "Helps your body maintain its natural electrical balance, reducing fatigue and improving sleep quality." },
                  { title: "Protect", desc: "Creates an active 8-meter protective radius for your workspace, living room, or bedroom." },
                  { title: "Plug & Play", desc: "No complex installation required. Simply plug it in and experience the immediate shift in your space's energy." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#6B8E7B] transition-all group">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#6B8E7B]/10 rounded-full flex items-center justify-center group-hover:bg-[#6B8E7B] transition-colors">
                       <span className="text-[#6B8E7B] group-hover:text-white font-bold">0{i+1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1C2826] mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* The Science & FAQ Section */}
      {/* Science & Reality Section */}
      <section id="science" className="py-32 bg-[#F9F7F3] border-t border-[#EAE5DB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-sm font-bold tracking-widest text-[#6B8E7B] uppercase mb-4">Clarity & Truth</div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1C2826] mb-6">Explore the Science.</h2>
            <p className="text-lg text-[#3A4A45] font-medium max-w-2xl mx-auto">
              Our role is not to make the decision for you, but to give you the information you need to make it with greater clarity, confidence, and peace of mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plastic Reality */}
            <div className="bg-white rounded-[2rem] p-8 border border-[#EAE5DB] shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#1C2826] mb-4">The Plastic Reality</h3>
                <p className="text-[#3A4A45] mb-4 leading-relaxed">
                  A bottle may be used for minutes, but the material doesn't simply disappear. UNEP reports that 22% of plastic waste is mismanaged.
                </p>
                <p className="text-[#3A4A45] mb-6 leading-relaxed">
                  As plastics break down, they form microplastics and nanoplastics. Researchers have reported these particles in human biological samples.
                </p>
              </div>
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <a href="https://www.unep.org/interactives/beat-plastic-pollution/" target="_blank" rel="noopener noreferrer" className="block text-sm font-bold text-[#5C7C8A] hover:text-[#6B8E7B] transition-colors">→ UNEP: Plastic Pollution Overview</a>
                <a href="https://www.niehs.nih.gov/health/topics/agents/microplastics" target="_blank" rel="noopener noreferrer" className="block text-sm font-bold text-[#5C7C8A] hover:text-[#6B8E7B] transition-colors">→ NIEHS: Microplastics & Health</a>
              </div>
            </div>

            {/* Molecular Hydrogen */}
            <div className="bg-white rounded-[2rem] p-8 border border-[#EAE5DB] shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#1C2826] mb-4">Hydrogen-Rich Water</h3>
                <p className="text-[#3A4A45] mb-6 leading-relaxed">
                  What does the scientific community say about molecular hydrogen? We encourage you to explore peer-reviewed studies to understand its potential cellular impact and antioxidant properties.
                </p>
              </div>
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5666661/" target="_blank" rel="noopener noreferrer" className="block text-sm font-bold text-[#5C7C8A] hover:text-[#6B8E7B] transition-colors">→ NCBI: Hydrogen Water Systematic Review</a>
              </div>
            </div>

            {/* EMF Environment */}
            <div className="bg-white rounded-[2rem] p-8 border border-[#EAE5DB] shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#1C2826] mb-4">EMF & Connected Homes</h3>
                <p className="text-[#3A4A45] mb-6 leading-relaxed">
                  How much digital exposure surrounds you every day? As our homes become increasingly connected, it's worth exploring how consistent electromagnetic frequencies interact with our natural environment.
                </p>
              </div>
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <a href="#" className="block text-sm font-bold text-[#5C7C8A] hover:text-[#6B8E7B] transition-colors">→ Explore what science says about EMF</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Video Section - Apple Style Floating Card */}
      <section className="py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#1C2826] tracking-tight">
              Experience The <span className="text-[#6B8E7B]">Standard.</span>
            </h2>
            <p className="mt-4 text-gray-600 font-medium text-lg">Watch the Origins of Now film.</p>
          </motion.div>
          
          <motion.div 
            {...fadeUp}
            className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/60 group cursor-pointer border border-gray-100"
            onClick={() => setIsVideoOpen(true)}
          >
            {/* Video Poster Image (Thumbnail) */}
            <Image 
              src="/assets/video_poster_2.png" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Play Video" 
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#F4F1EA]/20 group-hover:bg-[#F4F1EA]/10 transition-colors"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.2)] group-hover:scale-110 group-hover:bg-[#6B8E7B] group-hover:border-[#6B8E7B] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white" className="ml-2 group-hover:text-white transition-colors"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram / OON Club Banner - Parallax */}
      <section className="relative py-40 flex items-center justify-center px-6 overflow-hidden bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

        <motion.div 
          {...fadeUp}
          className="relative z-10 max-w-5xl w-full"
        >
          <div className="relative bg-white/90 backdrop-blur-3xl rounded-[2.5rem] p-12 md:p-24 text-center overflow-hidden border border-white shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
            <div className="w-20 h-20 bg-gradient-to-br from-[#6B8E7B] to-[#5A7A68] rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            
            <h3 className="text-4xl md:text-6xl font-black text-[#1C2826] mb-6 tracking-tighter">Join The OON Club.</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              For those who live by their values, not by trends. Join our growing community of intentional living on Instagram.
            </p>
            <a href="https://www.instagram.com/originsofnow" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#1C2826] text-white px-10 py-5 rounded-full font-bold hover:bg-[#6B8E7B] transition-all shadow-2xl hover:-translate-y-1 text-lg">
              Follow @originsofnow 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-[#1C2826] text-white pt-24 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Image src="/assets/logo_transparent_cropped.png" alt="OON Logo" width={160} height={50} className="h-12 w-auto mb-8 brightness-0 invert opacity-90" />
              <p className="text-gray-400 max-w-sm leading-relaxed mb-8 text-lg">
                For those who honor where they come from, carry pride in their roots, and live according to values they refuse to compromise. Live by it.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/originsofnow" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#6B8E7B] hover:border-[#6B8E7B] transition-all cursor-pointer group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:scale-110 transition-transform">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#6B8E7B] hover:border-[#6B8E7B] transition-all cursor-pointer group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:scale-110 transition-transform">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Explore</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><a href="#products" className="hover:text-[#6B8E7B] transition-colors">Foundations</a></li>
                <li><a href="#science" className="hover:text-[#6B8E7B] transition-colors">The Science</a></li>
                <li><button onClick={() => setIsQuizOpen(true)} className="hover:text-[#6B8E7B] transition-colors">Home Assessment</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Join The OON Club</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive insights on intelligent living.</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 w-full text-white focus:outline-none focus:border-[#6B8E7B] placeholder-gray-500" />
                <button className="bg-[#6B8E7B] text-white px-6 py-3 rounded-r-xl font-bold hover:bg-[#5A7A68] transition-colors">→</button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
            <p>© {new Date().getFullYear()} Origins of Now. All rights reserved.</p>
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
              <div className="relative z-10">
                <h3 className="text-3xl font-serif text-[#6B8E7B] mb-4">Origins of Now</h3>
                <p className="text-white/80 font-medium">Elevating daily wellness.</p>
              </div>
              
              <div className="relative z-10 space-y-8">
                {quizStep < 6 && (
                  <>
                    <p className="font-bold tracking-widest text-[#6B8E7B] uppercase text-sm">Progress</p>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(step => (
                        <div key={step} className={`h-1.5 w-10 rounded-full transition-colors ${quizStep >= step ? 'bg-[#6B8E7B]' : 'bg-white/20'}`}></div>
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
                    <span className="text-[#6B8E7B] font-bold tracking-widest uppercase text-sm">01 — Your Water</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1C2826]">What does your household mainly drink?</h2>
                    <div className="grid grid-cols-1 gap-3">
                      {['Bottled water', 'Filtered water', 'Tap water', 'Mineral water', 'A combination'].map(opt => (
                        <button key={opt} onClick={() => { setAnswers({...answers, waterDrink: opt}); setQuizStep(2); }} className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium shadow-sm ${answers.waterDrink === opt ? 'border-[#6B8E7B] bg-[#6B8E7B]/5 text-[#1C2826]' : 'border-[#EAE5DB] hover:border-[#6B8E7B]/50 hover:bg-white text-[#3A4A45]'}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 2 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4">
                    <button onClick={() => setQuizStep(1)} className="text-sm text-gray-400 hover:text-[#1C2826] font-medium flex items-center gap-1 mb-2">← Back</button>
                    <span className="text-[#6B8E7B] font-bold tracking-widest uppercase text-sm">01 — Your Water</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1C2826]">How do you mainly get your drinking water?</h2>
                    <div className="grid grid-cols-1 gap-3">
                      {['Individual bottles', 'Large bottles (1-1.5 L)', 'Dispenser gallons', 'Filtered / tap', 'A combination'].map(opt => (
                        <button key={opt} onClick={() => { setAnswers({...answers, waterSource: opt}); setQuizStep(3); }} className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium shadow-sm ${answers.waterSource === opt ? 'border-[#6B8E7B] bg-[#6B8E7B]/5 text-[#1C2826]' : 'border-[#EAE5DB] hover:border-[#6B8E7B]/50 hover:bg-white text-[#3A4A45]'}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 3 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4">
                    <button onClick={() => setQuizStep(2)} className="text-sm text-gray-400 hover:text-[#1C2826] font-medium flex items-center gap-1 mb-2">← Back</button>
                    <span className="text-[#6B8E7B] font-bold tracking-widest uppercase text-sm">02 — Your Digital Environment</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1C2826]">How connected is your home?</h2>
                    <p className="text-[#3A4A45]">Approximately how many Wi-Fi connected devices are regularly operating?</p>
                    <div className="grid grid-cols-2 gap-3">
                      {['1-5', '6-15', '16-30', '30+'].map(opt => (
                        <button key={opt} onClick={() => { setAnswers({...answers, devices: opt}); setQuizStep(4); }} className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium shadow-sm ${answers.devices === opt ? 'border-[#6B8E7B] bg-[#6B8E7B]/5 text-[#1C2826]' : 'border-[#EAE5DB] hover:border-[#6B8E7B]/50 hover:bg-white text-[#3A4A45]'}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 4 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4">
                    <button onClick={() => setQuizStep(3)} className="text-sm text-gray-400 hover:text-[#1C2826] font-medium flex items-center gap-1 mb-2">← Back</button>
                    <span className="text-[#6B8E7B] font-bold tracking-widest uppercase text-sm">03 — Your Home & Family</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1C2826]">Which areas matter most to you right now?</h2>
                    <div className="grid grid-cols-1 gap-3">
                      {['Better hydration', 'Reducing bottled-water use', 'Reducing unnecessary plastic', 'Mindful technology use', 'Overall wellness & lifestyle'].map(opt => (
                        <label key={opt} className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all font-medium shadow-sm ${answers.priorities.includes(opt) ? 'border-[#6B8E7B] bg-[#6B8E7B]/5 text-[#1C2826]' : 'border-[#EAE5DB] hover:border-[#6B8E7B]/50 hover:bg-white text-[#3A4A45]'}`}>
                          <input type="checkbox" checked={answers.priorities.includes(opt)} onChange={(e) => {
                            const newPriorities = e.target.checked 
                              ? [...answers.priorities, opt] 
                              : answers.priorities.filter(p => p !== opt);
                            setAnswers({...answers, priorities: newPriorities});
                          }} className="w-5 h-5 accent-[#6B8E7B]" />
                          {opt}
                        </label>
                      ))}
                    </div>
                    <button onClick={() => setQuizStep(5)} disabled={answers.priorities.length === 0} className="w-full mt-4 bg-[#1C2826] text-white font-bold py-4 rounded-xl hover:bg-[#6B8E7B] transition-colors shadow-lg disabled:opacity-50">
                      Continue →
                    </button>
                  </div>
                )}

                {quizStep === 5 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4">
                    <button onClick={() => setQuizStep(4)} className="text-sm text-gray-400 hover:text-[#1C2826] font-medium flex items-center gap-1 mb-2">← Back</button>
                    <span className="text-[#6B8E7B] font-bold tracking-widest uppercase text-sm">04 — Final Step</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#1C2826]">Where should we send your profile?</h2>
                    <p className="text-[#3A4A45]">Enter your details below to reveal your personalized Home Environment Profile.</p>
                    <form onSubmit={(e) => { e.preventDefault(); setQuizStep(6); }} className="space-y-4 mt-6">
                      <input required type="text" value={answers.name} onChange={e => setAnswers({...answers, name: e.target.value})} className="w-full p-4 rounded-xl border-2 border-[#EAE5DB] focus:border-[#6B8E7B] focus:outline-none bg-white font-medium text-[#1C2826]" placeholder="Your Name" />
                      <input required type="email" value={answers.email} onChange={e => setAnswers({...answers, email: e.target.value})} className="w-full p-4 rounded-xl border-2 border-[#EAE5DB] focus:border-[#6B8E7B] focus:outline-none bg-white font-medium text-[#1C2826]" placeholder="Your Email Address" />
                      <button type="submit" className="w-full bg-[#1C2826] text-white font-bold py-4 rounded-xl hover:bg-[#6B8E7B] transition-colors shadow-lg mt-4">
                        Reveal My Profile →
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
                          <h4 className="font-bold text-[#1C2826] uppercase tracking-widest text-sm">Water — High Impact Area</h4>
                        </div>
                        <p className="text-[#3A4A45]">You consume mainly {answers.waterDrink.toLowerCase()} via {answers.waterSource.toLowerCase()}. Did you know the average household consumes over 1,500 single-use bottles per year?</p>
                      </div>

                      <div className="p-6 bg-white rounded-2xl border border-[#EAE5DB] shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">📱</span>
                          <h4 className="font-bold text-[#1C2826] uppercase tracking-widest text-sm">Digital — Awareness Area</h4>
                        </div>
                        <p className="text-[#3A4A45]">Your home has {answers.devices} connected devices running regularly, creating a consistent digital environment.</p>
                      </div>

                      <div className="p-6 bg-[#6B8E7B]/10 rounded-2xl border border-[#6B8E7B]/20">
                        <h4 className="font-bold text-[#1C2826] uppercase tracking-widest text-sm mb-2">Your Priorities</h4>
                        <p className="text-[#3A4A45] font-medium">{answers.priorities.join(', ')}</p>
                      </div>
                    </div>
                    
                    <p className="text-center font-serif text-[#6B8E7B] text-xl italic pt-4">"Interesting what we discover when we look at everyday things differently."</p>

                    <button onClick={closeQuiz} className="w-full bg-[#1C2826] text-white font-bold py-4 rounded-xl hover:bg-[#6B8E7B] transition-colors shadow-lg">
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
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6B8E7B] blur-[50px] opacity-20 rounded-full"></div>
                <h4 className="text-xl font-black mb-1 relative z-10">OON Concierge</h4>
                <p className="text-sm text-[#6B8E7B] font-medium relative z-10">Elevate your living.</p>
              </div>
              <div className="p-6 space-y-5">
                <p className="text-gray-600 text-sm leading-relaxed text-center font-medium">
                  Have questions about intelligent hydration or space harmonization? Connect directly with our specialists.
                </p>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-4 rounded-xl font-bold hover:bg-[#20b858] transition-all shadow-lg hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsConciergeOpen(!isConciergeOpen)}
          className="w-16 h-16 bg-gradient-to-br from-[#1C2826] to-[#273832] rounded-full flex items-center justify-center text-[#6B8E7B] shadow-[0_10px_40px_rgba(212,175,55,0.4)] border border-[#6B8E7B]/30 hover:scale-110 transition-transform relative z-10 group"
        >
          {isConciergeOpen ? (
             <span className="text-3xl font-light text-white leading-none">&times;</span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          )}
        </button>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#F4F1EA]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-8 right-8 text-white/70 hover:text-white text-5xl font-light hover:scale-110 transition-transform z-[110]"
            >
              &times;
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-6xl aspect-video bg-[#F4F1EA] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative"
            >
              <video 
                src="/assets/hero_video.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}