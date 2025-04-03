import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig"; // ✅ Firebase Auth Import
import { signOut } from "firebase/auth";
import logo from "../assets/logo.png"; // ✅ Import logo
import "../styles.css"; // ✅ Import styles

function Navbar({ cart = [] }) {
  const [user, setUser] = useState(null);

  // ✅ Track user authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Cleanup listener
  }, []);

  // ✅ Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="E-Commerce Logo" className="logo" />
        </Link>
        <h1 className="site-title">E-Commerce</h1>
      </div>
      
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">
          Cart <span className="cart-count">({cart.length})</span>
        </Link>

        {user ? (
          <>
            <span className="user-welcome">Welcome, {user.displayName || "User"}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
