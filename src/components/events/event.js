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
          id: 1,
          name: "CEDIN",
          cant: 10
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
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad Parcipantes</th>
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
