
import { useState } from "react";
import ProductForm from "./components/ProductForm";

export default function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      newProduct,
    ]);
  };

  return (
    <div>
      <ProductForm onAddProduct={handleAddProduct} />

      <div className="p-6">

        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 mb-4 rounded"
          >
            <h3 className="font-bold text-xl">
              {product.name}
            </h3>

            <p>Type: {product.type}</p>
            <p>Description: {product.description}</p>
            <p>Origin: {product.origin}</p>
            <p>Health Benefits: {product.healthBenefits}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
