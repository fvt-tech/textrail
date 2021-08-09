import React from "react";
import "./styles.scss";
import DashboardListItem from "./components/ListItem";
const defaultList = [
  {
    name: "Muniru Issah",
    description: "I clone anything i see, kindah",
  },
  {
    name: "Muniru Issah",
    description: "I clone anything i see, kindah",
  },
  {
    name: "Muniru Issah",
    description: "I clone anything i see, kindah",
  },
  {
    name: "Muniru Issah",
    description: "I clone anything i see, kindah",
  },
];
const DashboardList = ({ list=defaultList }) => {
  return (
    <div className="dashboardList">
      {list.map((item) => (
        <DashboardListItem {...item} />
      ))}
    </div>
  );
};

export default DashboardList;
// const ListHeader=({title})=>{
//     return(
//         <div>
//             <span>{title}</span>
//             <div>
//                 <input/>
//                 <SearchOutlined/>
//             </div>
//         </div>
//     );
// }
