import { useState } from 'react';
import { useNavigate } from 'react-router';
import ClipLoader from "react-spinners/ClipLoader";

const Logout = () => {
    const [showLogout, setShowLogout] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)

    const handleShowLogout = () => {
        setShowLogout(!showLogout)
    }

    const navigate = useNavigate();
    let logout = () => {
        setShowLogout(false)
        setShowSpinner(true)
        setTimeout(() => {
            localStorage.setItem("user", null);
            navigate('/', { replace: true })
            setShowSpinner(true)
        }, 3000);
    }

    return (
        <>
            <div className={`${showLogout ? "h-full w-full bg-black/60 duration-300 opacity-100 absolute top-0 left-0" : "opacity-0"}`} onClick={() => setShowLogout(false)}></div>
            <div dir="rtl" className={`${showLogout ? "bg-slate-50 dark:bg-zinc-700 dark:text-white left-[36%] top-[40%] fixed w-[28rem] h-32 rounded-lg pt-4 pr-5 scale-100 opacity-100" : "opacity-0 scale-0 h-0"}`}>
                <p>آیا واقعا قصد دارید از حساب خود خارج شوید؟</p>
                <div className="flex justify-end items-center w-full space-x-4 mt-10">
                    <button
                        onClick={() => setShowLogout(false)}
                        className="ease-in-out duration-200 px-3 py-2 rounded-xl hover:bg-zinc-800/10 dark:hover:bg-blue-200/10"
                    >
                        خیر
                    </button>
                    <button onClick={logout} className="ease-in-out duration-200 px-3 py-2 rounded-xl hover:bg-zinc-800/10 dark:hover:bg-blue-200/10">
                        بله
                    </button>
                </div>
            </div>

            <div className={`${showSpinner ? "h-full w-full bg-black/60 duration-300 opacity-100 absolute top-0 left-0" : "opacity-0"}`}></div>
            <ClipLoader className='mx-auto fixed left-[45%] top-[40%]' color="#fff" loading={showSpinner} size={150} />

            <li onClick={handleShowLogout} className="flex items-center py-3.5 hover:bg-gray-200 dark:hover:bg-slate-700 hover:pr-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-red-600" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg>
                <p className='pr-3'>
                    خروج از حساب
                </p>
            </li>
        </>
    )
}

export default Logout