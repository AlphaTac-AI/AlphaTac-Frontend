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

        <h3>{<FormattedMessage id="about.whatWeAreDoing"/>}</h3>
        <div>
          <h3>{<FormattedMessage id="about.attractingAI"/>}</h3>
          <p>{<FormattedMessage id="about.contentOfAttractingAI"/>}</p>
        </div>

        <div>
          <h3>{<FormattedMessage id="about.dataContest"/>}</h3>
          <p>{<FormattedMessage id="about.contentOfDataContest"/>}</p>
        </div>

        <div>
          <h3>{<FormattedMessage id="about.resourceSharing"/>}</h3>
          <p>{<FormattedMessage id="about.contentOfResourceSharing"/>}</p>
        </div>

        <div>
          <h3>{<FormattedMessage id="about.technology"/>}</h3>
          <p>{<FormattedMessage id="about.contentOfTechnology"/>}</p>
        </div>

        <div>
          <h3>{<FormattedMessage id="about.researchOfAI"/>}</h3>
          <p>{<FormattedMessage id="about.contentOfResearchOfAI"/>}</p>
        </div>
      </div>
    );
  }
}
