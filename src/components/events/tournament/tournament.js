import React from "react";

const singIn = id => {
  alert("Inscribirce al torneo numero: " + id);
};

const Tournament = props => {
  const { id, name, cant } = props.data;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{cant}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => singIn(id)}
        >
          Inscribirce
        </button>
      </td>
    </tr>
  );
};

export default Tournament;
