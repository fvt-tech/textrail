import DashboardPage from "../sections/MainDashboard";
import MessagingSection from "../sections/Messaging";
import MiscSection from "../sections/Misc";
import Profile from "../sections/Profile";
export const DashboardMainContent = [
  {
    name: "Dashboard",
    component: DashboardPage,
    route: "/",
    exact: true,
  },
  {
    name: "Messaging",
    component: MessagingSection,
    route: "/messaging",
  },
  {
    name: "Misc",
    component: MiscSection,
    route: "/misc",
  },
  {
    name: "My Account",
    component: Profile,
    route: "/profile",
  },
];
