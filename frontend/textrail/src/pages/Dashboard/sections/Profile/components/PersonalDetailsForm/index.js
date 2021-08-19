import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Button } from "antd";
const PersonalDetailsForm = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const {
      data: { user: current_user },
    } = JSON.parse(localStorage.getItem("user"));
    console.log(current_user);
    setUser(current_user);
  }, []);
  return (
    <Form layout="vertical" style={{marginTop:'1rem'}}>
      <Row>
        <Col md={12} xs={24}>
            <div style={{padding:'0px 8px'}}>
            <Form.Item label="Username">
            <Input readOnly value={user.username} disabled />
          </Form.Item>  
            </div>
       
        </Col>
        <Col md={12} xs={24}>
        <div style={{padding:'0px 8px'}}>
          <Form.Item label="Name">
            <Input value={user.name} />
          </Form.Item>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={24}>
        <div style={{padding:'0px 8px'}}>
          <Form.Item label="Company">
            <Input value={user.company} />
          </Form.Item>
          </div>
        </Col>
        <Col md={12} xs={24}>
        <div style={{padding:'0px 8px'}}>
          <Form.Item label="Email">
            <Input value={user.email} />
          </Form.Item>
          </div>
        </Col>
      </Row>
      <Form.Item style={{paddingLeft:'8px'}}>
        <Button className="myPrimaryButton" type="primary" style={{ marginRight: "10px",marginBottom:10 }}>
          Save Changes
        </Button>
        <Button >Reset Password</Button>
      </Form.Item>
    </Form>
  );
};

export default PersonalDetailsForm;
