import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Dashboard.css';


class Login extends React.Component<RouteComponentProps> {

  constructor(props: RouteComponentProps) {
    super(props);
    console.log(props);
    // const routeParams = new URLSearchParams(props.location.search);
    // console.log(routeParams);
    // this.clickLogin = this.clickLogin.bind(this);
  }


  render() {

    return (
      <div className="Dashboard">
        Dashboard
      </div>
    );
  }
}

export default Login;
