import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register/">
              Nuevo Atleta
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/events/">
              Eventos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/record/">
              Record
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stadistics/">
              Stadistics
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio/">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login/">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
