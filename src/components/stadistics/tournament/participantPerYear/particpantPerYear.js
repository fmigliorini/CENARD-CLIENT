import React, { Component } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

class ParticipantPerYear extends Component {
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
          anio: "2014",
          participantes: 750
        },
        {
          anio: "2015",
          participantes: 800
        },
        {
          anio: "2016",
          participantes: 970
        },
        {
          anio: "2017",
          participantes: 599
        },
        {
          anio: "2018",
          participantes: 870
        },
        {
          anio: "2019",
          participantes: 950
        }
      ]
    });
  }

  render() {
    return (
      <>
        <h3 className="text-center">Participantes por Año</h3>
        <div className="">
          <AreaChart
            width={500}
            height={400}
            data={this.state.data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="anio" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="participantes"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
      </>
    );
  }
}

export default ParticipantPerYear;
