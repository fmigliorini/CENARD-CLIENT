import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

class ParticipantPerTournament extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    this.setState({
      data: [
        {
          nombre: "Torneo A",
          participantes: 3876
        },
        {
          nombre: "Torneo B",
          participantes: 2987
        },
        {
          nombre: "Torneo C",
          participantes: 2103
        },
        {
          nombre: "Torneo D",
          participantes: 765
        },
        {
          nombre: "Torneo E",
          participantes: 1234
        }
      ]
    });
  }

  render() {
    return (
      <>
        <h3 className="text-center">Participantes por torneo</h3>
        <div className="">
          <BarChart width={500} height={300} data={this.state.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="participantes" fill="#8884d8" />
          </BarChart>
        </div>
      </>
    );
  }
}

export default ParticipantPerTournament;
