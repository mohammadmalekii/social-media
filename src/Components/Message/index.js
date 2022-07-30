import useChat from "../../Context/ChatContext"

const Message = ({ message, user, time, uid, replay }) => {
    const { receiver, userInfo, getReplay } = useChat()

    return (
        <>
        {user.uid === uid ?
            <div className="flex justify-end px-10 pt-5">
                <div className="mx-3">
                    <div className="text-right">
                        <span className="text-gray-500 text-left text-[10px] mr-3">{time} {new Date().getHours() > 12 ? 'PM' : 'AM'}</span>
                        <span className="text-zinc-500 dark:text-zinc-300">You</span>
                    </div>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"  onClick={() => getReplay(message)} className="bi bi-reply-fill cursor-pointer text-neutral-600 dark:text-white mx-2 p-[3px] active:bg-gray-300 hover:bg-gray-200 dark:active:bg-gray-700 dark:hover:bg-gray-800 rounded-full transition-colors duration-300 " viewBox="0 0 16 16">
                            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                        </svg>
                        <div className="bg-blue-500 max-w-sm text-white p-2 pr-3 mt-1 rounded-tr-none rounded-xl overflow-hidden">
                            <div>
                                {/* <span className={`${replay.length === 0 ? "hidden" : "ml-1 text-sm font-bold"}`}>{userInfo.firstname}</span> */}
                                <p className={`${replay.length === 0 ? 'hidden' : 'block text-[12px] pl-1.5 mb-2 border-l-2'}`}>{replay.length > 59 ? replay.slice(0,60) + "..." : replay}</p>
                            </div>
                            <p className="text-sm leading-7 text-right font-medium text-white">{message}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-8 h-8 rounded-full overflow-hidden">
                    <img className="w-full" src={userInfo.avatar} alt="" />
                </div>
            </div>
            :
            <div className="flex justify-start px-10 pt-5">
                <div className="flex items-center w-8 h-8 rounded-full overflow-hidden">
                    <img className="w-full" src={receiver.avatar} alt="" />
                </div>
                <div className="mx-3">
                    <div className="text-left">
                        <span className="text-zinc-500 dark:text-zinc-300">{receiver.firstname}</span>
                        <span className="text-gray-500 text-left text-[10px] ml-3">{time} {new Date().getHours() > 12 ? 'PM' : 'AM'}</span>
                    </div>
                    <div className='flex items-center'>
                        <div className="bg-white dark:bg-zinc-800 max-w-sm text-white p-2 pr-3 rounded-tl-none rounded-xl mt-1">
                            <div>
                                {/* <span className={`${replay.length === 0 ? "hidden" : "text-black dark:text-white ml-1 text-sm font-bold"}`}>{userInfo.firstname}</span> */}
                                <p dir='rtl' className={`${replay.length === 0 ? 'hidden' : 'block text-[12px] text-zinc-900 pl-1.5 mb-2 border-l-2 dark:text-white border-blue-500'}`}>{replay.length > 59 ? replay.slice(0,60) + "..." : replay}</p>
                            </div>
                            <p className="text-sm text-right font-medium text-zinc-900 dark:text-white">{message}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"  onClick={() => getReplay(message)} className="cursor-pointer p-[3px] text-neutral-600 active:bg-gray-300 hover:bg-gray-200 dark:active:bg-gray-700 dark:hover:bg-gray-800 dark:text-white mx-2 dark:active:bg-slate-600 rounded-full transition-colors duration-300" viewBox="0 0 16 16">
                            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                        </svg>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Message