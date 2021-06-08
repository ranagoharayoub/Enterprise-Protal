import React, { useState } from 'react'
import Chat from '../Components/Chat'
import SideBar from '../Components/SideBar'
import './CreateAccount.css'
import '@material-ui/core'
import { Button, Checkbox, FormControlLabel, FormGroup, Snackbar } from '@material-ui/core'
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons'
import { Alert } from '@material-ui/lab'
function CreateAccount() {
        const [success, setsuccess] = useState(false)
        const [fail, setfail] = useState(false)
    return (
        <div className='create-account'>
            <div  className='sidecard'>
                <SideBar></SideBar>
            </div>
            <div  className='main'>
                <div className='title'>Create New Account</div>
                <form className='form' onSubmit={(e)=>{ e.preventDefault(); setsuccess(true); }} >
                    <label>First Name</label>
                    <input required type='text'></input>
                    <label>Last Name</label>
                    <input required type='text'></input>
                    <label>Company Email</label>
                    <input required type='email'></input>
                    <div style={{fontSize: 'small', marginTop: '15px'}}>Account to be created</div>
                    <FormGroup onClick={()=> setfail(true)} aria-required='true' >
                        <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank fontSize="small" />} checkedIcon={<CheckBox fontSize="small" color='primary' />} ></Checkbox>} label={<span style={{fontSize: 'small'}}>Carte Limonade</span> } ></FormControlLabel>
                        <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank fontSize="small"  />} checkedIcon={<CheckBox fontSize='small' color='primary' ></CheckBox>} ></Checkbox>} label={<span style={{fontSize:'small'}}>Limonade Food</span>}></FormControlLabel>
                        <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank fontSize="small"  />} checkedIcon={<CheckBox fontSize='small' color='primary' ></CheckBox>} ></Checkbox>} label= {<span style={{fontSize:'small'}}>Limonade Fuel</span>}   ></FormControlLabel>
                    </FormGroup>
                    <Button style={{width: '100px', marginTop:'10px', background:'#158baa', color:'white'}} variant="contained" type='submit'>
                        Submit
                    </Button>
                    <Snackbar open={success} autoHideDuration={5000} onClose={()=> setsuccess(false)}>
                        <Alert onClose={()=> setsuccess(false)} severity="success">
                            Account Created Successfully
                        </Alert>
                    </Snackbar>
                    <Snackbar open={fail} autoHideDuration={5000} onClose={()=> setfail(false)}>
                        <Alert onClose={()=> setfail(false)} severity="error">
                            Account Already Exist
                        </Alert>
                    </Snackbar>
                </form>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default CreateAccount
