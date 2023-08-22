import SectionHeader from '../../components/SectionHeader'
import SectionWrapper from '../../components/SectionWrapper'
import Bullet from '../../components/Bullet'
import Other from '../goals/Other'

import growth from '../../images/growth.png'

export default function Goals() {
  const bulletData = [
    {
      title: 'Backend Technologies',
      text: 'Currently, I am working to better understand backend technologies and how they work. I understand the value of learning all aspects of development.',
      margin: 'mb-8',
    },
    {
      title: 'Frontend Frameworks',
      text: 'I am also expanding my knowledge on frontend frameworks, in particular, React and Next. I want to know and understand best practices for each.',
      margin: 'mb-10',
    },
  ]

  return (
    <div className='my-72 md:px-8 sm:px-0' id='goals'>
      <SectionHeader
        subtitle='Goal Setter'
        title='Forward Designs'
        text='I have always been the type of person to set goals for myself and work to achieve them by any means necessary.'
      />
    <SectionWrapper>
      <div className='flex items-center mv:px-8 mv:flex-col-reverse mv:justify-center mv:mt-12 md:flex-row md:justify-evenly md:mt-20'>
        <div className='mv:ml-0 mv:h-full mv:w-full md:ml-4 md:h-200 md:w-auto mv:mb-12 md:mb-0'>
          <img
            className='mv:h-5/6 mv:w-5/6 md:h-full md:w-auto mv:mx-auto'
            src={growth}
            alt='internal growth'
          />
        </div>
        <div className='mv:mr-0 mv:w-full md:mr-4 md:w-100'>
          {/* <h1 className='text-header mv:text-4xl sm:text-5xl mb-4'>
            Future Plans
          </h1>
          <p className='w-full mb-12'>
            Take a trip into the Forbidden Forest.
          </p> */}
          {bulletData.map((list, index) => (
            <Bullet
              key={index}
              title={list.title}
              text={list.text}
              margin={list.margin}
            />
          ))}
        </div>
      </div>
      <h1 className='mt-20 text-header text-center mv:text-3xl sm:text-4xl mb-4'>Other Goals</h1>
      <Other />
    </SectionWrapper>
    </div>

    
  )
}
