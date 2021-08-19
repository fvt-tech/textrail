import React, { useState, useEffect } from "react";
import { List, Skeleton } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const TemplateList = ({ list }) => {
  const [loading, setLoading] = useState(true);
  console.log(list);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
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
          All Templates
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
            <List.Item.Meta
              style={{ textTransform: "capitalize" }}
              title={item.message}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default TemplateList;
