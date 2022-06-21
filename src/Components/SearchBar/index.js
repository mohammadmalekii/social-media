const SearchBar = () => {

  return (
    <div className="bg-slate-50 dark:bg-zinc-800 flex justify-center relative items-center dark:border-b-2 border-zinc-300 dark:border-zinc-900">
        <input className="w-11/12 bg-gray-200 dark:bg-zinc-700 text-white rounded-lg p-2 pl-10 outline-0 text-right m-3 focus:ring-2 focus:ring-blue-500" type="text" placeholder='...جستجو'/>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-5 left-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
  )
}

export default SearchBar