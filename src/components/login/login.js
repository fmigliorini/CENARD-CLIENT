import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../actions/login";
import { useFormState } from "react-use-form-state";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
    this.handleSubmit.bind(this);
    this.handleUsername.bind(this);
    this.handlePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleUsername(event) {
    this.setState({
      userName: event.target.value
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
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3> {`Ingresar`} </h3>
            </div>
            <div class="card-body">
              <form onSubmit={this.handleSubmit}>
                <div class="input-group form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Usuario"
                    value={this.state.username}
                    onChange={this.handleUsername}
                  />
                </div>
                <div class="input-group form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Clave"
                    value={this.state.password}
                    onChange={this.handlePassword}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Ingresar"
                    class="btn float-right login_btn"
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
  singIn: () => {
    console.log(loginAction());
    dispatch(loginAction());
  }
});

export default connect(
  null,
  mapDispatchToPros
)(Login);
