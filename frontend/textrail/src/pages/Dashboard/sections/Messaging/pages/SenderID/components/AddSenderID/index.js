import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { textrailAddSenderID } from "../../../../../../../../functions/senderID";
const AddSenderID = ({ user }) => {
  const [senderId, setSenderId] = useState("");
  //Handler for changing senderId field
  const handleSenderIdChange = (e) => setSenderId(e.target.value);
  //Handle Adding a sender id
  const handleAddSenderID = async () => {
    console.log(senderId);
    const response = await textrailAddSenderID(senderId, user);
    console.log(response);
  };
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
      <Form
        layout="inline"
        style={{ marginBottom: "3rem" }}
        onFinish={handleAddSenderID}
      >
        <Form.Item label="Sender ID">
          <Input
            placeholder="Enter sender ID"
            value={senderId}
            onChange={handleSenderIdChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddSenderID;
