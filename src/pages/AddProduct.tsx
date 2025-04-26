import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../firebase/products";
import { toaster } from "../components/ui/toaster";

const AddProduct: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.stock) {
      toaster.create({
        title: "Name, Price and Stock are required.",
        description: "please fill followings",
        duration: 3000,
      });
      return;
    }
    const data = {
      name: form.name,
      category: form.category || "Uncategorized",
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
    };

    console.log(data);
    setLoading(true);
    await addProduct(data);
    setLoading(false);
    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={form.name}
              onChange={handleChange}
              className="w-full border text-white border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              value={form.category}
              onChange={handleChange}
              className="w-full border text-white border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={form.price}
              onChange={handleChange}
              className="w-full border text-white border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              placeholder="Enter stock quantity"
              value={form.stock}
              onChange={handleChange}
              className="w-full border text-white border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition"
          >
            {loading ? "Saving..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
