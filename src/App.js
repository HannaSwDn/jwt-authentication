import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Confidential from './Confidential';
import Nav from './Nav';
import { CentralProvider } from './CentralContext';
import './App.css';

function App() {
  return (
    <Router>
      <CentralProvider>
        <Nav />
        <Switch>
          <div className="App">
            <Route path="/" exact component={Home} />
            <Route path="/confidential" component={Confidential} />
          </div>
        </Switch>
      </CentralProvider>
    </Router>
  );
}

export default App;
