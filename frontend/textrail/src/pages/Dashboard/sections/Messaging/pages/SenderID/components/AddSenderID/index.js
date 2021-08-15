import React from "react";
import { Button, Form, Input } from "antd";
const AddSenderID = () => {
  //Handle Adding a sender id
  const handleAddSenderID = () => {};
  return (
    <div>
      <span
        style={{
          fontSize: 16,
          display: "block",
          fontWeight: "500",
          marginBottom: "1rem",
        }}
      >
        Create a new Sender ID
      </span>
      <Form layout="inline" style={{ marginBottom: "3rem" }}>
        <Form.Item label="Sender ID">
          <Input placeholder="Enter sender ID" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Create</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddSenderID;
