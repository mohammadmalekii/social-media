import React from 'react'

const Setting = ({setShowSetting, setShowSidebar}) => {

  const handleSettingForm = () => {
    setShowSetting(false)
    setShowSidebar(false)
  }

  return (
    <div className="flex z-50 w-full h-full justify-center items-center ease-in-out duration-500 show">
        <div className="bg-slate-800 text-white w-[28%] rounded-xl flex flex-col justify-center items-center space-y-3">

            <div className="flex justify-between w-full p-4">
              <h1>setting</h1>
                <svg onClick={handleSettingForm} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>

            <div className="flex justify-start p-5 items-center border-b-4 border-zinc-900 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex flex-col mx-5">
                <h1 className="text-xl">mohamad</h1>
                <p className="text-xs py-2">0933333333</p>
                <p className="text-gray-400">@mohammad.maleki</p>
              </div>
            </div>

              <ul className="flex flex-col w-full">

                <li className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <p>
                    folders
                  </p>
                </li>

                <li className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <p>
                    folders
                  </p>
                </li>

                <li className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <p>
                    folders
                  </p>
                </li>
                <li className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <p>
                    folders
                  </p>
                </li>
                <li className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <p>
                    folders
                  </p>
                </li>
              </ul>  

              <ul className="flex flex-col w-full border-t-2 border-zinc-700">

                <li className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                  <p>
                    edit
                  </p>
                </li>

                <li className="flex space-x-2 px-5 py-3.5 hover:bg-slate-700 ease-in-out duration-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                  <p>
                    edit
                  </p>
                </li>

              </ul>

        </div>
    </div>
  )
}

export default Setting