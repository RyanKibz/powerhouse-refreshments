import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 my-8 px-4">
      {/* Header Section */}
      <div className="text-center border-b border-slate-200 pb-6">
        <h1 className="text-3xl md:text-5xl tracking-tight font-black text-slate-900">
          About Us
        </h1>
        <p className="text-sm text-sky-600 font-bold uppercase tracking-wider mt-2">
          Brewed For Power • Crafted For Taste
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        {/* Left Side: Brand Story */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-800">
            Pure Craftsmanship
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Powerhouse Beverages delivers premium, ethically sourced drinks designed 
            to fuel your everyday hustle. From rich roasted coffee blends to soothing herbal teas, 
            every beverage is formulated for exceptional flavor and pure refreshment.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-100 animate-pulse">
              ⚡ 100% Quality Ingredients
            </span>
          </div>
        </div>

        {/* Right Side: Mission Box / Quick Stats */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 text-center space-y-4 text-white shadow-md">
          <p className="text-sky-400 font-extrabold uppercase text-xs tracking-widest">Our Promise</p>
          <p className="text-sm text-slate-300 leading-relaxed">
            We partner with sustainable farms across the globe to bring fresh, high-grade ingredients straight to your cup.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-xs">
            <div>
              <p className="font-black text-lg text-white">50+</p>
              <p className="text-slate-400">Unique Brews</p>
            </div>
            <div>
              <p className="font-black text-lg text-white">100%</p>
              <p className="text-slate-400">Sustainably Sourced</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Accent Section */}
      <footer className="relative pt-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 border-t-2 border-slate-200"></div>
        👑 Crafted by Powerhouse Team
      </footer>
    </div>
  );
}