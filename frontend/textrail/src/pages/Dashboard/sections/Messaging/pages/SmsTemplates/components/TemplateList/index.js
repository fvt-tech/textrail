import React, { useState, useEffect } from "react";
import { List, Skeleton, Modal, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { textrailDeleteTemplate } from "../../../../../../../../functions/templates";
import EditTemplate from "./components/EditATemplate";

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
      renderItem={(item) => <TemplateListItem item={item} loading={loading} />}
    />
  );
};

export default TemplateList;

// THis is the component for a campaign list item
const TemplateListItem = ({ item, loading }) => {
  //Delete an item in the template list
  const deleteItem = (item) => {
    Modal.error({
      title: "Are you sure you want to delete this template",
      okCancel: true,
      onOk: async () => {
        await textrailDeleteTemplate(item);
      },
    });
  };
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <>
      <EditTemplate
        visible={showEditModal}
        template={item}
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
            onClick={() => deleteItem(item._id)}
          >
            Delete
          </Button>,
        ]}
      >
        <Skeleton loading={loading} title={false} active>
          <List.Item.Meta
            onClick={() => setShowEditModal(true)}
            style={{ textTransform: "capitalize" }}
            title={item.name}
            description={item.message}
          />
        </Skeleton>
      </List.Item>
    </>
  );
};
