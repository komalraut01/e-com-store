import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [cartItems, setCartItems] = useState([]); // ✅ State for Cart Items

  // ✅ Function to Add Product to Cart
  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <Navbar cart={cartItems} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cartItems} setCart={setCartItems} />} />
        <Route path="/checkout" element={<Checkout cart={cartItems} setCart={setCartItems} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
