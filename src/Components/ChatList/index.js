import useChat from '../../Context/ChatContext'
import ChatListItem from '../ChatListItem'

const ChatList = () => {
  const {chatUsers, selectUser} = useChat()

  const item = chatUsers.map((item, i) => (
    <div onClick={() => selectUser(item)} className="w-full flex justify-between  text-slate-900 dark:text-white px-5 hover:bg-zinc-200  dark:hover:bg-zinc-700 hover:cursor-pointer ease-in-out duration-200">
      <ChatListItem key={i} firstname={item.firstname} avatar={item.avatar} />
    </div>
  ))

  return (
    <div className="bg-slate-50 dark:bg-zinc-800 w-full h-full overflow-y-scroll">
      {item}
    </div>
  )
}

export default ChatList