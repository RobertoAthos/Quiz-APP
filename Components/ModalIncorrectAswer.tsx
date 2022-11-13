import React from 'react'
import {BiSad} from 'react-icons/bi'

export default function ModalIncorrectAswer() {
  return (
    <div className='bg-[#f02727] w-[500px] h-[400px] rounded-3xl text-center shadow-2xl flex flex-col justify-center items-center'>
        <h3 className='text-3xl text-white font-bold mt-6'>Que Pena !! <br/> Você Errou</h3>
        <picture className='mt-8'>
            <BiSad className='text-white text-9xl'/>
        </picture>
    </div>
  )
}
