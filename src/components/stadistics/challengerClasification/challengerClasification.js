import React, { Component } from "react";
import { throwStatement } from "@babel/types";

class ChallengerClasification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stadistics: []
    };
  }

  componentDidMount() {
    this.setState({
      stadistics: [
        {
          id: 0,
          torneo: "CENARD",
          deporte: "100 metros",
          promedio: "20 segundos"
        },
        {
          id: 1,
          torneo: "CENARD",
          deporte: "200 metros",
          promedio: "35 segundos"
        }
      ]
    });
  }

  render() {
    const { stadistics } = this.state;
    return (
      <>
        <h2 className="text-center">Torneos</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Torneo</th>
              <th scope="col">Deporte</th>
              <th scope="col">Promedio</th>
            </tr>
          </thead>
          <tbody>
            {stadistics.map(stadistic => {
              return (
                <tr>
                  <th scope="row">{stadistic.id}</th>
                  <td>{stadistic.torneo}</td>
                  <td>{stadistic.deporte}</td>
                  <td>{stadistic.promedio}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default ChallengerClasification;
