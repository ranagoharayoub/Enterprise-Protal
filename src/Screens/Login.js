import React from 'react'
import Chat from '../Components/Chat'
import './Login.css'

function Login() {
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
                    </form>
                </div>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Login
