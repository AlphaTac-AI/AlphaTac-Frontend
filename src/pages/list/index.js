import React, { Component } from 'react';
import { getMatches } from '../../service';
import LiveTable from '../../components/LiveTable';

export default class App extends Component {
  state = {
    lives: [],
  }

  componentWillMount() {
    getMatches().then((lives) => this.setState({ lives }));
  }

  render() {
    return (
      <div className="index">
        <LiveTable data={this.state.lives} />
      </div>
    );
  }
}
