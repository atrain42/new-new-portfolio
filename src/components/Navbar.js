import DarkMode from './DarkMode/DarkMode'

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full z-40 navbar'>
      <div className='items-center justify-between w-full p-8 px-16 mv:hidden md:flex'>
        <DarkMode />
        <ul
          className={`flex items-center space-x-6 justify-between font-poppins cursor-pointer`}
        >
          <li className='hover-link'>About</li>
          <li className='hover-link'>Writing</li>
          <li className='hover-link'>Projects</li>
          <li className='hover-link p-4 py-1.5 bg-primary rounded-[30px] text-[#E7E7E7] hover:rounded-sm ease-in duration-150'>
            Contact
          </li>
        </ul>
      </div>
    </nav>
  )
}
