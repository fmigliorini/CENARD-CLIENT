import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { PrivateRoute } from "./helper/privateRouter";

import "./App.css";
import Header from "./components/header/";
import Login from "./components/login/";
import Register from "./components/register/";
import Events from "./components/events/";
import Home from "./components/home/";
import Record from "./components/medic/record/";
import Stadistics from "./components/stadistics/";
import Portfolio from "./components/portfolio/";

import { getUserLoggedAction, logOutAction } from "./actions/login";

class App extends Component {
  componentDidMount() {
    // isLoggedIn??
      // this.props.tryLogin();
  }

  render() {
    return (
      <Router>
        <Header />
        <div className="body-container container-fluid">
          <Route path="/" exact component={Home} />
          <Route path="/login/" component={Login} />
          <Route path="/register/" component={Register} />
          <PrivateRoute
            authed={this.props.authenticate}
            path="/events/"
            component={Events}
          />
          <PrivateRoute
            authed={this.props.authenticate}
            path="/record/"
            component={Record}
          />
          <PrivateRoute
            authed={this.props.authenticate}
            path="/stadistics/"
            component={Stadistics}
          />
          <PrivateRoute
            authed={this.props.authenticate}
            path="/portfolio/"
            component={Portfolio}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  authenticate: state.auth.authenticate,
  rol: state.auth.rol
});

const mapDispatchToPros = dispatch => ({
  logout: payload => {
    dispatch(logOutAction(payload));
  },
  tryLogin: () => {
    dispatch(getUserLoggedAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(App);
