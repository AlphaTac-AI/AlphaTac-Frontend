import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import './index.less';

const { Content } = Layout;

class Home extends PureComponent {
  render() {
    return (
      <div className="index-page">
        <div className="desc">
          <Layout>
            <Content>
              <div className="logo" />
              <h3>We are AlphaTac</h3>
              <h3>AI for Productivity Freedom</h3>
            </Content>
          </Layout>
          
        </div>
      </div>
    );
  }
}

export default Home;
