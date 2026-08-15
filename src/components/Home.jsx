// Anastacia

export default function Home() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto pb-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-sky-500 to-indigo-600 text-center rounded-3xl p-10 md:p-16 shadow-2xl shadow-indigo-500/20 text-white">
        {/* Background Ambient Glows */}
        {/* <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" /> */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
            Clean Energy & Hydration
          </span>

          <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight leading-tight">
            Unleash Your Full Potential
          </h1>

          <p className="text-sky-100 text-base md:text-lg font-normal max-w-lg mx-auto leading-relaxed">
            Crafted with natural electrolytes, organic botanicals, and zero crash. Power House delivers cold-pressed refreshment delivered straight to your door.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button className="w-full sm:w-auto bg-white text-indigo-600 font-bold rounded-xl px-8 py-3.5 shadow-lg shadow-black/10 hover:bg-sky-50 hover:scale-[1.02]  transition-all duration-200">
              Explore Drinks ➔
            </button>
            <button className="w-full sm:w-auto bg-indigo-700/40 hover:bg-indigo-700/60 text-white font-semibold rounded-xl px-6 py-3.5 border border-white/20 transition-all duration-200">
              Our Story
            </button>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white border border-slate-200/80 rounded-2xl p-6 text-center shadow-sm">
        <div>
          <p className="text-2xl md:text-3xl font-black text-slate-800">100%</p>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Natural Ingredients</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-black text-slate-800">0g</p>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Added Sugar</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-black text-slate-800">50k+</p>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Happy Customers</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-black text-slate-800">4.9 ★</p>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Average Rating</p>
        </div>
      </div>

      {/* Featured Products Teaser */}
      <div className="space-y-6">
        <div className="flex items-end justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Best Sellers</h2>
            <p className="text-sm text-slate-500">Fuel your workout or workday with our top blends.</p>
          </div>
          <a href="#all-products" className="text-sm font-bold text-sky-600 hover:text-sky-700">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Item 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-shadow space-y-3">
            <div className="bg-sky-50 rounded-xl h-40 flex items-center justify-center text-4xl">
              ⚡
            </div>
            <h3 className="font-extrabold text-slate-800">Electric Citrus</h3>
            <p className="text-xs text-slate-500">Electrolyte-infused cold brew citrus splash.</p>
            <div className="flex items-center justify-between pt-2">
              <span className="font-bold text-slate-900">$3.99</span>
              <button className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-shadow space-y-3">
            <div className="bg-indigo-50 rounded-xl h-40 flex items-center justify-center text-4xl">
              🍇
            </div>
            <h3 className="font-extrabold text-slate-800">Berry Surge</h3>
            <p className="text-xs text-slate-500">Antioxidant-rich wild berry & green tea kick.</p>
            <div className="flex items-center justify-between pt-2">
              <span className="font-bold text-slate-900">$4.29</span>
              <button className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-shadow space-y-3">
            <div className="bg-emerald-50 rounded-xl h-40 flex items-center justify-center text-4xl">
              🍃
            </div>
            <h3 className="font-extrabold text-slate-800">Zen Botanical</h3>
            <p className="text-xs text-slate-500">Calming mint, matcha, and ginger infusion.</p>
            <div className="flex items-center justify-between pt-2">
              <span className="font-bold text-slate-900">$3.99</span>
              <button className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}