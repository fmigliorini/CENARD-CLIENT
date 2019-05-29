import React, { Component } from "react";
import Tournament from "./tournament/";

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
            <Tournament />
          </div>
          <div className="col-sm-6">
            <p className="text-center">Tournament 3</p>
            <Tournament />
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
