import React, { useState, useEffect } from "react";
import { Button, List, Modal, Skeleton } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { textrailDeleteCampaign } from "../../../../../../../../functions/campaigns";
import EditCampaign from "./components/EditACampaign";

const CampaignList = ({ list }) => {
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
      header={
        <span
          style={{
            fontSize: 16,
            display: "block",
            fontWeight: "500",
            marginBottom: "0.5rem",
          }}
        >
          All Campaigns
        </span>
      }
      renderItem={(item) => <CampaignListItem item={item} loading={loading} />}
    />
  );
};

export default CampaignList;

// THis is the component for a campaign list item
const CampaignListItem = ({ item, loading }) => {
  const deleteItem = (item) => {
    Modal.error({
      title: "Are you sure you want to delete this campaign",
      okCancel: true,
      onOk: async () => {
        await textrailDeleteCampaign(item);
      },
    });
  };
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <>
      <EditCampaign
        visible={showEditModal}
        campaign={item}
        onChange={() => setShowEditModal(false)}
      />
      <List.Item
        actions={[
          <Button size="small"  onClick={() => setShowEditModal(true)}>
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
          />
        </Skeleton>
      </List.Item>
    </>
  );
};
