import React, { useState } from "react";
import { Button, Form, Input, Modal, Radio, Select } from "antd";
import "./styles.scss";
const { Option } = Select;
const AddContactsToGroup = () => {
  const [visible, setVisible] = useState(false);
  const [groupName, setGroupName] = useState("");
  const handleChange = (e) => {
    setGroupName(e.target.value);
    console.log(groupName);
  };
  return (
    <div style={{ margin: "0px 6px" }}>
      <Button onClick={() => setVisible(true)}>Add or Upload Contacts</Button>
      <Modal
        onCancel={() => setVisible(false)}
        title="Add or Upload Contacts to a Group"
        visible={visible}
        footer=""
      >
        <AddContactForm groupName={groupName} onChange={handleChange} />
      </Modal>
    </div>
  );
};

export default AddContactsToGroup;
// The form for creating a new group
//A Dummy group List
const dummyGroupList = [
  {
    id: "group1",
    name: "New Group",
  },
  {
    id: "group2",
    name: "New Group 2",
  },
];
const AddContactForm = ({ list = dummyGroupList, groupName, onChange }) => {
  const [radioType, setRadioType] = useState("single");
  return (
    <div className="addContactForm" style={{}}>
      <label className="items">Group Name</label>
      <Select className="items" placeholder="Select A Group">
        {list.map((item) => (
          <Option key={item.id}>{item.name}</Option>
        ))}
      </Select>
      <Radio.Group className="items" value={radioType} onChange={e=>setRadioType(e.target.value)}>
        <Radio value="single">Add Contact</Radio>
        <Radio value="upload">Upload File</Radio>
      </Radio.Group>
      {radioType === "single" ? <AddOneContactForm /> : <UploadContacts />}
    </div>
  );
};

const AddOneContactForm = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Contact Name">
        <Input />
      </Form.Item>
      <Form.Item label="Contact Number">
        <Input />
      </Form.Item>
      <Form.Item style={{ textAlign: "right" }}>
        <Button htmlType="submit" type="primary">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};
const UploadContacts = () => {
  return (
    <Form layout="vertical">
      <Form.Item
        label={
          <>
            <span>Expected Columns:</span>
            <span className="fieldsHint">Name, Number(with country code)</span>
          </>
        }
      >
        <Input type="file" />
        <label className="smallHints">
          Accepted Formats:.csv,.xls,.xlsx,.txt
        </label>
      </Form.Item>
      <Form.Item style={{ textAlign: "right" }}>
        <Button htmlType="submit" type="primary">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};
