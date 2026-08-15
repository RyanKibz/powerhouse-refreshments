import About from "./components/About"
import Home from "./components/Home"
// import ProductCard from "./components/ProductCard"
// import ProductForm from "./components/ProductForm"
// import ProductList from "./components/ProductList"
// replace with right data file
import { Routes, Route, NavLink} from 'react-router-dom'


function App() {
// Nav Link for active styling

  const activelink = ({ isActive }) =>
    `px-4 py-2 rounded text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
        : "text-sky-600 hover:bg-slate-300 hover:text-gray-900"
    }`
   return (

    <div className="min-h-screen bg-slate-100 text-slate-800 ">
      {/* Navigation Header */}
      <header className="bg-white border-b border-blue-200 sticky top-0 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-black text-xl tracking-tight text-sky-600">
            📊 Powerhouse Beverages
          </span>
          <nav className="flex space-x-3">
            <NavLink to="/" className={activelink}>
              Home
            </NavLink>
            <NavLink to="/about" className={activelink}>
              About
            </NavLink>
            {/* <NavLink to="/expenses" className={activelink}>
              ProductList
            </NavLink> */}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         {/* <Route path="/productlist" element={<ProductList />} /> */}
        </Routes>
      </main>
    </div>
  );
}

    
 

export default App
