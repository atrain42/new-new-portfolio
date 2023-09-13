import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function SectionWrapper({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    const animation = () => {
      return {
        opacity: isInView ? 1 : 0,
        transition: `all 0.75s ease-in`,
      }
    }
  return <div ref={ref} style={animation()}>{children}</div>
}
