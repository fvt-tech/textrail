import React, { useState, useEffect } from "react";
import { Pie, G2 } from "@ant-design/charts";

const DemoPie = ({ height }) => {
  const { registerTheme } = G2;
  registerTheme("custom-theme", {
    colors10: [
      "#FACDAA",
      "#F4A49E",
      "#EE7B91",
      "#E85285",
      "#BE408C",
      "#BE408C",
    ],
    colors20: [
      "#FACDAA",
      "#F4A49E",
      "#EE7B91",
      "#E85285",
      "#BE408C",
      "#BE408C",
      "#942D93",
    ],
  });
  const data = [
    {
      type: "Data 1",
      value: 27,
    },
    {
      type: "Data 2",
      value: 25,
    },
    {
      type: "Data 3",
      value: 18,
    },
    {
      type: "Data 4",
      value: 15,
    },
    {
      type: "Data 5",
      value: 10,
    },
    {
      type: "Data 6",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {},
    interactions: [{ type: "element-active" }],
    theme: "custom-theme",
  };
  return <Pie {...config} style={{ height: height ? height : 250 }} />;
};

export default DemoPie;
