import React from "react";
import "./styles.scss";
import { Card } from "antd";
import { UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import preview from "../../../../../../../../assets/previewBox.png";
import Avatar from "antd/lib/avatar/avatar";
const PreviewBox = ({ sender = "Sender ID", message = "Your message " }) => {
  return (
    <Card className="previewBox">
      <div className="heading">
        <Avatar icon={<UserOutlined />} size="small" />
        <span className="senderName">{sender}</span>
      </div>
      <div className="content">
        <div className="message">{message}</div>
      </div>
    </Card>
  );
};

export default PreviewBox;
