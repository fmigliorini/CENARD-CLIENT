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
        <Link className="nav-link" to="/list_clasificador/">
          Lista Clasificadores
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/new_clasificador/">
          Nuevo Clasificador
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/list_deportistas/">
          Lista Deportistas
        </Link>
      </li>
    </>
  );
};

export default AdminMenu;
