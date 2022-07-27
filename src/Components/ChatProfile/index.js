import useChat from "../../Context/ChatContext"

const ChatProfile = () => {
  const {receiver} = useChat()
  return (
    <div className="flex items-center mr-3">
      <div className="flex items-center w-10 h-10 rounded-full overflow-hidden">
        <img src={receiver.avatar} alt="" className="w-full " />
      </div>
        <div className="text-white ml-3">
            <h1 className="text-lg cursor-pointer text-slate-900 dark:text-white">{receiver === null ? '' : receiver.firstname} </h1>
            <p className="text-sm text-gray-700 dark:text-gray-400 ">{(navigator.onLine ? 'on' : 'off') + 'line'}</p>
        </div>
    </div>
  )
}

export default ChatProfile