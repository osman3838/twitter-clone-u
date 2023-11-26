import classNames from 'classnames';
import React, { useEffect } from 'react'
import { PiCheckCircleFill } from "react-icons/pi"; 
import { setCurrentAccount } from '~/store/auth/actions';


import { useAccount, useAccounts } from '~/store/hooks'
const More = () => 
{
  const accounts = useAccounts();
  const accountCurrent = useAccount();
  return (
  <>  
      {accounts.map(account => (
          <button type='button' disabled={account.id === accountCurrent.id} onClick={() => 
            { 
              setCurrentAccount(account);
            }} key={account.id} className={classNames(" flex items-center  p-3 overflow-hidden   ",{
             "hover:bg-[#eff3f41a]":   account.id !==  accountCurrent.id
          })} >   
       
          <img src={account.avatar} className='w-10 flex items-center h-10 rounded-full'/>
          <div className='flex flex-col text-left mx-3 leading-5'> 
          <div className=' font-bold text-[15px] '>    
              {account.fullName}
          </div>
          <div className='text-["#71767B"] text-[15px] text-gray-500'>
         @{account.username}

          </div>
          </div>

          {
            account.id === accountCurrent.id  && (
              <div className='flex justify-end w-full'> 
              <PiCheckCircleFill size={18.75} fill='#00ba7c'/>
              </div>
            )
          }
          </button>
     ))
      }
      <div className='h-px bg-[#2f3336] my-3 '/>
        <button className='py-3 hover:bg-[#2f3336] transition-colors text-left text-[15px] text-[#e7e9ea] px-4'> Var Olan Bir Hesap Ekle </button>
        <button className='py-3 hover:bg-[#2f3336] transition-colors text-left text-[15px] text-[#e7e9ea] px-4'> Hesapları Yönet </button>
        <button className='py-3 hover:bg-[#2f3336] transition-colors text-left text-[15px] text-[#e7e9ea] px-4 whitespace-nowrap'> @{accountCurrent.username} Hesabından Çıkış Yap </button>

    </>
  )
  } 
export default More