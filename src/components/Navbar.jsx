import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ROSERY</div>

      <ul className="nav-links">
        <li><a href="#home">Ana Sayfa</a></li>
        <li><a href="#about">Hakkımızda</a></li>
        <li><a href="#apartments">Daireler</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>

     
    </nav>
  );
}

export default Navbar;
