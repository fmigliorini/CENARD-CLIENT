import React, { Component } from "react";
import Tournament from "./tournament/";
import ParticipantPerTournament from "./tournament/participantPerTournament/";
import ParticipantPerYear from './tournament/participantPerYear/';

class Stadistics extends Component {
  render() {
    return (
      <>
        <div className="row" >
          <div className="col-sm-6">
            <p className="text-center">Tournament 1</p>
            <Tournament />
          </div>
          <div className="col-sm-6">
            <p className="text-center">Tournament 2</p>
            <ParticipantPerTournament />
          </div>
          <div className="col-sm-6">
            <p className="text-center">Tournament 3</p>
            <ParticipantPerYear />
          </div>
          <div className="col-sm-6">
            <p className="text-center">Tournament 4</p>
            <Tournament />
          </div>
        </div>
      </>
    );
  }
}

export default Stadistics;
