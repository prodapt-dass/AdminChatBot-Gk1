import React from "react";
import "../Styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        {/* Include your SVG logo here */}
        <svg
          className="logo-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {/* SVG content goes here */}
        </svg>
        <div className="logo-text">Sync Hub</div>
      </div>
    </div>
  );
};

export default Navbar;
