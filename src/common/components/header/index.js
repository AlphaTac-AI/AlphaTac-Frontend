import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { Layout, Icon, Drawer, Menu } from 'antd';
import { FormattedMessage } from 'react-intl';
import { bound } from "class-bind";
import debounce from "lodash.debounce";
import { mobileScreen } from "../../../utilities/size";

import './index.less';

const { SubMenu, ItemGroup, Item } = Menu;

class Header extends Component {

    state = {
      current: 'mail',
      screenSize: window.innerWidth,
      isDrawerVisible: false
    };

    componentDidMount() {
      window.addEventListener("resize", debounce(this.screenSizeChange,mobileScreen));
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.screenSizeChange);
    }

    @bound
    screenSizeChange() {
      this.setState({ screenSize: window.innerWidth });
    }

    @bound
    openDrawer() {
      this.setState({ isDrawerVisible: true });
    }

    @bound
    closeDrawer() {
      this.setState({ isDrawerVisible: false });
    }

    renderMenu(isMobile) {
      return (
        <Menu theme={isMobile ? 'light' : 'dark'} mode={isMobile ? 'vertical' : 'horizontal'}
          style={isMobile ? { width: 200, marginTop: "45px" } : null}>
          <Item key="home"><Link to="/">{<FormattedMessage id="header.home"/>}</Link></Item>
          <Item key="projects"><Link to="/projects">{<FormattedMessage id="header.projects"/>}</Link></Item>
          {/*<SubMenu key="projects" title={*/}
              {/*<FormattedMessage id="header.projects"/>*/}
            {/*}>*/}
            {/*<Item key="setting:1"><Link to="/projects/ai-application">人工智能应用</Link></Item>*/}
            {/*<Item key="setting:2"><Link to="/projects/ai-contest">数据科学竞赛</Link></Item>*/}
            {/*<Item key="setting:3"><Link to="/projects/tech-content" >技术内容生产</Link></Item>*/}
            {/*<Item key="setting:4"><Link to="/projects/ai-research">人工智能研究</Link></Item>*/}
          {/*</SubMenu>*/}
          <Item key="team"><Link to="/team">{<FormattedMessage id="header.team"/>}</Link></Item>
          <Item key="about"><Link to="/about">{<FormattedMessage id="header.about"/>}</Link></Item>
          <Item key="join"><Link to="/join">{<FormattedMessage id="header.join"/>}</Link></Item>
        </Menu>
      );
    }

    render() {

      const isMobile = this.state.screenSize < mobileScreen;

      return (
        <div className="alphatac-header" style={{ position: "fixed" }}>
          <Layout>
            <Layout.Header >
             <div className="header-container">
                <div className="logo" />
                <Link to="/">AlphaTac AI</Link>
                { !isMobile ? this.renderMenu(isMobile) : (
                  <Icon className="header-bar-icon" type="bars" 
                    onClick={this.openDrawer} style={{ fontSize: 40 }} />
                )}
              </div>
            </Layout.Header>
          </Layout>
          <Drawer
            width={200}
            placement="right"
            closable={false}
            onClose={this.closeDrawer}
            visible={this.state.isDrawerVisible}
          >
            {this.renderMenu(isMobile)}
          </Drawer>
        </div>
      )
    }
}

export default withRouter(Header);
