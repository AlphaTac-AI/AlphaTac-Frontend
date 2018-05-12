import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Index from './pages/index';
import List from './pages/list';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome Alpha Tac</h1>
      </header>
      <Route exact path="/" component={Index} />
      <Route exact path="/list" component={List} />
    </div>
  </Router>
);

export default App;
