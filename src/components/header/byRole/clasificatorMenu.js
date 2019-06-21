import React from "react";
import { Link } from "react-router-dom";

const ClasificatorMenu = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/record/">
          Clasificar
        </Link>
      </li>
    </>
  );
};

export default ClasificatorMenu;
