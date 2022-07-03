import avatar from "../../images/avatar.png"

const ChatListItem = ({firstname}) => {
  return (
    
    <div className="w-full flex justify-between  text-slate-900 dark:text-white px-5 hover:bg-zinc-200  dark:hover:bg-zinc-700 hover:cursor-pointer ease-in-out duration-200">
    <div className="flex py-3 items-center">
      <img className="w-12" src={avatar} alt="avatar"/>
      <div className="flex flex-col pl-3">
        <h1 className="text-md">{firstname}</h1>
        <p className="text-sm text-gray-700 dark:text-gray-400"><span className='text-slate-900 dark:text-white'>Charlie:</span> ... طرح اولیه ی</p>
      </div>
    </div>
    <div className="flex  items-center text-xs">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <h1 className='text-gray-700 dark:text-gray-400'>1/12/2022</h1>
    </div>
  </div>
  )
}

export default ChatListItem