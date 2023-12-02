import React from 'react'
import Button from '../Button/Button'

const Premium = () => {
  return (
    <section className='bg-[#1D1F23] px-3 py-3 flex flex-col gap-3 mt-4 rounded-2xl border border-[#16181c]'>
        <h6 className='text-xl leading-6 font-extrabold'>
    Premium'a Abone Ol

        </h6>
        <p className='leading-5 font-bold text-[15px] w-[96%]'> 
Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.
        </p>
        <div className='self-start'>

        <Button>
            Abone Ol
        </Button>
        </div>

    </section>
  )
}

export default Premium