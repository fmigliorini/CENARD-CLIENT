import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../actions/login";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.singIn(
      {
        email: this.state.email,
        password: this.state.password,
      }
    );
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3> {`Ingresar`} </h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmail}
                  />
                </div>
                <div className="input-group form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Clave"
                    value={this.state.password}
                    onChange={this.handlePassword}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Ingresar"
                    className="btn float-right login_btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToPros = dispatch => ({
  singIn: (payload) => {
    dispatch(loginAction(payload));
  }
});

export default connect(
  null,
  mapDispatchToPros
)(Login);
