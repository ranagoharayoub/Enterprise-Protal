import React from 'react'
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
                    <button className='create-account'>+ Create New Account</button>
                </div>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Accounts
