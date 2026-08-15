// Anastacia

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header Section */}
      <div className="text-center border-b border-slate-700/60 pb-6">
        <h1 className="text-3xl md:text-4xl tracking-tight font-black text-slate-900">
          About PowerHouse Refreshments
        </h1>
        <p className="text-sm text-sky-600 font-bold uppercase tracking-wider mt-2">
          Fueling Your Everyday Hustle
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        {/* Left Side: Artistry Message */}
        <div className="space-y-4">
          <h2 className="text-xl font-extrabold text-slate-800">
            Our Purpose and Drive
          </h2>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-100 animate-none">
            Power Every Ambition. Elevate Every Moment.
            </span>
          <p className="text-slate-600 leading-relaxed">
            Our vision is to build a versatile portfolio of beverage brands that people trust, love, and choose. We exist to energize, restore, and bring people together across diverse lifestyles and cultures.
          </p>
          <div className="pt-2">
          </div>
        </div>

        {/* Right Side: Highlight Callout Box */}
        <div className="bg-gradient-to-br from-slate-50 to-sky-50/50 border border-slate-200/60 rounded-2xl p-6 text-center space-y-3">
          <p className="text-slate-800 font-bold text-lg">Why Choose Us?</p>
          <ul className="text-sm text-slate-600 space-y-2 text-left list-disc list-inside">
            <li><strong>100% Natural:</strong> Zero artificial dyes or preservatives</li>
            <li><strong>Sustained Energy:</strong> Clean plant-based caffeine boosts</li>
            <li><strong>Hydration First:</strong> Packed with essential minerals</li>
          </ul>
        </div>
      </div>

      {/* Feature Grid / Brand Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 border border-slate-200 rounded-2xl text-center space-y-2">
          <span className="text-2xl">🌱</span>
          <h3 className="font-bold text-slate-800">Sustainably Sourced</h3>
          <p className="text-xs text-slate-500">Ethically harvested ingredients from eco-conscious farms.</p>
        </div>
        <div className="bg-white p-6 border border-slate-200 rounded-2xl text-center space-y-2">
          <span className="text-2xl">⚡</span>
          <h3 className="font-bold text-slate-800">Peak Performance</h3>
          <p className="text-xs text-slate-500">Designed to give you sustained vigor without the crash.</p>
        </div>
        <div className="bg-white p-6 border border-slate-200 rounded-2xl text-center space-y-2">
          <span className="text-2xl">🍓</span>
          <h3 className="font-bold text-slate-800">Real Flavors</h3>
          <p className="text-xs text-slate-500">Crafted with authentic fruit juices and natural botanicals.</p>
        </div>
      </div>

      {/* Footer Accent Section */}
      <footer className="relative pt-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 border-t-2 border-slate-200"></div>
        👑 Crafted for champions • Refreshment redefined
      </footer>
    </div>
  );
}