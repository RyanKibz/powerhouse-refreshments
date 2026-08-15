import { useState } from "react"

export default function ProductForm({onAddProduct}) {
  const [formData, setFormData] = useState({
    id: null,
    image: "",
    name: "",
    type: "",
    description: "",
    origin: "",
    healthBenefits: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function addProduct(productData) {
    try {
      const response = await fetch('http://localhost:3001/beverages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });

      if (!response.ok) {
        throw new Error(`Failed to add product: ${response.status}`);
      }

      const result = await response.json();
      console.log('Product successfully added:', result);
      return result;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error; 
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const newProduct = {
        ...formData,
        id: Date.now()
      };
      const addedProduct = await addProduct(newProduct);
     
      if (onAddProduct) {
        onAddProduct(addedProduct);
      }

      setFormData({
        id: null,
        image: "",
        name: "",
        type: "",
        description: "",
        origin: "",
        healthBenefits: "",
      });
    } catch (error) {
      console.error('Failed to add product:', error);
      alert('Failed to add product. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="max-w-4xl mx-auto space-y-8 bg-zinc-50 p-8 rounded-lg">
      <h1 className="text-4xl font-bold text-purple-900">
        Product form
      </h1>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6 bg-teal-600 p-8 rounded-lg">
        <div>
          <label htmlFor="image" className="block mb-5 text-white">Image:</label>
          <input 
            type="url" 
            id="image"
            name="image"
            value={formData.image}
            placeholder="https://image.com/image.png"
            onChange={handleChange}
            className="w-full p-3 rounded"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 text-white">Name:</label>
          <input 
            type="text" 
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter a new product name"
            onChange={handleChange}
            required
            className="w-full p-3 rounded"
          />
        </div>
        <div>
          <label htmlFor="type" className="block mb-2 text-white">Type:</label>
          <input 
            type="text"
            id="type"
            name="type"
            placeholder="e.g Soda, Tea, Juice"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full p-3 rounded"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 text-white">Description:</label>
          <textarea 
            name="description" 
            id="description" 
            rows={3} 
            value={formData.description}
            placeholder="Describe the above product"
            onChange={handleChange}
            required
            className="w-full p-3 rounded"
          />
        </div>
        <div>
          <label htmlFor="origin" className="block mb-2 text-white">Origin:</label>
          <input
            name="origin"
            id="origin"
            value={formData.origin}
            onChange={handleChange}
            required
            className="w-full p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="healthBenefits" className="block mb-2 text-white">Health Benefits:</label>
          <textarea 
            name="healthBenefits" 
            id="healthBenefits"
            rows={4} 
            value={formData.healthBenefits}
            placeholder="list some health benefits"
            onChange={handleChange}
            required
            className="w-full p-3 rounded"
          />
        </div>
        <div>
          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={submitting}
          >
            {submitting ? "Adding..." : "Add product"}
          </button>
        </div>
      </form>  
    </section>
  );
}