import React from 'react'

export const Greeting = () => {
  return (
    <div className='time card greeting flex justify-center flex-col w-[350px] h-[130px] text-[25px] bg-[#dc2020] text-white p-[15px] rounded-[10px]'>
    <span>Greetings</span>
    <br/>
    <input type='text' placeholder='Enter your name' />
    </div>
  )
}
