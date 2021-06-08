import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

function SideBar() {



    return (
        <div style={{display:'flex'}} className='sidebar-cont'>
           <Link style={{color:'inherit', textDecoration:'none'}} to='/' ><div style={window.location.pathname==='/'?{fontWeight:'bold', borderLeft:"3px solid black"}:{fontWeight:'light', borderLeft:"none"}} className='dashboard'>Dashboard</div></Link> 
           <Link style={{color:'inherit', textDecoration:'none'}} to='/accounts' ><div style={window.location.pathname==='/accounts'?{fontWeight:'bold', borderLeft:"3px solid black"}:{fontWeight:'light', borderLeft:"none"}} className='accounts'>Accounts</div></Link>
           <Link style={{color:'inherit', textDecoration:'none'}} to= '/order'><div  style={window.location.pathname==='/order'?{fontWeight:'bold', borderLeft:"3px solid black"}:{fontWeight:'light', borderLeft:"none"}} className='order-mng'>Order Management</div></Link> 
           <Link style={{color:'inherit', textDecoration:'none'}} to='/settings'><div  style={window.location.pathname==='/settings'?{fontWeight:'bold', borderLeft:"3px solid black"}:{fontWeight:'light', borderLeft:"none"}} className='settings'>Settings</div></Link> 
        </div>
    )
}

export default SideBar
