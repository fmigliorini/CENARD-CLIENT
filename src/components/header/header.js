import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ADMIN, DEPORTIST, CLASIFICADOR } from "../../constants/roles";
import DeportistMenu from "./byRole/deportistMenu";
import AdminMenu from "./byRole/adminMenu";
import ClasificatorMenu from "./byRole/clasificatorMenu";

class Header extends Component {

  getMenuByRole(role) {
    switch (role) {
      case ADMIN:
        return <AdminMenu />;
      case DEPORTIST:
        return <DeportistMenu />;
      case CLASIFICADOR:
        return <ClasificatorMenu />;
      default:
        return null;
    }
  }

  render() {
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
              <Link className="nav-link" to="/login/">
                Ingresar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register/">
                Registrarse
              </Link>
            </li>

            {!this.props.isAuth ? null : this.getMenuByRole(this.props.rol)}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
