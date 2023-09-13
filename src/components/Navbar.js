import { useState } from 'react'
import { Link } from 'react-scroll'

import DarkMode from './DarkMode/DarkMode'
import MobileButton from './MobileNavigation/MobileButton'
import MobileMenu from './MobileNavigation/MobileMenu'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 w-full z-40 navbar'>
      <div className='items-center justify-between w-full mv:py-4 md:py-8 mv:px-4 md:px-16 flex'>
        <DarkMode />
        <ul
          className='mv:hidden md:flex items-center space-x-6 justify-between font-poppins cursor-pointer'
        >
          <Link to='about' smooth={true} duration={300} offset={-110} className='hover-link'>About</Link>
          <Link to='projects' smooth={true} duration={300} offset={-110} className='hover-link'>Projects</Link>
          <Link to='writing' smooth={true} duration={300} offset={-110} className='hover-link'>Writing</Link>
          <Link to='contact' smooth={true} duration={300} offset={250} className='hover-link p-4 py-1.5 bg-primary rounded-[30px] text-[#E7E7E7] hover:rounded-sm ease-in duration-150'>
            Contact
          </Link>
        </ul>
      </div>
      <MobileButton open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
    </nav>
  )
}
