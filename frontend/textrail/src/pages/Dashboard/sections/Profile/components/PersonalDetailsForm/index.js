import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Button, Drawer } from "antd";
const PersonalDetailsForm = () => {
  const [mainUser, setMainUser] = useState({});
  const [showChangePasswordDrawer, setShowChangePasswordDrawer] =
    useState(false);
  useEffect(() => {
    const { data: user } = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setMainUser(user);
  }, []);
  return (
    <>
      <Form layout="vertical" style={{ marginTop: "1rem" }}>
        <Row>
          <Col md={12} xs={24}>
            <div style={{ padding: "0px 8px" }}>
              <Form.Item label="Username">
                <Input readOnly value={mainUser.username} disabled />
              </Form.Item>
            </div>
          </Col>
          <Col md={12} xs={24}>
            <div style={{ padding: "0px 8px" }}>
              <Form.Item label="Name">
                <Input value={mainUser.name} />
              </Form.Item>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={24}>
            <div style={{ padding: "0px 8px" }}>
              <Form.Item label="Company">
                <Input value={mainUser.company} />
              </Form.Item>
            </div>
          </Col>
          <Col md={12} xs={24}>
            <div style={{ padding: "0px 8px" }}>
              <Form.Item label="Email">
                <Input value={mainUser.email} />
              </Form.Item>
            </div>
          </Col>
        </Row>
        <Form.Item style={{ paddingLeft: "8px" }}>
          <Button
            className="myPrimaryButton"
            type="primary"
            style={{ marginRight: "10px", marginBottom: 10 }}
          >
            Save Changes
          </Button>
          <Button onClick={() => setShowChangePasswordDrawer(true)}>
            Reset Password
          </Button>
        </Form.Item>
      </Form>

      {/* Change Password Drawer */}
      <Drawer
        visible={showChangePasswordDrawer}
        onClose={() => setShowChangePasswordDrawer(false)}
        width="min(100vw,400px)"
        title="Reset Password"
      >
        <Form layout="vertical">
          <Form.Item label="New Password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Repeat Password">
            <Input.Password />
          </Form.Item>
        </Form>
        <Button block type="primary" className="myPrimaryButton">
          Reset
        </Button>
      </Drawer>
    </>
  );
};

export default PersonalDetailsForm;
