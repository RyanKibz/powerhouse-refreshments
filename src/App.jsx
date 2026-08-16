import { useState, useEffect } from "react"
import About from "./components/About"
import Home from "./components/Home"
import ProductCard from "./components/ProductCard"
import ProductForm from "./components/ProductForm"
import ProductList from "./components/ProductList"

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err))
  }, [])

  return (
    <div>
      <ProductList products={products} setProducts={setProducts} />
    </div>
  )
}

export default App