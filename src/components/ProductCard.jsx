import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>

      <div className="product-buttons">
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          🛒 Add to Cart
        </button>
        <Link to={`/product/${product.id}`} className="view-details-btn">
          🔍 View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
