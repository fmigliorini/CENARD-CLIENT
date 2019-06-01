import React, { Component } from "react";
import ParticipantPerTournament from "./participantPerTournament/";
import ParticipantPerYear from './participantPerYear/';

class Tournament extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          subject: "Formosa",
          A: 200,
          B: 110,
          fullMark: 200
        },
        {
          subject: "Buenos Aires",
          A: 98,
          B: 130,
          fullMark: 150
        },
        {
          subject: "Cacho",
          A: 86,
          B: 130,
          fullMark: 150
        },
        {
          subject: "Tierra del fuego",
          A: 99,
          B: 100,
          fullMark: 150
        },
        {
          subject: "Physics",
          A: 85,
          B: 90,
          fullMark: 150
        },
        {
          subject: "History",
          A: 65,
          B: 85,
          fullMark: 150
        }
      ]
    };
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-sm-6">
            <ParticipantPerTournament />
          </div>
          <div className="col-sm-6">
            <ParticipantPerYear />
          </div>
        </div>
      </>
    );
  }
}

export default Tournament;
