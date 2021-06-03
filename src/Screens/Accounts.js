import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Chat from '../Components/Chat'
import SideBar from '../Components/SideBar'
import './Accounts.css'

function Accounts() {
    return (
        <div className='acoounts-cont'>
            <div className='side-card'>
                <SideBar></SideBar>
            </div>
            <div className='main'>
                <div className='search'>
                    <input className='search-input' type='text'></input>
                    <Link to='/newaccount'><Button variant="contained" color="primary" >+ Create New Account</Button></Link>
                </div>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Accounts
