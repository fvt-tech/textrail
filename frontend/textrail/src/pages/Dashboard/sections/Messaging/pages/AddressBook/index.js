import React, { useEffect } from "react";
import { Empty } from "antd";
import DashboardCard from "../../../../../../components/DashboardCard";
import AddAGroup from "./components/AddAGroup";
import AddContactsToGroup from "./components/UploadOrAddContacts";
import './styles.scss'
import { textrailGetGroups } from "../../../../../../functions/groups";
const AddressBook = () => {
  // useEffect(() => {
  //   textrailGetGroups()

  // }, [])
  return (
    <div className="dashboardPage">
      <h1>Address Book</h1>
      <DashboardCard actions={<AddressBookActions />}>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Address Book"
        />
      </DashboardCard>
    </div>
  );
};

export default AddressBook;
//All the actions for the address book page
const AddressBookActions = () => {
  return (
    <div className="addressBookActions">
      <AddAGroup/>
      <AddContactsToGroup />
    </div>
  );
};
