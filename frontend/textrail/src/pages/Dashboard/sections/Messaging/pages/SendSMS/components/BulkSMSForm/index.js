import {
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Menu,
  Select,
  Upload,
  Button,
  Dropdown,
  Tag,
} from "antd";
import React, { useState, useEffect } from "react";
import { UsergroupAddOutlined, UploadOutlined } from "@ant-design/icons";
const { Option } = Select;
const BulkSMSForm = ({ onChange, reset, groups }) => {
  const [recurring, setRecurring] = useState(false);

  //States
  const [sms, setSms] = useState({
    numbers: [],
    sender: "",
    message: "",
    schedule: false,
  });
  const [selectedGroup, setSelectedGroup] = useState("");

  //Const Handle Group Selection
  const handleSelectGroup = (name) => setSelectedGroup(name);

  // Group Dropdown Menu
  const menu = (
    <Menu>
      {groups.map((item) => (
        <Menu.Item key={item.name} onClick={() => handleSelectGroup(item.name)}>
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  //Reset Side Effect
  useEffect(() => {
    if (sms.message.length === 0) {
      reset();
    }
  }, [sms.message]);

  const handleChange = (e, fieldname) => {
    if (fieldname === "message" || fieldname === "sender") {
      onChange(e, fieldname);
    }
    setSms({ ...sms, [fieldname]: e.target.value });
  };
  return (
    <Form layout="vertical">
      <label style={{ marginBottom: 10, display: "block" }}>
        Import Numbers
      </label>
      <Row>
        <Col style={{ marginRight: "10px" }}>
          <Form.Item>
            <Upload>
              <Button icon={<UploadOutlined />}>Upload File</Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col></Col>
        <Col>
          <Form.Item>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Button icon={<UsergroupAddOutlined />}>Import Group</Button>
            </Dropdown>
          </Form.Item>
        </Col>
      </Row>

      {selectedGroup.length > 0 && (
        <div style={{ marginBottom: "1rem" }}>
          <Tag color="blue" closable onClose={() => setSelectedGroup("")}>
            {selectedGroup}
          </Tag>
        </div>
      )}
      <Form.Item label="Sender ID">
        <Select
          style={{ width: "min(400px,100%)" }}
          placeholder="Select a sender"
        ></Select>
      </Form.Item>
      <Form.Item label="Message">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Select
            style={{ width: "min(800px,100%)", marginBottom: "1rem" }}
            placeholder="Select a saved message"
          ></Select>
          <Input.TextArea
            type="text"
            style={{ width: "min(800px,100%)" }}
            value={sms.message}
            onChange={(e) => handleChange(e, "message")}
          />
        </div>
      </Form.Item>
      <Form.Item label="Start Date" style={{ width: "min(400px,100%)" }}>
        <Input type="datetime-local" />
      </Form.Item>
      <Form.Item>
        <Checkbox onChange={(e) => setRecurring(e.target.checked)}>
          Recurring
        </Checkbox>
      </Form.Item>
      {recurring && (
        <Row>
          <Col sm={24} md={12}>
            <Form.Item label="Frequency" style={{ width: "90%" }}>
              <Select placeholder="Select the frequency">
                <Option>Daily</Option>
                <Option>Monthly</Option>
                <Option>Yearly</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={24} md={12}>
            <Form.Item label="End Date" style={{ width: "90%" }}>
              <Input type="datetime-local" />
            </Form.Item>
          </Col>
        </Row>
      )}
    </Form>
  );
};

export default BulkSMSForm;
