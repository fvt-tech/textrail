import React from 'react';
import {  SearchOutlined} from '@ant-design/icons'
import "./styles.scss"
const DashboardCard = ({children}) => {
    return (
        <div className="dashboardCard">
            {children}
        </div>
    )
}

export default DashboardCard