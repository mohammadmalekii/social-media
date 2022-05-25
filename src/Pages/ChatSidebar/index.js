import React, { useState } from 'react'
import img from "../../avatar.png"
import Contacts from '../../Components/Contacts';
import Setting from '../../Components/Setting';
const ChatMenu = () => {
  
    const [showSidebar, setShowSidebar] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showSetting, setShowSetting] = useState(false);
    
    const handleModal = (e) => {
      if (e.target.matches(".show")) {
        setShowSidebar(false);
        setShowContact(false)
        setShowSetting(false)
      }
    };

    const handleForm = (form) => {
      if(form === "setting"){
        setShowSetting(true)
        setShowContact(false)
      }
      else{
        setShowContact(true)
        setShowSetting(false)
      }
    }


    return (
      <>
      <div className="bg-zinc-900 h-full w-[7%]">

        <div className={`h-full ${showSidebar ? 'fixed w-full bg-[rgba(0,0,0,.7)] duration-300 opacity-100 z-10 show' : 'opacity-0'}`} onClick={handleModal}>
            {showContact && <Contacts setShowContact={setShowContact} setShowSidebar={setShowSidebar} />}
            {showSetting && <Setting setShowSetting={setShowSetting} setShowSidebar={setShowSidebar} />}
        </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <svg
          onClick={() => setShowSidebar(true)}
          className="fixed z-30 flex items-center cursor-pointer left-6 top-4"
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
          className={`top-0 left-0 w-[20vw] bg-slate-800 pt-6 text-white fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex flex-col pb-5 pl-5 border-b-2 border-slate-900">
            <img src={img} alt="avatar" className="w-1/3" />
            <h1 className="py-1 text-lg">mohammad</h1>
            <p className="text-blue-300 text-sm">09333333333</p>
          </div>

          <ul className="flex flex-col pt-5">
            <li onClick={() => handleForm("setting")} className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p>تنظیمات</p>
            </li>
            <li onClick={() => handleForm("contact")} className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p>مخاطبین</p>
            </li>
            <li className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p>بایگانی</p>
            </li>
            <li className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
              <p>حالت شب</p>

              <label for="default-toggle" class="relative inline-flex items-center mb-4 cursor-pointer">
                <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>

            </li>
          </ul>
        </div>
        </div>
        
        </div>
    
        </>
    );
  };
  
export default ChatMenu