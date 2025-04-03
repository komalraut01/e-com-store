import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // ✅ Fetch Categories First
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // ✅ Fetch Products (Re-fetch when category changes)
  useEffect(() => {
    let url = "https://api.escuelajs.co/api/v1/products";
    if (selectedCategory) {
      url += `/?categoryId=${selectedCategory}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 20))) // Show 8 products
      .catch((error) => console.error("Error fetching products:", error));
  }, [selectedCategory]);

  return (
    <div>
      <h2>Products</h2>

      {/* ✅ Category Filter Dropdown */}
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* ✅ Product List */}
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
