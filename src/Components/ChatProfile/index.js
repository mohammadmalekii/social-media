const ChatProfile = () => {
  return (
    <div className="flex items-center">
        <img src="img/gold-color-solid-background-1920x1080.png" alt="" className="w-8 h-8 rounded-full" />
        <div className="text-white ml-3">
            <h1 className="text-lg cursor-pointer text-slate-900 dark:text-white">charlie</h1>
            <p className="text-sm text-gray-700 dark:text-gray-400 ">{(navigator.onLine ? 'on' : 'off') + 'line'}</p>
        </div>
    </div>
  )
}

export default ChatProfile