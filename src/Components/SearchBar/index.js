import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center border-b-2 border-zinc-900">
        <input 
        // className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
        className="w-11/12 bg-zinc-700 text-white rounded-lg p-2 outline-0 text-right m-3 focus:ring-2 focus:ring-blue-500"
         type="text" placeholder='...جستجو'/>
    </div>
  )
}

export default SearchBar