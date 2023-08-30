import Item from './Item'

import effects from '../../images/effects.svg'
import illustrator from '../../images/illustrator.svg'
import movie from '../../images/movie.svg'
import lightroom from '../../images/lightroom.svg'
import draw from '../../images/draw.svg'
import figma from '../../images/figma.svg'

export default function Other() {
  const data = [
    {
      title: "Lightroom",
      text: "I use lightroom to edit images I take with my drone.",
      icon: lightroom
    },
    {
      title: "Illustrator",
      text: "Here is where I create vector graphics for websites or for fun.",
      icon: illustrator
    },
    {
      title: "Premiere Pro",
      text: "Here is where I edit and color grade videos/drone footage.",
      icon: movie
    },
    {
      title: "After Effects",
      text: "I use AE to create video effects and futher enhance my videos.",
      icon: effects
    },
    {
      title: "Figma",
      text: "I use Figma at my job and to conceptualize new ideas.",
      icon: figma
    },
    {
      title: "Writing",
      text: "I write often and consistently work to enhance my writing capabilities.",
      icon: draw
    },
  ]
  return (
    <div className="grid grid-cols-3 place-items-center items-center w-[70rem] mx-auto gap-y-12">
      {data.map((paddle, index) => (
            <Item
              key={index}
              icon={paddle.icon}
              title={paddle.title}
              text={paddle.text}
            />
          ))}
    </div>
  )
}
