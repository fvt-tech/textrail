import React, { useState, useEffect } from "react";
import { List, Skeleton } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

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
        <List.Item
          actions={[
            <EditOutlined style={{ fontSize: "23px" }} />,
            <DeleteOutlined style={{ fontSize: "23px", color: "#E9967A" }} />,
          ]}
        >
          <Skeleton loading={loading} title={false} active>
            <List.Item.Meta title={item.name} />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default SenderIDList;
