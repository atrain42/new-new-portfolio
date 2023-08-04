import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'

const data = [
  {
    num: '01',
    title: 'Lorem eine ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    num: '02',
    title: 'Lorem eine ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    num: '03',
    title: 'Lorem eine ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
]

export default function HeroSections() {
  return (
    <div className='mt-80 px-8'>
      <SectionHeader
        subtitle='Lorem Ipsum'
        title='Consecte Adipisc'
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
