import React, {Component} from 'react';
import './index.less';
import {Avatar, Badge, Popover, Spin} from 'antd';
import API from '../../../apis/apis';
import axios from 'axios';

class Contributors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      loading: false
    };
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos = async () => {
    this.setState({loading: true});
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
        url: repos[i].html_url,
        contributors: res[i]
      });
    }
    this.setState({repos: reposData, loading: false});
  };

  render() {
    function ContributorList(props) {
      const contributor = props.contributor;
      const listItems = contributor.map((contributor, index) =>
        <li key={index} className="team-contributor-li">
          <span style={{marginRight: 24}}>
            <Popover content={contributor.login}>
              <Badge count={contributor.contributions}>
                <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
                  <Avatar shape="square" size="large" src={contributor.avatar_url}/>
                </a>
              </Badge>
            </Popover>
          </span>
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
          this.state.loading ? <Spin /> :
          this.state.repos.map((repo, index) =>
            <div key={index} className="repo">
              <a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
              <ContributorList contributor={repo.contributors}/>
            </div>)
        }
      </div>
    );
  }
}

export default Contributors;