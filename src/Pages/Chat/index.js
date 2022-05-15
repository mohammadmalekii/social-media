import React from 'react'
import Message from './../../Components/Messages'
import OppositeUser from './../../Components/OppositeUser'
import SendMessage from './../../Components/SendMessage'
import ChatList from '../ChatList'
import ChatSidebar from '../ChatSidebar'
import SearchBar from '../../Components/SearchBar'

const Chat = () => {
    return (

        <div class="flex">
            <ChatSidebar />
            <div className="flex flex-col w-5/12 bg-zinc-800">
                <SearchBar />
                <ChatList />
            </div>
            <div class="flex flex-col justify-between w-7/12 min-w-xl h-screen mx-auto w bg-stone-900">
                <OppositeUser />
                <Message />
                <SendMessage />
            </div>
        </div>

    )
}

export default Chat