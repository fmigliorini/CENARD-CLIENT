import React, { Component } from "react";
import Tournament from "./tournament/";
import ChallengerClasification from "./challengerClasification/";

class Stadistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "tournament"
    };
    this.changeStadistic.bind(this);
  }

  changeStadistic(type) {
    this.setState({
      type
    });
  }

  getStadisticComponent(type) {
    switch (type) {
      case "tournament":
        return <Tournament />;
      case "personal":
        return <ChallengerClasification />;
      default:
        return null;
    }
  }

  render() {
    const { type } = this.state;

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="buttons">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => {
                  this.changeStadistic("tournament");
                }}
              >
                Torneo
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => {
                  this.changeStadistic("personal");
                }}
              >
                Personal
              </button>
            </div>
          </div>
          {this.getStadisticComponent(type)}
        </div>
      </>
    );
  }
}

export default Stadistics;
