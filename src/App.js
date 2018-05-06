import React, { Component } from 'react';
import logo from './logo.svg';
import { getMatches } from './service';
import './App.css';
import LiveTable from './components/LiveTable';

class App extends Component {
  state = {
    lives: [],
  }

  componentWillMount() {
    getMatches().then((lives) => this.setState({ lives }));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Alpha Tac</h1>
        </header>
        <LiveTable data={this.state.lives} />
      </div>
    );
  }
}

export default App;
