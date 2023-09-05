// import { Link, animateScroll as scroll } from 'react-scroll'

export default function MobileMenu({ open, setOpen }) {

  return (
    <>
      <div
        className={`py-20 mobile-menu text-4xl flex-col justify-between items-center fixed h-screen w-full top-0 right-0 z-90 shadow-card mv:flex md:hidden transition duration-250 border-l border-border ease-in list-none ${
          open ? 'translate-x-0' : 'translate-x-[110%]'
        }`}
        id="drawer"
      >
        <ul
          className='flex flex-col items-center w-full font-poppins cursor-pointer space-y-16 text-lg'
        >
          <span to='projects' smooth={true} duration={100} offset={-110} onClick={() => setOpen(false)}>
            Projects
          </span>
          <span to='about' smooth={true} duration={100} offset={-110} onClick={() => setOpen(false)}>
            About
          </span>
          <span to='writing' smooth={true} duration={100} offset={-110} onClick={() => setOpen(false)}>
            Writing
          </span>
          <span to='footer' smooth={true} duration={100} offset={-110} onClick={() => setOpen(false)}>
            Contact
          </span>
        </ul>
      </div>
    </>
  )
}