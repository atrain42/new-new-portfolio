import { Link } from 'react-scroll'

import smile from '../images/smile-drip.png'

const Header = () => {
  return (
    <header className='relative flex items-center h-screen px-8 z-10 justify-evenly mv:flex-col-reverse md:flex-row pt-4 mv:pt-20 md:pt-0'>
      <div className='mv:mr-0 mv:w-full md:mr-4 md:w-100'>
        <h1 className='mv:text-4xl sm:text-6xl text-primary mb-2'>
          Crafting Unique
        </h1>
        <h1 className='mv:text-4xl sm:text-6xl'>Digital Realms</h1>
        <p className='mt-5 w-full mv:text-sm sm:text-lg'>
          Hi, I'm Austin Maxheimer, a frontend developer who enjoys creating
          exceptional user interfaces that contain traces of magic. I hope you
          enjoy exploring my portfolio, feel free to stay awhile.
        </p>
        <div className='grid grid-cols-2 mt-8 mv:gap-x-5 sm:gap-x-9 gap-y-9 font-button place-items-center text-md tracking-wider'>
          <Link
            to='about'
            smooth={true}
            duration={300}
            offset={-110}
            className='shadow-button w-full mv:text-sm sm:text-base font-normal text-center text-white mv:py-2 sm:py-4 rounded-[30px] hover:rounded-sm ease-in duration-150 primary-btn cursor-pointer'
          >
            Explore
          </Link>
          <a
            className='shadow-button w-full text-center mv:text-sm sm:text-base font-normal mv:py-2 sm:py-4 rounded-[30px] hover:rounded-sm ease-in duration-150 border-[1.5px] border-primary'
            href='/footage'
          >
            Drone Footage
          </a>
        </div>
      </div>
      <div className='mv:ml-0 md:ml-4 mv:h-auto mv:w-full md:h-auto md:w-[25rem]'>
        <img
          className='mx-auto mv:h-auto mv:w-5/6 md:h-auto md:w-[25rem]'
          src={smile}
          alt='platform'
        />
      </div>
    </header>
  )
}

export default Header
