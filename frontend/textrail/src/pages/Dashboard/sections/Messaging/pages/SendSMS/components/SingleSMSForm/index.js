import { Checkbox, Form, Input, Select } from "antd";
import React, { useState } from "react";
const { Option } = Select;
const SingleSMSForm = () => {
  const [sms, setSms] = useState({
    number: "",
    sender_id: "",
    message: "",
    schedule: false,
  });
  return (
    <Form layout="vertical">
      <Form.Item label="Phone Number">
        <Input type="tel" required />
      </Form.Item>
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

export default SingleSMSForm;
