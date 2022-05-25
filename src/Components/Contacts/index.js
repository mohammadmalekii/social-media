import React from 'react'

const Contacts = ({setShowSidebar,setShowContact}) => {

  const handleContactForm = () => {
    setShowSidebar(false)
    setShowContact(false)
  }
  
  return (

<div className="flex z-50 w-full h-full justify-center items-center ease-in-out duration-500 show">
    <form className="bg-slate-700 w-3/12 p-6 text-white rounded-xl flex flex-col justify-center items-center space-y-10">

      <h1 className="text-3xl mb-5">مخاطب جدید</h1>

      <div dir="rtl" className="relative z-0 w-full mb-6 group">
          <input type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 right-0 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام</label>
      </div>

      <div dir="rtl" className="relative z-0 w-full mb-6 group">
          <input type="text" name="lastname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="lastname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 right-0 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:translate-x-4">نام خانوادگی</label>
      </div>

      <div dir="rtl" className="relative z-0 w-full mb-6 group">
          <input type="text" name="phoneNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="phoneNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 right-0 -z-10 origin-[0] peer-focus:right-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:translate-x-4">شماره تلفن</label>
      </div>

        <div className="flex justify-end items-center w-full space-x-4 mt-10">
            <button onClick={handleContactForm} className="ease-in-out duration-200 px-3 py-2 rounded-xl hover:bg-blue-200/10">لغو</button>
            <button className="ease-in-out duration-200 px-3 py-2 rounded-xl hover:bg-blue-200/10">تایید</button>
        </div>
  </form>
</div>
  )
}

export default Contacts