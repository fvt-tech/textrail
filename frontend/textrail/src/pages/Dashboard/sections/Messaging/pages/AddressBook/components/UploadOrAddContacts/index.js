import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Modal, Radio, Select } from "antd";
import "./styles.scss";
import { UserAddOutlined } from "@ant-design/icons";
import { textrailAddContactsToGroup } from "../../../../../../../../functions/groups";
import xlsxParser from "xlsx-parse-json";
const { Option } = Select;
//This is the button and modal the realises adding a contact to a group or uploading a file of contacts
const AddContactsToGroup = ({ groups }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ margin: "0px 6px" }}>
      <Button onClick={() => setVisible(true)}>
        <UserAddOutlined />
        Add or Upload Contacts
      </Button>
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
            <UploadContacts group={group} />
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
    await textrailAddContactsToGroup(group, contact);
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
const UploadContacts = ({ group }) => {
  const [file, setFile] = useState({});
  const [contact, setContact] = useState([]);

  //Converting the file to an array of contacts
  const handleContacts = (file) => {
    console.log(file);
    xlsxParser.onFileSelection(file).then((data) => {
      var parsedData = data;
      const newContacts = [];
      parsedData.Sheet1.map((item) => {
        let newArray = Object.values(item);
        console.log(newArray);
        let newObj = { name: newArray[0], number: newArray[1] };
        newContacts.push(newObj);
      });
      setContact(newContacts);
    });
  };

  // Handling the contacts upload into the group
  const handleAddContactToGroup = async () => {
    if (contact.length > 0) {
      await textrailAddContactsToGroup(group, contact);
    } else {
      message.error("Please Choose A File")
    }
  };

  return (
    <Form layout="vertical" onFinish={handleAddContactToGroup}>
      <Form.Item
        label={
          <>
            <span>Expected Columns:</span>
            <span className="fieldsHint">Name, Number(with country code)</span>
          </>
        }
      >
        <Input
          type="file"
          accept=".xlsx,.xls"
          onChange={(e) => handleContacts(e.target.files[0])}
        />
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
