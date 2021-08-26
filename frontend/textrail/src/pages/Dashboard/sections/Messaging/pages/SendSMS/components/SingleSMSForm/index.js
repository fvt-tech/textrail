import { Checkbox, Form, Input, message, Select } from "antd";
import React, { useState, useEffect } from "react";
const { Option } = Select;
const SingleSMSForm = ({ onChange, reset }) => {
  const [sms, setSms] = useState({
    number: "",
    sender: "",
    message: "",
    schedule: false,
  });

  useEffect(() => {
    if (sms.message.length === 0) {
      reset();
    }
  }, [sms.message]);

  const handleChange = (e, fieldname) => {
    if (fieldname === "message" || fieldname === "sender") {
      onChange(e, fieldname);
    }
    setSms({ ...sms, [fieldname]: e.target.value });
  };
  return (
    <Form layout="vertical">
      <Form.Item label="Phone Number">
        <Input
          type="tel"
          value={sms.number}
          onChange={(e) => handleChange(e, "number")}
          required
        />
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
            value={sms.message}
            onChange={(e) => handleChange(e, "message")}
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
