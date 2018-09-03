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
              <h3>我们是 AlphaTac AI</h3>
              <h3>用人工智能驱动生产力的自由</h3>
            </Content>
          </Layout>
          
        </div>
      </div>
    );
  }
}

export default Home;
