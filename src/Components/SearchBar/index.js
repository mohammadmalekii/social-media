import React from 'react'

const SearchBar = () => {

    

  return (
    <div className="flex justify-center items-center border-b-2 border-zinc-900">

        <input className="w-11/12 bg-zinc-700 text-white relative rounded-lg p-2 pl-10 outline-0 text-right m-3 focus:ring-2 focus:ring-blue-500" type="text" placeholder='...جستجو'/>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute top-[20px] left-[7%] text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
  )
}

export default SearchBar