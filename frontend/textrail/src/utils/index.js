import {
  HomeOutlined,
  InboxOutlined,
  UnorderedListOutlined,
  BookOutlined,
  SendOutlined,
  BarChartOutlined,
  ClockCircleOutlined,
  MoneyCollectOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
export const sampleSideBarSections = [
  {
    title: "Main",
    buttonList: [
      {
        icon: <HomeOutlined />,
        label: "Dashboard",
        link: "/",
      },
    ],
  },
  {
    title: "Messaging",
    buttonList: [
      {
        icon: <SendOutlined />,
        label: "Send SMS",
        link: "/messaging",
      },
      {
        icon: <ClockCircleOutlined />,
        label: "Scheduled SMS",
        link: "/messaging",
      },
      {
        icon: <UnorderedListOutlined />,
        label: "SMS Templates",
        link: "/messaging",
      },
      {
        icon: <BookOutlined />,
        label: "Address Book",
        link: "/messaging",
      },
    ],
  },
  {
    title: "Misc",
    buttonList: [
      {
        icon: <MoneyCollectOutlined />,
        label: "Payment",
        link: "/misc",
      },
      {
        icon: <BarChartOutlined />,
        label: "Reports",
        link: "/misc",
      },
      {
        icon: <DesktopOutlined />,
        label: "API",
        link: "/misc",
      },
    ],
  },
  {
    title: "My Account",
    buttonList: [
      {
        icon: <InboxOutlined />,
        label: "Profile",
        link: "/profile",
      },
    ],
  },
];
