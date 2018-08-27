import React, { Component } from 'react';

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
      title:'Co-Founder/Poject Manager',
    },
    {
      firstName: 'Jackie',
      lastName: 'Wu',
      title: 'Software Engineer',
    },
    {
      firstName: 'Jiaming',
      lastName: 'Ning',
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

export default class Home extends Component {

  constructor(){
    super()
    this.state = {
      memberData:[]
    }
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
        <div className="team-members">
          {this.state.memberData.map((data,index) => <Member key={index} memberData = {data} />)}
        </div>
      </div>
    );
  }

}
