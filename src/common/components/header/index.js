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
          <Item key="about"><Link to="/about">{<FormattedMessage id="header.about"/>}</Link></Item>
          <SubMenu key="product" title={
              <Link to="/product">{<FormattedMessage id="header.product"/>}</Link>
            }>
            <Item key="setting:1">Dota Predicate</Item>
            <Item key="setting:2">Other</Item>
          </SubMenu>
          <Item key="team"><Link to="/team">{<FormattedMessage id="header.team"/>}</Link></Item>
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
