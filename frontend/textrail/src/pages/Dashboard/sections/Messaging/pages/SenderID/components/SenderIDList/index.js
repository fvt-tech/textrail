import React, { useState, useEffect } from "react";
import { List, Skeleton, Modal, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { textrailDeleteSenderID } from "../../../../../../../../functions/senderID";
import EditSenderID from "./components/EditASenderID";

const SenderIDList = ({ list }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);
  //Handle Adding a sender id
  const handleSenderIDList = () => {};
  //Dummy List of Senders

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      style={{ width: "min(700px,100%)" }}
      dataSource={list}
      //   bordered
      header={
        <span
          style={{
            fontSize: 16,
            display: "block",
            fontWeight: "500",
            marginBottom: "0.5rem",
          }}
        >
          All Sender IDs
        </span>
      }
      renderItem={(item) => (
        <SenderIDListItem loading={loading} key={item._id} item={item} />
      )}
    />
  );
};

export default SenderIDList;

//Sender ID List Item

const SenderIDListItem = ({ loading, item }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const deleteSenderId = (item) => {
    Modal.error({
      title: "Are you sure you want to delete this template",
      okCancel: true,
      onOk: async () => {
        await textrailDeleteSenderID(item);
      },
    });
  };
  return (
    <>
      <EditSenderID
        visible={showEditModal}
        senderID={item}
        onChange={() => setShowEditModal(false)}
      />
      <List.Item
        actions={[
          <Button size="small" onClick={() => setShowEditModal(true)}>
            Edit
          </Button>,
          <Button
            type="primary"
            size="small"
            danger
            onClick={() => deleteSenderId(item._id)}
          >
            Delete
          </Button>,
        ]}
      >
        <Skeleton loading={loading} title={false} active>
          <List.Item.Meta title={item.name} />
        </Skeleton>
      </List.Item>
    </>
  );
};
