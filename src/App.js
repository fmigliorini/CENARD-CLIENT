import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
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
import new_deportista from "./components/new_deportista/";
import list_deportista from "./components/list_deportista/";
import new_clasificador from "./components/new_clasificador/";
import list_clasificador from "./components/list_clasificador/";

class App extends Component {
  
  render() {
    return (
      <Router>
        <Header />
        <div className="body-container container-fluid">
          <Route path="/" exact component={Home} />
          <Route path="/login/" component={Login} />
          <Route path="/register/" component={Register} />
          <PrivateRoute authed={this.props.authenticate} path="/events/" component={Events} />
          <PrivateRoute authed={this.props.authenticate} path="/record/" component={Record} />
          <PrivateRoute authed={this.props.authenticate} path="/stadistics/" component={Stadistics} />
          <PrivateRoute authed={this.props.authenticate} path="/portfolio/" component={Portfolio} />
          <PrivateRoute authed={this.props.authenticate} path="/new_deportista/" component={new_deportista} />
          <PrivateRoute authed={this.props.authenticate} path="/list_deportista/" component={list_deportista} />
          <PrivateRoute authed={this.props.authenticate} path="/new_clasificador/" component={new_clasificador} />
          <PrivateRoute authed={this.props.authenticate} path="/list_clasificador/" component={list_clasificador} />
        </div>
      </Router>
    );
  }

}

const mapStateToProps = state => ({
  authenticate: state.auth.authenticate,
  rol: state.auth.rol,
});

export default connect(mapStateToProps)(App);






