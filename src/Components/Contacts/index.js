import React from 'react'

const Contacts = ({setShowContact}) => {
  
  

  return (
    <div className="flex z-50 w-full h-full justify-center items-center ease-in-out duration-500 show">
        <div className="bg-slate-700 text-white px-12 pb-12 rounded-xl flex flex-col justify-center items-center space-y-3">

          <h1 className="text-3xl pt-6 pb-10">مخاطب جدید</h1>
          
            <label className="w-3/4 text-right text-sm" htmlFor='firstname'>نام</label>
            <input id="firstname" className=" text-blue-400 w-10/12 rounded-lg p-2 pl-10 outline-0 text-right m-3 focus:ring-2 focus:ring-blue-500" type="text"/>

            <label className="w-3/4 text-right text-sm" htmlFor='lastname'>نام خانوادگی</label>
            <input id="lastname" className=" text-blue-400 w-10/12 rounded-lg p-2 pl-10 outline-0 text-right m-3 focus:ring-2 focus:ring-blue-500" type="text"/>

            <label className="w-3/4 text-right text-sm" htmlFor='number'>شماره تیلیفون</label>
            <input id="number" className=" text-blue-400 w-10/12 rounded-lg p-2 pl-10 outline-0 text-right m-3 focus:ring-2 focus:ring-blue-500" type="text"/>

          <div className="flex justify-end items-center w-full space-x-4 mt-10">
            <button onClick={() => setShowContact(false)} className="ease-in-out duration-200 px-3 py-2 rounded-xl hover:bg-blue-200/10">لغو</button>
            <button className="ease-in-out duration-200 px-3 py-2 rounded-xl hover:bg-blue-200/10">تایید</button>
          </div>

        </div>
    </div>
  )
}

export default Contacts