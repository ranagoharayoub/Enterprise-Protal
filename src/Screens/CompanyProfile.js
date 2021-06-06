import { Button } from '@material-ui/core'
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
                        <form className='form' onSubmit={e=> e.preventDefault()}>
                            <label>Name</label>
                            <input required type='text'></input>
                            <label>Fiscal ID</label>
                            <input required type='text'></input>
                            <Button type='submit' style={{width: '100px', marginTop:'20px', background:'#158baa', color:'white'}} variant="contained" >Next</Button>
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
