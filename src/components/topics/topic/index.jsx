import { Popover } from '@headlessui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { numberFormat } from '~/utils/formats'
const Topic = ({item}) => {
  return (
    <Link to={`?q=${item.topic.value}`} className='py-3 relative px-4 transition-colors hover:bg-white/[0.03]'>

<div className='text-[13px] text-[#71767b] leading-6'>
    {
        item?.title
    }
</div>
<div className='text-[15px] font-bold leading-6'>
    {
        item.topic.type === 'tag' && 
        ('#')
    }
    {
       item.topic.value
    }
</div>
{
    item?.postCount && (
<div className='text-[13px] text-[#71767b] leading-4'> 

   { numberFormat(item.postCount)}  
 

</div>
    )
}
<div className='relative z-50'> 
<Popover className={"absolute   right-3  top-5 "}>
<Popover.Button className={"w-[34.75px] -z-20 outline-none h-[34.75px] justify-center mr-1.5 transition-colors  flex   items-center rounded-full absolute  hover:bg-[#1d9bf01a] hover:text-[#1d9bf0]  right-0  "}>
<svg viewBox="0 0 24 24" fill='currentColor' width={18.75} height={18.75} aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>



</Popover.Button> 
<Popover.Panel className={" z-50  rounded-xl w-[384px] h-full top-2 right-0 font-bold   bg-black flex flex-col gap-0.5 shadow-box"}>
<button className='px-4 flex items-center   hover:bg-white/[0.03] py-3'>
<svg viewBox="0 0 24 24" aria-hidden="true" fill='#fff' width={18.75} height={18.75} className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-1q142lx"><g><path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path></g></svg>
İlgimi Cekmiyor
</button>
<button className='px-4 flex items-center !z-50 hover:bg-white/[0.03] font-bold h-full py-3'>
<svg viewBox="0 0 24 24" aria-hidden="true" fill='#fff' width={18.75} height={18.75} className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-1q142lx"><g><path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path></g></svg>
Bu gündem başlığı zararlı veya spam içeriyor
</button>


</Popover.Panel>
</Popover>
</div>

    </Link>
  )
}

export default Topic