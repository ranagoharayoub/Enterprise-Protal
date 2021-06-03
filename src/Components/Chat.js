import { Button } from '@material-ui/core'
import React from 'react'
import './Chat.css'

function Chat() {
    return (
        <div className='chat-cont'>
            <Button className='chat-support' variant="contained" color="secondary" href="#contained-buttons">Chat Support</Button>
        </div>
    )
}

export default Chat
