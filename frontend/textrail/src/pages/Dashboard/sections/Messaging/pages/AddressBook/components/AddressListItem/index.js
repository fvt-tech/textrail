import React, { useState, useEffect } from "react";
import { Button, Avatar, Drawer, List, Select, Modal } from "antd";
import {
  UserOutlined,
  EyeOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { textrailEditGroup } from "../../../../../../../../functions/groups";
import { textrailDeleteContact } from "../../../../../../../../functions/contacts";
const { Option } = Select;

const AddressListItem = ({ groups, contactItem }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerListType, setDrawerListType] = useState("member");
  const [drawerListData, setDrawerListData] = useState([]);

  //On drawerListType change side effect
  useEffect(() => {
    if (drawerListType === "member") {
      let partOf = [];
      for (let i = 0; i < groups.length; i++) {
        let found = groups[i].contacts.find(
          (contact) => contact._id === contactItem._id
        );
        if (found) {
          partOf.push(groups[i]);
        }
      }
      console.log(contactItem.name, "Member", partOf);
      setDrawerListData(partOf);
    } else {
      let notPartOf = [];
      for (let i = 0; i < groups.length; i++) {
        let found = groups[i].contacts.find(
          (contact) => contact._id === contactItem._id
        );
        if (!found) {
          notPartOf.push(groups[i]);
        }
      }
      console.log(contactItem.name, "Not a member", notPartOf);
      setDrawerListData(notPartOf);
    }
  }, [drawerListType]);

  //Message prompts
  //Delete From Group Prompt
  const removeContactFromGroup = (group, contact) => {
    Modal.error({
      title: "Are you sure you want to remove this contact",
      okCancel: true,
      onOk: async () => {
        console.log(group, contact);
        console.log(group, contact);
        let update = { ...group };
        const index = update.contacts.findIndex(
          (con) => con._id === contact._id
        );
        update.contacts.splice(index, 1);
        console.log(update);
        await textrailEditGroup(group._id, update);
      },
    });
  };
  //Add  to Group Prompt
  const addContactToGroup = (group, contact) => {
    Modal.success({
      title: "Are you sure you want to add this contact",
      okCancel: true,
      onOk: async () => {
        console.log(group, contact);
        let update = { ...group };
        update.contacts.push(contact);
        console.log(update);
        await textrailEditGroup(group._id, update);
      },
    });
  };

  //Delete contact prompt
  const deleteContact = () => {
    Modal.error({
      title: "Are you sure you want to delete this contact",
      okCancel: true,
      onOk: async () => {
         await textrailDeleteContact(contactItem._id);
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
          <Button type="text" onClick={deleteContact} danger>
            Delete
          </Button>,
        ]}
        footerStyle={{ textAlign: "right" }}
      >
        <div className="contactDrawerContent">
          <Avatar size={100} icon={<UserOutlined />} />
          <span>{contactItem.name}</span>
          <span>{contactItem.number}</span>
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
              key={point._id}
              actions={
                drawerListType === "member"
                  ? [
                      <MinusOutlined
                        onClick={() =>
                          removeContactFromGroup(point, contactItem)
                        }
                        className="drawerRemoveFromGroup"
                      />,
                    ]
                  : [
                      <PlusOutlined
                        onClick={() => addContactToGroup(point, contactItem)}
                        className="drawerAddToGroup"
                      />,
                    ]
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
        <span>{contactItem.name}</span>
      </List.Item>
    </>
  );
};

export default AddressListItem;
