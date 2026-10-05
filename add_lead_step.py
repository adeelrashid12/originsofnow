import re

with open('D:/DIANA WEBSITE/frontend/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix progress bar
content = content.replace('{quizStep < 5 && (', '{quizStep < 6 && (')
content = content.replace('{[1, 2, 3, 4].map(step => (', '{[1, 2, 3, 4, 5].map(step => (')

# Modify step 4 button
step4_btn_old = 'Reveal My Profile →'
step4_btn_new = 'Continue →'
content = content.replace(step4_btn_old, step4_btn_new, 1)

# Add Step 5 and shift result to Step 6
result_block_old = '{quizStep === 5 && ('
result_block_new = '''{quizStep === 5 && (
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

                {quizStep === 6 && ('''

content = content.replace(result_block_old, result_block_new)

with open('D:/DIANA WEBSITE/frontend/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Lead capture step added!')
