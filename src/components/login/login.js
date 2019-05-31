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
      <form onSubmit={handleSubmit}>
        <label {...label("email")}>Email</label>
        <input {...email({ name: "email" })} required />

        <label {...label("password")}>Password</label>
        <input {...password("password")} required minLength="8" />

        <button>Submit</button>
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
