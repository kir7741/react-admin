import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Dashboard.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';

const { Header, Sider, Content, Footer,  } = Layout;
const { SubMenu } = Menu;

type DashboardState = {
  collapsed: boolean,
  menuList: any[]
};


class Dashboard extends React.Component<RouteComponentProps, DashboardState> {

  constructor(props: RouteComponentProps) {
    super(props);
    console.log(props);

    this.state = {
      collapsed: false,
      menuList: [
        {
          id: 1,
          icon: <UserOutlined />,
          menuName: 'User',
          link: '',
          subMenus: [
            {
              id: 12,
              icon: <UserOutlined />,
              menuName: 'Account',
              link: ''
            }
          ]
        },
        {
          id: 2,
          icon: <VideoCameraOutlined />,
          menuName: 'video',
          link: '',
          subMenus: []
        },
        {
          id: 3,
          icon: <UploadOutlined />,
          menuName: 'upload',
          link: '',
          subMenus: []
        }
      ]
    };

  }

  toggle = () => {

    this.setState((preState) => ({
      collapsed: !preState.collapsed
    }));

  };

  getMenuComponent(): JSX.Element {

    const menuList = this.state.menuList;

    return (
      <Menu theme="dark" mode="inline" defaultOpenKeys={['1']} defaultSelectedKeys={['12']}>
        {this.getMenuItemComponents(menuList)}
      </Menu>
    );
  }

  getMenuItemComponents(menuList: any[]): JSX.Element[] {

    return menuList.map((menu) => {
      const subMenus = menu.subMenus;
      if (Array.isArray(subMenus) && subMenus.length > 0) {
        return (
          <SubMenu 
            key={menu.id} 
            icon={menu.icon} 
            title={menu.menuName}
          >
            {this.getMenuItemComponents(subMenus)}
          </SubMenu>
        );
      } else {
        return (
          <MenuItem 
            key={menu.id}
            icon={menu.icon}
          >
            {menu.menuName}
          </MenuItem>
        );
      }

    });

  }


  render() {

    const menuItems = this.getMenuComponent();

    return (
      <Layout className="Dashboard-layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <div></div>
          </div>
          {menuItems}
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {
              React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })
            }
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
