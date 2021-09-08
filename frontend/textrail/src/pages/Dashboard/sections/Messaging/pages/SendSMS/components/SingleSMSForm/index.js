import { Checkbox, Col, Form, Input, message, Row, Select } from "antd";
import React, { useState, useEffect } from "react";
const { Option } = Select;
const SingleSMSForm = ({ onChange, reset }) => {
  const [recurring, setRecurring] = useState(false)
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
      <Row>
        <Col sm={24} md={12}>
          <Form.Item label="Phone Number">
            <Input
              type="tel"
              value={sms.number}
              style={{ width: "90%" }}
              onChange={(e) => handleChange(e, "number")}
              required
            />
          </Form.Item>
        </Col>
        <Col sm={24} md={12}>
          <Form.Item label="Sender ID">
            <Select
              style={{ width: "90%" }}
              placeholder="Select a sender"
            ></Select>
          </Form.Item>
    </Col>
      </Row>
      <Form.Item label="Message">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Select
            style={{ width: "min(800px,100%)", marginBottom: "1rem" }}
            placeholder="Select a saved message"
          ></Select>
          <Input.TextArea
            type="text"
            style={{ width: "min(800px,100%)" }}
            value={sms.message}
            onChange={(e) => handleChange(e, "message")}
          />
        </div>
      </Form.Item>
      <Form.Item label="Start Date" style={{ width: "min(400px,100%)" }}>
        <Input type="datetime-local" />
      </Form.Item>
      <Form.Item>
        <Checkbox onChange={e=>setRecurring(e.target.checked)}>Recurring</Checkbox>
      </Form.Item>
    {recurring&& <Row>
      <Col sm={24} md={12}>
        <Form.Item label="Frequency" style={{ width: "90%" }}>
          <Select placeholder="Select the frequency">
            <Option>Daily</Option>
            <Option>Monthly</Option>
            <Option>Yearly</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col sm={24} md={12}>
        <Form.Item label="End Date" style={{ width: "90%" }}>
          <Input type="datetime-local" />
        </Form.Item>
      </Col>
    </Row>}
    </Form>
  );
};

export default SingleSMSForm;
