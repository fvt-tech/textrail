import { Checkbox, Col, Form, Input, Row, Select, Upload, Button } from "antd";
import React, { useState } from "react";
import { UsergroupAddOutlined, UploadOutlined } from "@ant-design/icons";
const { Option } = Select;
const BulkSMSForm = () => {
  const [sms, setSms] = useState({
    numbers: [],
    sender_id: "",
    message: "",
    schedule: false,
  });
  return (
    <Form layout="vertical">
      <label style={{ marginBottom: 10, display: "block" }}>
        Import Numbers
      </label>
      <Row>
        <Col style={{ marginRight: "10px" }}>
          <Form.Item>
            <Upload>
              <Button icon={<UploadOutlined />}>Upload File</Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col></Col>
        <Col>
          <Form.Item>
            <Button icon={<UsergroupAddOutlined />}>Import Group</Button>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Sender ID">
        <Select
          style={{ height: "100%" }}
          placeholder="Select a sender"
        ></Select>
      </Form.Item>
      <Form.Item label="Message">
        <div style={{ display: "flex", height: "auto" }}>
          <Input.TextArea
            rows={1}
            type="text"
            style={{ marginRight: "10px" }}
          />
          <Select
            style={{ height: "100%" }}
            placeholder="Select a saved message"
          ></Select>
        </div>
      </Form.Item>
      <Form.Item>
        <Checkbox>Schedule Message</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default BulkSMSForm;
