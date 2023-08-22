import React from 'react'

export default function Item({title, text}) {
  return (
    <div className='flex flex-col'>
        <span>{title}</span>
        <span>{text}</span>
    </div>
  )
}
