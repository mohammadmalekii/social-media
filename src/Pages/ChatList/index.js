import React from 'react'
import ChatListItem from '../../Components/ChatListItem'

const ChatList = () => {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 w-full">
      <ChatListItem />  
      <ChatListItem />  
      <ChatListItem />  
    </div>
  )
}

export default ChatList