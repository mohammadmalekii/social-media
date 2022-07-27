import ChatBody from '../../Components/ChatBody'
import ChatHeader from '../../Components/ChatHeader'
import SendMessage from '../../Components/SendMessage'
import ChatList from '../../Components/ChatList'
import ChatSidebar from '../../Components/ChatSidebar'
import SearchBar from '../../Components/SearchBar'

import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import {collection, getDocs} from 'firebase/firestore'
import {db} from "../../firebase.config"
import useChat from '../../Context/ChatContext'

const Chat = () => {
  const navigate = useNavigate();

  const {user, addUser, getChatUsers} = useChat()

  useEffect(() => {
    // get from localStorage
    const user = JSON.parse(localStorage.getItem("user"))
    
    // if no user -> redirect
    user ? addUser(user) : navigate('/')
  }, [navigate, addUser])

  useEffect(() => {
    if(!user) return 
    (async () => {
        const querySnapshot = await getDocs(collection(db, "users"))
        getChatUsers(
            querySnapshot.docs
            .map((doc) => doc.data())
            .filter((obj) => obj.uid !== user.uid)
        )
        })()
  }, [user ,getChatUsers])

  return (
    <div className="flex overflow-hidden">
      <ChatSidebar />
      <div className="flex flex-col w-full sm:w-[40rem] lg:w-[33rem] bg-slate-50 dark:bg-zinc-800 h-screen">
          <SearchBar />
          <ChatList />
      </div>
      <div className="hidden md:flex flex-col justify-between w-full min-w-xl h-screen mx-auto bg-neutral-100 dark:bg-zinc-900">
          <ChatHeader />
          <ChatBody />
          <SendMessage />
      </div>
    </div>
  )
}

export default Chat;