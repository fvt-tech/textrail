import React from "react";
import { Switch, Route } from "react-router-dom";
import AddressBook from "./pages/AddressBook";
import ScheduledMessages from "./pages/ScheduledMessages";
import SenderIDs from "./pages/SenderID";
import SendSMS from "./pages/SendSMS";
import SmsTemplates from "./pages/SmsTemplates";
const MessagingSection = (props) => {
  return (
    <Switch>
      <Route path={`${props.route}/senderIDs`} component={SenderIDs} />
      <Route path={`${props.route}/addressBook`} component={AddressBook} />
      <Route path={`${props.route}/templates`} component={SmsTemplates} />
      <Route path={`${props.route}/scheduled`} component={ScheduledMessages} />
      <Route exact path={`${props.route}/sms`} component={SendSMS}/>
    </Switch>
  );
};
export default MessagingSection;
