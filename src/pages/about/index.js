import React, { Component } from 'react';
import Paragraph from "../../common/components/paragraph";
import { Card } from 'antd';
import './index.less';

const { Meta } = Card;

class About extends Component {

  static defaultProps = {
    data: [
      {
        title: '有趣的人工智能应用开发',
        desc: '我们将一起设计和开发有趣的人工智能应用，并基于以下三个目标选择我们的项目',
        cover: 'https://hbimg.huabanimg.com/baa2ec23488ed641e61cef3a5693d8779ca0c6461633a-bcnj8o_fw658',
      },
      {
        title: '机器学习和数据科学竞赛',
        desc: '我们将一起参加机器学习和数据科学的竞赛。利用组织的资源和合作环境',
        cover: 'https://hbimg.huabanimg.com/7377b320579684b08df7df12d84f87effb3ed34d4b04ea-J1Wuy9_fw658',
      },
      {
        title: '资源共享和系统服务',
        desc: '我们致力于创造和维护一个能让应用开发者，研究人员，内容生产者以及具有其他专长的贡献者进行充分合作',
        cover: 'https://hbimg.huabanimg.com/591084be5d9a3794f9c07370f7d2f4ccd33d59efa708-X0H6TN_fw658',
      },
      {
        title: '技术内容的生产与传播',
        desc: '我们将一起进行技术内容的生产：开源代码，撰写博文，制作视频，思考和表达',
        cover: 'https://hbimg.huabanimg.com/05aa7437fbf7c9615173a14ce9b23ca94324b03c627d8-Ylq2uA_fw658',
      }
    ]
  };

  render() {
    const { data } = this.props;
    return (
      <div className="about-page">
        <h1>About Us</h1>
        <div className="card-wrapper">
          {data.map((item, i) =>
            <Card key={i}
                  hoverable
                  className="card"
                  cover={<img className="cover" alt="example" src={item.cover}/>}
            >
              <Meta title={item.title} description={item.desc}/>
            </Card>
          )}


          {/*<Paragraph title={"about.title"} contents={["about.paragraph1", "about.paragraph2","about.paragraph3"]}/>   */}

          {/*<Paragraph title={"about.whatWeAreDoing"} />    */}

          {/*<Paragraph title={"about.attractingAI"} contents={["about.contentOfAttractingAI"]}/>*/}

          {/*<Paragraph title={"about.dataContest"} contents={["about.contentOfDataContest"]}/>*/}

          {/*<Paragraph title={"about.resourceSharing"} contents={["about.contentOfResourceSharing"]}/>*/}

          {/*<Paragraph title={"about.technology"} contents={["about.contentOfTechnology"]}/>*/}

          {/*<Paragraph title={"about.researchOfAI"} contents={["about.contentOfResearchOfAI"]}/>*/}

        </div>
      </div>
    );
  }
}

export default About;
