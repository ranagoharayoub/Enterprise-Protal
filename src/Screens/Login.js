import { Button } from '@material-ui/core'
import React from 'react'
import Chat from '../Components/Chat'
import './Login.css'

function Login({login}) {
    return (
        <div className='login-cont'>
            <div className='title'>
                Limonade Enterprise Portal
            </div>
            <div className='login-sec'>
                <div className='logo-cont'>
                    LOGO
                </div>
                <div className='login-form'>
                    <form className='form'>
                        <label>Email</label>
                        <input type='email'></input>
                        <label>Password</label>
                        <input type='password'></input>
                       <Button onClick={login} style={{width: '100px', marginTop:'20px'}} variant="contained" color="primary">Log In</Button> 
                    </form>
                </div>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Login
