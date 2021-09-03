import React, { useEffect, useState } from "react";
import { Drawer, List, Select, Avatar, Card, Button, Modal } from "antd";
import DashboardCard from "../../../../../../components/DashboardCard";
import AddAGroup from "./components/AddAGroup";

import AddContactsToGroup from "./components/UploadOrAddContacts";
import "./styles.scss";
import {
  textrailEditGroup,
  textrailGetGroups,
} from "../../../../../../functions/groups";
import { textrailGetContacts } from "../../../../../../functions/contacts";
import AddressListItem from "./components/AddressListItem";

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
            <AddressListItem key={item._id} groups={groups} contactItem={item} />
          )}
        />
      </Card>
    </div>
  );
};

export default AddressBook;


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
