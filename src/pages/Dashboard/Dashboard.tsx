import React from 'react';
import { 
  RouteComponentProps, 
  Route, 
  Switch, 
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';
import './Dashboard.css';
import { Layout, Menu } from 'antd';
import {
  AreaChartOutlined,
  FormOutlined,
  DatabaseOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';

import FormDemo from '../FormDemo/FormDemo';
import ChartDemo from '../ChartDemo/ChartDemo';
import TableDemo from '../TableDemo/TableDemo';


const { Header, Sider, Content, Footer,  } = Layout;
const { SubMenu } = Menu;

type DashboardState = {
  joseph: string,
  collapsed: boolean,
  menuList: any[]
};


class Dashboard extends React.Component<RouteComponentProps, DashboardState> {



  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      joseph: 'a',
      collapsed: false,
      menuList: [
        {
          id: 1,
          icon: <AreaChartOutlined />,
          menuName: 'Chart',
          link: 'dashboard-default',
          subMenus: [
            {
              id: 12,
              icon: <AreaChartOutlined/>,
              menuName: 'Line',
              link: 'line-chart',

            },
            {
              id: 13,
              icon: <AreaChartOutlined/>,
              menuName: 'Pie',
              link: 'pie-chart',
            }
          ]
        },
        {
          id: 2,
          icon:<FormOutlined />,
          menuName: 'Form',
          link: 'form',
          subMenus: [],
        },
        {
          id: 3,
          icon: <DatabaseOutlined />,
          menuName: 'Table',
          link: 'table',
          subMenus: [],
        }
      ]
    };

  }

  toggle = () => {

    this.setState((preState) => ({
      collapsed: !preState.collapsed
    }));

  };

  /**
   * 初始化目錄欄位
   *
   * @returns {JSX.Element}
   * @memberof Dashboard
   */
  getMenuComponent(): JSX.Element {

    const menuList = this.state.menuList;

    const { location } = this.props;

    return (
      <Menu 
        theme="dark" 
        mode="inline" 
        defaultOpenKeys={['dashboard-default']} 
        defaultSelectedKeys={[location.pathname]}
        onClick={(e) => this.clickItem(e)}
      >
        {this.getMenuItemComponents(menuList)}
      </Menu>
    );
  }

  /**
   * 初始化目錄內容
   *
   * @param {any[]} menuList
   * @returns {JSX.Element[]}
   * @memberof Dashboard
   */
  getMenuItemComponents(menuList: any[]): JSX.Element[] {

    const { match } = this.props;

    return menuList.map((menu) => {
      const subMenus = menu.subMenus;
      if (Array.isArray(subMenus) && subMenus.length > 0) {
        return (
          <SubMenu 
            key={menu.link}
            icon={menu.icon} 
            title={menu.menuName}
          >
            {this.getMenuItemComponents(subMenus)}
          </SubMenu>
        );
      } else {
        return (
          <MenuItem 
            key={`${match.url}/${menu.link}`}
            icon={menu.icon}
          >
            <NavLink 
              to={`${this.props.match.url}/${menu.link}`}
            >
              {menu.menuName}
            </NavLink>
          </MenuItem>
        );
      }

    });

  }

  /**
   * 測試用點擊事件 
   *
   * @param {*} e
   * @memberof Dashboard
   */
  clickItem(e: any): void {
    // this.props.history.push(....);
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState((pre) => ({joseph: pre.joseph + 'a'}));
    // }, 1000)
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
          <Content className="site-layout-background">
            <Switch>
              <Route exact path={`${this.props.match.url}/form`} 
                render={(props) => (<FormDemo {...props} joseph={ this.state.joseph } />)}
              >

              </Route>
              <Route exact path={`${this.props.match.url}/line-chart`} component={ChartDemo} />
              <Route exact path={`${this.props.match.url}/pie-chart`} component={ChartDemo} />
              <Route exact path={`${this.props.match.url}/table`} component={TableDemo} />
              {/* <Redirect to="/dashboard" /> */}
              <Route exact path={`${this.props.match.url}`} >
                <Redirect to={`${this.props.match.url}/line-chart`} />
              </Route>
              <Redirect to={`${this.props.match.url}/table`} />

            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
