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
        link: "/dashboard/home",
      },
    ],
  },
  {
    title: "Messaging",
    buttonList: [
      {
        icon: <SendOutlined />,
        label: "Send SMS",
        link: "/dashboard/messaging/sms",
      },
      {
        icon: <ClockCircleOutlined />,
        label: "SMS Campaigns",
        link: "/dashboard/messaging/scheduled",
      },
      {
        icon: <UnorderedListOutlined />,
        label: "SMS Templates",
        link: "/dashboard/messaging/templates",
      },
      {
        icon: <BookOutlined />,
        label: "Address Book",
        link: "/dashboard/messaging/addressBook",
      },
    ],
  },
  {
    title: "Misc",
    buttonList: [
      {
        icon: <BarChartOutlined />,
        label: "Reports",
        link: "/dashboard/misc/reports",
      },
      {
        icon: <MoneyCollectOutlined />,
        label: "Payment",
        link: "/dashboard/misc/payment",
      },
      {
        icon: <DesktopOutlined />,
        label: "API",
        link: "/dashboard/misc/api",
      },
    ],
  },
  {
    title: "My Account",
    buttonList: [
      {
        icon: <InboxOutlined />,
        label: "Profile",
        link: "/dashboard/profile",
      },
    ],
  },
];
