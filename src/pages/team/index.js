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
      title:'Co-Founder/Poject Manager',
    },
    {
      firstName: 'Jackie',
      lastName: 'Wu',
      photo: require("../../common/media/member_photos/jackie_wu.jpg"),
      title: 'Software Engineer',
    },
    {
      firstName: 'Jiaming',
      lastName: 'Ning',
      photo: require("../../common/media/member_photos/jiamin_ning.jpg"),
      title: 'Software Engineer',
    },
    {
      firstName: 'Bryce',
      lastName: 'Hu',
      photo: require("../../common/media/member_photos/default.jpg"),
      title: 'Software Engineer',
    },
    {
      firstName: 'Jason',
      lastName: 'Xu',
      photo: require("../../common/media/member_photos/jason_xu.jpeg"),
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
<<<<<<< HEAD
        <h2>Our Team</h2>
=======
        <h3>我们的团队</h3>
>>>>>>> dev
        <div className="team-container">
          {this.state.memberData.map((data,index) => <div className="team-member" key={index}><Member memberData = {data} /></div>)}
        </div>
      </div>
    );
  }

}


export default Team;