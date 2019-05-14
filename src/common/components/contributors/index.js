import React, {Component} from 'react';
import './index.less';
import {Avatar, Badge, Popover} from 'antd';
import API from '../../../apis/apis';
import axios from 'axios';

class Contributors extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    this.getRepos();
  }

  getRepos = async () => {
    let repos = await API.listRepos();
    let reqs = [];
    for (let repo of repos) {
      reqs.push(API.listContributors(repo.name));
    }
    let res = await axios.all(reqs);
    let reposData = [];
    for (let i = 0; i < repos.length; i++) {
      reposData.push({
        name: repos[i].name,
        contributors: res[i]
      });
    }
    this.setState({repos: reposData})
  };

  render() {
    function ContributorList(props) {
      const contributor = props.contributor;
      const listItems = contributor.map((contributor, index) =>
        <li key={index} className="team-contributor-li">
          <span style={{marginRight: 24}}>
            <Popover content={contributor.login}>
              <Badge count={contributor.contributions}><Avatar shape="square" size="large" src={contributor.avatar_url}/></Badge>
            </Popover>
          </span>
          {/*{contributor.login}*/}
        </li>
      );
      return (
        <ul>{listItems}</ul>
      );
    }

    return (
      <div className="contributor">
        <h1>Contributors</h1>
        {
          this.state.repos.map((repo, index) =>
            <div key={index} className="repo">
              <div>{repo.name}</div>
              <ContributorList contributor={repo.contributors}/>
            </div>)
        }
      </div>
    );
  }
}

export default Contributors;