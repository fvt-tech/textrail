import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";

import { textrailAddGroup } from "../../../../../../../../functions/groups";
const AddAGroup = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ margin: "0px 6px" }}>
      <Button onClick={() => setVisible(true)}>
        <UsergroupAddOutlined />
         Create Group
      </Button>
      <Modal
        onCancel={() => setVisible(false)}
        title="Create a New Group"
        visible={visible}
        footer=""
      >
        <AddGroupForm />
      </Modal>
    </div>
  );
};

export default AddAGroup;
// The form for creating a new group
const AddGroupForm = () => {
  const [groupName, setGroupName] = useState("");
  const { data: user } = JSON.parse(localStorage.getItem("user"));
  console.log("The user", user);
  const handleChange = (e) => {
    setGroupName(e.target.value);
    console.log(groupName);
  };
  const handleAddGroup = async () => {
    const group = {
      name: groupName,
      contacts: [],
      user: user._id,
    };
    await textrailAddGroup(group);
  };
  return (
    <Form layout="vertical" onFinish={handleAddGroup}>
      <Form.Item label="Group Name">
        <Input
          size="large"
          onChange={handleChange}
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
