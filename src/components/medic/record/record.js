import React, { Component } from "react";

class Record extends Component {
  handleSubmit = (event) => {
      event.preventDefault();
      console.log("Save");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>{`Clasificación`}</label>
            <select id="inputState" className="form-control">
              <option>{`NTF30`}</option>
              <option>{`NTF30`}</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Clasificar
        </button>
      </form>
    );
  }
}

export default Record;
