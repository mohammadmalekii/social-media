import { useEffect, useState } from "react"
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase.config"
import useChat from "../../Context/ChatContext"

const SendMessage = () => {
    const [conversationId, setConversationId] = useState(null)
    const [text, setText] = useState('')


    const { receiver, user, getMessages, replay, getReplay } = useChat()

    // handle sending the messages
    const handleSendMessage = async (e) => {
        e.preventDefault()
        if (text.trim() === '') return
        const myMessage = {
            message: text,
            uid: user.uid,
            time: new Date().getHours() + ":" + new Date().getMinutes(),
            replay,
        }
        setText('')
        getReplay('')
        // add and save message to firebase
        const conversation = doc(db, "conversations", conversationId)
        const docSnap = await getDoc(conversation)
        // append message to exiting conversation
        if (docSnap.exists()) {
            const docData = docSnap.data()
            await updateDoc(conversation, {
                messages: [...docData.messages, myMessage]
            })
        } else {
            // create a new conversation
            await setDoc(doc(db, "conversations", conversationId), {
                messages: [myMessage],
            })
        }

    }

    // set conversationId
    useEffect(() => {
        if (!receiver || !user) return

        let myConvId

        if (receiver.uid > user.uid) myConvId = receiver.uid + user.uid;
        else myConvId = user.uid + receiver.uid

        setConversationId(myConvId)
    }, [receiver, user])

    // get conversation from firestore
    useEffect(() => {
        if (!conversationId) return
        const unSub = onSnapshot(
            doc(db, "conversations", conversationId),
            (doc) => {
                const currentData = doc.data();
                if (currentData?.messages.length > 0) {
                    getMessages(currentData.messages)
                }
                else getMessages([])
            }
        )
        return unSub
    }, [conversationId])


    return (
        <>
            {receiver === null ? null :
                <>
                    <form onSubmit={handleSendMessage} className="flex flex-col justify-center py-4 px-10 ">
                        <div className='bg-slate-50 dark:bg-zinc-800 rounded-xl dark:text-white'>

                            <div className={`rounded-xl overflow-hidden px-6 py-3 text-white ${replay.length === 0 ? 'hidden' : 'block'}`}>
                                <div className='flex items-center bg-chat_body py-2 px-2 rounded-xl'>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-black dark:text-white mx-2 " viewBox="0 0 16 16">
                                            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                                        </svg>
                                        <div className='w-0.5 h-5 dark:bg-white bg-black rounded-full mx-4'></div>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className='w-5/6 text-black dark:text-white text-sm'>{replay}</p>
                                        <svg onClick={() => getReplay('')} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="cursor-pointer text-black dark:text-white transition-color duration-300 p-1.5 active:bg-gray-300 hover:bg-gray-200 dark:active:bg-gray-700 dark:hover:bg-gray-600 rounded-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                            <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex w-full rounded-xl overflow-hidden bg-slate-50">
                                <div>
                                    <button className="dark:text-white bg-slate-50 dark:bg-zinc-800 p-4 transition-all duration-150 active:bg-gray-200 dark:active:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/200white0/svg" className="h-6 w-6 text-zinc-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                        </svg>
                                    </button>
                                </div>
                                <input type="text"  value={text} onChange={(e) => setText(e.target.value)} placeholder="Message..." className="text-sm pl-1 px-6 py-3 bg-slate-50 dark:bg-zinc-800 dark:text-white outline-none w-full max-w-full" />
                                <button type="button" className="text-gray-600 dark:text-white bg-slate-50 dark:bg-zinc-800 p-4 active:bg-gray-200 dark:active:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                                    </svg>
                                </button>
                                <button type="submit" className="text-gray-600 dark:text-white bg-slate-50 dark:bg-zinc-800 p-4 active:bg-gray-200 dark:active:bg-gray-700 active:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </>
            }
        </>
    )
}

export default SendMessage