import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons'
import React from 'react'
import Chat from '../Components/Chat'
import SideBar from '../Components/SideBar'
import './Dashboard.css'

function Dashboard() {
    return (
        <div className='dash-cont'>
            <div className='side-card'>
                <SideBar></SideBar>
            </div>
            <div className='main'>
                <div className='title'>New Order</div>
                <div className='main-content'>
                    <div className='food-type'>
                        <FormGroup >
                            <FormControlLabel  control={<Checkbox icon={<CheckBoxOutlineBlank fontSize="small" />} checkedIcon={<CheckBox fontSize="small" color='primary' />} ></Checkbox>} label={<span style={{fontSize: 'small'}}>Limondae Food </span> } ></FormControlLabel>
                            <img src='/img/food.png' width='400px' alt='img'></img>
                            <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank fontSize="small"  />} checkedIcon={<CheckBox fontSize='small' color='primary' ></CheckBox>} ></Checkbox>} label={<span style={{fontSize:'small'}}>Carte Limonade </span>}></FormControlLabel>
                            <img src='/img/cart.png'  width='400px' alt='img'></img>
                            <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank fontSize="small"  />} checkedIcon={<CheckBox fontSize='small' color='primary' ></CheckBox>} ></Checkbox>} label= {<span style={{fontSize:'small'}}>Limondae Fuel</span>}   ></FormControlLabel>
                            <img src='/img/fuel.png'  width='400px' alt='img'></img>
                        </FormGroup>
                        <form style={{marginTop:'20px'}}>
                            <label style={{fontWeight:'bold'}} >Enter Amount Per Employee</label>
                            <input style={{marginLeft:'20px'}} type='number'></input>
                        </form>
                        <Button style={{width: '100px', marginTop:'20px'}} variant="contained" color="primary">Next</Button>
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
        </div>
    )
}

export default Dashboard
