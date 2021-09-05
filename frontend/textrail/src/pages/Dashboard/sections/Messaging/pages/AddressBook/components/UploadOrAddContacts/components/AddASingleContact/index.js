import React,{useState} from "react";
import { Button, Form, Input } from "antd";
import { textrailAddContactsToGroup } from "../../../../../../../../../../functions/groups";
import { textrailAddContact } from "../../../../../../../../../../functions/contacts";
//This is the one contact form
const AddOneContactForm = ({ group, user }) => {
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
    if (group) {
      await textrailAddContactsToGroup(group, { ...contact, user });
    } else {
      await textrailAddContact({ ...contact, user });
    }
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
        <Button htmlType="submit" className="myPrimaryButton" type="primary">
          Add Contact
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddOneContactForm;
