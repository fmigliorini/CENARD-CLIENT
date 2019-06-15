import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  console.log("admin menu");
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/events/">
          Eventos
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/stadistics/">
          Stadistics
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/register/">
          Registrarse
        </Link>
      </li>
    </>
  );
};

export default AdminMenu;
