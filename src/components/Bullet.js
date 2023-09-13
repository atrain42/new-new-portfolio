import arrow from '../images/triangle-right.svg'

export default function Bullet({ title, text, margin }) {
  return (
    <div className={`flex items-center ${margin}`}>
      <img src={arrow} alt='chevron' className='w-8 h-8' />
      <div className='ml-4'>
        <h3 className='text-xl mb-2 font-medium'>{title}</h3>
        <p className='mv:text-sm sm:text-lg'>{text}</p>
      </div>
    </div>
  )
}
