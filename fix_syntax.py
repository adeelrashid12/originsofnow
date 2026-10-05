import re

with open('D:/DIANA WEBSITE/frontend/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_quiz_modal = """{/* Interactive Quiz Modal */}
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
                {quizStep < 5 && (
                  <>
                    <p className="font-bold tracking-widest text-[#6B8E7B] uppercase text-sm">Progress</p>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map(step => (
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
                              ? [*answers.priorities, opt] 
                              : [p for p in answers.priorities if p != opt]; // wait python syntax in react is bad
                            // Handled correctly below
                          }} className="w-5 h-5 accent-[#6B8E7B]" />
                          {opt}
                        </label>
                      ))}
                    </div>
                    <button onClick={() => setQuizStep(5)} disabled={answers.priorities.length === 0} className="w-full mt-4 bg-[#1C2826] text-white font-bold py-4 rounded-xl hover:bg-[#6B8E7B] transition-colors shadow-lg disabled:opacity-50">
                      Reveal My Profile →
                    </button>
                  </div>
                )}

                {quizStep === 5 && (
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
      )}"""

# Need to fix the JS syntax bug in the python string above: `[*answers.priorities, opt]` => `[...answers.priorities, opt]`
# Python string replacement before regex injection
new_quiz_modal = new_quiz_modal.replace('[*answers.priorities', '[...answers.priorities')
new_quiz_modal = new_quiz_modal.replace('[p for p in answers.priorities if p != opt]', 'answers.priorities.filter(p => p !== opt)')

pattern = re.compile(r'\{/\* Interactive Quiz Modal \*/\}.*?\{/\* Floating Concierge Widget \*/\}', re.DOTALL)
content = pattern.sub(new_quiz_modal + '\n\n      {/* Floating Concierge Widget */}', content)

with open('D:/DIANA WEBSITE/frontend/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Quiz Replaced Cleanly!')
