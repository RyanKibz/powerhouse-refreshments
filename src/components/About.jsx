
import { Link } from "react-router-dom";
import tea from "../assets/tea.jpg"

export default function About() {
  

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen my-6 rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
      {/* my Header*/}
      <section className="relative text-white px-6 py-20 md:py-32 text-center bg-slate-950 overflow-hidden">
        
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('${tea}')` }}
        />

        {/* Hero Content */}
        <div className="relative sticky max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            We Refresh the World. <br />
            <span className="text-sky-400">One Cup at a Time.</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed pt-2 drop-shadow-sm">
            At Powerhouse Beverages, we craft premium coffees, artisanal teas,
            and energizing brews to inspire every moment of your day.
          </p>
        </div>
      </section>
        {/* This is now my content section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-xs font-extrabold tracking-widest text-sky-600 uppercase">
            Masterfully Roasted • Perfectly Steeped
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Built for Bold Refreshment and Sustainable Quality.
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Powerhouse Beverages is a beverage innovator dedicated to
            sustainable brewing and roasting excellence. We partner directly
            with eco-friendly coffee estates and high-altitude tea gardens to
            deliver clean energy, rich flavor, and authentic refreshment to
            millions every day.
          </p>
          <div className="pt-2">
            
          </div>
        </div>

        {/* At a glance  */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
            At a Glance
          </h3>
          <div className="space-y-4 text-sm text-slate-600">
            <div>
              <p className="font-extrabold text-slate-900 text-base">
                Our Brands
              </p>
              <p>
                From small-batch dark roasts to soothing organic chamomile
                steeps.
              </p>
            </div>
            <div>
              <p className="font-extrabold text-slate-900 text-base">
                Sustainability
              </p>
              <p>
                Partnering with zero-waste farms and using 100% recyclable
                packaging.
              </p>
            </div>
            <div>
              <p className="font-extrabold text-slate-900 text-base">
                Innovation
              </p>
              <p>
                Formulating natural energy drinks and cold brews that fuel daily
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 text-center max-w-3xl mx-auto space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
          Ready to experience Powerhouse Beverages?
        </h3>
        <div>
          <Link
            to="/products"
            className="inline-block bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl px-8 py-3.5 shadow-md transition-all duration-200"
          >
            Explore Our Products
          </Link>
        </div>
      </section>
    </div>
  );
}
