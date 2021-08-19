import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import "./styles.scss";
import { textrailSignup } from "../../../../functions/auth";
const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    company: "",
    phoneNumber: "",
  });
  const handleChange = (e, fieldName) => {
    setUser({ ...user, [fieldName]: e.target.value });
    console.log(user);
  };
  const handleUserSignup = async () => {
    await textrailSignup(user);
  };
  return (
    <Form className="signUpForm" layout="vertical" onFinish={handleUserSignup}>
      <h2>SignUp</h2>
      <Form.Item label="Full Name">
        <Input value={user.name} onChange={(e) => handleChange(e, "name")} />
      </Form.Item>
      <Form.Item label="Username">
        <Input
          value={user.username}
          onChange={(e) => handleChange(e, "username")}
        />
      </Form.Item>
      <Form.Item label="Phone Number">
        <Input
          value={user.phoneNumber}
          onChange={(e) => handleChange(e, "phoneNumber")}
        />
      </Form.Item>
      <Form.Item label="Organization's Name">
        <Input
          value={user.company}
          onChange={(e) => handleChange(e, "company")}
        />
      </Form.Item>
      <Form.Item label="Email">
        <Input value={user.email} onChange={(e) => handleChange(e, "email")} />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password
          value={user.password}
          onChange={(e) => handleChange(e, "password")}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          block
          size="large"
          // onClick={() => (window.location.href = "/dashboard/home")}
          htmlType="submit"
        >
          SignUp
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
