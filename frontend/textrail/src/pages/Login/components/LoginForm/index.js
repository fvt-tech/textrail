import { Button, Form, Input } from "antd";
import React from "react";
import "./styles.scss";
const LoginForm = () => {
  return (
    <Form className="loginForm">
      <h2>Login</h2>
      <Form layout="vertical">
        <Form.Item label="Email">
          <Input size="large" />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            block
            size="large"
            onClick={() => (window.location.href = "/dashboard/home")}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </Form>
  );
};

export default LoginForm;
