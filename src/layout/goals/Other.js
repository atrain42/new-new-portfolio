import Item from "./Item"

export default function Other() {
  const data = [
    {
      title: "Title One",
      text: "Here is where the text would go baby. I am so friggen cool man it's nuts."
    },
    {
      title: "Title One",
      text: "Here is where the text would go baby. I am so friggen cool man it's nuts."
    },
    {
      title: "Title One",
      text: "Here is where the text would go baby. I am so friggen cool man it's nuts."
    },
  ]
  return (
    <div>
      {data.map((item) => <Item title={item.title} text={item.text} />)}
    </div>
  )
}
