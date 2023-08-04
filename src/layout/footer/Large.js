
import CardWrapper from "./CardWrapper"


export default function Large() {
  return (
    <CardWrapper width='mv:w-full md:w-300' height='self-stretch'>
      <div className='mv:mb-12 md:mb-0'>
        <h1 className='text-header text-4xl'>Before you go,</h1>
        <h1 className='text-header text-4xl'>drop me an email.</h1>
      </div>

      <a
        href='mailto:maxheimer4211@gmail.com'
        className='p-4 py-1.5 bg-primary rounded-[30px] text-[#E7E7E7] hover:rounded-sm ease-in duration-150'
        id='button'
      >
        Reach Out
      </a>
    </CardWrapper>
  )
}
