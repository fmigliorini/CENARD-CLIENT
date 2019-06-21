import React, { Component } from "react";
import Tournament from "./tournament/";
import ChallengerClasification from "./challengerClasification/";

class Stadistics extends Component {
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
    const { role } = this.props;
    return (
      <>
        <div className="container">
          {role === "admin"
            ? this.getStadisticComponent("tournament")
            : this.getStadisticComponent("personal")}
        </div>
      </>
    );
  }
}

export default Stadistics;
