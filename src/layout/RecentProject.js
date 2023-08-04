import Bullet from '../components/Bullet'
import Paddle from '../components/Paddle'
import SectionHeader from '../components/SectionHeader'
import SectionWrapper from '../components/SectionWrapper'

import dots from '../images/material-dots.svg'
import squares from '../images/material-squares.svg'
import swirl from '../images/material-swirl.svg'
import platform from '../images/portfolio-platform.png'

export default function Projects() {
  const data = [
    {
      icon: squares,
      title: 'Tailwind.css',
      text: 'Styled with the beloved Tailwind framework.',
    },
    {
      icon: swirl,
      title: 'Next.js',
      text: 'Created the UI/UX using the React framework Next.',
    },
    {
      icon: dots,
      title: 'Vercel',
      text: 'Deployed the project using the great, the mighty, Vercel.',
    },
  ]

  const bulletData = [
    {
      title: 'Free Images',
      text: 'Browse and download my collection of free vector illustrations. Use my images for your web project.',
      margin: 'mb-8',
    },
    {
      title: 'Adobe Illustrator',
      text: 'All vector illustrations on the site were created by me, using Adobe Illustrator.',
      margin: 'mb-10',
    },
  ]

  return (
    <div className='my-72 md:px-8 sm:px-0' id='projects'>
      <SectionHeader
        subtitle='Vector Owl'
        title='Recent Project'
        text='All vector illustrations on the site were created by me, using Adobe
          Illustrator.'
      />
      <SectionWrapper>
        <div className='flex mv:flex-col md:flex-row justify-center items-center mv:space-x-0 md:space-x-4 mv:px-8 md:px-0 mv:space-y-4 md:space-y-0'>
          {data.map((paddle, index) => (
            <Paddle
              key={index}
              icon={paddle.icon}
              title={paddle.title}
              text={paddle.text}
            />
          ))}
        </div>
        <div className='flex items-center mv:px-8 mv:flex-col-reverse mv:justify-center mv:mt-12 md:flex-row md:justify-evenly md:mt-20'>
          <div className='mv:mr-0 mv:w-full md:mr-4 md:w-100'>
            <h1 className='text-header mv:text-4xl sm:text-5xl mb-4'>
              Vector Owl
            </h1>
            <p className='w-full mb-12'>
              Take a trip into the Forbidden Forest.
            </p>
            {bulletData.map((list, index) => (
              <Bullet
                key={index}
                title={list.title}
                text={list.text}
                margin={list.margin}
              />
            ))}
            <a href='https://www.vectorowl.com/'>
              <button className='bg-button p-3 rounded-[30px] text-header border-[1.5px] border-primary mv:text-mv sm:text-base shadow-btn w-full tracking-wide hover:rounded-sm ease-in duration-150'>
                Visit website
              </button>
            </a>
          </div>
          <div className='mv:ml-0 mv:h-full mv:w-full md:ml-4 md:h-200 md:w-auto mv:mb-12 md:mb-0'>
            <img
              className='mv:h-5/6 mv:w-5/6 md:h-full md:w-auto mv:mx-auto'
              src={platform}
              alt='platform'
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
