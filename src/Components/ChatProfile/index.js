import useChat from "../../Context/ChatContext"

const ChatProfile = () => {
  const {receiver} = useChat()
  return (
    <div className="flex items-center mr-3">
        <img src="img/gold-color-solid-background-1920x1080.png" alt="" className="w-8 h-8 rounded-full" />
        <div className="text-white ml-3">
            <h1 className="text-lg cursor-pointer text-slate-900 dark:text-white">{receiver === null ? '' : receiver.firstname} </h1>
            <p className="text-sm text-gray-700 dark:text-gray-400 ">{(navigator.onLine ? 'on' : 'off') + 'line'}</p>
        </div>
    </div>
  )
}

export default ChatProfile