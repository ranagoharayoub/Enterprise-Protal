import { Menu } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

function SideBar() {

    const [height, setheight] = useState(window.innerHeight)
    const [width, setwidth] = useState(window.innerWidth)
    const [active, setactive] = useState(false)
    function resize() {
        setheight(window.innerHeight) ;
        setwidth(window.innerWidth) ;
      }
      
      window.onresize = resize;
      console.log(`height:${height}, width:${width}`)
      console.log(active)
    return (
        <div>
            {
            
            width>= '600'?

            <div className='sidebar-cont'>
                <Link style={{color:'inherit', textDecoration:'none'}} to='/' ><div style={window.location.pathname==='/'?{fontWeight:'bold', borderLeft:"3px solid black"}:{fontWeight:'light', borderLeft:"none"}} className='dashboard'>Dashboard</div></Link> 
                <Link style={{color:'inherit', textDecoration:'none'}} to='/accounts' ><div style={window.location.pathname==='/accounts'?{fontWeight:'bold', borderLeft:"3px solid black"}:{fontWeight:'light', borderLeft:"none"}} className='accounts'>Accounts</div></Link>
                <Link style={{color:'inherit', textDecoration:'none'}} to= '/order'><div  style={window.location.pathname==='/order'?{fontWeight:'bold', borderLeft:"3px solid black"}:{fontWeight:'light', borderLeft:"none"}} className='order-mng'>Order Management</div></Link> 
                <Link style={{color:'inherit', textDecoration:'none'}} to='/settings'><div  style={window.location.pathname==='/settings'?{fontWeight:'bold', borderLeft:"3px solid black"}:{fontWeight:'light', borderLeft:"none"}} className='settings'>Settings</div></Link> 
            </div>
            :

            <div>
                <Menu style={{cursor:'pointer'}} onClick={()=> setactive(!active)}></Menu>
                <div style={active? {display:'flex'}: {display:'none'}} className='mob-nav'>
                    
                    <Link style={{color:'inherit', textDecoration:'none'}} to='/' ><div style={window.location.pathname==='/'?{fontWeight:'bold', borderLeft:"3px solid black"}:{fontWeight:'light', borderLeft:"none"}} className='dashboard'>Dashboard</div></Link> 
                    <Link style={{color:'inherit', textDecoration:'none'}} to='/accounts' ><div style={window.location.pathname==='/accounts'?{fontWeight:'bold', borderLeft:"3px solid black"}:{fontWeight:'light', borderLeft:"none"}} className='accounts'>Accounts</div></Link>
                    <Link style={{color:'inherit', textDecoration:'none'}} to= '/order'><div  style={window.location.pathname==='/order'?{fontWeight:'bold', borderLeft:"3px solid black"}:{fontWeight:'light', borderLeft:"none"}} className='order-mng'>Order Management</div></Link> 
                    <Link style={{color:'inherit', textDecoration:'none'}} to='/settings'><div  style={window.location.pathname==='/settings'?{fontWeight:'bold', borderLeft:"3px solid black"}:{fontWeight:'light', borderLeft:"none"}} className='settings'>Settings</div></Link> 
                    <div onClick={()=> setactive(!active)} className='settings'>Close</div>
                </div>
            </div>
            
            }

        </div>

    )
}

export default SideBar
