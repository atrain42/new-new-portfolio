import Paddle from '../../components/Paddle'

import effects from '../../images/effects.svg'
import illustrator from '../../images/illustrator.svg'
import movie from '../../images/movie.svg'

export default function Other() {
  const data = [
    {
      title: "Illustrator",
      text: "Here is where the text would go baby. I am so friggen cool man it's nuts.",
      icon: illustrator
    },
    {
      title: "Premiere Pro",
      text: "Here is where the text would go baby. I am so friggen cool man it's nuts.",
      icon: movie
    },
    {
      title: "After Effects",
      text: "Here is where the text would go baby. I am so friggen cool man it's nuts.",
      icon: effects
    },
  ]
  return (
    <div className="flex mv:flex-col md:flex-row justify-center items-center mv:space-x-0 md:space-x-4 mv:px-8 md:px-0 mv:space-y-4 md:space-y-0">
      {data.map((paddle, index) => (
            <Paddle
              key={index}
              icon={paddle.icon}
              title={paddle.title}
              text={paddle.text}
            />
          ))}
    </div>
  )
}
