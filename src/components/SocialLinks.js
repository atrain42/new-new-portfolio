import { useRef } from 'react'
import { useInView } from 'framer-motion'
import SingleLink from './SingleLink'
import classes from './socials.module.css'

import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'

const socials = [
  {
    image: github,
    path: 'https://github.com/atrain42',
  },
  {
    image: linkedin,
    path: 'https://www.linkedin.com/in/austin-maxheimer-2ba1341b1/',
  },
  {
    image: twitter,
    path: 'https://twitter.com/_PixelPrism',
  },
]

const SocialLinks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      className={classes.socialLinks}
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(-75px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
      }}
    >
      {socials.map((link, i) => (
        <SingleLink key={i} {...link} />
      ))}
    </div>
  )
}

export default SocialLinks
