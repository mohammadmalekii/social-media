import React from 'react'
import avatar from "../../avatar.png"

const ChatListItem = () => {
  return (
    <div className="w-full flex justify-between text-white border-b-2 border-zinc-900 px-2 hover:bg-zinc-700 hover:cursor-pointer ease-in-out duration-200">
    <div className="flex py-3 items-center">
      <img className="w-1/3" src={avatar} alt="avatar"/>
      <div className="flex flex-col pl-3">
        <h1 className="text-xl">title</h1>
        <p className="text-base">paragraph</p>
      </div>
    </div>
    <div className="flex p-3 items-center text-xs">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <h1>1/12/2022</h1>
    </div>
  </div>
  )
}

export default ChatListItem