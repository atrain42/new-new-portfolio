import Large from "./Large"
import Medium from "./Medium"
import Small from "./Small"
import SectionHeader from '../../components/SectionHeader'

import balloon from '../../images/balloon-theme.png'
import twitter from '../../images/twitter.svg'
import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'

const data = [
  {
    src: twitter,
    link: 'https://twitter.com/_PixelPrism'
  },
  {
    src: github,
    link: 'https://github.com/atrain42',
  },
  {
    src: linkedin,
    link: 'https://www.linkedin.com/in/austin-maxheimer-2ba1341b1/',
  }
]

export default function Footer() {


  return (
    <div className='px-8 mt-72 flex flex-col justify-center items-center'>
      <img
        className='mv:h-[15rem] sm:h-[17.5rem] md:h-[22.5rem] w-auto mb-4'
        src={balloon}
        alt='balanced emotions balloon'
      />
      <SectionHeader
        subtitle='Goodbye Friend'
        title='Final Curtain'
        text='Good things don’t come to those who wait. Load the arrow, draw back the bow, and stop at nothing until you hit your target.'
      />
      <div className='flex justify-center mv:space-x-0 md:space-x-4 mb-16 mv:flex-col md:flex-row'>
        <Large />
        <div className='flex flex-col mv:mt-4 md:mt-0'>
          <Medium />
          <div className='flex space-x-4 mt-4'>
            {data.map((el, index) => (
              <Small key={index} src={el.src} link={el.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
