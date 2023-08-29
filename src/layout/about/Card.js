export default function Card({
  size,
  image,
  title,
  text,
}) {
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
      <div className='flex flex-col justify-center h-full'>
        <div className='w-auto' id='card-image-container'>
          {image ? displayImage() : ''}
        </div>
        <div className='flex flex-col space-y-2 mt-12'>
          <span className='text-header card-text'>{title}</span>
          <p className='card-paragraph'>{text}</p>
        </div>
      </div>
    </div>
  )
}
