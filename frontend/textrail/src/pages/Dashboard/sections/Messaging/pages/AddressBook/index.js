import React, { useEffect, useState } from "react";
import { Drawer, List, Select, Avatar, Card, Button,Modal } from "antd";
import DashboardCard from "../../../../../../components/DashboardCard";
import AddAGroup from "./components/AddAGroup";
import {
  UserOutlined,
  EyeOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import AddContactsToGroup from "./components/UploadOrAddContacts";
import "./styles.scss";
import { textrailGetGroups } from "../../../../../../functions/groups";
import { textrailGetContacts } from "../../../../../../functions/contacts";

const { Option } = Select;
const AddressBook = () => {
  const [groups, setGroups] = useState([]);
  const [groupContacts, setGroupContacts] = useState([]);
  const [mainUser, setMainUser] = useState();
  //Fetching all the groups from the database
  useEffect(() => {
    const getGroups = async () => {
      const { data: user } = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      setMainUser(user._id);
      const response = await textrailGetGroups(user._id);
      console.log(response.data);
      setGroups(response.data);
    };
    getGroups();
  }, []);

  //Fetching all the contacts from the database
  useEffect(() => {
    const getContacts = async () => {
      const { data: user } = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      const response = await textrailGetContacts(user._id);
      console.log(response.data);
      // setGroups(response.data);
    };
    getContacts();
  }, []);

  //Changing the contacts for current group
  const handleContactsForGroup = (group_id) =>
    setGroupContacts(
      groups.filter((group) => group._id === group_id)[0].contacts
    );

  return (
    <div className="dashboardPage">
      <h1>Address Book</h1>
      <Card
        title={
          <AddressBookActions
            user={mainUser}
            groups={groups}
            onChange={handleContactsForGroup}
          />
        }
      >
        <List
          dataSource={groupContacts}
          header="Contacts"
          renderItem={(item) => (
            <AddressListItem key={item._id} groups={groups} item={item} />
          )}
        />
      </Card>
    </div>
  );
};

export default AddressBook;

// Address List Item with drawer
const AddressListItem = ({ groups, item }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerListType, setDrawerListType] = useState("member");
  const [drawerListData, setDrawerListData] = useState([]);

  //On drawerListType change side effect
  useEffect(() => {
    if (drawerListType === "member") {
      let partOf = [];
      for (let i = 0; i < groups.length; i++) {
        let found = groups[i].contacts.find(
          (contact) => contact._id === item._id
        );
        if (found) {
          partOf.push(groups[i]);
        }
      }
      console.log(item.name, "Member", partOf);
      setDrawerListData(partOf);
    } else {
      let notPartOf = [];
      for (let i = 0; i < groups.length; i++) {
        let found = groups[i].contacts.find(
          (contact) => contact._id === item._id
        );
        if (!found) {
          notPartOf.push(groups[i]);
        }
      }
      console.log(item.name, "Not a member", notPartOf);
      setDrawerListData(notPartOf);
    }
  }, [drawerListType]);

  //Message prompts
  //Delete From Group Prompt
  const removeContactFromGroup = (item) => {
    Modal.error({
      title: "Are you sure you want to remove this contact",
      okCancel: true,
      onOk: async () => {

        // await textrailDeleteTemplate(item);
      },
    });
  };
   //Delete From Group Prompt
   const addContactToGroup = (item) => {
    Modal.success({
      title: "Are you sure you want to add this contact",
      okCancel: true,
      onOk: async () => {

        // await textrailDeleteTemplate(item);
      },
    });
  };

  return (
    <>
    {/* Below is the drawer for the address page list item */}
      <Drawer
        title="Contact Details"
        visible={showDrawer}
        placement="right"
        width="min(100vw,400px)"
        onClose={() => setShowDrawer(false)}
        footer={[
          <Button type="primary">Edit</Button>,
          <Button type="text" danger>
            Delete
          </Button>,
        ]}
        footerStyle={{ textAlign: "right" }}
      >
        <div className="contactDrawerContent">
          <Avatar size={100} icon={<UserOutlined />} />
          <span>{item.name}</span>
          <span>{item.number}</span>
        </div>
        <List
          header={
            <Select
              defaultValue="member"
              style={{ width: 130 }}
              onChange={(value) => setDrawerListType(value)}
            >
              <Option value="member">Member of</Option>
              <Option value="add">Add to</Option>
            </Select>
          }
          dataSource={drawerListData}
          renderItem={(point) => (
            <List.Item
              actions={
                drawerListType === "member"
                  ? [<MinusOutlined onClick={removeContactFromGroup} className="drawerRemoveFromGroup" />]
                  : [<PlusOutlined onClick={addContactToGroup} className="drawerAddToGroup" />]
              }
            >
              <span>{point.name}</span>
            </List.Item>
          )}
        />
      </Drawer>


      {/* Below is the main List item for the address book page */}
      <List.Item
        onClick={() => setShowDrawer(true)}
        actions={[<EyeOutlined />]}
      >
        <span>{item.name}</span>
      </List.Item>
    </>
  );
};

//All the actions for the address book page
const AddressBookActions = ({ groups, onChange, user }) => {
  return (
    <div className="addressBookActions">
      <Select
        placeholder="Select A Group"
        onChange={(value) => onChange(value)}
      >
        {groups?.map((group) => (
          <Option key={group.name} value={group._id}>
            {group.name}
          </Option>
        ))}
      </Select>
      <AddAGroup />
      <AddContactsToGroup user={user} groups={groups} />
    </div>
  );
};
