import { Button, Form, Input } from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Login.css';

class Login extends React.Component<RouteComponentProps> {


  constructor(props: RouteComponentProps) {
    super(props)
    this.clickLogin = this.clickLogin.bind(this);
  }

  clickLogin(e: any) {
    this.props.history.push('/dashboard?id=1', {
      data: '2'
    });
  }

  // clickLogin = (e: any) => {
  //   console.log(e);
  //   console.log(this);
  //   // (this.props as any).history.push('/dashboard');
  // }

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
          <Form.Item wrapperCol={{ span: 24 }}>
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
