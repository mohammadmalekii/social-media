import profile from '../../images/avatar-profile.jpg'

const Setting = ({ setShowSetting, closeSidebar }) => {

  const handleSettingForm = () => {
    setShowSetting(false)
    closeSidebar()
  }

  return (
    <div dir='rtl' className="flex z-50 w-full h-full justify-center items-center ease-in-out duration-500 show">
      <div className="bg-slate-50 dark:bg-zinc-800 z-50 dark:text-white w-96 flex flex-col items-center rounded-lg space-y-3 py-4 px-6">
        <div className="flex items-center justify-between w-full pb-3">
          <h1>تنظیمات</h1>
          <svg onClick={handleSettingForm} xmlns="http://www.w3.org/2000/svg" className="h-[35px] w-[35px] cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 active:bg-zinc-100 dark:active:bg-zinc-600 transition-color duration-300  p-2 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <div className="flex justify-start py-5 items-center border-b border-zinc-300 w-full m-0">
          <div className='w-16 h-16 rounded-md overflow-hidden'>
            <img className='w-full h-full' src={profile} alt="" />
          </div>

          <div className="flex flex-col mx-5">
            <h1 className="text-xl">Nicola</h1>
            <p className="text-gray-400 mt-1">nicola_ZCH@</p>
          </div>
        </div>

        <ul className="flex flex-col w-full">

          <li className="flex items-center py-3.5 hover:bg-gray-200 dark:hover:bg-slate-700 hover:pr-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>

            <p className='pr-3'>
              اعلان ها و صداها
            </p>
          </li>

          <li className="flex items-center py-3.5 hover:bg-gray-200 dark:hover:bg-slate-700 hover:pr-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
              <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
            <p className='pr-3'>
              داده ها و ذخیره سازی
            </p>
          </li>

          <li className="flex items-center py-3.5 hover:bg-gray-200 dark:hover:bg-slate-700 hover:pr-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
            </svg>
            <p className='pr-3'>
              حریم خصوصی و امنیت
            </p>
          </li>
          <li className="flex items-center py-3.5 hover:bg-gray-200 dark:hover:bg-slate-700 hover:pr-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
            </svg>
            <p className='pr-3'>
              زبان
            </p>
          </li>
          <li className="flex items-center py-3.5 hover:bg-gray-200 dark:hover:bg-slate-700 hover:pr-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <p className='pr-3'>
              پوشه ها
            </p>
          </li>
        </ul>

        <ul className="flex flex-col w-full border-t border-zinc-300 pt-4">
          
          <li className="flex items-center py-3.5 hover:bg-gray-200 dark:hover:bg-slate-700 hover:pr-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
              <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
            </svg>
            <p className='pr-3'>
              تم ها
            </p>
          </li>

          <li className="flex items-center py-3.5 hover:bg-gray-200 dark:hover:bg-slate-700 hover:pr-3 ease-in-out duration-300 cursor-pointer rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-red-600" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
            <p className='pr-3'>
              خروج از حساب
            </p>
          </li>


        </ul>

      </div>
    </div>
  )
}

export default Setting