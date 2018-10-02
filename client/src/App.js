import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles.js"
import Saved from "./pages/Saved.js"
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import NoMatch from "./pages/NoMatch";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className ="container-fluid">
        <Jumbotron />
        <Router>
          <div>
            
            <Switch>
              <Route exact path="/" component={Articles} />
              <Route exact path="/saved" component={Saved} />
              <Route component={NoMatch} />
            </Switch>
            </div>
        </Router>

      </div>
    );
  }
}

export default App;
