import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const API_URL = "http://localhost:3001/beverages";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        const response = await fetch(API_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Server returned status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching beverages:", err);
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, []);

  async function handleDelete(id) {
    setDeletingId(id);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete product from server");
      }

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Could not delete product. Please try again.");
    } finally {
      setDeletingId(null);
    }
  }

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    return (
      product.name?.toLowerCase().includes(term) ||
      product.type?.toLowerCase().includes(term)
    );
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-zinc-500 font-medium text-lg">Loading beverages...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-xl mx-auto my-8 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
        <p className="text-red-600 font-semibold">Error: {error}</p>
        <p className="text-sm text-zinc-600 mt-1">Make sure json-server is running on port 3001.</p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-6 space-y-6">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-bold text-zinc-800">Beverage Menu</h2>

        <input
          type="text"
          placeholder="Search by name or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-72 p-2.5 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-zinc-50 rounded-lg border border-dashed border-zinc-300">
          <p className="text-zinc-500">No beverages found matching "{searchTerm}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={handleDelete}
              isDeleting={deletingId === product.id}
            />
          ))}
        </div>
      )}
    </section>
  );
}