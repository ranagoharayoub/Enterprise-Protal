import React, { useState } from 'react'
import './SideBar.css'

function SideBar() {
    const [selector, setselector] = useState('')
    
    const activeClass =() =>{
            
    }

    return (
        <div className='sidebar-cont'>
            <div onClick={activeClass} className='dashboard'>Dashboard</div>
            <div className='accounts'>Accounts</div>
            <div className='order-mng'>Order Management</div>
            <div className='settings'>Settings</div>
        </div>
    )
}

export default SideBar
