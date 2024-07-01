import React, { useState } from "react";
import "./NavBar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo"></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Inicio</a>
        <a href="/about">Sobre</a>
        <a href="/service">Serviço</a>
        <a href="/contact">Contato</a>
      </div>

    </div>
  );
};

export default Navbar;