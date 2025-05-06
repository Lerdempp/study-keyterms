import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const linkStyle = (active) => ({
    color: active ? "#000" : "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    fontWeight: active ? "500" : "400",
    lineHeight: "20px",
    cursor: "pointer",
    textDecoration: "none",
  });

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "24px 141px",
        boxSizing: "border-box",
      }}
    >
      {/* Navbar Menu */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <Link to="/" style={linkStyle(isActive("/"))}>
          Home
        </Link>
        <Link to="/sheets" style={linkStyle(isActive("/sheets"))}>
          Study Sheets
        </Link>
        <Link to="/words" style={linkStyle(isActive("/words"))}>
          Words
        </Link>
        <Link to="/blog-details" style={linkStyle(isActive("/blog-details"))}>
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
