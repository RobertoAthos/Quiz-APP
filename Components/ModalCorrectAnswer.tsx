import React from 'react'
import Image from 'next/image'
import img from '../Assets/thumbsup.png'

export default function ModalCorrectAnswer() {

  return (
    <div className='bg-[#4CFFA5] w-[500px] h-[400px] rounded-3xl text-center shadow-2xl flex flex-col justify-center items-center'>
        <h3 className='text-3xl text-white font-bold mt-6'>Parabéns !! <br/> Resposta Correta</h3>
        <picture>
            <Image
              src={img}
              alt="thumbsup image"
              className='w-80'
            />
        </picture>
    </div>
  )
}
