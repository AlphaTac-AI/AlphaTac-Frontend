import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import './index.less';

export default class Home extends Component {
  render() {
    return (
      <div className="about-page">
        <div>
          <h3>{<FormattedMessage id="about.title"/>}</h3>
          <p>{<FormattedMessage id="about.paragraph1"/>}</p>
          <p>{<FormattedMessage id="about.paragraph2"/>}</p>
        </div>
      </div>
    );
  }
}
