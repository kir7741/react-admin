import { Button, Form, Input } from 'antd';
import React from 'react';
import './Login.css';


class Login extends React.Component {

  clickLogin(e: any): void {
    console.log(e);
  }

  render() {

    return (
      <div className="Login">
        <Form
          className="Login-form"
          name="loginForm"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          autoComplete="off"
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
            name="password"
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
