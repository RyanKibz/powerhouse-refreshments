
import { Link } from 'react-router-dom';

export default function Home() {
  const bgImageUrl = "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1600&q=80";

  return (
    <div 
      className="relative overflow-hidden bg-cover bg-center rounded-3xl p-12 md:p-20 shadow-2xl  my-6"
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
    >
      
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-sky-200 uppercase bg-white/10 backdrop-blur-md   rounded-full shadow-sm">
          Powerhouse Beverages
        </span>

        
        <h1 className="font-black text-4xl md:text-6xl mb-6 text-white tracking-tight leading-tight">
          Fuel Your Day with <br />
          <span className="text-sky-300">Powerhouse Drinks.</span>
        </h1>

        
        <p className="text-blue-500 text-lg md:text-xl font-normal mb-8 max-w-md mx-auto leading-relaxed drop-shadow">
          Discover our premium collection of energizing teas, artisanal coffees, and refreshing brewed beverages.
        </p>

        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="w-full sm:w-auto bg-white text-indigo-600 font-bold rounded-xl px-8 py-3.5 shadow-lg shadow-black/20 hover:bg-sky-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Explore Drinks
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 rounded-xl px-8 py-3.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 backdrop-blur-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}