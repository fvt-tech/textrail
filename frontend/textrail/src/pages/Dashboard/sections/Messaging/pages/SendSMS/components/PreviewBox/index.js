import React from "react";
import "./styles.scss";
import { UserOutlined } from "@ant-design/icons";
import preview from "../../../../../../../../assets/previewBox.png";
import Avatar from "antd/lib/avatar/avatar";
const PreviewBox = ({ sender = "Sender ID", message = "Your message" }) => {
  return (
    <div className="previewBox">
      <img src={preview} />
      <div className="heading">
        <Avatar icon={<UserOutlined />} />
        <span className='senderName'>{sender}</span>
      </div>
      <div className='content'>
          <div className='message'>{message}</div>
      </div>
    </div>
  );
};

export default PreviewBox;
