import React from 'react'
import Message from './../../Components/Messages'
import OppositeUser from './../../Components/OppositeUser'
import SendMessage from './../../Components/SendMessage'
import ChatList from '../ChatList'
import ChatSidebar from '../ChatSidebar'
import SearchBar from '../../Components/SearchBar'

const Chat = () => {
    return (

        <div class="flex overflow-hidden">
            <ChatSidebar />
            <div className="flex flex-col w-full sm:w-[40rem] lg:w-[33rem] bg-zinc-800">
                <SearchBar />
                <ChatList />
            </div>
            <div class="hidden md:flex flex-col justify-between w-full min-w-xl h-screen mx-auto w bg-[#151718]">
                <OppositeUser />
                <Message />
                <SendMessage />
            </div>
        </div>

    )
}

export default Chat