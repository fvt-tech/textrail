import DashboardPage from "../sections/MainDashboard";
import MessagingSection from "../sections/Messaging";
import MiscSection from "../sections/Misc";
import Profile from "../sections/Profile";
export const DashboardMainContent = [
  {
    name: "Dashboard",
    component: DashboardPage,
    route: "/dashboard/home",
    exact: true,
  },
  {
    name: "Messaging",
    component: MessagingSection,
    route: "/dashboard/messaging",
  },
  {
    name: "Misc",
    component: MiscSection,
    route: "/dashboard/misc",
  },
  {
    name: "My Account",
    component: Profile,
    route: "/dashboard/profile",
  },
];
