import menu from '../../images/menu.svg'
import close from '../../images/close.svg'


export default function MobileButton({open, setOpen}) {
  const menuIcon = (
    <img
      className='cursor-pointer h-8 w-8'
      onClick={() => setOpen(!open)} 
      src={menu} 
      alt='hamburger menu' 
    />
  )

  const closeIcon = (
    <img
      className='cursor-pointer h-8 w-8'
      src={close}
      alt='close icon'
      onClick={() => setOpen(!open)}
    />
  )
  return (
    <div className='top-4 right-0 transform -translate-x-1/2 z-50 mv:fixed md:hidden'>
      {open ? closeIcon : menuIcon}
    </div>
  )
}