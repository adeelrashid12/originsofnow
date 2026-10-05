with open('D:/DIANA WEBSITE/frontend/src/app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if '{/* Kangen Product Section */}' in l:
        k_start = i
    if '{/* emGuarde Section - Light Split-Screen */}' in l:
        e_start = i
    if '{/* The Science & FAQ Section */}' in l:
        faq_start = i

pre = lines[:k_start]
post = lines[faq_start:]

kangen = '''      {/* Kangen Product Section */}
      <section id="products" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div 
            {...fadeUp}
            className="grid md:grid-cols-2 gap-16 items-start relative"
          >
            {/* Text Side (Scrolling) */}
            <div className="order-2 md:order-1 space-y-16 py-12 md:py-32">
              <div className="space-y-6">
                <div className="text-sm font-bold tracking-widest text-[#d4af37] uppercase">Intelligent Hydration</div>
                <h2 className="text-5xl font-black tracking-tight text-gray-900">
                  Kangen Water <br />
                  <span className="text-[#d4af37]">Redefined.</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  A masterpiece of Japanese engineering. Produce antioxidant-rich, alkaline water directly from your tap. Designed for optimal cellular absorption, mental clarity, and lasting energy.
                </p>
              </div>

              {/* Spaced out features to force scrolling */}
              <div className="space-y-16 pt-8">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d4af37]/10 text-[#d4af37] font-bold text-sm">1</span>
                    Micro-Clustered Hydration
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">Unlike regular tap or bottled water, Kangen water is micro-clustered. This means the water molecules are smaller, allowing them to penetrate your cells faster and provide unparalleled, immediate hydration.</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d4af37]/10 text-[#d4af37] font-bold text-sm">2</span>
                    Active Hydrogen & Antioxidants
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">Our bodies constantly fight oxidative stress. Kangen machines infuse your drinking water with active hydrogen, turning it into a powerful liquid antioxidant that fights aging and fatigue at a cellular level.</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d4af37]/10 text-[#d4af37] font-bold text-sm">3</span>
                    Customizable pH Levels
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">More than just drinking water. Select the exact pH level you need at the touch of a button—from highly alkaline water for deep cleaning to mildly acidic 'beauty water' for your daily skincare routine.</p>
                </div>
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

'''

emguarde = '''      {/* emGuarde Section - Light Split-Screen Sticky */}
      <section className="py-32 bg-gray-50 text-gray-900 border-t border-gray-200">
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
                <div className="text-sm font-bold tracking-widest text-[#d4af37] uppercase mb-4">Space Harmonization</div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-gray-900 leading-[1.1]">
                  Invisible Protection.<br />
                  <span className="text-[#d4af37]">emGuarde EMF.</span>
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
                  <div key={i} className="flex gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#d4af37] transition-all group">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center group-hover:bg-[#d4af37] transition-colors">
                       <span className="text-[#d4af37] group-hover:text-white font-bold">0{i+1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>

'''

final = ''.join(pre) + kangen + emguarde + ''.join(post)
with open('D:/DIANA WEBSITE/frontend/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(final)
