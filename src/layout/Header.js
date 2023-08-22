import smile from '../images/smile-drip.png'

const Header = () => {
  return (
    <header className='relative flex items-center h-screen mv:px-8 mv:flex-col-reverse mv:justify-center z-10 md:flex-row md:justify-evenly'>
      <div className='mv:mr-0 mv:w-full md:mr-4 md:w-100'>
        <h1 className='text-7xl text-primary'>Lorum Isum</h1>
        <h1 className='text-7xl'>dolar sit amet</h1>
        <p className='mt-5 w-full'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <div className='grid grid-cols-2 mt-8 mv:gap-x-5 sm:gap-x-9 gap-y-9 font-button place-items-center text-md tracking-wider'>
          <button
            className='shadow-button w-full font-poppins font-normal text-center text-white py-4 rounded-[30px] hover:rounded-sm ease-in duration-150 primary-btn'
            href='#'
          >
            Explore
          </button>
          <button
            className='shadow-button w-full text-center font-poppins font-normal py-4 rounded-[30px] hover:rounded-sm ease-in duration-150 border-[1.5px] border-primary'
            href='#'
          >
            Drone Footage
          </button>
        </div>
      </div>
      <div className='mv:ml-0 mv:h-full mv:w-full mv:mb-12 md:ml-4 md:h-280 md:w-auto md:mb-0'>
        <img
          className='mx-auto mv:h-5/6 mv:w-5/6 md:h-full md:w-auto '
          src={smile}
          alt='platform'
        />
      </div>
    </header>
  )
}

export default Header
