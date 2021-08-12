import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { textrailLogin } from "../../../../functions/auth";
import "./styles.scss";
const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e, fieldName) => {
    setUser({ ...user, [fieldName]: e.target.value });
    console.log(user);
  };
  const handleUserLogin = async () => {
    const response = await textrailLogin(user);
    alert(response.status);
  };
  return (
    <div className="loginForm">
      <h2>Login</h2>
      <Form layout="vertical" onFinish={handleUserLogin}>
        <Form.Item label="Email">
          <Input
            size="large"
            value={user.username}
            onChange={(e) => handleChange(e, "username")}
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password
            size="large"
            value={user.password}
            onChange={(e) => handleChange(e, "password")}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block size="large" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
