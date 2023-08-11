

export default function Card({
  size,
  justify,
  button,
  buttonText,
  image,
  title,
  text,
}) {
  const populateButton = () => {
    return (
      <button className='bg-button px-4 py-1 text-xs text-header rounded-md ml-4'>
        {buttonText}
      </button>
    )
  }

  const displayImage = () => {
    return (
      <img
        className='card-image h-[18rem] w-auto mx-auto'
        src={image}
        alt='card content'
      />
    )
  }
  return (
    <div className={`border-[1.5px] border-primary p-6 rounded-2xl ${size}`}>
      <div className='flex flex-col justify-between h-full'>
        <div className='w-auto' id='card-image-container'>
          {image ? displayImage() : ''}
        </div>
        <div className='flex flex-col space-y-2'>
          <span className='text-header card-text'>{title}</span>
          <p className='text-paragraph card-paragraph'>{text}</p>
        </div>
      </div>
    </div>
  )
}
