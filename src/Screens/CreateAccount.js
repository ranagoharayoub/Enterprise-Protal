import React from 'react'
import Chat from '../Components/Chat'
import SideBar from '../Components/SideBar'
import './CreateAccount.css'
import '@material-ui/core'
import { Button, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons'

function CreateAccount() {
    return (
        <div className='create-account'>
            <div className='sidecard'>
                <SideBar></SideBar>
            </div>
            <div className='main'>
                <div className='title'>Create New Account</div>
                <form className='form'>
                    <label>First Name</label>
                    <input type='text'></input>
                    <label>Last Name</label>
                    <input type='text'></input>
                    <label>Company Name</label>
                    <input type='text'></input>
                </form>
                <div style={{fontSize: 'small', marginTop: '15px'}}>Account to be created</div>
                <FormGroup >
                    <FormControlLabel  control={<Checkbox icon={<CheckBoxOutlineBlank fontSize="small" />} checkedIcon={<CheckBox fontSize="small" color='primary' />} ></Checkbox>} label={<span style={{fontSize: 'small'}}>Carte Limondae</span> } ></FormControlLabel>
                    <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank fontSize="small"  />} checkedIcon={<CheckBox fontSize='small' color='primary' ></CheckBox>} ></Checkbox>} label={<span style={{fontSize:'small'}}>Limonade Food</span>}></FormControlLabel>
                    <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlank fontSize="small"  />} checkedIcon={<CheckBox fontSize='small' color='primary' ></CheckBox>} ></Checkbox>} label= {<span style={{fontSize:'small'}}>Limondae Fuel</span>}   ></FormControlLabel>
                </FormGroup>
                <Button style={{width: '100px', marginTop:'10px'}} variant="contained" color="primary" href="#contained-buttons">
                Submit
                </Button>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default CreateAccount
