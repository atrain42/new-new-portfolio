import { useRef } from "react"
import { useInView } from "framer-motion";

export default function SectionHeader({title, subtitle, text}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.75 })

  const animation = (duration, delay) => {
    return {
      opacity: isInView ? 1 : 0,
      transition: `all ${duration} ease-in ${delay}`,
    }
  }

  return (
    <div
      className='flex flex-col items-center justify-center'
      ref={ref}
    >
      <span className='text-primary text-lg font-medium' style={animation('0.5s', '0s')}>
        {subtitle}
      </span>
      <h1
        className='text-header mv:text-4xl sm:text-5xl mb-4'
        style={animation('0.5s', '0.25s')}
      >
        {title}
      </h1>
      <p
        className='mb-12 mv:w-full sm:w-[30rem] text-center mv:px-8 sm:px-0'
        style={animation('0.5s', '0.5s')}
      >
        {text}
      </p>
    </div>
  )
}
