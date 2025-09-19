import React, { useEffect, useState } from "react";
import axios from "axios";

const FilterProducts = ({ setProducts }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Apply filter
  const applyFilter = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/filter`,
        {
          params: {
            category: selectedCategory,
            minPrice,
            maxPrice,
          },
        }
      );

      // Adjust depending on API response
      setProducts(data.products || data);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };

  // Fetch categories
  const getCategories = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/getCatogery`
      );
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-5">
      <h2 className="text-lg font-semibold mb-4">Filter Products</h2>

      {/* Category Dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full border px-3 py-2 mb-3 rounded"
      >
        <option value="">All Categories</option>
        {categories.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>

      {/* Min & Max Price */}
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="w-full border px-3 py-2 mb-3 rounded"
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="w-full border px-3 py-2 mb-3 rounded"
      />

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          className="flex-1 py-2 bg-black text-white rounded-lg"
          onClick={applyFilter}
        >
          Apply Filter
        </button>
        <button
          className="flex-1 py-2 bg-gray-300 text-black rounded-lg"
          onClick={() => window.location.reload()}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default FilterProducts;
