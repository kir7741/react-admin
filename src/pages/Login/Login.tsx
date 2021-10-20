import { Button, Form, Input } from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Login.css';
import { getUser } from 'src/Api/account.service';

class Login extends React.Component<RouteComponentProps> {


  constructor(props: RouteComponentProps) {
    super(props)
    this.clickLogin = this.clickLogin.bind(this);
  }

  clickLogin(e: any) {
    console.log('REACT_APP_URL', process.env.REACT_APP_API)
    console.log('NODE_ENV', process.env.NODE_ENV)
    console.log('REACT_APP_ENV', process.env.REACT_APP_ENV)
    getUser().then((d) => {
      console.log(d);
    })

    // getOther().then((d) => {
    //   console.log(d);
    // })

    // this.props.history.push('/dashboard/line-chart', {
    //   data: '2'
    // });
  }

  render() {

    return (
      <div className="Login">
        <Form
          className="Login-form"
          name="loginForm"
          layout="vertical"
          autoComplete="off"
          initialValues={{
            account: '',
            pwd: ''
          }}
          onFinish={this.clickLogin}
        >
          <h2>登入</h2>
          <Form.Item
            label="帳號"
            name="account"
            rules={[{ required: true, message: 'Please input your account!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密碼"
            name="pwd"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item 
            className="btn-group"
            wrapperCol={{ span: 24 }}
          >
            <Button type="primary" htmlType="submit">
              登入
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
