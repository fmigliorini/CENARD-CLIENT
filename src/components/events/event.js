import React, { Component } from "react";
import Tournament from "./tournament/";

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tournaments: []
    };
  }

  componentDidMount() {
    this.setState({
      tournaments: [
        {
          id: 0,
          fechaInicio: '25/11/2019',
          fechaFin: '27/11/2019',
          deporte: 'Pista',
          predio: 'Cenard'
        },
        {
          id: 2,
          fechaInicio: '28/11/2019',
          fechaFin: '30/11/2019',
          deporte: 'Acuatico',
          predio: 'Cenard'
        }
        ,{
          id: 2,
          fechaInicio: '28/11/2019',
          fechaFin: '30/11/2019',
          deporte: 'Pista/Campo',
          predio: 'Cenard'
        }
      ]
    });
  }

  render() {
    const { tournaments } = this.state;
    return (
      <>
        <h2 className="text-center">Torneos</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Deporte</th>
              <th scope="col">Fecha inicio</th>
              <th scope="col">Fecha fin</th>
              <th scope="col">Predio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tournaments.map(tournament => {
              return <Tournament key={tournament.id} data={tournament} />;
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Events;
