import { useState } from 'react'

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
          <li className='hover-link'>About</li>
          <li className='hover-link'>Writing</li>
          <li className='hover-link'>Projects</li>
          <li className='hover-link p-4 py-1.5 bg-primary rounded-[30px] text-[#E7E7E7] hover:rounded-sm ease-in duration-150'>
            Contact
          </li>
        </ul>
      </div>
      <MobileButton open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
    </nav>
  )
}
