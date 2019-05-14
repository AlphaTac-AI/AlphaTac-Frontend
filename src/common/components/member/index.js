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
