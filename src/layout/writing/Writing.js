import Card from './Card'
import SectionHeader from '../../components/SectionHeader'

const data = [
  {
    num: '01',
    title: 'Learning To Learn',
    text: "I view the ability to learn as a skill on it's own. Here is how I teach myself new complex skills.",
  },
  {
    num: '02',
    title: 'The Growth Mindset',
    text: "I have become very good at adapting a mindset that allows me to prioritize what's important."
  },
  {
    num: '03',
    title: 'Lorem eine ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
]

export default function Writing() {
  return (
    <div className='mt-80 px-8'>
      <SectionHeader
        subtitle='My Writing'
        title='Ink Expressions'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
      />
      <div className='flex mv:space-x-0 lg:space-x-6 mv:space-y-6 lg:space-y-0 justify-center mv:flex-col lg:flex-row'>
        {data.map((card, index) => (
          <Card
            key={index}
            num={card.num}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </div>
  )
}
