import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../../assets/image10.png";
import menuImage from "../../assets/image11.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 👈 state for overlay

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo">
            <img src={logoImage} alt="Logo" width="160px" height="87px" />
          </div>
          <ul className="nav-menu">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/room">ROOMS</Link></li>
            <li><Link to="/event">EVENTS</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
          <div className="menu" onClick={() => setIsOpen(true)}>
            <img src={menuImage} alt="menu" />
          </div>
        </div>
      </nav>

      {/* Overlay Menu */}
      {isOpen && (
        <div className="overlay">
          <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
            <li><Link to="/room" onClick={() => setIsOpen(false)}>ROOMS</Link></li>
            <li><Link to="/event" onClick={() => setIsOpen(false)}>EVENTS</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
