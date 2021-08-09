import React from 'react'
import {} from '@ant-design/icons'
import "./styles.scss"
import ActionStrip from './components/ActionStrip'
import ListItemFirstSection from './components/ListItemFirstSection'
const DashboardListItem = ({image,name="Muniru Issah",description="I clone anything i see, kindah"}) => {
    return (
        <div className="dashboardListItem">
           <ListItemFirstSection name={name} description={description} avatar={image} />
            <ActionStrip/>
        </div>
    )
}

export default DashboardListItem
