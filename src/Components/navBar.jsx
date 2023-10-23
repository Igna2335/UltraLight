import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link to="/rutas-domicilios">Rutas y Domicilios</Link>
        </li>
        <li className="navbar-item">
          <Link to="/conocenos">Conócenos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contacto">Contacto</Link>
        </li>
        <li className="navbar-item">
          <Link to="/soporte">Soporte</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
