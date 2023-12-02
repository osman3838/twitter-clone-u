import React, { useState } from 'react'
import Button from '../Button/Button'

const UserCard = ({user}) => {

    const [following,setFollowing] = useState(false);
    console.log(following)
  return (
    <button className='py-3 px-4  flex  gap-3 overflow-hidden text-ellipsis '>
          <img src={user.avatar} className='w-10 h-10 object-cover rounded-full'/>
          <div className='w-full flex'>
          
          <div className='flex flex-col'> 
          <div className='text-[15px]  flex  font-bold items-center  text-left text-[#e7e9ea] leading-5'>{user.fullName} 
  {user.verified && (<svg viewBox="0 0 22 22" fill='#E5BD25' width={20.75} height={18.75} aria-label="Onaylanmış hesap" role="img" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-1plcrui r-lrvibr r-f9ja8p r-og9te1 r-9cviqr" data-testid="icon-verified"><g><linearGradient gradientUnits="userSpaceOnUse" id="0-a" x1="4.411" x2="18.083" y1="2.495" y2="21.508"><stop offset="0" stop-color="#f4e72a"></stop><stop offset=".539" stop-color="#cd8105"></stop><stop offset=".68" stop-color="#cb7b00"></stop><stop offset="1" stop-color="#f4ec26"></stop><stop offset="1" stop-color="#f4e72a"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="0-b" x1="5.355" x2="16.361" y1="3.395" y2="19.133"><stop offset="0" stop-color="#f9e87f"></stop><stop offset=".406" stop-color="#e2b719"></stop><stop offset=".989" stop-color="#e2b719"></stop></linearGradient><g clip-rule="evenodd" fill-rule="evenodd"><path d="M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#0-a)"></path><path d="M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="url(#0-b)"></path><path d="M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z" fill="#d18800"></path></g></g></svg>)}
          
          </div>
<div className='text-left text-[15px] text-[#71767b] '> 
  @{user.username}
  </div>

  </div>


          </div>
        <div className='max-w-full'>
            { !following ? (
          <Button size="small" variant="white-outline" onClick={() =>  setFollowing(true)}>
            Takip Et
          </Button>)
            :  <Button size="small" onClick={() =>  setFollowing(false)} className='group'  variant="white">
              <div className='visible  whitespace-nowrap group-hover:hidden '> 
              Takip Ediliyor
              </div>
              <div className='hidden group-hover:!flex  '> 
              Takibi Bırak
              </div>
          </Button>
           
}
        </div>

        </button>
  )
}

export default UserCard