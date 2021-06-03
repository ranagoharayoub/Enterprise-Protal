import React from 'react'
import Chat from '../Components/Chat'
import SideBar from '../Components/SideBar'
import './CompanyProfile.css'
function CompanyProfile() {
    return (
        <div className='company-cont'>
            <div className='side-card'>
                <SideBar></SideBar>
            </div>
            <div className='main'>
                    <div className='title'>
                        Company Profile
                    </div>
                    <div className='form-cont'>
                        <form className='form'>
                            <label>Name</label>
                            <input type='text'></input>
                            <label>Fiscal ID</label>
                            <input type='text'></input>
                        </form>
                    </div>
                    {/* <div className='last'>
                    
                    </div> */}
                    <Chat></Chat>
            </div>
        </div>
    )
}

export default CompanyProfile
