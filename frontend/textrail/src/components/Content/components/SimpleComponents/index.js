import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./styles.scss";

export const HeadingWithSearchBar = ({ title = "Inbox" }) => {
  return (
    <div className="headingWithSearchBar">
      <h2>{title}</h2>
      <HeaderSearchBar />
    </div>
  );
};

//Search Bar
const HeaderSearchBar = ({placeholder="Search Mail"}) => {
  return (
    <div className="headerSearchBar">
      <input placeholder={placeholder}  />
      <SearchOutlined />
    </div>
  );
};
