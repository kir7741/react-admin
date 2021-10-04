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

const { Header, Sider, Content, Footer } = Layout;

type DashboardState = {
  collapsed: boolean
};


class Dashboard extends React.Component<RouteComponentProps, DashboardState> {

  state: DashboardState = {
    collapsed: false,
  };

  toggle = () => {

    this.setState((preState) => ({
      collapsed: !preState.collapsed
    }));

  };

  constructor(props: RouteComponentProps) {
    super(props);
    console.log(props);
    // const routeParams = new URLSearchParams(props.location.search);
    // console.log(routeParams);
    // this.clickLogin = this.clickLogin.bind(this);
  }


  render() {

    return (
      <Layout className="Dashboard-layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <div></div>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
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
