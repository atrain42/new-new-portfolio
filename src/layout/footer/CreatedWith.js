import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function CreatedWith() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 1 })

  const animation = () => {
    return {
      opacity: isInView ? 1 : 0,
      transition: 'all 0.75s ease-in',
    }
  }

  return (
    <p ref={ref} style={animation()} className='flex justify-center mb-16 text-paragraph tracking-wider'>
      <strong>Created with Next.js and TailwindCSS</strong>
    </p>
  )
}
