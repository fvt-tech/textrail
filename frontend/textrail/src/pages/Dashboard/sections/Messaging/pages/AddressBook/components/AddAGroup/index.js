import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
const AddAGroup = () => {
  const [visible, setVisible] = useState(false);
  const [groupName, setGroupName] = useState("");
  const handleChange = (e) => {
    setGroupName(e.target.value);
    console.log(groupName);
  };
  return (
    <div>
      <Button onClick={() => setVisible(true)}>Add A Group</Button>
      <Modal
        onCancel={() => setVisible(false)}
        title="Create a New Group"
        visible={visible}
        footer=""
      >
        <AddGroupForm groupName={groupName} onChange={handleChange} />
      </Modal>
    </div>
  );
};

export default AddAGroup;
// The form for creating a new group
const AddGroupForm = ({ groupName, onChange }) => {
  return (
    <Form layout="vertical">
      <Form.Item label="Group Name">
        <Input
          size="large"
          onChange={onChange}
          value={groupName}
          placeholder="Enter name of the Group"
        />
      </Form.Item>
      <Form.Item style={{ textAlign: "right" }}>
        <Button htmlType="submit" type="primary">
          Create Group
        </Button>
      </Form.Item>
    </Form>
  );
};
