import { Button, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import React, { useState } from 'react'
import Chat from '../Components/Chat'
import SideBar from '../Components/SideBar'
import './Order.css'
function Order() {
    const [first, setfirst] = useState(true)
    const [second, setsecond] = useState(false)
    const [third, setthird] = useState(false)
    return (
        <div className='order-cont'>
            <div className='side-card'>
                <SideBar></SideBar>
            </div>
            <div className='main' style={first?{display:'flex'}: {display:'none'}} >
                <Button onClick={()=>{ setsecond(true); setfirst(false)}} style={{marginTop:"50px", width:'30%'}} variant="contained" color="primary">Submit A New Order</Button>
                <div style={{margin: '20px 0px', fontWeight:'bold'}}>In Process Orders</div>
                <div></div>
                <div style={{margin: '20px 0px', fontWeight:'bold'}}>Completed Orders</div>
                <div></div>
                <Chat></Chat>
            </div>
            <div className='main' style={second?{display:'flex'}: {display:'none'}} >
                <div className='title'>New Limondae/Fuel/Food Order</div>
                <div style={{margin: '10px 0px', fontWeight: 'bold'}}>Selected Employee:</div>
                <FormGroup>
                    <FormControlLabel control={<Checkbox></Checkbox>} label='Select All' ></FormControlLabel>
                    <FormControlLabel control={<Checkbox></Checkbox>} label='Name' ></FormControlLabel>
                    <FormControlLabel control={<Checkbox></Checkbox>} label='Name' ></FormControlLabel>
                    <FormControlLabel control={<Checkbox></Checkbox>} label='Name' ></FormControlLabel>
                </FormGroup>
                <div style={{display:'flex' , justifyContent:'flex-end', width:'90%'}}>
                    <Button onClick={()=>{ setsecond(false); setthird(true)}} style={{width: '100px', marginTop:'10px'}} variant="contained" color="primary"> Next </Button>
                </div>
                <Chat></Chat>
            </div>
            <div className='main' style={third? {display:'flex'}: {display:'none'}}>
                <div className='title'>Verify and Submit</div>
                <div style={{margin: '20px 0px', fontWeight:'bold'}}>New Gift Order</div>
                <div style={{display: 'flex', width:'50%', padding: '10px 10px' ,justifyContent:'space-between'}}>
                    <div>Number of Employees</div>
                    <div style={{fontWeight:'bold'}}>45</div>
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
                <Button onClick={()=>{ setfirst(true); setthird(false)}} style={{width: '100px', marginTop:'10px'}} variant="contained" color="primary">Submit</Button>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Order
