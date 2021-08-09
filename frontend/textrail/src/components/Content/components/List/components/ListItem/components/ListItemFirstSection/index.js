import React from "react";
import "./styles.scss";
const ListItemFirstSection = ({ name, description, avatar }) => {
  return (
    <div className="listItemFirstSection">
      {avatar ? (
        <div
          className="avatar"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      ) : (
        <div
          className="emptyAvatar"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      )}
      <div className="details">
        <span>{name}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ListItemFirstSection;
