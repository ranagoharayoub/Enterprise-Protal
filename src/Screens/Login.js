import React from 'react'
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
                <div className='chat-cont'>
                        <button className='chat-support'>Chat Support</button>
                </div>
            </div>
        </div>
    )
}

export default Login
