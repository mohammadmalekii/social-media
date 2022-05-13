import React from 'react'
import Message from './../../Components/Messages'
import OppositeUser from './../../Components/OppositeUser'
import SendMessage from './../../Components/SendMessage'
import ChatList from '../ChatList'
import ChatSidebar from '../ChatSidebar'

const Chat = () => {
    return (
        
        <div class="flex">
                <ChatSidebar />
                <ChatList />
            <div class="flex flex-col justify-between w-7/12 min-w-xl h-screen mx-auto w bg-chat_body">
                <OppositeUser />
                <Message/>
                <SendMessage/>
            </div>
        </div>
        
    )
}

export default Chat