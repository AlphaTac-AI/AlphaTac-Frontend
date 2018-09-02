import React, { Component } from 'react';
import { bound } from "class-bind";

import './index.less';
import Member from '../../common/components/member';


function FetchMemberData(){
  let memberData = [
    {
      firstName: 'Vector',
      lastName: 'Shan',
      photo: 'vector_shan.jpg',
      title: 'Co-Founder/Algorithm Engineer',
    },
    {
      firstName: 'Pei',
      lastName: 'Shang',
      photo: 'pei_shange.jpg',
      title:'Co-Founder/Poject Manager',
    },
    {
      firstName: 'Jackie',
      lastName: 'Wu',
      photo: 'jackie_wu',
      title: 'Software Engineer',
    },
    {
      firstName: 'Jiaming',
      lastName: 'Ning',
      photo: 'jiamin_ning',
      title: 'Software Engineer',
    },
    {
      firstName: 'Bryce',
      lastName: 'Hu',
      title: 'Software Engineer',
    }
  ]

  return memberData;
}

class Team extends Component {

  state = {
    memberData:[]
  }

  componentDidMount(){
    let data = FetchMemberData();
    this.setState({
      memberData: data,
    });
  }

  render() {
    return (
      <div className="team-page">
        <h3>Our Team</h3>
        <div className="team-container">
          {this.state.memberData.map((data,index) => <div className="team-member"><Member key={index} memberData = {data} /></div>)}
        </div>
      </div>
    );
  }

}


export default Team;