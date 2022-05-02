import React from 'react'

const OppositeUser = () => {
    return (
        <>
            <div class="flex items-center justify-between px-10 py-2 bg-left_message">

                <div class="flex items-center ">
                    <img src="img/gold-color-solid-background-1920x1080.png" alt="" class="w-8 h-8 rounded-full" />
                    <div class="text-white ml-3">
                        <a class="text-lg cursor-pointer">charlie</a>
                        <p class="text-[13px] text-gray-400 ">online</p>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-three-dots-vertical text-white" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
            </div>
        </>
    )
}

export default OppositeUser