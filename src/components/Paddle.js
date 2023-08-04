export default function Paddle({ icon, title, text }) {
  return (
    <div className='flex flex-col border border-primary mv:w-full md:w-290 p-6 rounded-md paddle-card hover:shadow-btn hover:scale-102 ease-in duration-75'>
      <img className='mb-3 w-6 h-6' src={icon} alt='paddle card icon' />
      <span className='mb-2 font-semibold text-lg'>{title}</span>
      <p className='mv:text-mv sm:text-base'>{text}</p>
    </div>
  )
}
