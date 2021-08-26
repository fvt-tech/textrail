import React, { useEffect, useState } from "react";
import { Drawer, List, Select, Avatar ,Card} from "antd";
import DashboardCard from "../../../../../../components/DashboardCard";
import AddAGroup from "./components/AddAGroup";
import { UserOutlined, EyeOutlined } from "@ant-design/icons";
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
      console.log(user);
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
      <Card
        title={
          <AddressBookActions
            groups={groups}
            onChange={handleContactsForGroup}
          />
        }
      >
        <List
          dataSource={groupContacts}
          header="Contacts"
          renderItem={(item) => <AddressListItem item={item} />}
        />
      </Card>
    </div>
  );
};

export default AddressBook;

// Address List Item with drawer
const AddressListItem = ({ item }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <Drawer
        title="Contact Details"
        visible={showDrawer}
        placement="right"
        width="min(100vw,400px)"
        onClose={() => setShowDrawer(false)}
      >
        <div className="contactDrawerContent">
          <Avatar size={100} icon={<UserOutlined />} />
          <span>{item.name}</span>
          <span>{item.number}</span>
        </div>
      </Drawer>
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
      <AddContactsToGroup groups={groups} />
    </div>
  );
};
