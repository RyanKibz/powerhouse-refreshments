import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    origin: "",
    healthBenefits: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/beverages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save product");
      }

      
      navigate("/products");
    } catch (err) {
      console.error("Error adding product:", err);
      alert("Failed to submit product.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
      <h2 className="text-2xl font-bold text-zinc-800 mb-6">Add New Beverage</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-zinc-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1">Type (e.g., Juice, Smoothie)</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-zinc-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1">Origin</label>
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              className="w-full border border-zinc-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="https://..."
            value={formData.image}
            onChange={handleChange}
            className="w-full border border-zinc-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-1">Description</label>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-zinc-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-1">Health Benefits</label>
          <textarea
            type="text"
            name="healthBenefits"
            rows="3"
            value={formData.healthBenefits}
            onChange={handleChange}
            className="w-full border border-zinc-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-md shadow-sky-500/20"
        >
          Add Beverage
        </button>
      </form>
    </div>
  );
}