import React from 'react'

import heart from '../images/heart.png'

export default function Footage() {
  return (
    <div className='h-screen w-full'>
      <div className='flex flex-col justify-center items-center pt-40'>
        <img className='h-auto mv:w-60 sm:w-72' src={heart} alt="broken hearts" />
        <h1 className='text-4xl mt-12'>Coming soon...</h1>
      </div>
    </div>
  )
}
