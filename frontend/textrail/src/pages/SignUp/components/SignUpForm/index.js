import React from "react";
import { Button, Form, Input } from "antd";
import "./styles.scss";
const SignUpForm = () => {
  return (
    <Form className="signUpForm" layout="vertical">
      <h2>SignUp</h2>
      <Form.Item label="Full Name">
        <Input />
      </Form.Item>
      <Form.Item label="Username">
        <Input />
      </Form.Item>
      <Form.Item label="Phone Number">
        <Input />
      </Form.Item>
      <Form.Item label="Organization's Name">
        <Input />
      </Form.Item>
      <Form.Item label="Email">
        <Input />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" block size="large">
          SignUp
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
