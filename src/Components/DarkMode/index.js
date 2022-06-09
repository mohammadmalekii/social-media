import { useState } from 'react'

const DarkMode = () => {
    const [toggle, setToggle] = useState(false);


    const handleToggle = () => {
        setToggle(!toggle)
        if (!toggle) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }
    return (
    <div className="flex justify-between hover:bg-slate-200 dark:hover:bg-slate-700 ease-in-out duration-300 cursor-pointer hover:px-3 items-center relative py-3.5 rounded-2xl">
                <li onClick={handleToggle} className="w-full flex justify-between items-center">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                        </svg>
                        <p className="pr-3">حالت شب</p>
                    </div>
                </li>
                <label htmlFor="checked-toggle" className="absolute left-2 inline-flex items-center cursor-pointer">
                    <input onChange={handleToggle} type="checkbox" id="checked-toggle" className="sr-only peer" checked={toggle} />
                    <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
  )
}

export default DarkMode