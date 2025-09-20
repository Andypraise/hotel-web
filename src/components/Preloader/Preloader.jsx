// src/components/Preloader.jsx
import React from "react";
import "./Preloader.css"; 
import logo from "../../assets/image10.png"; // adjust path to your logo
function Preloader({ loading }) {
  return (
    loading && (
      <div id="preloader">
        <img src={logo} alt="Logo" />
      </div>
    )
  );
}


export default Preloader;
