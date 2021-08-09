import {
  HomeOutlined,
  InboxOutlined,
  MessageOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  TableOutlined,
  FormOutlined,
} from "@ant-design/icons";
export const sampleSideBarSections = [
  {
    title: "Main",
    buttonList: [
      {
        icon: <HomeOutlined />,
        label: "Dashboard",
      },
    ],
  },
  {
    title: "App",
    buttonList: [
      {
        icon: <InboxOutlined />,
        label: "Inbox",
      },
      {
        icon: <MessageOutlined />,
        label: "Chat",
      },
      {
        icon: <CalendarOutlined />,
        label: "Calendar",
      },
      {
        icon: <AppstoreOutlined />,
        label: "Taskboard",
      },
    ],
  },
  {
    title: "UI Elements",
    buttonList: [
      {
        icon: <InboxOutlined />,
        label: "Component",
      },
      {
        icon: <FormOutlined />,
        label: "Forms",
      },
      {
        icon: <TableOutlined />,
        label: "Tables",
      },
      {
        icon: <BarChartOutlined />,
        label: "Charts",
      },
    ],
  },
];
