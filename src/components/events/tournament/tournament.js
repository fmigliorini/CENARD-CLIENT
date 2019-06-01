import React from "react";

const Tournament = props => {
  const { id, name, cant } = props.data;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{cant}</td>
    </tr>
  );
};

export default Tournament;
