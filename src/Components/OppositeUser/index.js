import React,{useState} from 'react'

const OppositeUser = () => {
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <div className="flex justify-between px-10 py-2 bg-zinc-800 h-16">

            <div className="flex items-center">
                <img src="img/gold-color-solid-background-1920x1080.png" alt="" className="w-8 h-8 rounded-full" />
                <div className="text-white ml-3">
                    <a href="#" className="text-lg cursor-pointer">charlie</a>
                    <p className="text-sm text-gray-400 ">{(navigator.onLine ? 'on' : 'off') + 'line'}</p>
                </div>
            </div>

            <div dir='rtl' className='relative box-border'>
                <div className=''>
                    <div className={`${showDropDown ? 'h-full w-full fixed duration-300 opacity-100' : 'opacity-0'}`} onClick={() => setShowDropDown(false)}></div>
                    <svg onClick={() => setShowDropDown(!showDropDown)} xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" className="text-white hover:bg-zinc-700 active:bg-zinc-600 transition-color duration-300 cursor-pointer p-2 rounded-full" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                    

                   
                    <ul className={`list-none p-2 bg-[#323741] border-[#363a43] rounded-xl text-white transition-all ease-in-out duration-300 mt-3 font-normal z-30 ${showDropDown ? 'scale-100' : `opacity-0 scale-0`}`}>
                        <li className='flex items-center p-1 pb-3 rounded-sm cursor-pointer hover:bg-[#2a2d35]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5 ml-4" viewBox="0 0 16 16">
                                <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
                            </svg>
                            <span>بی صدا</span>
                        </li>
                        <li className='flex items-center p-1 pb-3 rounded-sm cursor-pointer hover:bg-[#2a2d35]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4 ml-4" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            <span>جست و جو</span>
                        </li>
                        <li className='flex items-center p-1 pb-3 rounded-sm cursor-pointer hover:bg-[#2a2d35]'>
                            <svg xmlns="http://www.w3.org/2000/svg"fill="currentColor" className="h-4 w-4 ml-4" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            <span>گزارش</span>
                        </li>
                        <li className='flex items-center p-1 pb-3 rounded-sm cursor-pointer hover:bg-[#2a2d35]'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span>ترک کردن گروه / کانال</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OppositeUser