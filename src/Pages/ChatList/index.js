import React from 'react'
import ChatListItem from '../../Components/ChatListItem'
import ChatListHeading from '../../Components/ChatListHeading'

const ChatList = () => {
  return (
    <div className="bg-zinc-800 w-full">
      <ChatListItem />  
      <ChatListItem />  
      <ChatListItem />  
    </div>
  )
}

export default ChatList