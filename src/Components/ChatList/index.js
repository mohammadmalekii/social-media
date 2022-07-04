import ChatListItem from '../ChatListItem'

const ChatList = ({chatUsers, setReceiver}) => {
  const item = chatUsers.map((item, i) => (
    <div onClick={() => setReceiver(item)} className="w-full flex justify-between  text-slate-900 dark:text-white px-5 hover:bg-zinc-200  dark:hover:bg-zinc-700 hover:cursor-pointer ease-in-out duration-200">
      <ChatListItem key={i} firstname={item.firstname}/>
    </div>
  ))

  return (
    <div className="bg-slate-50 dark:bg-zinc-800 w-full h-full overflow-y-scroll">
      {item}
    </div>
  )
}

export default ChatList