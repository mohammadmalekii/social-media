import React from 'react'
import Message from './../../Components/Messages'
import OppositeUser from './../../Components/OppositeUser'
import SendMessage from './../../Components/SendMessage'
import ChatList from '../ChatList'
import ChatSidebar from '../ChatSidebar'
import SearchBar from '../../Components/SearchBar'
import ChatListHeader from '../../Components/ChatListHeading'

const Chat = () => {
    return (

        <div class="flex">
            <ChatSidebar />
            <div className="flex flex-col w-4/12 bg-zinc-800">
                <ChatListHeader/>
                <SearchBar />
                <ChatList />
            </div>
            <div class="flex flex-col justify-between w-full min-w-xl h-screen mx-auto w bg-[#151718]">
                <OppositeUser />
                <Message />
                <SendMessage />
            </div>
        </div>

    )
}

export default Chat