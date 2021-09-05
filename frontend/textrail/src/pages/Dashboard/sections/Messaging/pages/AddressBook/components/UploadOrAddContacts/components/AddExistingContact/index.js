import { Button, Form, Select } from "antd";
import React, { useEffect, useState } from "react";
import { textrailGetContacts } from "../../../../../../../../../../functions/contacts";
import {
  textrailAddContactsToGroup,
  textrailEditGroup,
  textrailGetGroup,
} from "../../../../../../../../../../functions/groups";

const { Option } = Select;
const AddExistingContact = ({ group }) => {
  const [allContacts, setAllContacts] = useState([]);
  const [groupDetails, setGroupDetails] = useState({});
  const [selectedContact, setSelectedContact] = useState("");
  useEffect(() => {
    const getGroupDetails = async () => {
      const { data: user } = JSON.parse(localStorage.getItem("user"));
      const response = await textrailGetGroup(user._id, group);
      if (response) {
        setGroupDetails(response.data);
      }
    };
    getGroupDetails();
  }, [group]);

  useEffect(() => {
    const getContacts = async () => {
      const { data: user } = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      const response = await textrailGetContacts(user._id);
      if (response) {
        let test = response.data.filter(
          (item) => !groupDetails?.contacts?.includes(item._id)
        );
        setAllContacts(test);
      }
    };
    getContacts();
  }, [groupDetails]);

  //   Handler for contact change
  const handleChange = (value) => {
    setSelectedContact(value);
    console.log(value);
  };

  //Handle for adding an existing contact to a group
  const handleAddExistingContactToGroup = async () => {
    console.log(selectedContact);
    let actualSelectedContact = allContacts.filter(
      (contact) => contact._id === selectedContact
    )[0];
    let update = { ...groupDetails };
    update.contacts.push(actualSelectedContact);
    console.log(update);
    await textrailEditGroup(group, update);
  };
  return (
    <Form layout="vertical" onFinish={handleAddExistingContactToGroup}>
      <Form.Item label="Contact">
        <Select
          className="items"
          placeholder="Select A Contact"
          onChange={handleChange}
        >
          {allContacts.map((item) => (
            <Option key={item._id} value={item._id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item style={{ textAlign: "right" }}>
        <Button htmlType="submit" className="myPrimaryButton">
          Add Contact To Group
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddExistingContact;
