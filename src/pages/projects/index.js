import React, { Component } from 'react';

import './index.less';
import Card from './components/card';


class DataScienceContestPage extends Component {
  render(){
    return (
      <h1>数据科学竞赛</h1>
    )
  }
}

class TechBlogPage extends Component {
  render(){
    return (
      <h1>技术博客</h1>
    )
  }
}






class ProjectsPage extends Component {

  static defaultProps = {
    data: [{
      title: 'Europe Street beat',
      desc: 'www.instagram.com',
      cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535905239887&di=d3a2eab375a56874e6306238ff9f4e28&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Fed88757c320d91865275015d1c47e94626d4a691.jpg',
      link: '/some-page',
    }, {
      title: 'Europe Street beat',
      desc: 'www.instagram.com',
      cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    }, {
      title: 'Europe Street beat',
      desc: 'www.instagram.com',
      cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535908367350&di=ded378f2ea2247c2416b280275bbc06e&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F171024%2F74-1G024093F9-50.jpg',
    }, {
      title: 'Europe Street beat',
      desc: 'www.instagram.com',
      cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535905239887&di=d3a2eab375a56874e6306238ff9f4e28&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Fed88757c320d91865275015d1c47e94626d4a691.jpg'
    }, {
      title: 'Europe Street beat',
      desc: 'www.instagram.com',
      cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    }, {
      title: 'Europe Street beat',
      desc: 'www.instagram.com',
      cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535908367350&di=ded378f2ea2247c2416b280275bbc06e&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F171024%2F74-1G024093F9-50.jpg',
    }, {
      title: 'Europe Street beat',
      desc: 'www.instagram.com',
      cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535905239887&di=d3a2eab375a56874e6306238ff9f4e28&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Fed88757c320d91865275015d1c47e94626d4a691.jpg'
    }, {
      title: 'Europe Street beat',
      desc: 'www.instagram.com',
      cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    }, {
      title: 'Europe Street beat',
      desc: 'www.instagram.com',
      cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535908367350&di=ded378f2ea2247c2416b280275bbc06e&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F171024%2F74-1G024093F9-50.jpg',
    }, {
      title: 'Europe Street beat',
      desc: 'www.instagram.com',
      cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535905239887&di=d3a2eab375a56874e6306238ff9f4e28&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Fed88757c320d91865275015d1c47e94626d4a691.jpg'
    }, {
      title: 'Europe Street beat',
      desc: 'www.instagram.com',
      cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    }, {
      title: 'Europe Street beat',
      desc: 'www.instagram.com',
      cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535908367350&di=ded378f2ea2247c2416b280275bbc06e&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F171024%2F74-1G024093F9-50.jpg',
    }, {
      title: 'Europe Street beat',
      desc: 'www.instagram.com',
      cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535908367350&di=ded378f2ea2247c2416b280275bbc06e&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F171024%2F74-1G024093F9-50.jpg',
    }]
  }
  
  render() {
    const { data, history } = this.props;
    return (
      <div className="project-page">
        <div className="card-container">
          {data.map((item, i) => <Card key={i} {...item} history={history} />)}
        </div>
      </div>
    );
  }
}


export default ProjectsPage
