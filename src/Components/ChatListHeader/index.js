import React from 'react'

const ChatListHeading = () => {
  return (
    <div className='flex items-center justify-between px-5 py-4 my-0.5 bg-left_message text-white'>
        <h1 className=' text-xl'>Messages</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="text-white" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
          </svg>
    </div>
  )
}

export default ChatListHeading