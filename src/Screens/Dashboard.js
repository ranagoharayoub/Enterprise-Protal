import React from 'react'
import Chat from '../Components/Chat'
import SideBar from '../Components/SideBar'
import './Dashboard.css'

function Dashboard() {
    return (
        <div className='dash-cont'>
            <div className='side-card'>
                <SideBar></SideBar>
            </div>
            <div className='main'>
                
            <Chat></Chat>
            </div>
        </div>
    )
}

export default Dashboard
