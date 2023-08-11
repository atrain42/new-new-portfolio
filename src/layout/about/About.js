import SectionHeader from '../../components/SectionHeader'
import SectionWrapper from '../../components/SectionWrapper'
import Card from './Card'
import c1 from '../../images/eye-cry.png'
import c2 from '../../images/rocker.png'
import c3 from '../../images/equation.png'
import c4 from '../../images/card-4.webp'


export default function About() {
  return (
    <div className='w-full my-72' id="about">
      <SectionHeader
        subtitle='Hello Friend'
        title='Consecte Adipisc'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
      />
      <SectionWrapper>
        <div className='flex items-stretch justify-center mv:space-x-0 sm:space-x-4 mb-4 mv:flex-col sm:flex-row mv:space-y-4 sm:space-y-0 px-8'>
          <Card
            size='mv:w-full sm:w-72 h-100'
            image={c1}
            justify='justify-between'
            title='Art Enthusiast'
            text="From acrylic paintings to vinyl record covers, I am obsessed with all art forms."
          />
          <Card
            size='mv:w-full sm:w-500'
            image={c3}
            title='Mechanical Engineering Graduate'
            text='I graduated from Central Michigan University with a degree in Mechanical Engineering. Before learning to cast spells in the software industry, I was programming robots.'
          />
        </div>
        <div className='flex items-stretch justify-center mv:space-x-0 sm:space-x-4 mv:flex-col sm:flex-row mv:space-y-4 sm:space-y-0 px-8'>
          <Card
            size='mv:w-full sm:w-500'
            title='Self-taught Developer'
            text='In October 2021, I decided to learn how to code, and took a leap into unknown water. At first, the water was choppy, but with consistency, it became smooth like glass.'
            justify='justify-end'
            image={c4}
          />
          <Card
            size='mv:w-full sm:w-72 h-100'
            image={c2}
            justify='justify-between'
            title='Creative Writer'
            text="In my free time, I enjoy writing and brainstorming book ideas."
          />
        </div>
      </SectionWrapper>
    </div>
  )
}
