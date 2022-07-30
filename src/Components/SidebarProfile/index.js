import { auth, db, storage } from '../../firebase.config'
import { collection, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import useChat from '../../Context/ChatContext'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'

const SidebarProfile = () => {
    const { user, getUserInfo, userInfo } = useChat()

    const [image, setImage] = useState(null)

    useEffect(() => {
        if (!user) return
        (async () => {
            const querySnapshot = await getDocs(collection(db, "users"))
            getUserInfo(
                querySnapshot.docs
                    .map((doc) => doc.data())
                    .filter((obj) => obj.uid === user.uid)[0]
            )
        })()
    }, [user, getUserInfo])

    useEffect(() => {
        if(image){
            const uploadImage = async () =>{
                const imageRef = ref(
                    storage, 
                    `avatar/${new Date().getTime()} ${image.name}`
                );
                try{
                    if(user.avatarPath){
                        await deleteObject(ref(storage, user.avatarPath))
                    }
                    const snap = await uploadBytes(imageRef, image)
                    const url = await getDownloadURL(ref(storage, snap.ref.fullPath))
                    
                    updateDoc(doc(db, 'users', auth.currentUser.uid), {
                        avatar: url,
                        avatarPath: snap.ref.fullPath
                    })
                    setImage(null)
                }catch(err) {
                    console.log(err.message);
                }
            }
            uploadImage()
        }
    }, [image, user.avatarPath])


    return (
        <div className="flex flex-col items-center pb-5 border-b border-gray-400 dark:border-zinc-700">
            <div className='relative'>
                <div className="flex items-center w-20 h-20 rounded-full overflow-hidden">
                    <img className="w-full" src={userInfo && userInfo.avatar} alt="avatar" />
                </div>
                <div className='absolute right-[-2px] bottom-[-4px] bg-slate-50 dark:bg-gray-700 rounded-full overflow-hidden p-[7px] cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-400 drop-shadow-md'>
                    <label htmlFor='photo'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 cursor-pointer" viewBox="0 0 16 16">
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                        </svg>
                    </label>
                    <input type="file" accept='image/*' id="photo" className='hidden' onChange={ (e) => setImage(e.target.files[0]) } />
                </div>
            </div>
            <h1 className="pt-2 text-lg">{userInfo && userInfo.firstname}</h1>
            <p className="text-blue-500 dark:text-blue-300 text-sm">{userInfo && userInfo.email}</p>
            <p className='text-sm text-gray-400'>tehran</p>
        </div>
    )
}

export default SidebarProfile