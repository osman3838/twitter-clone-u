import { Popover } from '@headlessui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mb-4  px-4 flex flex-wrap gap-2  relative  '>
       <Link to={"/"} className='leading-5 text-[13px] hover:underline text-[#71767b]'>
        Hizmet Şartları
       </Link>
       <Link to={"/"} className='leading- text-[13px] hover:underline text-[#71767b]'>
        Gizlilik Politikası
       </Link>
       
       <Link to={"/"} className='leading- text-[13px] hover:underline text-[#71767b]'>
       Çerez Politikası
       </Link>
       <Link to={"/"} className='leading- text-[13px] hover:underline text-[#71767b]'>
       Imprint       </Link>
       <Link to={"/"} className='leading- text-[13px] hover:underline text-[#71767b]'>
       Erişilebilirlik       </Link>
       <Link to={"/"} className='leading- text-[13px] hover:underline text-[#71767b]'>
       Reklam bilgisi       </Link>
       <div> 
      <Popover className={" w-full"}>
<Popover.Button className='outline-none leading-5 flex  items-center text-[13px] hover:underline text-[#71767b]'>
    Daha Fazla
    <svg viewBox="0 0 24 24" aria-hidden="true" fill='currentColor' width={17} height={13} className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-ip8ujx r-1p4rafz"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
    </Popover.Button >        
    <Popover.Panel className={"w-[178px] bottom-12 overflow-hidden flex flex-col max-w-[384px] h-[220px] absolute  right-full  -left-20 bg-black rounded-xl shadow-box"}>
        <Link to="/" className='py-3 transition-colors px-4 hover:bg-[#16181c] text-white text-[15px] leading-5 font-bold'>
            Hakkında
        </Link>
        <Link to="/" className='py-3 transition-colors px-4 hover:bg-[#16181c] text-white text-[15px] leading-5 font-bold'>
        X uygulamasını indir        </Link>
        <Link to="/" className='py-3 transition-colors px-4 hover:bg-[#16181c] text-white text-[15px] leading-5 font-bold'>
        Durum        </Link>
        <Link to="/" className='py-3 transition-colors px-4 hover:bg-[#16181c] text-white text-[15px] leading-5 font-bold'>
        İşletmeler İçin X
        </Link>
        <Link to="/" className='py-3 transition-colors px-4 hover:bg-[#16181c] text-white text-[15px] leading-5 font-bold'>
        Geliştiriciler
        </Link>
    </Popover.Panel>
      </Popover>
      </div>
       <p className='leading- text-[13px] hover:underline text-[#71767b]'>
       © 2023 Osman Özdemir.       </p>

       
        </div>
  )
}

export default Footer