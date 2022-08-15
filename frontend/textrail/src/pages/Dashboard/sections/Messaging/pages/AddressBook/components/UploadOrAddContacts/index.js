import React, { useEffect, useState } from "react";
import {
  Button,
  Empty,
  Modal,
  Radio,
  Select,
  Tabs,
} from "antd";
import "./styles.scss";
import { UserAddOutlined } from "@ant-design/icons";
import UploadContacts from "./components/UploadContacts";
import AddOneContactForm from "./components/AddASingleContact";
import AddExistingContact from "./components/AddExistingContact";
const { Option } = Select;
const { TabPane } = Tabs;
//This is the button and modal the realises adding a contact to a group or uploading a file of contacts
const AddContactsToGroup = ({ groups, user }) => {
  // console.log(user);
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ margin: "0px 6px" }}>
      <Button onClick={() => setVisible(true)}>
        <UserAddOutlined />
        Add or Upload Contacts
      </Button>
      <Modal
        onCancel={() => setVisible(false)}
        title="Add Contact"
        visible={visible}
        footer=""
      >
        <AddContactForm user={user} list={groups} />
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
const AddContactForm = ({ list = dummyGroupList, user }) => {
  const [group, setGroup] = useState("");
  const handleChange = (value) => {
    setGroup(value);
    console.log(group);
  };
  const [radioType, setRadioType] = useState("single");
  return (
    <div className="addContactForm">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Add Contact" key="1">
          <div>
            <AddOneContactForm user={user} />
          </div>
        </TabPane>
        <TabPane tab="Add Contact To Group" key="2">
          <div style={{ display: "flex", flexDirection: "column" }}>
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
              <Radio value="existing">Existing Contact</Radio>
            </Radio.Group>
            {group.length > 0 && (
              <>
                {radioType === "single" ? (
                  <AddOneContactForm user={user} group={group} />
                ) : (
                  <>
                    {radioType === "upload" ? (
                      <UploadContacts user={user} group={group} />
                    ) : (
                      <AddExistingContact group={group}/>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};
