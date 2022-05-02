import React from 'react'
import Message from './../../Components/Messages'
import OppositeUser from './../../Components/OppositeUser'
import SendMessage from './../../Components/SendMessage'

const Chat = () => {
    return (
        <>
            <div class="flex flex-col justify-between min-w-xl h-screen mx-auto bg-chat_body">
                <OppositeUser />
                <Message/>
                <SendMessage/>
            </div>
        </>
    )
}

export default Chat