import CardWrapper from "./CardWrapper"

export default function Medium() {
  return (
    <CardWrapper width='mv:w-full md:w-100' height='mv:h-96 sm:h-80'>
      <div className='flex flex-col justify-between'>
        <h1 className='text-header text-4xl mb-4'>Thanks for coming!</h1>
        <p>
          I am always open to hearing about new job opportunities. Let&#39;s
          collaborate and build something cool.
        </p>
      </div>
    </CardWrapper>
  )
}
