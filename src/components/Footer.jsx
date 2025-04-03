import React from "react";
import "../styles.css"; // Make sure this file is linked

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My E-Commerce Website | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
