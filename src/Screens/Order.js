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
            <div className='main' style={{display:'flex'}}>
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
            <div className='main' style={{display:'none'}}>
                <div className='title'>Verify and Submit</div>
                <div style={{margin: '20px 0px', fontWeight:'bold'}}>New Gift Order</div>
                <div style={{display: 'flex', width:'50%', padding: '10px 10px' ,justifyContent:'space-between'}}>
                    <div>Number of Employees</div>
                    <div style={{fontWeight:'bold'}}>$45</div>
                </div>
                <div style={{display: 'flex', width:'50%', padding: '10px 10px' ,justifyContent:'space-between'}}>
                    <div>Amount per Employee</div>
                    <div style={{fontWeight:'bold'}}>$45</div>
                </div>
                <div style={{display: 'flex', width:'50%', padding: '10px 10px' ,justifyContent:'space-between'}}>
                    <div>Fees</div>
                    <div style={{fontWeight:'bold'}}>$45</div>
                </div>
                <hr></hr>
                <div style={{display: 'flex', width:'50%', padding: '10px 10px' ,justifyContent:'space-between'}}>
                    <div>Total Amount</div>
                    <div style={{fontWeight:'bold'}}>$45</div>
                </div>
                <Chat></Chat>
            </div>
            <div className='main' style={{display:'none'}} >
                <Button style={{marginTop:"50px", width:'30%'}} variant="contained" color="primary">Submit A New Order</Button>
                <div style={{margin: '20px 0px', fontWeight:'bold'}}>In Process Orders</div>
                <div></div>
                <div style={{margin: '20px 0px', fontWeight:'bold'}}>Completed Orders</div>
                <div></div>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Order
