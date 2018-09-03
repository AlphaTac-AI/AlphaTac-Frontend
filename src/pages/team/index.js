import React, { Component } from 'react';

import './index.less';
import Member from '../../common/components/member';


function FetchMemberData(){
  let memberData = [
    {
      firstName: 'Vector',
      lastName: 'Shan',
      photo: require("../../common/media/member_photos/vector_shan.jpg"),
      title: 'Co-Founder/Algorithm Engineer',
    },
    {
      firstName: 'Pei',
      lastName: 'Shang',
      photo: require("../../common/media/member_photos/pei_shang.jpg"),
      title:'Co-Founder/Project Manager',
    },
    {
      firstName: 'X-Man',
      lastName: 'Hu',
      photo: require("../../common/media/member_photos/bryce_hu.jpg"),
      title: 'Software Engineer',
    },
    {
      firstName: 'Jiamin',
      lastName: 'Ning',
      photo: require("../../common/media/member_photos/jiamin_ning.jpg"),
      title: 'Software Engineer',
    },
    {
      firstName: 'Jackie',
      lastName: 'Wu',
      photo: require("../../common/media/member_photos/jackie_wu.jpg"),
      title: 'Software Engineer',
    },
    {
      firstName: 'Minhua',
      lastName: 'Chen',
      photo: require("../../common/media/member_photos/minhua_chen.jpg"),
      title: 'Software Engineer',
    },
    {
      firstName: 'Jing',
      lastName: 'Xu',
      photo: require("../../common/media/member_photos/jing_xu.jpg"),
      title: 'Software Engineer',
    },
    {
      firstName: 'Changlong',
      lastName: 'Ye',
      photo: require("../../common/media/member_photos/default.jpg"),
      title: 'Software Engineer',
    },
    {
      firstName: 'Jason',
      lastName: 'Xu',
      photo: require("../../common/media/member_photos/jason_xu.jpg"),
      title: 'Contributor',
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
        <h1>Our Team</h1>
        <div className="team-container">
          {this.state.memberData.map((data,index) => <div className="team-member" key={index}><Member memberData = {data} /></div>)}
        </div>
      </div>
    );
  }

}


export default Team;