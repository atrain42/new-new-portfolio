import CardWrapper from "./CardWrapper"

import square from '../../images/purple-square.png'

export default function Medium() {
  return (
    <CardWrapper width='mv:w-full md:w-100' height='mv:h-96 sm:h-80'>
      <div className='flex flex-col justify-between'>
        <h1 className='text-header text-4xl mb-4'>Thanks for coming!</h1>
        <p className='mv:text-sm sm:text-lg'>
          I hope you enjoyed your time here. I am always open to hearing about
          new job opportunities. Let&#39;s collaborate and build something cool.
        </p>
      </div>
      <img
        className='h-16 w-auto absolute mv:top-64 sm:top-56 right-20'
        src={square}
        alt='square icon'
      />
    </CardWrapper>
  )
}
