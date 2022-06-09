import ChatProfile from '../ChatProfile'
import ChatTools from '../ChatTools'

const ChatHeader = () => {
    

    return (

        <div className="flex justify-between px-10 py-2 bg-white dark:bg-zinc-800 h-16">
            <ChatProfile/>
            <ChatTools/>
        </div>
    )
}

export default ChatHeader