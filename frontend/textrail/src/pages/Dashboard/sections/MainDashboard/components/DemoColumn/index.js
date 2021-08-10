import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/charts";

const DemoColumn = () => {
  var data = [
    {
      type: "Type 1",
      sales: 38,
    },
    {
      type: "Type 2",
      sales: 52,
    },
    {
      type: "Type 3",
      sales: 61,
    },
    {
      type: "Type 4",
      sales: 145,
    },
    {
      type: "Type 5",
      sales: 48,
    },
    {
      type: "Type 6",
      sales: 38,
    },
    {
      type: "Type 7",
      sales: 38,
    },
    {
      type: "Type 8",
      sales: 38,
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
      sales: { alias: "sales" },
    },
  };
  return <Column {...config} style={{height:200}} />;
};

export default DemoColumn;
