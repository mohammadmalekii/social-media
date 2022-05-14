import React from 'react'

const OppositeUser = () => {
    return (
            <div className="flex items-center justify-between px-10 py-2 bg-zinc-800">

                <div className="flex items-center ">
                    <img src="img/gold-color-solid-background-1920x1080.png" alt="" className="w-8 h-8 rounded-full" />
                    <div className="text-white ml-3">
                        <a href="#" className="text-lg cursor-pointer">charlie</a>
                        <p className="text-sm text-gray-400 ">online</p>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
            </div>
    )
}

export default OppositeUser