import { Button, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import React from 'react'
import Chat from '../Components/Chat'
import SideBar from '../Components/SideBar'
import './Order.css'
function Order() {
    return (
        <div className='order-cont'>
            <div className='side-card'>
                <SideBar></SideBar>
            </div>
            <div className='main'>
                <div className='title'>New Limondae/Fuel/Food Order</div>
                <div style={{margin: '10px 0px', fontWeight: 'bold'}}>Selected Employee:</div>
                <FormGroup>
                    <FormControlLabel control={<Checkbox></Checkbox>} label='Select All' ></FormControlLabel>
                    <FormControlLabel control={<Checkbox></Checkbox>} label='Name' ></FormControlLabel>
                    <FormControlLabel control={<Checkbox></Checkbox>} label='Name' ></FormControlLabel>
                    <FormControlLabel control={<Checkbox></Checkbox>} label='Name' ></FormControlLabel>
                </FormGroup>
                <div style={{display:'flex' , justifyContent:'flex-end', width:'90%'}}>
                    <Button style={{width: '100px', marginTop:'10px'}} variant="contained" color="primary"> Next </Button>
                </div>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Order
