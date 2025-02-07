import { Tabs } from "@/pages/AccountSetting";
import Logout from "./Logout";
import PersonalInfo from "@/pages/PersonalInfo";
import MyBooking from "@/pages/MyBooking";

const AccountTabContent = ({ activeTab }: { activeTab: Tabs }) => {
  switch (activeTab) {
    case Tabs.PersonalInfo:
      return <PersonalInfo />;
    case Tabs.MyBooking:
      return <MyBooking />;
    case Tabs.Logout:
      return <Logout />;
    default:
      return null;
  }
};
export default AccountTabContent;
