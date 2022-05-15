import React from 'react'

const Message = () => {
    return (

            <div className="overflow-y-scroll h-4/5">
                
                <div className="flex justify-end px-10 pt-5">
                    <div className="mx-3">
                        <div className="text-right">
                            <span className="text-gray-500 text-left text-[10px] mr-3">12:25 PM</span>
                            <span className="text-zinc-300">You</span>
                        </div>
                        <div className=" bg-blue-500 max-w-sm text-white p-2 pr-3 mt-1 rounded-tr-none rounded-xl overflow-hidden">
                            <p className="text-sm leading-5 text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        </div>
                    </div>
                    <img className="w-8 h-8 rounded-md" src="./img/violet-color-solid-background-1920x1080.png" alt="" />
                </div>

                <div className="flex justify-start px-10 pt-5">
                    <img className="w-8 h-8 rounded-md" src="./img/gold-color-solid-background-1920x1080.png" alt="" />
                    <div className="mx-3">
                        <div className="text-left">
                            <span className="text-zinc-300">charlie</span>
                            <span className="text-gray-500 text-left text-[10px] ml-3">12:25 PM</span>
                        </div>
                        <div className="bg-zinc-800 max-w-sm text-white p-2 pr-3 rounded-tl-none rounded-xl mt-1">
                            <p className="text-sm text-right">طرح اولیه ی social media</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Message