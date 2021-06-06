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
                    
                </div>
                <div className='login-form'>
                    <form className='form' onSubmit={login} >
                        <label>Email</label>
                        <input required type='email'></input>
                        <label>Password</label>
                        <input required type='password'></input>
                        <Button type='submit' style={{width: '100px', marginTop:'20px', background:'#158baa', color:'white'}} variant="contained">Log In</Button> 
                    </form>
                </div>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Login
