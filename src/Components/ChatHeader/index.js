import useChat from '../../Context/ChatContext'
import ChatProfile from '../ChatProfile'
import ChatTools from '../ChatTools'

const ChatHeader = () => {
    const {receiver} = useChat()

    return (

        <>
            {receiver === null ? null :
                <div className="flex justify-between px-10 py-2 bg-slate-50 dark:bg-zinc-800 h-16">
                    <ChatProfile/>
                    <ChatTools/>
                </div>
            }
        </>
    )
}

export default ChatHeader