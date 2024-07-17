import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';
import logo from '../assets/img/argentBankLogo.png'; // Importez l'image ici

const NavBar = () => (
  <nav className="main-nav">
    <Link className="main-nav-logo" to="/">
      <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" /> {/* Utilisez l'image importée ici */}
    </Link>
    <div>
      <Link className="main-nav-item" to="/sign-in">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  </nav>
);

export default NavBar;
