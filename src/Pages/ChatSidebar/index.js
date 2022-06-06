import React, { useState } from 'react'
import Contacts from '../../Components/Contacts';
import Setting from '../../Components/Setting';
import profile from './alex-suprun-1JGHAAdbL_Y-unsplash.jpg'
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
    if (form === "setting") {
      setShowSetting(true)
      setShowContact(false)
    }
    else {
      setShowContact(true)
      setShowSetting(false)
    }
  }


  return (
    <>
      <div className="bg-zinc-900 h-full w-15 sm:w-28">

        <div className={`h-full ${showSidebar ? 'fixed w-full bg-[rgba(0,0,0,.7)] duration-300 opacity-100 z-10 show' : 'opacity-0'}`} onClick={handleModal}>
        <div className={`top-0 left-0 px-6 w-80 sm:w-96 bg-zinc-800 pt-12 text-white fixed h-full z-30 ease-in-out duration-300 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex flex-col items-center pb-5 border-b border-zinc-700">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img className="w-full h-full" src={profile} alt="avatar" />
              </div>
              <h1 className="pt-2 text-lg">Nicola</h1>
              <p className="text-blue-300 text-sm">+98 912 121 2121</p>
              <p className='text-sm text-gray-400'>tehran</p>
            </div>

            <ul dir="rtl" className="flex flex-col pt-5">
              <li onClick={() => handleForm("contact")} className="flex items-center justify-between py-3.5 hover:bg-slate-700 hover:px-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
                <div className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  <p className="pr-3">گروه جدید</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3 h-3" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </li>

              <li onClick={() => handleForm("contact")} className="flex items-center justify-between py-3.5 hover:bg-slate-700 hover:px-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
                <div className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                  <p className="pr-3">مخاطبین</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3 h-3" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </li>
              
              <li onClick={() => handleForm("setting")} className="flex items-center justify-between py-3.5 hover:bg-slate-700 hover:px-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
                <div className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>
                  <p className="pr-3">تنظیمات</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3 h-3" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </li>

              <li className="flex items-center justify-between py-3.5 hover:bg-slate-700 hover:px-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
                <div className='flex items-center'>  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <p className="pr-3">بایگانی</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3 h-3" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </li>

              <li className="flex items-center justify-between py-3.5 hover:bg-slate-700 hover:px-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
                <div className='flex items-center'>  
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                  </svg>
                  <p className="pr-3">پیام های ذخیره شده</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3 h-3" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </li>
              
              <li className="flex items-center py-3.5 hover:bg-slate-700 hover:px-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                </svg>
                <p className="pr-3">حالت شب</p>
                <label for="default-toggle" className="relative inline-flex items-center mr-1 cursor-pointer">
                  <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                  <div className="w-11 h-[28px] pt-1 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </li>

            </ul>
          </div>
          {showContact && <Contacts setShowContact={setShowContact} setShowSidebar={setShowSidebar} />}
          {showSetting && <Setting setShowSetting={setShowSetting} setShowSidebar={setShowSidebar} />}
        </div>
        <div className="flex flex-col items-center justify-start min-h-screen py-4 px-3">
          <svg
            onClick={() => setShowSidebar(true)}
            className="cursor-pointer left-6 top-4"
            fill="#2563EB"
            viewBox="0 0 100 80"
            width="35"
            height="35"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>


          
        </div>

      </div>

    </>
  );
};

export default ChatMenu