import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Confidential from './Confidential';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/confidential" component={Confidential} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
