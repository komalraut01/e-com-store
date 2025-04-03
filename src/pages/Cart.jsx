import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  // ✅ Function to Remove Item from Cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* ✅ Display Cart Items */}
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image || (item.images && item.images[0]) || "placeholder.jpg"}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div>
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* ✅ Proceed to Checkout Button */}
          <div className="checkout-container">
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
