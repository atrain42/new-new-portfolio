import SectionHeader from '../../components/SectionHeader'
import SectionWrapper from '../../components/SectionWrapper'
import Card from './Card'
import c1 from '../../images/eye-cry.png'
import c2 from '../../images/rocker.png'
import c3 from '../../images/equation.png'
import c4 from '../../images/bird-tt.png'


export default function About() {
  return (
    <div className='w-full my-72' id='about'>
      <SectionHeader
        subtitle='Hello Friend'
        title='Warm Welcome'
        text="I'm Austin Maxheimer, a software engineer located in Grand Haven, Michigan. Get to know a little about me."
      />
      <SectionWrapper>
        <div className='flex items-stretch justify-center mv:space-x-0 sm:space-x-4 mb-4 mv:flex-col sm:flex-row mv:space-y-4 sm:space-y-0 px-8'>
          <Card
            size='mv:w-full sm:w-72'
            image={c1}
            imageSize='mv:h-64 sm:h-auto w-auto'
            title='Videographer'
            text='In my free time, I like to capture videos with my DJI Air 3 drone.'
          />
          <Card
            size='mv:w-full sm:w-500'
            image={c3}
            imageSize='h-auto w-auto'
            title='Mechanical Engineering Graduate'
            text='I graduated from Central Michigan University with a degree in Mechanical Engineering. I believe that my extensive knowledge on complex mathematics gives me an advantage when writing code.'
          />
        </div>
        <div className='flex items-stretch justify-center mv:space-x-0 sm:space-x-4 mv:flex-col sm:flex-row mv:space-y-4 sm:space-y-0 px-8'>
          <Card
            size='mv:w-full sm:w-500'
            image={c4}
            imageSize='h-auto w-auto'
            title='Developer Journey'
            text='In October 2021, I decided to learn how to code, and took a leap into unknown water. I landed a job a year later in October 2022, and never looked back.'
          />
          <Card
            size='mv:w-full sm:w-72'
            image={c2}
            imageSize='mv:h-64 sm:h-auto w-auto'
            title='Creative Writer'
            text='In my free time, I enjoy writing and brainstorming book ideas.'
          />
        </div>
      </SectionWrapper>
    </div>
  )
}
