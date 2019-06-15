import React from "react";
import { connect } from "react-redux";
import { loginAction } from "../../actions/login";
import { useFormState } from "react-use-form-state";
import './login.css';

const Login = props => {
  const [formState, { label, email, password }] = useFormState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Login in");
    props.singIn();
  };

  return (
    <>
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            <h3>Ingresar</h3>
          </div>
          <div class="card-body">
            <form>
              <div class="input-group form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Usuario"
                />
              </div>
              <div class="input-group form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Clave"
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
};

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
