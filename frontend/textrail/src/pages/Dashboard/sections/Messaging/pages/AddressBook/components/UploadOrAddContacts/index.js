import React, { useState } from "react";
import { Button, Form, Input, Modal, Radio, Select } from "antd";
import "./styles.scss";
import { textrailAddContactsToGroup } from "../../../../../../../../functions/groups";
const { Option } = Select;
//This is the button and modal the realises adding a contact to a group or uploading a file of contacts
const AddContactsToGroup = ({ groups }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ margin: "0px 6px" }}>
      <Button onClick={() => setVisible(true)}>Add or Upload Contacts</Button>
      <Modal
        onCancel={() => setVisible(false)}
        title="Add or Upload Contacts to a Group"
        visible={visible}
        footer=""
      >
        <AddContactForm list={groups} />
      </Modal>
    </div>
  );
};

export default AddContactsToGroup;
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
// This is the wrapper for the two form types
const AddContactForm = ({ list = dummyGroupList }) => {
  const [group, setGroup] = useState("");
  const handleChange = (value) => {
    setGroup(value);
    console.log(group);
  };
  const [radioType, setRadioType] = useState("single");
  return (
    <div className="addContactForm">
      <label className="items">Group Name</label>
      <Select
        className="items"
        placeholder="Select A Group"
        onChange={handleChange}
      >
        {list.map((item) => (
          <Option key={item._id} value={item._id}>
            {item.name}
          </Option>
        ))}
      </Select>
      <Radio.Group
        className="items"
        value={radioType}
        onChange={(e) => setRadioType(e.target.value)}
      >
        <Radio value="single">Add Contact</Radio>
        <Radio value="upload">Upload File</Radio>
      </Radio.Group>
      {group.length > 0 && (
        <>
          {radioType === "single" ? (
            <AddOneContactForm group={group} />
          ) : (
            <UploadContacts />
          )}
        </>
      )}
    </div>
  );
};
//This is the one contact form
const AddOneContactForm = ({ group }) => {
  //Contact State
  const [contact, setContact] = useState({
    name: "",
    number: "",
  });
  //Handling state changes
  const handleChange = (e, fieldname) => {
    setContact({ ...contact, [fieldname]: e.target.value });
  };
  //Handling contact addition to groups
  const handleAddContactToGroup = async () => {
    const response = await textrailAddContactsToGroup(group, contact);
    console.log(response.data);
  };
  return (
    <Form layout="vertical" onFinish={handleAddContactToGroup}>
      <Form.Item label="Contact Name">
        <Input
          placeholder="Enter contact name"
          value={contact.name}
          onChange={(e) => handleChange(e, "name")}
        />
      </Form.Item>
      <Form.Item label="Contact Number">
        <Input
          placeholder="Enter contact number"
          value={contact.number}
          onChange={(e) => handleChange(e, "number")}
        />
      </Form.Item>
      <Form.Item style={{ textAlign: "right" }}>
        <Button htmlType="submit" type="primary">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};
//This is the file upload form
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
