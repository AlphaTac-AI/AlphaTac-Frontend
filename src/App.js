import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Index from './pages/index';
import List from './pages/list';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <div className="App-logo"><div className="App-logo-icon">AT</div></div>
        <h1 className="App-title">Welcome to Alpha Tac</h1>
      </header>
      <Route exact path="/" component={Index} />
      <Route exact path="/list" component={List} />
    </div>
  </Router>
);

export default App;
