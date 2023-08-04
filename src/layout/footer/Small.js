export default function Small({ src, link }) {
  return (
    <a
      href={link}
      className='border-[1.5px] relative border-primary rounded-2xl p-8 flex flex-col items-center justify-between w-full hover:shadow-btn hover:scale-102 ease-in duration-75'
    >
      <img src={src} alt='social icon' className="w-8 h-auto" />
    </a>
  )
}
