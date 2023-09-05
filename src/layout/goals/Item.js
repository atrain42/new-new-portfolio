import React from 'react'

export default function Item({ icon, title, text }) {
  return (
    <div className='flex flex-col items-center mv:w-full lg:w-[320px] p-6 rounded-md'>
      <img className='mb-3 w-6 h-6' src={icon} alt='paddle card icon' />
      <span className='mb-2 font-semibold text-lg'>{title}</span>
      <p className='mv:text-mv sm:text-base text-center'>{text}</p>
    </div>
  )
}
