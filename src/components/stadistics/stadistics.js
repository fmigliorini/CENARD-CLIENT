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
    const { rol } = this.props;
    console.log(rol);
    return (
      <>
        <div className="container">
          {rol === "admin" && this.getStadisticComponent("tournament") }
          {rol === "deportista" && this.getStadisticComponent("personal") }
        </div>
      </>
    );
  }
}

export default Stadistics;
