import React from 'react'
import { Popover } from '@headlessui/react'
import { useAccount } from '~/store/hooks'
import More from './More';
const Account = () => {
    const account = useAccount();
    
  return (
    <div className='mt-auto'>
        <Popover className={"relative"}>
            <Popover.Button className={"p-3 items-center  my-3 rounded-full relative text-left transition-colors outline-none  hover:bg-[#eff3f41a] flex w-full"}>
                <img src={account.avatar} className='w-10 flex items-center h-10 rounded-full'/>
                <div className='flex flex-col text-left mx-3 leading-5'> 
                <div className=' font-bold text-[15px] '>    
                    {account.fullName}
                </div>
                <div className='text-["#71767B"] text-[15px] text-gray-500'>
               @{account.username}

                </div>
               
                </div>
<div className='relative'> 
<span className='absolute text-blue-400 p-1 right-0 rounded-full bg-[#1D9BF0]'></span>
<svg fill='#fff' viewBox="0 0 24 24" aria-hidden="true" width={26.25} height={26.25} className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
</div>
            </Popover.Button>
            <Popover.Panel className={"absolute py-3   overflow-hidden  flex-col w-[300px] shadow-box bg-black -translate-x-1/2  bottom-full rounded-2xl left-1/2 flex  "}>
           <More/>
            </Popover.Panel>
        </Popover>
    </div>
  )
}

export default Account