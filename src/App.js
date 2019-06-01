import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/";
import Login from "./components/login/";
import Register from "./components/register/";
import Events from "./components/events/";
import Home from "./components/home/";
import Record from "./components/medic/record/";
import Stadistics from "./components/stadistics/";
import Portfolio from "./components/portfolio/";

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
        <Route path="/events/" component={Events} />
        <Route path="/record/" component={Record} />
        <Route path="/stadistics/" component={Stadistics} />
        <Route path="/portfolio/" component={Portfolio} />
      </div>
    </Router>
  );
};

export default App;
