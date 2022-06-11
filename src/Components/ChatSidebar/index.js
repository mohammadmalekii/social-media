import { useState } from 'react'
import NewContact from '../../Components/NewContact';
import Setting from '../../Components/Setting';
import SidebarProfile from "../SidebarProfile"
import SidebarItems from "../SidebarItems"


const ChatSidbar = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

  
  
  const closeSidebar = () => {
    setShowShadow(false)
    setShowSidebar(false);
  }

  const handleModal = (e) => {
    if (e.target.matches(".show")) {
      closeSidebar()
      setShowSetting(false)
      setShowContact(false)
      
    }
  };

  


  return (
    
      <div className="bg-slate-700 dark:bg-zinc-900 h-full w-15 sm:w-28">
        <div className={`h-full ${showShadow ? 'fixed w-full bg-[rgba(0,0,0,.7)] duration-300 opacity-100 z-10 show' : 'opacity-0'}`} onClick={handleModal}>
        <div className={`top-0 left-0 px-6 w-80 sm:w-96 bg-white dark:bg-zinc-800 pt-12 dark:text-white fixed h-full z-30 ease-in-out duration-300 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}>
            <SidebarProfile />
            <SidebarItems setShowSidebar={setShowSidebar} setShowContact={setShowContact} setShowSetting={setShowSetting} />
            
          </div>
          {showContact && <NewContact setShowContact={setShowContact} closeSidebar={closeSidebar} />}
          {showSetting && <Setting setShowSetting={setShowSetting} closeSidebar={closeSidebar} />}
        </div>
        <div className="flex flex-col items-center justify-start min-h-screen py-4 px-3">
          <svg
          onClick={() => {
            setShowSidebar(true)
            setShowShadow(true)
          }
          }
           xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 cursor-pointer left-6 top-4 text-gray-300 dark:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

      </div>

  );
};

export default ChatSidbar