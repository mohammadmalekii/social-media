import React from 'react'
import ChatListItem from '../../Components/ChatListItem'
import ChatListHeading from '../../Components/ChatListHeading'

const ChatList = () => {
  return (
      <>
        <div className='flex-col w-2/6 bg-left_message'>
          <ChatListHeading/>
        <div className="bg-left_message">
          <ChatListItem />  
          {/* <ChatListItem />  
          <ChatListItem />   */}
        </div>
        </div>
      </>
  )
}

export default ChatList