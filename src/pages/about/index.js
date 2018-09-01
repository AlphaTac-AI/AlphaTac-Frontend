import React, { Component } from 'react';
import Paragraph from "../../common/components/paragraph";

import './index.less';

class About extends Component {
  render() {
    return (
      <div className="about-page">

        <Paragraph title={"about.title"} contents={["about.paragraph1", "about.paragraph2","about.paragraph3"]}/>   

        <Paragraph title={"about.whatWeAreDoing"} />    
        
        <Paragraph title={"about.attractingAI"} contents={["about.contentOfAttractingAI"]}/>

        <Paragraph title={"about.dataContest"} contents={["about.contentOfDataContest"]}/>
        
        <Paragraph title={"about.resourceSharing"} contents={["about.contentOfResourceSharing"]}/>

        <Paragraph title={"about.technology"} contents={["about.contentOfTechnology"]}/>
    
        <Paragraph title={"about.researchOfAI"} contents={["about.contentOfResearchOfAI"]}/>

      </div>
    );
  }
}

export default About;
