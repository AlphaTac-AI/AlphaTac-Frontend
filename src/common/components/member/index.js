import React, { Component } from 'react';
import './index.less';

const defaultPhoto = 'default.jpg';

class Member extends Component {

    constructor(props){
        super(props);
        this.state = {
            memberData: props.memberData,
        }
    }

    render(){
        const memberData = this.state.memberData
<<<<<<< HEAD
=======
        let photo = defaultPhoto;
        const photoRoot = '../../media/member_photos/'
        if(this.state.memberData.photo){
            photo = this.state.memberData.photo;
        }
        
        const photoSrc = photoRoot + photo;
        console.log("photoSrc: ", photoSrc);
>>>>>>> dev

        return (
            <div>
                <img className="round-photo" src={this.state.memberData.photo} />
                <div className="member-info">
                    <h3> {memberData.firstName}   {memberData.lastName} </h3>
                    <p> {memberData.title}</p>
                </div>
            </div>
            
        );
    }

}

export default Member;
