import ChatBody from '../../Components/ChatBody'
import ChatHeader from '../../Components/ChatHeader'
import SendMessage from '../../Components/SendMessage'
import ChatList from '../../Components/ChatList'
import ChatSidebar from '../../Components/ChatSidebar'
import SearchBar from '../../Components/SearchBar'


const Home = () => {
  return (
    
    <div className="flex overflow-hidden">
        <ChatSidebar />
        <div className="flex flex-col w-full sm:w-[40rem] lg:w-[33rem] bg-slate-50 dark:bg-zinc-800">
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

export default Home;