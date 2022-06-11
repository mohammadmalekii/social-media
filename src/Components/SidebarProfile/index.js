import profile from '../../images/avatar-profile.jpg'

const SidebarProfile = () => {
    return (
        <div className="flex flex-col items-center pb-5 border-b border-gray-400 dark:border-zinc-700">
            <div className="w-20 h-20 rounded-full overflow-hidden">
                <img className="w-full h-full" src={profile} alt="avatar" />
            </div>
            <h1 className="pt-2 text-lg">Nicola</h1>
            <p className="text-blue-500 dark:text-blue-300 text-sm">+98 912 121 2121</p>
            <p className='text-sm text-gray-400'>tehran</p>
        </div>
    )
}

export default SidebarProfile