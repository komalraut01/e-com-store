import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!name || !address) {
      alert("Please enter your details.");
      return;
    }

    alert("Order placed successfully!");
    setCart([]); // Clear cart after checkout
    navigate("/"); // Redirect to home
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <p>Total Items: {cart.length}</p>
        <button onClick={handleCheckout} className="checkout-btn">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
