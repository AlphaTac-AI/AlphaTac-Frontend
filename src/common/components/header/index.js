import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { Layout, Icon, Drawer, Menu } from 'antd';
import { bound } from "class-bind";
import debounce from "lodash.debounce";
import { mobileScreen } from "../../../utilities/size";

import './index.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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

    render() {

      const isMobile = this.state.screenSize < mobileScreen;

      return (
        <div className="alphatac-header" style={{ position: "fixed" }}>
          <Layout>
            <Layout.Header >
             <div className="header-container">
                <div className="logo" />
                <Link to="/">AlphaTac AI</Link>
                { !isMobile ? <div className="header-list">
                  <Link to="/about">About</Link>
                  <Link to="/product">Product</Link>
                  <Link to="/team">Team</Link>
                  <Link to="/join">Join</Link>
                </div> : <Icon className="header-bar-icon" type="bars" 
                            onClick={this.openDrawer} style={{ fontSize: 40 }} /> }
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
            <Menu style={{ width: 200, marginTop: "45px" }}>
              <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
              <Menu.Item key="product"><Link to="/product">Product</Link></Menu.Item>
              <Menu.Item key="team"><Link to="/team">Team</Link></Menu.Item>
              <Menu.Item key="join"><Link to="/join">Join</Link></Menu.Item>
            </Menu>
          </Drawer>
        </div>
      )
    }
}

export default withRouter(Header);
