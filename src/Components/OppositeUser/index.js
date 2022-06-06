import React, { useState } from 'react'

const OppositeUser = () => {
    const [showDropDown, setShowDropDown] = useState(false)

    const [muteUnmute, setMuteUnmute] = useState(false)
    const [report, setReport] = useState(false)
    const [exit, setExit] = useState(false)

    const handleShow = () => {
        setShowDropDown(false)
        setReport(false)
        setExit()
    }

    return (
        
            <div className="flex justify-between px-10 py-2 bg-white dark:bg-zinc-800 h-16">
                <div className="flex items-center">
                    <img src="img/gold-color-solid-background-1920x1080.png" alt="" className="w-8 h-8 rounded-full" />
                    <div className="text-white ml-3">
                        <h1 className="text-lg cursor-pointer text-slate-900 dark:text-white">charlie</h1>
                        <p className="text-sm text-gray-700 dark:text-gray-400 ">{(navigator.onLine ? 'on' : 'off') + 'line'}</p>
                    </div>
                </div>

                
            <div dir='rtl' className='relative box-border'>
                <div>
                   <div className='flex justify-evenly items-center'>
                      <svg onClick={() => setShowDropDown(!showDropDown)} xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" className="dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 active:bg-zinc-200 dark:active:bg-zinc-600 transition-color duration-300 cursor-pointer p-2 rounded-full" viewBox="0 0 16 16">
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      </svg>
      
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4 ml-4 dark:text-white cursor-pointer" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>                      

                   </div>


                    <div className={`${showDropDown ? 'h-full w-full fixed duration-300 opacity-100' : 'opacity-0'}`} onClick={() => setShowDropDown(false)}></div>
                      <ul className={`text-zinc-900 dark:text-white list-none p-2 bg-zinc-100 dark:bg-zinc-700 border-zinc-100 dark:border-zinc-700 rounded-xl transition-all ease-in-out duration-300 mt-3 font-normal z-30 ${showDropDown ? 'scale-100' : `opacity-0 scale-0`}`}>
                        <li  onClick={() => setMuteUnmute(!muteUnmute)} className='flex items-center p-1 pb-3 rounded-sm cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700'>
                            {muteUnmute 
                            ?
                            (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5 ml-4" viewBox="0 0 16 16">
                                <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
                            </svg>
                            <span>بی صدا</span>
                            </>
                            )
                            :
                            (
                            <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                            <span>با صدا کردن</span>
                            </>
                            )}
                        </li>
                        <li className='flex items-center p-1 pb-3 rounded-sm cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700' onClick={() => setReport(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4 ml-4" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            <span>گزارش</span>
                        </li>
                        <li className='flex items-center p-1 pb-3 rounded-sm cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700' onClick={() => setExit(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span>ترک کردن گروه / کانال</span>
                        </li>
                    </ul>
                </div>
            </div>


            {showDropDown && report
                ?
                <>
                    <div className={`${report ? 'h-full w-full bg-black/60 duration-300 opacity-100 absolute top-0 left-0' : 'opacity-0'}`} onClick={() => setReport(false)}></div>
                    <div dir='rtl' className={`${showDropDown && report ? "bg-white dark:bg-zinc-700 dark:text-white left-[38%] top-[40%] fixed w-[28rem] h-32 rounded-lg pt-4 pr-5 scale-100 opacity-100" : "opacity-0 scale-0"}`}>
                        <p>آیا از گزارشی که می دهید مطمئن هستید؟</p>
                        <div class="flex justify-end items-center w-full space-x-4 mt-10">
                            <button onClick={() => setReport(false)} class="ease-in-out duration-200 px-3 py-2 rounded-xl hover:bg-zinc-800/10 dark:hover:bg-blue-200/10">لغو</button>
                            <button className="ease-in-out duration-200 px-3 py-2 rounded-xl hover:bg-zinc-800/10 dark:hover:bg-blue-200/10">تایید</button>
                        </div>
                    </div>
                </>
                :
                null
            }

            {showDropDown && exit
                ?
                <>
                    <div className={`${exit ? 'h-full w-full bg-black/60 duration-300 opacity-100 absolute top-0 left-0' : 'opacity-0'}`} onClick={() => setExit(false)}></div>
                        <div dir='rtl' className={`${showDropDown && exit ? "bg-white dark:bg-zinc-700 dark:text-white left-[38%] top-[40%] fixed w-[28rem] h-32 rounded-lg pt-4 pr-5 scale-100 opacity-100" : "opacity-0 scale-0"}`}>
                        <p>آیا قصد دارید گروه/ کانال را ترک کنید؟</p>
                        <div class="flex justify-end items-center w-full space-x-4 mt-10">
                            <button onClick={() => setExit(false)} class="ease-in-out duration-200 px-3 py-2 rounded-xl hover:bg-zinc-800/10 dark:hover:bg-blue-200/10">لغو</button>
                            <button className="text-red-500 ease-in-out duration-200 px-3 py-2 rounded-xl hover:bg-blue-200/10">ترک کانال</button>
                        </div>
                    </div>
                </>
                :
                null
            }      
        </div>
    )
}

export default OppositeUser