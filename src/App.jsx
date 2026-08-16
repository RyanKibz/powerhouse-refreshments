import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductCard from "./components/ProductCard";
import db from "../db.json";

function App() {
  const [products, setProducts] = useState([]);
  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <div className="min-h-screen bg-zinc-100 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <ProductForm onAddProduct={handleAddProduct} />
        <ProductList products={products} setProducts={setProducts} />
        <ProductCard products={products} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default App;