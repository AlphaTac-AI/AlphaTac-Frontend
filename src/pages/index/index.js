import React, { PureComponent } from 'react';

import './index.less';
export default class Home extends PureComponent {
  render() {
    return (
      <div className="index-page">
        <div className="logo" />
        <div className="desc">
          <h3>We are AlphaTac AI</h3>
          <h3>use data to discover a new world</h3>
        </div>
      </div>
    );
  }
}
