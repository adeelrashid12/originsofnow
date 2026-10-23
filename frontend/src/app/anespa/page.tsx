import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AnespaPage() {
  return (
    <main className="min-h-screen bg-[#578595] text-[#EAE5DB] font-sans pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <Link href="/explore" className="inline-flex items-center text-[#3E6C6A] font-bold mb-12 hover:text-white transition-colors">
          &larr; Back to Explore
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-8">
          Anespa <br/>
          
        </h1>
        
        <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] shadow-xl border border-white/10 mb-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-white rounded-2xl p-8">
              <Image src="/assets/anespa_dx.jpg" alt="Anespa DX" width={500} height={500} className="w-full h-auto object-contain mix-blend-multiply" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Anespa DX</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Transform your ordinary bathroom into a natural hot spring resort. The Anespa DX produces a continuous stream of healthy ionized mineral water. It removes chlorine and other harmful substances in your tap water, and adds safe, moisturizing minerals that are healthy for your skin and hair.
              </p>
              <p className="text-sm text-gray-400 italic">
                (More technical details and videos will be added here as requested by the client)
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
