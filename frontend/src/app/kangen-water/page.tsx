'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="relative max-w-[580px] mx-auto aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/20 bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full"
        >
          <img
            src={images[currentIndex]}
            alt="Kangen Machine"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-2.5 z-20">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === currentIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/70 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface PhWaterPoint {
  title: string;
  text: string;
}

interface PhWaterType {
  ph: string;
  name: string;
  headline: string;
  description: string;
  bgCard: string;
  borderCard: string;
  badgeStyle: string;
  linkStyle: string;
  btnAccent: string;
  modalSubtitle: string;
  modalHeadline: string;
  modalIntro?: string;
  points: PhWaterPoint[];
  takeaway: string;
}

export default function KangenWaterPage() {
  const [selectedWater, setSelectedWater] = useState<PhWaterType | null>(null);

  // Exact content from "ph page content.docx"
  const waterTypes: PhWaterType[] = [
    {
      ph: "pH 11.5",
      name: "Strong Kangen Water",
      headline: "Eat clean.",
      description: "Helps in removal of oil base pesticides residues from fruit and vegetables",
      bgCard: "bg-[#F6F2FF]",
      borderCard: "border-[#DDD0F7] hover:border-[#9333EA]/70",
      badgeStyle: "bg-[#ECE2FD] text-[#581C87] border-[#D8B4FE]",
      linkStyle: "text-[#6B21A8] hover:text-[#581C87]",
      btnAccent: "bg-[#6B21A8] text-white hover:bg-[#581C87]",
      modalSubtitle: "THE GREASE LIFTER · NOT FOR DRINKING",
      modalHeadline: "Less scrubbing. Less detergent. A smarter approach to grease.",
      modalIntro: "Designed for tackling oily residues and stubborn grime, this strongly alkaline water can become a versatile addition to everyday kitchen, laundry and household cleaning routines.",
      points: [
        {
          title: "Fresh produce preparation",
          text: "Helps in removal of oil base pesticides residues from fruit and vegetables"
        },
        {
          title: "The grease-stain trick",
          text: "Before reaching for a heavy-duty stain remover, test pH 11.5 water on a small, hidden area of a washable garment. It may help loosen oily food stains before laundering."
        },
        {
          title: "Kitchen reset",
          text: "Tackle greasy stovetops, cooker hoods, suitable cookware, cutting boards and washable kitchen cloths."
        },
        {
          title: "A lighter cleaning routine",
          text: "Where it works effectively, it may reduce the amount of conventional degreaser or dish detergent needed. That can mean fewer cleaning products to purchase and less packaging over time."
        },
        {
          title: "Food preparation",
          text: "Explore manufacturer-described uses for pre-soaking selected ingredients, including beans and nuts, and preparing produce."
        }
      ],
      takeaway: "Your kitchen may need fewer cleaning products than you think."
    },
    {
      ph: "pH 8.5–9.5",
      name: "Kangen Water",
      headline: "Drink water of Origins.",
      description: "Electrolysed, hydrogen-rich alkaline water for everyday hydration.",
      bgCard: "bg-[#F0F7FF]",
      borderCard: "border-[#C2E0F9] hover:border-[#0284C7]/70",
      badgeStyle: "bg-[#E0F0FE] text-[#0369A1] border-[#BAE6FD]",
      linkStyle: "text-[#0369A1] hover:text-[#073348]",
      btnAccent: "bg-[#0369A1] text-white hover:bg-[#073348]",
      modalSubtitle: "THE DAILY WATER · FOR DRINKING AND COOKING",
      modalHeadline: "Filtered, electrolysed water with molecular hydrogen produced during electrolysis. A setting for daily hydration, with additional possibilities in the kitchen.",
      points: [
        {
          title: "Your everyday hydration",
          text: "Make drinking water available at home or work, and refill reusable bottles instead of repeatedly buying single-use bottled water. The environmental benefit depends on your previous water source and actual use."
        },
        {
          title: "Bring out the flavour",
          text: "Explore how different settings affect the aroma and taste of tea, coffee, soups and home-cooked meals. Alkaline water can change extraction and flavour."
        },
        {
          title: "Better-textured grains and cooking",
          text: "Use it when washing and cooking rice or preparing grains, beans and vegetables."
        },
        {
          title: "Support your active lifestyle",
          text: "Staying hydrated supports normal physical performance and recovery. Some research has explored alkaline water in relation to hydration and reflux, there are benefits beyond ordinary drinking water."
        },
        {
          title: "Less bottled water. Less waste. More freedom",
          text: "One system for your daily drinking water, less spending on bottled water, less storage space taken up by packs and bottles."
        }
      ],
      takeaway: "A daily essential, with possibilities beyond drinking."
    },
    {
      ph: "pH 6.0",
      name: "Beauty Water",
      headline: "Beauty in a different element.",
      description: "A mildly acidic setting for beauty and personal-care routines.",
      bgCard: "bg-[#FFF9F0]",
      borderCard: "border-[#FCE2C2] hover:border-[#D97706]/70",
      badgeStyle: "bg-[#FEF0DB] text-[#B45309] border-[#FED7AA]",
      linkStyle: "text-[#B45309] hover:text-[#78350F]",
      btnAccent: "bg-[#B45309] text-white hover:bg-[#78350F]",
      modalSubtitle: "THE PERSONAL-CARE SETTING · EXTERNAL USE",
      modalHeadline: "Mildly acidic water intended for selected external-care applications. Its pH is closer to the naturally acidic surface of skin than strongly alkaline water.",
      points: [
        {
          title: "A simpler skincare ritual",
          text: "Use as a gentle finishing rinse after cleansing, or explore its traditional astringent-style use. It may complement a simple routine."
        },
        {
          title: "The Hair Rinse",
          text: "A refreshing final rinse after shampooing, designed to leave hair feeling smoother, looking shinier and easier to manage. Some users find that it reduces their need for conventional conditioners, simplifying their hair-care routine with just water."
        },
        {
          title: "After shaving",
          text: "A possible alternative to heavily fragranced finishing products for some people.."
        },
        {
          title: "Pet grooming",
          text: "A gentle water-based addition to your pet-care routine, suitable for wiping the coat and freshning up between baths."
        },
        {
          title: "Plant care",
          text: "Give your plants water suited to their needs. Choosing an appropriate pH for different plant varieties can help create favourable growing conditions, supporting their natural growth and reducing the need for unnecessary adjustments or extra care."
        }
      ],
      takeaway: "Reconsider the products you use every day."
    },
    {
      ph: "pH 7.0",
      name: "Clean Water",
      headline: "Simply neutral.",
      description: "Pure versatility for everyday uses, including taking medication.",
      bgCard: "bg-[#F2FAF5]",
      borderCard: "border-[#C8EAD6] hover:border-[#16A34A]/70",
      badgeStyle: "bg-[#E1F5E8] text-[#15803D] border-[#BBF7D0]",
      linkStyle: "text-[#15803D] hover:text-[#14532D]",
      btnAccent: "bg-[#15803D] text-white hover:bg-[#14532D]",
      modalSubtitle: "THE NEUTRAL SETTING · FOR EVERYDAY USE",
      modalHeadline: "Neutral-pH water produced through the machine's filtration and electrolysis process, intended for everyday drinking and selected food-preparation uses.",
      points: [
        {
          title: "Everyday drinking water",
          text: "A neutral option for people who prefer not to drink alkaline water. The right choice is the water that meets your needs and is safe for your source and circumstances."
        },
        {
          title: "For the family's kitchen",
          text: "Use for suitable everyday food preparation. For infant formula"
        },
        {
          title: "When taking medication",
          text: "A practical option for taking medicines when their instructions call for water."
        },
        {
          title: "A versatile kitchen staple",
          text: "Use for drinking, diluting suitable beverages and preparing food where a neutral setting is preferred."
        },
        {
          title: "One source, fewer bottles",
          text: "Pair the machine with reusable drinking bottles and refillable carafes to reduce your dependence on packaged water."
        }
      ],
      takeaway: "Not every purpose calls for a special pH."
    },
    {
      ph: "pH 2.5",
      name: "Strong Acidic Water",
      headline: "A powerful kind of clean.",
      description: "Strongly acidic water for selected cleaning and hygiene applications.",
      bgCard: "bg-[#FFF2F4]",
      borderCard: "border-[#FBCED6] hover:border-[#E11D48]/70",
      badgeStyle: "bg-[#FEE4E8] text-[#BE123C] border-[#FECDD3]",
      linkStyle: "text-[#BE123C] hover:text-[#881337]",
      btnAccent: "bg-[#BE123C] text-white hover:bg-[#881337]",
      modalSubtitle: "THE HYGIENE SETTING · NOT FOR DRINKING",
      modalHeadline: "A different approach to selected hygiene and cleaning tasks.",
      modalIntro: "Strongly acidic water generated is intended for specific hygiene and surface-care applications.",
      points: [
        {
          title: "Kitchen hygiene",
          text: "Recommended use as a disinfectant for knives, cutting boards, dishcloths and selected food-preparation surfaces."
        },
        {
          title: "High-touch surfaces",
          text: "For selected kitchen, bathroom and household surfaces, it offers an alternative to conventional disinfecting products, helping reduce reliance on multiple cleaning products and their associated side effects."
        },
        {
          title: "Hand Hygiene",
          text: "A potential alternative to conventional products, where skin safety and antimicrobial effectiveness have been validated for this specific use."
        },
        {
          title: "Beyond the Home",
          text: "From salons and clinics to hospitality and commercial spaces, pH 2.5 water may serve as a water-based disinfecting solution for selected hygiene applications, where its antimicrobial effectiveness and safety have been validated for the intended use."
        }
      ],
      takeaway: "Purposeful hygiene, without automatically reaching for another bottle."
    }
  ];

  return (
    <main className="min-h-screen bg-[#073348] text-[#EAE5DB] font-sans selection:bg-[#3E6C6A]/30 pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/explore" className="inline-flex items-center text-[#C9B79E] font-bold mb-12 hover:text-white transition-colors">
          &larr; Back to Explore
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 text-white">
          Kangen Water&reg;
        </h1>
        
        <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/10 mb-16 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">A NEW ESSENTIAL FOR MODERN LIVING</h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-medium mb-12 max-w-4xl">
            <p>From homes and offices to clinics, gyms and wellness centres, wherever water is offered, there's an opportunity to think differently about it.</p>
            <p>More than a kitchen appliance, Kangen Water&reg; is a system designed to bring more possibilities to every space where water matters.</p>
            <p className="text-[#C9B79E] pt-4">Discover the technology, technical features and how it works through product insights, demonstrations and videos.</p>
          </div>
          
          {/* Machine Image Slider */}
          <div className="mb-16">
             <ImageSlider images={[
               "/assets/kangen_slider/leveluk_k8.jpg", 
               "/assets/kangen_slider/sd501_platinum.jpg", 
               "/assets/kangen_slider/sd501_dx.jpg"
             ]} />
          </div>

          {/* Hero Video */}
          <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative mb-16 border border-white/10">
            <video 
              src="/assets/hero_video.mp4" 
              controls 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Demonstration & Insights Videos Grid (4 Client Videos) */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-[#C9B79E] font-bold text-xs uppercase tracking-widest block mb-2">Demonstrations & Insights</span>
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">Understanding the Technology</h3>
              <p className="text-gray-300 text-base mt-2 font-medium">
                Clinical perspectives, performance insights, and Japanese precision engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video 1: What Doctors Say */}
              <div className="bg-[#112430] rounded-[2rem] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between group">
                <div className="p-6 pb-4">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#C9B79E] block mb-1">Medical Research</span>
                  <h4 className="text-xl font-bold text-white">What Doctors Say</h4>
                </div>
                <div className="w-full aspect-video bg-black relative">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/7Kiv2v5_S2c"
                    title="What Doctors Say on Kangen Water"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Video 2: Athletes */}
              <div className="bg-[#112430] rounded-[2rem] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between group">
                <div className="p-6 pb-4">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#C9B79E] block mb-1">Peak Performance</span>
                  <h4 className="text-xl font-bold text-white">Athletes on Hydration</h4>
                </div>
                <div className="w-full aspect-video bg-black relative">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/2kyLTQ8Vz4E"
                    title="Athletes on Kangen Water"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Video 3: Alkalise Body Explained */}
              <div className="bg-[#112430] rounded-[2rem] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between group">
                <div className="p-6 pb-4">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#C9B79E] block mb-1">Cellular Physiology</span>
                  <h4 className="text-xl font-bold text-white">Alkalise Body Explained</h4>
                </div>
                <div className="w-full aspect-video bg-black relative">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/EV1wt8r-MKI"
                    title="Alkalise Body Explained"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Video 4: Factory / How It's Made / Quality */}
              <div className="bg-[#112430] rounded-[2rem] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between group">
                <div className="p-6 pb-4">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#C9B79E] block mb-1">Manufacturing Standards</span>
                  <h4 className="text-xl font-bold text-white">Factory: How It’s Made & Quality</h4>
                </div>
                <div className="w-full aspect-video bg-black relative">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/YEpS-YZ-gUg"
                    title="Factory / How It's Made / Quality"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* THE POWER OF pH — PLACED AT THE END OF THE PAGE AFTER THE VIDEOS */}
          <div className="pt-8 border-t border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-[#C9B79E] font-bold text-xs uppercase tracking-widest block mb-2">Versatile Ionization Spectrum</span>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">The Power of pH</h3>
              <p className="text-gray-300 text-base md:text-lg mt-3 font-medium">
                A little more from one system. A little less of what you may not need.
              </p>
            </div>

            {/* Compact 5-Box Spectrum Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {waterTypes.map((item) => (
                <div
                  key={item.ph}
                  onClick={() => setSelectedWater(item)}
                  className={`group relative ${item.bgCard} border ${item.borderCard} rounded-2xl p-5 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase border ${item.badgeStyle}`}>
                        {item.ph}
                      </span>
                      <span className={`text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform font-bold ${item.linkStyle}`}>&#8599;</span>
                    </div>
                    
                    <h5 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                      {item.name}
                    </h5>

                    <h4 className="text-lg font-black text-[#073348] mb-2 leading-tight">
                      {item.headline}
                    </h4>
                    
                    <p className="text-xs text-[#3A4A45] leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-black/5 flex items-center justify-between text-xs font-bold">
                    <span className={item.linkStyle}>More uses</span>
                    <span className={`${item.linkStyle} font-bold text-sm`}>&rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clean Detail View / Modal for Selected Water Type — Clean White, No Heavy Background, Close Button */}
          <AnimatePresence>
            {selectedWater && (
              <div 
                onClick={() => setSelectedWater(null)}
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-2xl bg-white border border-[#EAE5DB] rounded-3xl p-6 md:p-10 shadow-2xl text-[#073348] max-h-[85vh] overflow-y-auto"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase border mb-2 ${selectedWater.badgeStyle}`}>
                        {selectedWater.ph} &middot; {selectedWater.name}
                      </span>
                      <p className="text-xs font-black uppercase tracking-widest text-gray-400">
                        {selectedWater.modalSubtitle}
                      </p>
                    </div>
                    <button 
                      onClick={() => setSelectedWater(null)}
                      className="text-gray-400 hover:text-[#073348] text-2xl font-light w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      aria-label="Close"
                    >
                      &times;
                    </button>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black mb-2 text-[#073348] leading-tight">
                    {selectedWater.modalHeadline}
                  </h3>

                  {selectedWater.modalIntro && (
                    <p className="text-sm md:text-base text-gray-600 font-medium mb-6 leading-relaxed">
                      {selectedWater.modalIntro}
                    </p>
                  )}

                  {/* Clean Content Points — No nested colored background box */}
                  <div className="space-y-4 my-6 text-sm md:text-base">
                    {selectedWater.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#073348] mt-2 flex-shrink-0"></span>
                        <p className="text-[#2C3E3A] leading-relaxed">
                          <strong className="text-[#073348] font-bold">{pt.title}: </strong>
                          <span className="font-medium text-gray-700">{pt.text}</span>
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* The OON Takeaway */}
                  <div className="pt-5 border-t border-gray-100 mb-6">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#826443] block mb-1">
                      THE OON TAKEAWAY
                    </span>
                    <p className="font-serif italic text-base md:text-lg text-[#073348] font-medium">
                      "{selectedWater.takeaway}"
                    </p>
                  </div>

                  {/* Bottom Action — Changed to 'Close' */}
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs text-gray-400 italic">Origins of Now Standards</span>
                    <button 
                      onClick={() => setSelectedWater(null)}
                      className={`${selectedWater.btnAccent} font-bold px-8 py-2.5 rounded-full text-sm transition-all shadow-md`}
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </main>
  );
}
