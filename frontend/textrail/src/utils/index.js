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
        link: "/messaging/scheduled",
      },
      {
        icon: <UnorderedListOutlined />,
        label: "SMS Templates",
        link: "/messaging/templates",
      },
      {
        icon: <BookOutlined />,
        label: "Address Book",
        link: "/messaging/addressBook",
      },
    ],
  },
  {
    title: "Misc",
    buttonList: [
      {
        icon: <BarChartOutlined />,
        label: "Reports",
        link: "/misc",
      },
      {
        icon: <MoneyCollectOutlined />,
        label: "Payment",
        link: "/misc/payment",
      },
      {
        icon: <DesktopOutlined />,
        label: "API",
        link: "/misc/api",
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
