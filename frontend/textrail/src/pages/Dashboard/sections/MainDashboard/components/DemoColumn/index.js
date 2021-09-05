import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/charts";

const DemoColumn = ({ height }) => {
  var data = [
    {
      type: "Sent Messages",
      sales: 38,
    },
    {
      type: "Failed Messages",
      sales: 52,
    },
    {
      type: "Sent Campaigns",
      sales: 61,
    },
    {
      type: "Notifications",
      sales: 145,
    },
    {
      type: "People Reach",
      sales: 48,
    },
  ];
  var config = {
    data: data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: "type" },
      sales: { alias: "number" },
    },
  };
  return <Column {...config} style={{ height: height ? height : 200 }} />;
};

export default DemoColumn;
