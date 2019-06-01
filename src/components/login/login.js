import React from "react";
import { connect } from "react-redux";
import { loginAction } from "../../actions/login";
import { useFormState } from "react-use-form-state";

const Login = (props) => {
  const [formState, { label, email, password }] = useFormState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login in");
    props.singIn();
  }

  return (
    <>
    <br/>
     <form>
      
      <div class="col jumbotron">
      <div class="form-group">
    <label for="Email">Email</label>
    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Ingresar email" />
      </div>
      <div class="form-group">
    <label for="Password">Contrase&ntilde;a</label>
    <input type="password" class="form-control" id="Password" placeholder="Contrase&ntilde;a" />
    </div>
      
      <div>
        <button type="submit" class="btn btn-primary">Ingresar</button>
      </div>
    </div>

    </form>
    </>
  );
};

const mapDispatchToPros = dispatch => ({
  singIn: () => {
    console.log(loginAction());
    dispatch(loginAction());
  }
});

export default connect(null, mapDispatchToPros)(Login);
