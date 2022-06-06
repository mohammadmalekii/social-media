import React from 'react'
import useRightClickMenu from "../../hooks/useRightClickMenu";
import ContextMenu from '../ContextMenu';

const Message = () => {
    const {x, y, showMenu} = useRightClickMenu();
    return (

        <div className="overflow-y-scroll h-4/5">

            <ContextMenu x={x} y={y} showMenu={showMenu} />

            <div className="flex justify-end px-10 pt-5">
                <div className="mx-3">
                    <div className="text-right">
                        <span className="text-gray-500 text-left text-[10px] mr-3">12:25 PM</span>
                        <span className="text-zinc-500 dark:text-zinc-300">You</span>
                    </div>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reply-fill cursor-pointer text-white mx-2 active:bg-slate-600 rounded-full transition-colors duration-300" viewBox="0 0 16 16">
                            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                        </svg>
                        <div className="bg-sky-100 dark:bg-blue-500 max-w-sm text-white p-2 pr-3 mt-1 rounded-tr-none rounded-xl overflow-hidden">
                            <p className="text-sm leading-7 text-right font-medium text-zinc-900 dark:text-white">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        </div>
                    </div>
                </div>
                <img className="w-8 h-8 rounded-md" src="./img/violet-color-solid-background-1920x1080.png" alt="" />
            </div>

            <div className="flex justify-start px-10 pt-5">
                <img className="w-8 h-8 rounded-md" src="./img/gold-color-solid-background-1920x1080.png" alt="" />
                <div className="mx-3">
                    <div className="text-left">
                        <span className="text-zinc-500 dark:text-zinc-300">charlie</span>
                        <span className="text-gray-500 text-left text-[10px] ml-3">12:25 PM</span>
                    </div>
                    <div className='flex items-center'>
                        <div className="bg-emerald-100 dark:bg-zinc-800 max-w-sm text-white p-2 pr-3 rounded-tl-none rounded-xl mt-1">
                            <p className="text-sm text-right font-medium text-zinc-900 dark:text-white">طرح اولیه ی social media</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reply-fill cursor-pointer text-white mx-2 active:bg-slate-600 rounded-full transition-colors duration-300" viewBox="0 0 16 16">
                            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Message