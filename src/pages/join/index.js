import React, { Component } from 'react';
import Paragraph from "../../common/components/paragraph";

import './index.less';

export default class Home extends Component {
  render() {
    return (
      <div className="join-page">
        <Paragraph title="加入我们" contents={["join.applicationGuide"]}/>   
        <Paragraph title="关于面试" contents={["join.aboutInterview"]}/>  

      </div>
    );
  }
}
