import React, { PureComponent } from 'react';

import './index.less';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="index-page">
        <div className="logo" />
        <div className="desc">
          <h3>We Are AlphaTac AI</h3>
          <h3>Use Data To Discover A New World</h3>
        </div>
      </div>
    );
  }
}
