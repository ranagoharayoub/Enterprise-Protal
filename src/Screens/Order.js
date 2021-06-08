import { Button,  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React, { useState } from 'react'
import Chat from '../Components/Chat'
import SideBar from '../Components/SideBar'
import './Order.css'
import { AllCheckerCheckbox, Checkbox , CheckboxGroup } from '@createnl/grouped-checkboxes';


function Order() {
    const [first, setfirst] = useState(true)
    const [second, setsecond] = useState(false)
    const [third, setthird] = useState(false)
    const [fourth, setfourth] = useState(false)
    const [success, setsuccess] = useState(false)
    const [amountPerEmployee, setamountPerEmployee] = useState('')
    const [choice, setchoice] = useState([])
    const [numberOfEmployee, setnumberOfEmployee] = useState()
    
        const onCheckboxChange = (checkboxes) => {
            console.log(checkboxes);
            setchoice(checkboxes.filter(check => check.checked === true)) 
        }  
     
        const onchangeEmployee = (checkboxes) =>{
            console.log(checkboxes)
            var employee = checkboxes.filter(number => number.checked === true)
            setnumberOfEmployee(employee.length)
        }
    console.log(numberOfEmployee)

    return (
        <div className='order-cont'>
            <div className='side-card'>
                <SideBar></SideBar>
            </div>
            <div className='main' style={first?{display:'flex'}: {display:'none'}} >
                <Button onClick={()=>{ setsecond(true); setfirst(false)}} style={{marginTop:'50px', width:'fit-content', background:'#185baa', color: 'white'}} variant="contained">Submit A New Order</Button>
                <div style={{margin: '20px 0px', fontWeight:'bold'}}>In Process Orders</div>
                <div></div>
                <div style={{margin: '20px 0px', fontWeight:'bold'}}>Completed Orders</div>
                <div></div>
                <Snackbar open={success} autoHideDuration={5000} onClose={()=> setsuccess(false)}>
                        <Alert onClose={()=> setsuccess(false)} severity="success">
                            Order Submitted Successfully
                        </Alert>
                </Snackbar>
                <Chat></Chat>
            </div>
            <div className='main' style={second?{display:'flex'}: {display:'none'}} >
                <div className='title'>New Order</div>
                <form  className='main-content'  onSubmit={(e)=> {e.preventDefault(); setthird(true); setsecond(false); setamountPerEmployee(amountPerEmployee)}}>
                    <div className='food-type'>
                        {/* <form onSubmit={(e)=> {e.preventDefault(); setthird(true); setsecond(false); setamountPerEmployee(amountPerEmployee)}}> */}
                            <CheckboxGroup onChange={onCheckboxChange}>
                                <label>
                                    <Checkbox value="Food" />
                                    Limonade Food
                                </label>
                                <br></br>
                                <img src='/img/food.png' width='200px' alt='img'></img>
                                <br></br>
                                <label>
                                    <Checkbox value="Carte" />
                                    Carte Limonade
                                </label>
                                <br></br>
                                <img src='/img/cart.png'  width='200px' alt='img'></img>
                                <br></br>
                                <label>
                                    <Checkbox value="Fuel" />
                                    Limonade Fuel
                                </label>
                                <br></br>
                                <img src='/img/fuel.png'  width='200px' alt='img'></img>
                            </CheckboxGroup>
                            
                            <fieldset style={{marginTop:'20px', border:'none'}}>
                                <label style={{fontWeight:'bold'}} >Enter Amount Per Employee:</label>
                                <input value={amountPerEmployee} onChange={e=>setamountPerEmployee(e.target.value)} required style={{marginLeft:'0px'}} type='number'></input>
                            </fieldset>
                            {/* <Button type='submit' style={{width: '100px', marginTop:'20px', background:'#158baa', color:'white'}} variant="contained" >Next</Button> */}
                        {/* </form> */}
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
                    <br></br>
                    <Button type='submit' style={{width: '100px', height:'50px', background:'#158baa', color:'white'}} variant="contained" >Next</Button>
                </form>
            <Chat></Chat>
            </div>
            <div className='main' style={third?{display:'flex'}: {display:'none'}} >
                <div className='title'>New Limonade {choice.map(opt=>opt.value)} Order</div>
                <div style={{margin: '10px 0px', fontWeight: 'bold'}}>Selected Employee:</div>
                
                <CheckboxGroup onChange={onchangeEmployee}>
                    <label>
                        <AllCheckerCheckbox />
                        Select All
                    </label>
                    <hr></hr>
                    <label>
                        <Checkbox value="tos" />
                        Name 1
                    </label>
                    <label>
                        <Checkbox value="privacy-policy" />
                        Name 2
                    </label>
                    <label>
                        <Checkbox value="advertisements" />
                        Name 3
                    </label>

                </CheckboxGroup>
                
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
                    <div style={{fontWeight:'bold'}}>{numberOfEmployee}</div>
                </div>
                <div style={{display: 'flex', width:'50%', padding: '10px 10px' ,justifyContent:'space-between'}}>
                    <div>Amount per Employee</div>
                    <div style={{fontWeight:'bold'}}>${amountPerEmployee}</div>
                </div>
                <div style={{display: 'flex', width:'50%', padding: '10px 10px' ,justifyContent:'space-between'}}>
                    <div>Fees</div>
                    <div style={{fontWeight:'bold'}}>$45</div>
                </div>
                <hr></hr>
                <div style={{display: 'flex', width:'50%', padding: '10px 10px' ,justifyContent:'space-between'}}>
                    <div>Total Amount</div>
                    <div style={{fontWeight:'bold'}}>${numberOfEmployee*amountPerEmployee+45}</div>
                </div>
                <Button onClick={()=>{ setfirst(true); setfourth(false); setsuccess(true)}} style={{width: '100px', marginTop:'10px', background:'#158baa', color:'white'}} variant="contained" >Submit</Button>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Order
