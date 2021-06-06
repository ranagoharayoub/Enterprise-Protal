import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons'
import React, { useState } from 'react'
import Chat from '../Components/Chat'
import SideBar from '../Components/SideBar'
import './Order.css'


function Order() {
    const [first, setfirst] = useState(true)
    const [second, setsecond] = useState(false)
    const [third, setthird] = useState(false)
    const [fourth, setfourth] = useState(false)

    const [choice, setchoice] = useState(null)



    return (
        <div className='order-cont'>
            <div className='side-card'>
                <SideBar></SideBar>
            </div>
            <div className='main' style={first?{display:'flex'}: {display:'none'}} >
                <Button onClick={()=>{ setsecond(true); setfirst(false)}} style={{marginTop:"50px", width:'30%',background:'#158baa', color:'white'}} variant="contained">Submit A New Order</Button>
                <div style={{margin: '20px 0px', fontWeight:'bold'}}>In Process Orders</div>
                <div></div>
                <div style={{margin: '20px 0px', fontWeight:'bold'}}>Completed Orders</div>
                <div></div>
                <Chat></Chat>
            </div>
            <div className='main' style={second?{display:'flex'}: {display:'none'}} >
                <div className='title'>New Order</div>
                <div className='main-content'>
                    <div className='food-type'>
                        <form onSubmit={(e)=> {e.preventDefault(); setthird(true); setsecond(false)}}>
                            <FormGroup>
                                <FormControlLabel  onClick={()=> setchoice('Food')}  control={<Checkbox icon={<CheckBoxOutlineBlank fontSize="small" />} checkedIcon={<CheckBox fontSize="small" color='primary' />} ></Checkbox>} label={<span style={{fontSize: 'small'}}>Limonada Food </span> } ></FormControlLabel>
                                <img src='/img/food.png' width='400px' alt='img'></img>
                                <FormControlLabel onClick={()=> setchoice('Carte')} control={<Checkbox icon={<CheckBoxOutlineBlank fontSize="small"  />} checkedIcon={<CheckBox fontSize='small' color='primary' ></CheckBox>} ></Checkbox>} label={<span style={{fontSize:'small'}}>Carte Limonade </span>}></FormControlLabel>
                                <img src='/img/cart.png'  width='400px' alt='img'></img>
                                <FormControlLabel onClick={()=> setchoice("Fuel")} control={<Checkbox icon={<CheckBoxOutlineBlank fontSize="small"  />} checkedIcon={<CheckBox fontSize='small' color='primary' ></CheckBox>} ></Checkbox>} label= {<span style={{fontSize:'small'}}>Limonade Fuel</span>}   ></FormControlLabel>
                                <img src='/img/fuel.png'  width='400px' alt='img'></img>
                            </FormGroup>
                            <fieldset style={{marginTop:'20px', border:'none'}}>
                                <label style={{fontWeight:'bold'}} >Enter Amount Per Employee</label>
                                <input required style={{marginLeft:'20px'}} type='number'></input>
                            </fieldset>
                            <Button type='submit' style={{width: '100px', marginTop:'20px', background:'#158baa', color:'white'}} variant="contained" >Next</Button>
                        </form>
                    </div>
                    <div className='payment-type'>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Payment Method</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" >
                                <FormControlLabel value="Cheque" control={<Radio />} label="Cheque" />
                                <FormControlLabel value="Bank" control={<Radio />} label="Bank Transfer" />
                                <FormControlLabel value="Online" control={<Radio />} label="Online Payment" />
                                <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            <Chat></Chat>
            </div>
            <div className='main' style={third?{display:'flex'}: {display:'none'}} >
                <div className='title'>New Limonade {choice} Order</div>
                <div style={{margin: '10px 0px', fontWeight: 'bold'}}>Selected Employee:</div>
                <FormGroup>
                    <FormControlLabel control={<Checkbox></Checkbox>} label='Select All' ></FormControlLabel>
                    <FormControlLabel control={<Checkbox></Checkbox>} label='Name' ></FormControlLabel>
                    <FormControlLabel control={<Checkbox></Checkbox>} label='Name' ></FormControlLabel>
                    <FormControlLabel control={<Checkbox></Checkbox>} label='Name' ></FormControlLabel>
                </FormGroup> 
                <div style={{display:'flex' , justifyContent:'flex-end', width:'90%'}}>
                    <Button onClick={()=>{ setthird(false); setfourth(true)}} style={{width: '100px', marginTop:'10px', background:'#158baa', color:'white'}} variant="contained" > Next </Button>
                </div>
                <Chat></Chat>
            </div>
            <div className='main' style={fourth? {display:'flex'}: {display:'none'}}>
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
                <Button onClick={()=>{ setfirst(true); setfourth(false)}} style={{width: '100px', marginTop:'10px', background:'#158baa', color:'white'}} variant="contained" >Submit</Button>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Order
