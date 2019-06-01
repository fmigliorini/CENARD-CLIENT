import React from "react";

const singIn = id => {
  alert("Inscribirce al torneo numero: " + id);
};

const Tournament = props => {
  const { id, fechaInicio, fechaFin, deporte, predio } = props.data;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{deporte}</td>
      <td>{fechaInicio}</td>
      <td>{fechaFin}</td>
      <td>{predio}</td>
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
