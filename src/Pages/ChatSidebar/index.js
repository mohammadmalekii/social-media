import React, { useState } from 'react'
import img from "../../avatar.png"
import Contacts from '../../Components/Contacts';
import Setting from '../../Components/Setting';
const ChatMenu = () => {
  
    const [showSidebar, setShowSidebar] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showSetting, setShowSetting] = useState(false);
    
    const handleModal = (e) => {
      console.log(e.target)
      console.log(e)
      if (e.target.matches(".show")) {
        setShowSidebar(false);
        console.log(1)
      }
      if(e.target.children.length > 1){
        e.target.children.length = 1
      }
    };


    return (
      <>
      <div className="bg-zinc-900 h-full w-[7%]">

        <div className={`h-full ${showSidebar ? 'fixed w-full bg-[rgba(0,0,0,.7)] duration-300 opacity-100 z-10 show' : 'opacity-0'}`} onClick={handleModal}>
            {showContact && <Contacts setShowContact={setShowContact}/>}
            {showSetting && <Setting setShowSetting={setShowSetting}/>} 
        </div>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <svg
            onClick={() => setShowSidebar(true)}
            className="fixed  z-30 flex items-center cursor-pointer left-6 top-4"
            fill="#2563EB"
            viewBox="0 0 100 80"
            width="35"
            height="35"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        
  
        <div
          className={`top-0 left-0 w-[20vw] bg-slate-800 pt-6 text-white fixed h-full z-40 ease-in-out duration-300 ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col pb-5 pl-5 border-b-2 border-slate-900">
            <img src={img} alt="avatar" className="w-1/3" />
              <h1 className="py-1 text-lg">mohammad</h1>
              <p className="text-blue-300 text-sm">09333333333</p>
          </div>

          <ul className="flex flex-col pt-5">
            <li onClick={() => setShowSetting(true)} className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p>تنظیمات</p>
            </li>
            <li onClick={() => setShowContact(true)} className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p>مخاطبین</p>
            </li>
            <li className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p>تنظیمات</p>
            </li>
            <li className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p>تنظیمات</p>
            </li>
          </ul>
        </div>
        </div>
        
        </div>
    
        </>
    );
  };
  
export default ChatMenu