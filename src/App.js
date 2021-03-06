import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>

    )
    return (
          <div className="full-container">
            {routes}
          </div>
    );
  }
}

export default App;
