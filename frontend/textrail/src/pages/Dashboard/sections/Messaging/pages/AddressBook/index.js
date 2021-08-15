import React, { useEffect, useState } from "react";
import { Empty, List, Select } from "antd";
import DashboardCard from "../../../../../../components/DashboardCard";
import AddAGroup from "./components/AddAGroup";
import AddContactsToGroup from "./components/UploadOrAddContacts";
import "./styles.scss";
import { textrailGetGroups } from "../../../../../../functions/groups";
const { Option } = Select;
const AddressBook = () => {
  const [groups, setGroups] = useState([]);
  const [groupContacts, setGroupContacts] = useState([]);
  //Fetching all the groups from the database
  useEffect(() => {
    const getGroups = async () => {
      const { data: user } = JSON.parse(localStorage.getItem("user"));
      const response = await textrailGetGroups(user._id);
      console.log(response.data);
      setGroups(response.data);
    };
    getGroups();
  }, []);
  //Changing the contacts for current group
  const handleContactsForGroup = (group_id) =>
    setGroupContacts(
      groups.filter((group) => group._id === group_id)[0].contacts
    );

  return (
    <div className="dashboardPage">
      <h1>Address Book</h1>
      <DashboardCard
        actions={
          <AddressBookActions
            groups={groups}
            onChange={handleContactsForGroup}
          />
        }
      >
        <List
          dataSource={groupContacts}
          renderItem={(item) => (
            <List.Item>
              <div>
                <span>Name</span>
                <span>{item.name}</span>
              </div>
              <div>
                <span>Number</span>
                <span>{item.number}</span>
              </div>
            </List.Item>
          )}
        />
      </DashboardCard>
    </div>
  );
};

export default AddressBook;

//All the actions for the address book page
const AddressBookActions = ({ groups, onChange }) => {
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
      <AddContactsToGroup />
    </div>
  );
};
