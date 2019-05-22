import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from './components/header/'; 
import Login from './components/login/';
import Register from './components/register/';
import Events from './components/events/';
import Home from './components/home/';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
        <Route path="/events/" component={Events} />
      </div>
    </Router>
  );
};

export default App;
